import { useState } from "react";

const useRenderAsideButton = () => {
  const [contentCardList, setContentCardList] = useState<string[]>([]);
  const addNewSection = () => {
    setContentCardList([...contentCardList, '섹션'])
  }

  const renderAsideButton = (type:'add'|'edit') => {
    const BUTTON_NAME = type === 'add' ? '섹션 추가' : '섹션 수정'
    return (
      <div className="rounded w-[245px] h-[46px] border-primary-40 border flex justify-center items-center mb-[15px]">
        <button type="button" className="text-primary-40" onClick={addNewSection}>{BUTTON_NAME}</button>
      </div>
    )
  }

  return {renderAsideButton, contentCardList}
}

export default useRenderAsideButton