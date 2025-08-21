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

## 🚀 Installation & Usage

### 📱 **Quick Start (Recommended - No PC Required)**

**Use the app immediately on your iPhone without any setup:**

1. **Download Expo Go** from the App Store
2. **Open this link** on your iPhone: https://expo.dev/accounts/slabrx/projects/scoreboard
3. **Scan the QR code** or tap "Open project using Expo Go"
4. **Done!** The app works independently from any computer

**Direct link for Expo Go:**
```
exp://u.expo.dev/78abfbe9-b2d3-4510-947f-703a3f4aea12?channel-name=production
```

### 🛠️ **Development Setup (For Developers)**

#### Option A: Local Development
```bash
# Clone the repository
git clone https://github.com/Fernandosantos1/scoreboard.git
cd scoreboard

# Install dependencies
npm install

# Start the development server
npm start
```

#### Option B: Deploy Updates to Cloud
```bash
# Update the live app
eas update --branch production --message "Your update message"
```

## 📱 **Installation Options**

### **1. Expo Go (Recommended - Free & Easy)**
- ✅ **No Apple Developer account needed**
- ✅ **Works immediately**
- ✅ **No PC required after first setup**
- ✅ **Automatic updates**

### **2. Native App (Requires Apple Developer $99/year)**
```bash
# For physical device installation
eas build --platform ios --profile production
eas submit --platform ios
```

### **3. TestFlight (With Apple Developer)**
```bash
# For beta testing
eas build --platform ios --profile preview
eas submit --platform ios --auto-submit
```

## 🔗 **Live App Access**

The app is deployed and ready to use:

- **📱 Direct Access**: https://expo.dev/accounts/slabrx/projects/scoreboard
- **🔗 Expo Go Link**: `exp://u.expo.dev/78abfbe9-b2d3-4510-947f-703a3f4aea12?channel-name=production`
- **📊 EAS Dashboard**: https://expo.dev/accounts/slabrx/projects/scoreboard

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

### **Updating the Live App**
```bash
# Make your changes, then deploy
eas update --branch production --message "Your update description"
```

### **Project Structure**
The project follows best practices:
- **Separation of concerns** with custom hooks
- **Reusable and modular** components
- **Centralized styles** for consistency
- **TypeScript** for type safety
- **Clean and well-documented** code

### **EAS Configuration**
- **Project ID**: 78abfbe9-b2d3-4510-947f-703a3f4aea12
- **Account**: @slabrx/scoreboard
- **Runtime Version**: 1.0.0
- **Update Branch**: production

---

## 📝 **Quick Access Summary**

**🎯 For Users:**
- Download Expo Go → Open https://expo.dev/accounts/slabrx/projects/scoreboard

**🛠️ For Developers:**
- Clone repo → `npm install` → `npm start` → Deploy with `eas update`

**📱 Current Live Version:**
- Available at: exp://u.expo.dev/78abfbe9-b2d3-4510-947f-703a3f4aea12?channel-name=production

---

Developed with ❤️ using React Native and Expo
