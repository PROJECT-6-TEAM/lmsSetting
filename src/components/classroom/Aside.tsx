import useRenderAsideButton from "@/hooks/useRenderAsideButton"
import { useState } from "react"

const Aside = () => {
  const {renderAsideButton, contentCardList} = useRenderAsideButton()
  return (
    <aside className="w-1/5 h-100 flex items-center flex-col mr-[20px] pt-[100px]">
      {contentCardList.map((e, idx) => (
        <div key={e} className="rounded w-[245px] h-[46px] bg-primary-5 flex justify-center items-center mb-[15px]">
          {e}
        </div>
      ))}
      {renderAsideButton("add")}
      {renderAsideButton("edit")}
    </aside>
  )
}

export default Aside