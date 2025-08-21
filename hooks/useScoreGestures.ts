import { PanResponder } from 'react-native';

interface UseScoreGesturesProps {
  dimensions: { width: number; height: number };
  blueScore: number;
  redScore: number;
  setBlueScore: (value: number | ((prev: number) => number)) => void;
  setRedScore: (value: number | ((prev: number) => number)) => void;
}

export const useScoreGestures = ({
  dimensions,
  blueScore,
  redScore,
  setBlueScore,
  setRedScore
}: UseScoreGesturesProps) => {
  return PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    
    onPanResponderGrant: (evt) => {
      const { locationX } = evt.nativeEvent;
      const isLeftSide = locationX < dimensions.width / 2;
      
      if (isLeftSide) {
        setBlueScore(prev => prev + 1);
      } else {
        setRedScore(prev => prev + 1);
      }
    },
    
    onPanResponderMove: (evt, gestureState) => {
      // Detecta swipe para baixo (diminuir pontuação)
      if (gestureState.dy > 50 && Math.abs(gestureState.dx) < 100) {
        const { locationX } = evt.nativeEvent;
        const isLeftSide = locationX < dimensions.width / 2;
        
        if (isLeftSide && blueScore > 0) {
          setBlueScore(prev => Math.max(0, prev - 1));
        } else if (!isLeftSide && redScore > 0) {
          setRedScore(prev => Math.max(0, prev - 1));
        }
      }
    },
  });
};
