import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const useOrientation = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
      setIsLandscape(window.width > window.height);
    });

    // Verificar orientação inicial
    const { width, height } = Dimensions.get('window');
    setIsLandscape(width > height);

    return () => subscription?.remove();
  }, []);

  return { dimensions, isLandscape };
};
