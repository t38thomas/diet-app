# Diet App

Simple example React Native (Expo) app to manage diets. Uses TypeScript and works on web.
Now styled with [Shadcn UI](https://ui.shadcn.com/) components via NativeWind and Tailwind CSS.

## Features
- Store diet information in AsyncStorage so data is preserved between sessions.
- Import diet plans from JSON or define them manually via a form.
- Add unlimited meals for each day; manage quick alternative meals.
- Works on web via `expo start --web`.

## Development
Install dependencies and start the development server:

```bash
npm install
npm start
```

Tailwind CSS is configured with NativeWind so no extra build steps are required.

The app uses Expo so you can run it on Android, iOS or web.
