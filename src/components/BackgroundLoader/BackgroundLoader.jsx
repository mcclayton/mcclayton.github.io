import React, { useEffect, useState, useRef } from 'react';
import Spinner from '../Spinner';
import background from '../../images/bg.jpg';

function BackgroundLoader({ children }) {
  const imgRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  function finishLoading(delay = 0) {
    if (!delay) {
      setIsLoading(false);
    } else {
      setTimeout(() => setIsLoading(false), Math.floor(Math.random() * (delay + 300)) + delay);
    }
  }

  useEffect(() => {
    if (imgRef.current?.complete) {
      finishLoading();
    }
  }, []);

  return (
    <>
      { isLoading && (<Spinner label="Loading..." />) }
      {children({ isLoading })}
      { !isLoading && (<div id="bg" />) }
      {
        isLoading && (
          <img
            style={{ display: 'none' }}
            ref={imgRef}
            src={background}
            onLoad={() => finishLoading(700)}
            decoding="async"
          />
        )
      }
    </>
  )
}

export default BackgroundLoader;
