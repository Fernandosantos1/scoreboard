import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScoreDisplay } from '../components/ScoreDisplay';
import { TimerModal } from '../components/TimerModal';
import { useOrientation } from '../hooks/useOrientation';
import { useScoreGestures } from '../hooks/useScoreGestures';
import { useScreenSettings } from '../hooks/useScreenSettings';
import { useStopwatch } from '../hooks/useStopwatch';
import { styles } from '../styles/styles';

export default function ScoreboardScreen() {
  const insets = useSafeAreaInsets();
  const [blueScore, setBlueScore] = useState(0);
  const [redScore, setRedScore] = useState(0);
  const [isTimerExpanded, setIsTimerExpanded] = useState(false);
  
  // Custom hooks
  const { time, isRunning, startPause, reset, formatTime } = useStopwatch();
  const { dimensions, isLandscape } = useOrientation();
  useScreenSettings();
  
  const panResponder = useScoreGestures({
    dimensions,
    blueScore,
    redScore,
    setBlueScore,
    setRedScore
  });

  const resetAll = () => {
    setBlueScore(0);
    setRedScore(0);
    reset();
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Tela principal do placar */}
      <View 
        style={[styles.gameArea, { flexDirection: 'row' }]} 
        {...panResponder.panHandlers}
      >
        <ScoreDisplay
          blueScore={blueScore}
          redScore={redScore}
          isLandscape={isLandscape}
        />
      </View>
      
      {/* Controles */}
      <View style={[
        styles.controlsOverlay,
        isLandscape ? styles.controlsLandscape : styles.controlsPortrait,
        { paddingTop: insets.top }
      ]}>
        <TimerModal
          time={time}
          formatTime={formatTime}
          isTimerExpanded={isTimerExpanded}
          setIsTimerExpanded={setIsTimerExpanded}
          isRunning={isRunning}
          startPause={startPause}
          reset={reset}
          resetAll={resetAll}
        />
      </View>
    </View>
  );
}
