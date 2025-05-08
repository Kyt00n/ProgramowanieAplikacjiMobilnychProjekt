import { Stack } from "expo-router";
import './globals.css';
import { useState } from "react";
import InitialScreen from "./initialScreen";
export default function RootLayout() {
  const [showInitialView, setShowInitialView] = useState(true);

  if (showInitialView) {
    return (
      <InitialScreen onClose={() => setShowInitialView(false)} />
    );
  }
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="posts/[id]"
      options={{
        headerShown: false,
      }}
    />
  </Stack>;
}
