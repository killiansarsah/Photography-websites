import { useEffect } from 'react';
import { getAssetPath } from '../utils/paths';

const ImagePreloader = () => {
  useEffect(() => {
    // Preload critical images - prioritize logo and hero content
    const criticalImages = [
      '/photos/Logo_darkmode-removebg-preview.png',
      '/photos/wedding.jpg',
      '/photos/wedding-2.jpg',
      '/photos/portrait-19.jpg'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = getAssetPath(src);
    });
  }, []);

  return null;
};

export default ImagePreloader;