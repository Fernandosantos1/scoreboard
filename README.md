# ⚽ Scoreboard App

Um placar esportivo minimalista e intuitivo desenvolvido com React Native e Expo.

## 📝 Resumo do Projeto

O **Scoreboard App** é um aplicativo de placar esportivo com interface dividida (azul/vermelha) que permite controlar pontuações através de gestos intuitivos. Inclui timer integrado, suporte a orientações múltiplas e funciona perfeitamente em dispositivos iOS e Android.

**Ideal para:** Esportes, competições, apresentações, eventos ou qualquer atividade que precise de um placar simples e eficiente.

## 🎯 Funcionalidades

- **Tela dividida** azul/vermelha para dois times
- **Gestos intuitivos**:
  - Toque nas laterais para aumentar pontuação
  - Swipe para baixo para diminuir pontuação
- **Timer integrado** com controles play/pause/stop/reset
- **Modal colapsável** para o timer
- **Orientação responsiva** (portrait/landscape)
- **Tela sempre ligada** durante o uso

## 🛠️ Pré-requisitos

Antes de instalar o projeto, certifique-se de ter:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Expo CLI** (opcional, mas recomendado)

### Para desenvolvimento iOS:
- **macOS** (obrigatório para builds nativos)
- **Xcode** (versão mais recente)
- **iOS Simulator** ou dispositivo físico
- **Conta Apple Developer** (para instalação em dispositivo físico)

### Para teste rápido em iOS:
- **Expo Go** no iPhone (disponível na App Store)
- **Mesma rede Wi-Fi** (dispositivo e computador)

## 🚀 Instalação

### 1. Clone e instale dependências
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd scoreboard

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

### 2. Executar no iOS

#### Opção A: Via Expo Go (Mais Simples)
```bash
# Inicie o projeto
npm start

# No iPhone:
# 1. Baixe o Expo Go na App Store
# 2. Escaneie o QR code que aparece no terminal
# 3. O app abre automaticamente
```

#### Opção B: iOS Simulator (Requer macOS)
```bash
# Instale o iOS Simulator
npm run ios

# Ou especifique um simulador
npx expo run:ios --simulator="iPhone 15"
```

#### Opção C: Build Nativo (Para distribuição)
```bash
# Instale EAS CLI
npm install -g @expo/eas-cli

# Configure o projeto
eas build:configure

# Crie build para iOS
eas build --platform ios --profile preview
```

## 💡 Instalação Rápida para iOS

**Para usar imediatamente no iPhone:**

1. **Baixe o Expo Go** na App Store
2. **Execute** `npm start` no computador
3. **Escaneie** o QR code com a câmera do iPhone
4. **Pronto!** O app abre no Expo Go

**Para instalação permanente:**
- Necessária conta Apple Developer ($99/ano)
- Build através do EAS Build Service

##  Controles

- **Aumentar pontos**: Toque na lateral do time
- **Diminuir pontos**: Swipe para baixo na lateral do time
- **Timer**: Toque no modal para expandir/recolher
- **Reset geral**: Botão ↻ no timer expandido

## 🏗️ Arquitetura

### Estrutura do projeto
```
├── app/
│   ├── index.tsx          # Tela principal
│   ├── _layout.tsx        # Layout raiz
│   └── +not-found.tsx     # Página 404
├── components/
│   ├── ScoreDisplay.tsx   # Exibição de pontuação
│   ├── TimerModal.tsx     # Modal do timer
│   └── TimerControls.tsx  # Controles do timer
├── hooks/
│   ├── useStopwatch.ts    # Hook do cronômetro
│   ├── useOrientation.ts  # Hook de orientação
│   ├── useScoreGestures.ts# Hook de gestos
│   └── useScreenSettings.ts# Hook de configurações
└── styles/
    └── styles.ts          # Estilos centralizados
```

### Tecnologias utilizadas
- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Custom Hooks** - Lógica reutilizável
- **PanResponder** - Gestos nativos

## 🎨 Design

- **Minimalista**: Interface limpa sem elementos desnecessários
- **Responsivo**: Adapta-se a diferentes orientações
- **Intuitivo**: Controles gestuais naturais
- **Acessível**: Ícones Unicode universais

## 📦 Dependências principais

- `expo-keep-awake` - Manter tela ligada
- `expo-screen-orientation` - Controle de orientação
- `react-native-safe-area-context` - Áreas seguras do dispositivo

## 🛠️ Desenvolvimento

O projeto segue as melhores práticas:
- **Separação de responsabilidades** com hooks customizados
- **Componentes reutilizáveis** e modulares
- **Estilos centralizados** para consistência
- **TypeScript** para type safety
- **Código limpo** e bem documentado

---

Desenvolvido com ❤️ usando React Native e Expo
