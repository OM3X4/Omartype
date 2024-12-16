/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';

// Create context
const SettingsContext = createContext();

// Create provider to wrap the app
export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: 'light', // Default settings
    language: 'en',
    // Add any other settings here
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use the context
export const useSettings = () => useContext(SettingsContext);
