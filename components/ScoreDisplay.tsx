import React from 'react';
import { Text, View } from 'react-native';
import { useScoreGestures } from '../hooks/useScoreGestures';
import { styles } from '../styles/styles';

interface ScoreDisplayProps {
  blueScore: number;
  redScore: number;
  isLandscape: boolean;
  setBlueScore: (value: number | ((prev: number) => number)) => void;
  setRedScore: (value: number | ((prev: number) => number)) => void;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  blueScore,
  redScore,
  isLandscape,
  setBlueScore,
  setRedScore
}) => {
  // Gestos separados para cada lado
  const blueSideGestures = useScoreGestures({
    score: blueScore,
    setScore: setBlueScore,
    side: 'left'
  });

  const redSideGestures = useScoreGestures({
    score: redScore,
    setScore: setRedScore,
    side: 'right'
  });

  return (
    <>
      {/* Lado Azul */}
      <View 
        style={styles.leftSide}
        {...blueSideGestures.panHandlers}
      >
        <Text style={[styles.score, isLandscape && styles.scoreLandscape]}>
          {blueScore}
        </Text>
      </View>
      
      {/* Linha divisória */}
      <View style={styles.divider} />
      
      {/* Lado Vermelho */}
      <View 
        style={styles.rightSide}
        {...redSideGestures.panHandlers}
      >
        <Text style={[styles.score, isLandscape && styles.scoreLandscape]}>
          {redScore}
        </Text>
      </View>
    </>
  );
};
