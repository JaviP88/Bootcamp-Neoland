import React from 'react'
import './More.css'

const More = ({languages, habilities, volunteer}) => {
  return (
    <div>
      <div className='more card'>
        {languages.map((item) => {
          return(
            <div key={JSON.stringify(item)}>
              <p className='name'>🔉 {item.language}</p>
              <p>Writing level: {item.wrlevel}</p>
              <p>Speaking level: {item.splevel}</p>
            </div>
          )
        })}
      </div>
      <div className='more card'>
        {habilities.map((item) => {
          return(
            <div key={JSON.stringify(item)}>
              <p className='name'>🛠️ {item}</p>
            </div>
          )
        })}
      </div>
      <div className='more card'>
        {volunteer.map((item) => {
          return(
            <div key={JSON.stringify(item)}>
              <p className='name'>🤝 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default More
