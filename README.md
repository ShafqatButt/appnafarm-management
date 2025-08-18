# Appnafarm Management

A mobile marketplace application built with Expo for buying and selling fresh produce and local goods.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd appnafarm-management
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm start
# or
yarn start
```

## 📱 Running the App

- **iOS Simulator**: Press `i` in the terminal or click "Run on iOS simulator" in Expo DevTools
- **Android Emulator**: Press `a` in the terminal or click "Run on Android device/emulator" in Expo DevTools
- **Web**: Press `w` in the terminal or click "Run in web browser" in Expo DevTools
- **Physical Device**: Scan the QR code with the Expo Go app

## 🛠️ Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

## 📱 Tech Stack

- **Framework**: Expo
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router
- **State Management**: XState
- **UI Components**: Radix UI
- **Database**: Drizzle ORM with SQLite

## 📁 Project Structure

```
src/
├── app/           # App screens and navigation
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── machines/      # XState state machines
├── providers/     # Context providers
├── services/      # API and external services
└── utils/         # Utility functions
```

## 🔧 Configuration

The app configuration is managed in `app.config.js`. Update the following as needed:

- App name and slug
- Platform-specific settings
- Environment variables

## 📱 Building for Production

1. Install EAS CLI

```bash
npm install -g @expo/eas-cli
```

2. Build the app

```bash
eas build --platform ios
eas build --platform android
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@appnfarmmanagement.com or create an issue in this repository.
