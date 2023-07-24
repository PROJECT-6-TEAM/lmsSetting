'use client'
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';

const ImageUploadModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setTitle('')
    setContent('')
    setSelectedImages([])
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedImages(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previewUrls);
  };

  const removeImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);

    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };

  const handleUpload = () => {
    console.log(selectedImages, title, content);
    setTitle('')
    setContent('')
    setSelectedImages([])
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div ref={modalRef} className="bg-white rounded w-[600px] h-[400px] pt-7 pb-7 pl-5 pr-5  flex flex-col">
            <div className="flex justify-between">
              <div>강의 만들기 - 노트 만들기</div>
              <button onClick={closeModal} className="float-right font-bold text-lg">×</button>
            </div>
            <input
              placeholder="제목을 입력해주세요. (선택)"
              className="mt-2 mb-2 text-xs outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex flex-col border border-E6E6E6 w-90 h-[230px] rounded p-3">
              <textarea
                placeholder="내용을 입력해주세요."
                className="text-xs w-90 h-[150px] resize-none outline-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="flex flex-row w-80">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="w-[50px] h-[50px] mr-2 px-4 py-2 bg-gray-200 rounded-md cursor-pointer"
                ></label>
                {selectedImages.length !== 0 && (
                  <div className="flex flex-row w-70">
                    {selectedImages.map((_, index) => (
                      <div key={index} className="relative">
                        <img
                          src={imagePreviews[index]}
                          alt={`Preview ${index + 1}`}
                          className="w-20 h-20 mr-2 object-cover rounded cursor-pointer"
                          onClick={() => removeImage(index)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="w-[90px] h-[40px] bg-primary-80 rounded-lg text-primary-5 text-xs mt-5"
                onClick={handleUpload}
              >
                업로드
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadModal;
