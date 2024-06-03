import React, { useState, useEffect } from 'react';
import amazon from '../images/Gallery01/amazon.png';
import india from '../images/Gallery01/india.png';
import south1 from '../images/Gallery01/south1.png';
import south2 from '../images/Gallery01/south2.png';

const imagesData = [
  {
    src: india,
    alt: 'india',
    hiddenText: 'FENNEC<br />FOX',
    additionalText: 'India',
    url: 'https://www.thesprucepets.com/about-fennec-foxes-as-pets-1236778'
  },
  {
    src: south1,
    alt: 'south-africa',
    hiddenText: 'HUMPBACK<br />WHALE',
    additionalText: 'South Africa',
    url: 'https://www.nationalgeographic.com/animals/mammals/facts/humpback-whale'
  },
  {
    src: south2,
    alt: 'south-africa',
    hiddenText: 'COMMON BROWN<br />BABOON',
    additionalText: 'South Africa',
    url: 'https://www.nationalgeographic.com/animals/mammals/facts/baboons'
  },
  {
    src: amazon,
    alt: 'amazon',
    hiddenText: 'SPOTTED<br />DEER',
    additionalText: 'Amazon',
    url: 'https://www.vedantu.com/animal/chital'
  }
];

const Gallery01 = () => {
  const [showText, setShowText] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setShowText(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleKnowMoreClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {imagesData.map((image, index) => (
          <div className="image" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              {showText && (
                <>
                  <p
                    className="hidden-text"
                    dangerouslySetInnerHTML={{ __html: image.hiddenText }}
                  ></p>
                  <p className="additional-text">{image.additionalText}</p>
                </>
              )}
              <div className="know-more" onClick={() => handleKnowMoreClick(image.url)}>
                Know more
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 12.707a1 1 0 0 1 0-1.414L12.586 9H1.5a1 1 0 0 1 0-2h11.086L10.293 4.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery01;
