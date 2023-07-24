'use client'
import Aside from "@/components/classroom/Aside"
import ClassContent from "@/components/classroom/ClassContent"

const Classroom = () => {
  
  return (
    <div className="w-screen h-screen flex justify-center">
      <section className="w-4/5 h-screen flex">
        <Aside/>
        <ClassContent/>
      </section>
    </div>
  )
}

export default Classroom