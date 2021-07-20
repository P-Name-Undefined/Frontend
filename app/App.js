import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import Root from './src/index';
import loadFonts from './assets/fonts/loadFonts';
import { View, LogBox } from 'react-native';
import { AppRegistry } from 'react-native';

LogBox.ignoreLogs(['Unrecognized WebSocket']);

AppRegistry.registerComponent('main', () => App);

export default function App() {
    const [fontsLoaded, setFonts] = useState(false);
    useEffect(() => {
        async function loadFontsAsync() {
            await loadFonts();
            setFonts(true);
        }
        loadFontsAsync();
    }, []);

    if (!fontsLoaded) return <View />;

    return <Root />;
}
