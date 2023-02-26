import React from 'react'
import './Courses.css'

const Courses = ({courses}) => {
  return (
    <div>
      <div className='courses card'>
        {courses.map((item) => {
          return(
            <div key={JSON.stringify(item)}>
              <p className='name'>📒 {item.name}</p>
              <p>Horas: {item.hours}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Courses
