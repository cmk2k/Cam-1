# Applied Technical Reference

A minimal but working offline-first mobile reference app for industrial engineering professionals. Built with React Native + Expo.

## Features

### 📱 Modules

1. **Home** - Quick access dashboard with:
   - Global search across all content
   - Module cards for quick navigation
   - Recent items history
   - Bookmarks
   - Dark mode toggle
   - Offline status indicator

2. **Converters** - Unit conversions with explanations:
   - Temperature (°C ↔ °F)
   - HP ↔ Torque (in-lb and ft-lb)
   - Expandable "Explain" sections showing formulas and source pages

3. **Hydraulics** - Fluid power calculators:
   - Pump HP Calculator (with editable efficiency)
   - Valve Cv Helper (with 53% rule hint)

4. **Bearings** - Failure mode diagnostic wizard:
   - 7 common bearing failure modes
   - Likely causes for each mode
   - Recommended corrective actions
   - Image placeholders for visual reference

5. **Glossary** - Searchable technical dictionary:
   - Fuzzy search across terms and definitions
   - Cross-linked related terms
   - Source page references
   - Bookmark functionality

### 🎨 Design Features

- **Offline-first**: All data stored locally in SQLite
- **Dark mode**: Toggle between light and dark themes
- **Large tap targets**: Minimum 44pt touch targets for accessibility
- **Responsive**: Works on all phone and tablet sizes
- **Fast**: Local database queries with instant results

### 🔧 Tech Stack

- **React Native** + **Expo** (TypeScript)
- **SQLite** (expo-sqlite) for local data storage
- **Zustand** for state management
- **React Navigation** (bottom tabs)
- **React Hook Form** for input handling

## Prerequisites

Before running the app, ensure you have:

1. **Node.js** (v18 or higher)
   ```bash
   node --version
   ```

2. **npm** or **yarn**
   ```bash
   npm --version
   ```

3. **Expo Go** app on your mobile device:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Installation & Running

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm start
```

or

```bash
npx expo start
```

This will:
- Start the Expo development server
- Display a QR code in your terminal
- Open a browser with the Expo DevTools

### 3. Run on Your Device

#### Option A: Use Expo Go (Recommended for Testing)

1. Install **Expo Go** on your iOS or Android device
2. Scan the QR code shown in terminal with:
   - **iOS**: Camera app
   - **Android**: Expo Go app
3. The app will load on your device

#### Option B: Run on iOS Simulator (Mac only)

```bash
npm run ios
```

#### Option C: Run on Android Emulator

```bash
npm run android
```

## Project Structure

```
.
├── App.tsx                     # Main app entry point with DB initialization
├── assets/
│   └── data.json              # Seed data (calculators, glossary, bearings)
├── src/
│   ├── components/            # Reusable UI components
│   │   └── Card.tsx
│   ├── database/              # SQLite database layer
│   │   ├── db.ts             # Database setup and queries
│   │   └── hooks.ts          # React hooks for data fetching
│   ├── navigation/
│   │   └── AppNavigator.tsx  # Bottom tab navigation
│   ├── screens/              # Main app screens
│   │   ├── HomeScreen.tsx
│   │   ├── ConvertersScreen.tsx
│   │   ├── HydraulicsScreen.tsx
│   │   ├── BearingsScreen.tsx
│   │   └── GlossaryScreen.tsx
│   ├── store/
│   │   └── useAppStore.ts    # Zustand global state
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   └── utils/
│       └── theme.ts          # Theme configuration (light/dark)
├── package.json
├── tsconfig.json
└── app.json
```

## Data Format

The app loads data from `assets/data.json` on first run. The JSON structure:

```json
{
  "calculators": [
    {
      "id": "unique-id",
      "title": "Calculator Name",
      "inputs": ["input1", "input2"],
      "outputs": ["output1"],
      "equation": "formula in plaintext",
      "units": "units used",
      "notes": "additional notes",
      "sourcePage": "reference page"
    }
  ],
  "bearingFailureModes": [
    {
      "id": "mode-id",
      "name": "Failure Mode Name",
      "description": "Description",
      "causes": ["cause1", "cause2"],
      "actions": ["action1", "action2"],
      "imagePlaceholder": "image-name.png"
    }
  ],
  "tables": [
    {
      "id": "table-id",
      "title": "Table Name",
      "headers": ["col1", "col2"],
      "rows": [["val1", "val2"]],
      "sourcePage": "reference"
    }
  ],
  "glossary": [
    {
      "term": "Term Name",
      "definition": "Definition text",
      "sourcePage": "reference",
      "relatedTerms": ["term1", "term2"]
    }
  ]
}
```

## Expanding the Content

### Adding New Calculators

1. Edit `assets/data.json`
2. Add a new calculator object to the `calculators` array
3. Implement the calculation logic in the appropriate screen
4. Restart the app or force re-seed the database

### Adding New Glossary Terms

1. Edit `assets/data.json`
2. Add new term objects to the `glossary` array
3. Restart the app to load new terms

### Adding New Bearing Failure Modes

1. Edit `assets/data.json`
2. Add new mode objects to the `bearingFailureModes` array
3. Restart the app to load new modes

### Force Re-seed Database

To re-seed the database with updated data:

1. Uninstall the app from your device
2. Reinstall and run again

Or programmatically in `App.tsx`:
```typescript
// In initializeApp function, force re-seed:
await seedDatabase(seedData);
```

## Features Implemented

✅ Offline-first SQLite database
✅ Temperature converter (°C ↔ °F)
✅ HP ↔ Torque converter (in-lb and ft-lb)
✅ Pump HP calculator with editable efficiency
✅ Valve Cv helper with 53% rule hint
✅ Bearing failure mode wizard (7 modes)
✅ Glossary with fuzzy search
✅ Cross-linked related terms
✅ Recent items tracking
✅ Bookmarks
✅ Dark mode
✅ Global search
✅ "Explain" accordions with formulas and source pages
✅ Offline status badge
✅ Large tap targets (44pt minimum)

## Future Enhancements

- 📄 Share as PDF functionality (expo-print + expo-sharing)
- 🖼️ Real bearing failure mode images
- 📊 More data tables (pressure conversions, etc.)
- 🔄 Data sync/export functionality
- 📈 Usage analytics
- 🌍 Multi-language support

## Troubleshooting

### App won't load on device
- Ensure your device and computer are on the same network
- Try restarting the Expo development server
- Clear Expo Go cache: shake device → "Reload"

### Database errors
- Try uninstalling and reinstalling the app
- Check `assets/data.json` for valid JSON syntax

### TypeScript errors
```bash
npm install --save-dev typescript @types/react
```

### Expo Go compatibility
- This app uses expo-sqlite which is supported in Expo Go
- No native code modifications required

## License

MIT License - feel free to use and modify for your needs.

## Support

For issues or questions about the app, refer to:
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [SQLite Documentation](https://docs.expo.dev/versions/latest/sdk/sqlite/)

---

**Built with ❤️ for industrial engineers**
