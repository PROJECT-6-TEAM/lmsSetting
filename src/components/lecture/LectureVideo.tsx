const LectureVideo = () => {
  const videoId = "3vhA8njtoQg";
  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="videoContainer h-full w-full">
      <iframe
        src={src}
        title="video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default LectureVideo;
