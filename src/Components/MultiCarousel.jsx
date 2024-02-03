import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHome } from "react-icons/fa";
import '../Css/MultiCarousel.css'

const MultiCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
    
      const items = [
        {
          icon: <FaHome />,
          title: 'Title 1',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore?',
        },
        {
          icon: <FaHome />,
          title: 'Title 2',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore?',
        },
        {
            icon: <FaHome />,
            title: 'Title 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore?',
          },
          {
            icon: <FaHome />,
            title: 'Title 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore?',
          },
      ];
    
  return (
    <div className='multi-page'>
      <Carousel responsive={responsive}  autoPlaySpeed={6000} autoPlay={true}>
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <div className="icon">{item.icon}</div>
          <div className="multi-info">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          </div>
          
        </div>
      ))}
    </Carousel>   
    </div>
  )
}

export default MultiCarousel