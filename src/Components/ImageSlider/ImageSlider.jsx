// import React, { useState } from "react";
// import "./ImageSlider.css";

// import image1 from "../../UI/Images/slide1.png";
// import image2 from "../../UI/Images/slide2.png";
// import image3 from "../../UI/Images/slide3.png";

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [image1, image2, image3];

//   const handlePrev = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   return (
//     <div className="slider-container">
//       <div
//         className="image-wrapper"
//         style={{
//           transform: `rotateY(${currentIndex * -120}deg)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             className={`slider-image ${
//               index === currentIndex ? "active" : ""
//             }`}
//             src={image}
//             alt={`Image ${index + 1}`}
//           />
//         ))}
//       </div>
//       <div className="button-wrapper">
//         <button onClick={handlePrev}>Назад</button>
//         <button onClick={handleNext}>Вперед</button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;


import React, { useState } from "react";

import image1 from "../../UI/Images/slide1.png";
import image2 from "../../UI/Images/slide2.png";
import image3 from "../../UI/Images/slide3.png";
import {LeftOutlined, RightOutlined} from '@ant-design/icons';


import './ImageSlider.css'


const ImageSlider = () => {
    
    const images = [image1, image2, image3];
    const [currentImage, setCurrentImage] = useState(0);
    const [active, setActive] = useState(false)

   async function goToPrevSlide() {
    setActive(true)
    setTimeout(()=> {
      const index = (currentImage === 0) ? images.length - 1 : currentImage - 1;
  setCurrentImage(index);
      setActive(false)    
    }, 500)   
  };

  async function goToNextSlide()  {
    setActive(true) 
    setTimeout(()=> {
      const index = (currentImage === images.length - 1) ? 0 : currentImage + 1;
      setCurrentImage(index);
        setActive(false)    
    }, 500)
    
 
  };


  
  return (
    <>
    <div className="slider">
    <img className={active ? 'slaider_img slaider_img_active' : 'slaider_img' } src={images[currentImage]} alt={`Изображение ${currentImage}`} />
  </div>
  <div className="navigation__buttons">
    <button className="navigation__button" onClick={goToPrevSlide}><LeftOutlined className="navigation__icon" /></button>
    <button className="navigation__button" onClick={goToNextSlide}><RightOutlined className="navigation__icon" /></button>
    </div>
    </>
  )
}

export default ImageSlider;
