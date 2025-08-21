# ⚽ Scoreboard App

A minimalist and intuitive sports scoreboard developed with React Native and Expo.

## 📝 Project Overview

The **Scoreboard App** is a sports scoreboard application with a split interface (blue/red) that allows you to control scores through intuitive gestures. It includes an integrated timer, support for multiple orientations, and works perfectly on iOS and Android devices.

**Perfect for:** Sports, competitions, presentations, events, or any activity that needs a simple and efficient scoreboard.

## 🎯 Features

- **Split screen** blue/red for two teams
- **Intuitive gestures**:
  - Tap on sides to increase score
  - Swipe down to decrease score
- **Integrated timer** with play/pause/stop/reset controls
- **Collapsible modal** for the timer
- **Responsive orientation** (portrait/landscape)
- **Keep screen awake** during use

## 🛠️ Prerequisites

Before installing the project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Expo CLI** (optional, but recommended)

### For iOS development:
- **macOS** (required for native builds)
- **Xcode** (latest version)
- **iOS Simulator** or physical device
- **Apple Developer Account** (for installation on physical device)

### For quick iOS testing:
- **Expo Go** on iPhone (available in the App Store)
- **Same Wi-Fi network** (device and computer)

## 🚀 Installation

### 1. Clone and install dependencies
```bash
# Clone the repository
git clone <repository-url>
cd scoreboard

# Install dependencies
npm install

# Start the development server
npm start
```

### 2. Run on iOS

#### Option A: Via Expo Go (Simplest)
```bash
# Start the project
npm start

# On iPhone:
# 1. Download Expo Go from the App Store
# 2. Scan the QR code that appears in the terminal
# 3. The app opens automatically
```

#### Option B: iOS Simulator (Requires macOS)
```bash
# Install iOS Simulator
npm run ios

# Or specify a simulator
npx expo run:ios --simulator="iPhone 15"
```

#### Option C: Native Build (For distribution)
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure the project
eas build:configure

# Create iOS build
eas build --platform ios --profile preview
```

## 💡 Quick iOS Installation

**To use immediately on iPhone:**

1. **Download Expo Go** from the App Store
2. **Run** `npm start` on computer
3. **Scan** the QR code with iPhone camera
4. **Done!** The app opens in Expo Go

**For permanent installation:**
- Requires Apple Developer account ($99/year)
- Build through EAS Build Service

## 🎮 Controls

- **Increase points**: Tap on team's side
- **Decrease points**: Swipe down on team's side
- **Timer**: Tap on modal to expand/collapse
- **General reset**: ↻ button in expanded timer

## 🏗️ Architecture

### Project structure
```
├── app/
│   ├── index.tsx          # Main screen
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 page
├── components/
│   ├── ScoreDisplay.tsx   # Score display
│   ├── TimerModal.tsx     # Timer modal
│   └── TimerControls.tsx  # Timer controls
├── hooks/
│   ├── useStopwatch.ts    # Stopwatch hook
│   ├── useOrientation.ts  # Orientation hook
│   ├── useScoreGestures.ts# Gesture hook
│   └── useScreenSettings.ts# Settings hook
└── styles/
    └── styles.ts          # Centralized styles
```

### Technologies used
- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Static typing
- **Custom Hooks** - Reusable logic
- **PanResponder** - Native gestures

## 🎨 Design

- **Minimalist**: Clean interface without unnecessary elements
- **Responsive**: Adapts to different orientations
- **Intuitive**: Natural gesture controls
- **Accessible**: Universal Unicode icons

## 📦 Main Dependencies

- `expo-keep-awake` - Keep screen awake
- `expo-screen-orientation` - Orientation control
- `react-native-safe-area-context` - Device safe areas

## 🛠️ Development

The project follows best practices:
- **Separation of concerns** with custom hooks
- **Reusable and modular** components
- **Centralized styles** for consistency
- **TypeScript** for type safety
- **Clean and well-documented** code

---

Developed with ❤️ using React Native and Expo
