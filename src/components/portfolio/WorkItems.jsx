import React from 'react'

const WorkItems = ({ item }) => {
  
  return (
    <div className="work__card"
      key={item.id}
    >
      <img
        src={item.image}
        alt=""
        className='work__items-img'
      />
      <h3 className='work__items-title'>{item.title}</h3>
      <a href="#fi" className="work__button">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>

    </div>
  )
}

export default WorkItems