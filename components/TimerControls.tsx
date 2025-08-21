import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

interface TimerControlsProps {
  isRunning: boolean;
  startPause: () => void;
  reset: () => void;
  resetAll: () => void;
}

export const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  startPause,
  reset,
  resetAll
}) => {
  return (
    <View style={styles.timerControls}>
      <TouchableOpacity 
        onPress={(e) => {
          e.stopPropagation();
          startPause();
        }} 
        style={styles.controlButtonMinimal}
      >
        <Text style={styles.controlIconMinimal}>
          {isRunning ? '⏸' : '▶'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={(e) => {
          e.stopPropagation();
          reset();
        }} 
        style={styles.controlButtonMinimal}
      >
        <Text style={styles.controlIconMinimal}>■</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={(e) => {
          e.stopPropagation();
          resetAll();
        }} 
        style={styles.controlButtonMinimal}
      >
        <Text style={styles.controlIconMinimal}>↻</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={(e) => e.stopPropagation()} 
        style={styles.controlButtonMinimal}
      >
        <Text style={styles.controlIconMinimal}>↗</Text>
      </TouchableOpacity>
    </View>
  );
};
