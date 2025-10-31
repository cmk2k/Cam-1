# Quick Start Guide

Get the **Applied Technical Reference** app running in 3 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including React Native, Expo, SQLite, Zustand, and React Navigation.

## Step 2: Start the App

```bash
npm start
```

or

```bash
npx expo start
```

You'll see a QR code in your terminal.

## Step 3: Open on Your Phone

1. **Install Expo Go**:
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Scan the QR code**:
   - iOS: Use your Camera app
   - Android: Use the Expo Go app

3. **Wait for the app to load** (first load takes ~30 seconds)

## That's it! 🎉

The app will:
- ✅ Initialize SQLite database
- ✅ Load seed data from `assets/data.json`
- ✅ Open on the Home screen

## What You Can Do

- 🏠 **Home**: Search everything, browse modules
- 🔄 **Converters**: Temperature and HP↔Torque
- 💧 **Hydraulics**: Pump HP and Valve Cv calculators
- ⚙️ **Bearings**: Failure mode diagnostics
- 📖 **Glossary**: Search technical terms

## Tips

- Toggle **dark mode** from the Home screen (top right)
- Tap **"Explain"** on any calculator to see formulas
- **Bookmark** items you use frequently
- Everything works **offline**!

## Troubleshooting

**App won't connect?**
- Make sure your phone and computer are on the same WiFi
- Try running `npm start` again

**Seeing errors?**
- Run `npm install` again
- Delete `node_modules` and run `npm install`

**Database issues?**
- Uninstall the app from your phone
- Run it again

## Next Steps

See [README_APP.md](./README_APP.md) for:
- Full feature documentation
- How to add your own data
- Project structure
- Advanced configuration

---

**Need help?** Check the [Expo docs](https://docs.expo.dev/) or [React Native docs](https://reactnative.dev/).
