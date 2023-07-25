import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setModalVisibility } from "@/redux/slice/classroomModalSlice";

const useClassroomModal = () => {
  const dispatch = useDispatch();

  const addLectureModal = useSelector(
    (state: RootState) => state.classroomModal.lectureTypeModal,
  );
  const addNoteModal = useSelector(
    (state: RootState) => state.classroomModal.noteModal,
  );
  const addLinkModal = useSelector(
    (state: RootState) => state.classroomModal.linkModal,
  );
  const addVideoModal = useSelector(
    (state: RootState) => state.classroomModal.videoFileModal,
  );
  const lectureDurationModal = useSelector(
    (state: RootState) => state.classroomModal.lectureDurationModal,
  );

  const handleModalMove = (openModalName: string, closeModalName: string) => {
    dispatch(setModalVisibility({ modalName: openModalName, visible: true }));
    dispatch(setModalVisibility({ modalName: closeModalName, visible: false }));
  };

  return {
    addLectureModal,
    addNoteModal,
    addLinkModal,
    addVideoModal,
    lectureDurationModal,
    handleModalMove,
  };
};

export default useClassroomModal;
