import { useEffect, useState } from "react"
import Courses from "./components/Courses/Courses"
import Carts from "./components/Carts/Carts"
import Credit from "./components/Credit/Credit"
import Price from "./components/Credit/Price"
import Remaining from "./components/Credit/Remaining"



function App() {
  const [courses, setCourses] = useState([])
  const [cartData, setCartData] = useState([])
  const [remaining, setRemaining] = useState(20)
  const [credit, setCredit] = useState(0)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  const handleCart = (course) => {
    const isExists = cartData.find(item => item.id === course.id)
    if(isExists){
      alert ('This course is already added')
    }
    else{
      
      const newCredit = credit + course.credit
    if(newCredit <= 20){
      const newCourse = [...cartData, course]
      setCartData(newCourse)

      const newPrice = price + course.price
      setPrice(newPrice)

      const newRemaining = 20 - newCredit
      setRemaining(newRemaining)
      
      setCredit(newCredit)
    }
    else{
      alert('your credit is up to limit')
    }
    
    }
    

  }

  

  return (
    <>

      <header className="text-4xl font-bold text-center m-10">Course Registration </header>
      <div className="md:m-10 p-5 md:flex gap-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:w-3/4">
          {
            courses.map(course => (
              <Courses
                key={course.id}
                course={course}
                handleCart={handleCart}
                
              ></Courses>))
          }
        </div>
        <div className="border-2 p-4 rounded-lg md:w-1/4 ">
          <Remaining
          remaining={remaining}
          ></Remaining>
          <Carts
            cartData={cartData}
            
          ></Carts>
          <Credit
          credit={credit}
          ></Credit>
          <Price
          price={price}
          ></Price>

        </div>
      </div>

    </>
  )
}

export default App
