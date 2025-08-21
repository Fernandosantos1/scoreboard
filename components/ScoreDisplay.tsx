import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

interface ScoreDisplayProps {
  blueScore: number;
  redScore: number;
  isLandscape: boolean;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  blueScore,
  redScore,
  isLandscape
}) => {
  return (
    <>
      {/* Lado Azul */}
      <View style={styles.leftSide}>
        <Text style={[styles.score, isLandscape && styles.scoreLandscape]}>
          {blueScore}
        </Text>
      </View>
      
      {/* Linha divisória */}
      <View style={styles.divider} />
      
      {/* Lado Vermelho */}
      <View style={styles.rightSide}>
        <Text style={[styles.score, isLandscape && styles.scoreLandscape]}>
          {redScore}
        </Text>
      </View>
    </>
  );
};
