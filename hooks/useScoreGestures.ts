import { useRef } from 'react';
import { PanResponder } from 'react-native';

interface UseScoreGesturesProps {
  score: number;
  setScore: (value: number | ((prev: number) => number)) => void;
  side: 'left' | 'right';
}

export const useScoreGestures = ({
  score,
  setScore,
  side
}: UseScoreGesturesProps) => {
  const hasActionedRef = useRef(false);

  return PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    
    onPanResponderGrant: (evt) => {
      // Reset do estado de ação
      hasActionedRef.current = false;
    },
    
    onPanResponderMove: (evt, gestureState) => {
      // Evita múltiplas ações no mesmo gesto
      if (hasActionedRef.current) return;
      
      // Detecta swipe para baixo (diminuir pontuação)
      const isSwipeDown = gestureState.dy > 50;
      const isVerticalMovement = Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
      
      if (isSwipeDown && isVerticalMovement && score > 0) {
        hasActionedRef.current = true;
        setScore(prev => Math.max(0, prev - 1));
      }
    },

    onPanResponderRelease: (evt, gestureState) => {
      // Se não houve ação ainda (não foi swipe), é um toque simples
      if (!hasActionedRef.current) {
        // Verifica se foi um movimento mínimo (toque simples)
        const isSimpleTap = Math.abs(gestureState.dx) < 10 && Math.abs(gestureState.dy) < 10;
        
        if (isSimpleTap) {
          setScore(prev => prev + 1);
        }
      }
      
      // Reset do estado
      hasActionedRef.current = false;
    },

    onPanResponderTerminate: () => {
      // Reset do estado se o gesto for interrompido
      hasActionedRef.current = false;
    },
  });
};
