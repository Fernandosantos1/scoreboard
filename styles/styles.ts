import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  
  // Tela principal
  gameArea: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSide: {
    flex: 1,
    backgroundColor: '#5B9BD5', // Azul mais suave como na imagem
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSide: {
    flex: 1,
    backgroundColor: '#E85D75', // Vermelho/rosa como na imagem
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: 2,
    backgroundColor: '#fff',
  },
  score: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  scoreLandscape: {
    fontSize: 80,
  },
  
  // Controles overlay
  controlsOverlay: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 100,
  },
  controlsPortrait: {
    top: 40,
    left: 0,
    right: 0,
  },
  controlsLandscape: {
    top: 10,
    left: 0,
    right: 0,
  },
  
  // Timer card (estilo da imagem)
  timerCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 15,
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    minWidth: 280,
  },
  timerCardCompact: {
    padding: 8,
    minWidth: 140,
  },
  timerCardExpanded: {
    padding: 12,
    minWidth: 280,
  },
  timerCompact: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerTextCompact: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  timerHeader: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  collapseButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 8,
  },
  collapseIcon: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 4,
  },
  timerControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  
  // Botões minimalistas
  controlButtonMinimal: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(240,240,240,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,0.3)',
  },
  controlIconMinimal: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
});
