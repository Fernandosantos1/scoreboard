import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';
import { TimerControls } from './TimerControls';

interface TimerModalProps {
  time: number;
  formatTime: (seconds: number) => string;
  isTimerExpanded: boolean;
  setIsTimerExpanded: (value: boolean) => void;
  isRunning: boolean;
  startPause: () => void;
  reset: () => void;
  resetAll: () => void;
}

export const TimerModal: React.FC<TimerModalProps> = ({
  time,
  formatTime,
  isTimerExpanded,
  setIsTimerExpanded,
  isRunning,
  startPause,
  reset,
  resetAll
}) => {
  return (
    <TouchableOpacity 
      onPress={(e) => {
        e.stopPropagation();
        setIsTimerExpanded(!isTimerExpanded);
      }}
      style={[
        styles.timerCard,
        isTimerExpanded ? styles.timerCardExpanded : styles.timerCardCompact
      ]}
      activeOpacity={0.8}
    >
      {!isTimerExpanded ? (
        // Versão compacta - só o timer
        <View style={styles.timerCompact}>
          <Text style={styles.timerTextCompact}>{formatTime(time)}</Text>
        </View>
      ) : (
        // Versão expandida - todos os controles
        <>
          <View style={styles.timerHeader}>
            <Text style={styles.timerText}>{formatTime(time)}</Text>
            <TouchableOpacity 
              onPress={(e) => {
                e.stopPropagation();
                setIsTimerExpanded(false);
              }}
              style={styles.collapseButton}
            >
              <Text style={styles.collapseIcon}>⌃</Text>
            </TouchableOpacity>
          </View>
          
          <TimerControls
            isRunning={isRunning}
            startPause={startPause}
            reset={reset}
            resetAll={resetAll}
          />
        </>
      )}
    </TouchableOpacity>
  );
};
