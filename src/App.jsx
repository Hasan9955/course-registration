import { useEffect, useState } from "react"
import Courses from "./components/Courses/Courses"



function App() {
  const [courses, setCourses] = useState([])

  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])

  return (
    <>
      
      <header className="text-4xl font-bold text-center m-10">Course Registration </header>
      <div className="md:m-10 p-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:w-3/4">
            {
              courses.map(course =>(  
              <Courses
              key={course.id}
              course={course}
              ></Courses>))
            }
        </div>
        <div>

        </div>
      </div>
      
    </>
  )
}

export default App
