import React from 'react'
import '../Css/HomeServices.css'
const HomeServices = () => {
    const data = [
        { id: 1, image: 'https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg', title: 'Title 1', date: 'Date 1' },
        { id: 1, image: 'https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg', title: 'Title 1', date: 'Date 1' },
        { id: 1, image: 'https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg', title: 'Title 1', date: 'Date 1' },
        { id: 1, image: 'https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg', title: 'Title 1', date: 'Date 1' },
        { id: 1, image: 'https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg', title: 'Title 1', date: 'Date 1' },
        { id: 1, image: 'https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg', title: 'Title 1', date: 'Date 1' },
      ];
  return (
    <>
    <h3 className='head-info'>Top Visited Places</h3>
    <div className="grid-container">
      {data.map(item => (
        <div key={item.id} className="grid-item">
          <img src={item.image} alt={`Image ${item.id}`} />
          <div className="service-info">
          <h2>{item.title}</h2>
          <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default HomeServices