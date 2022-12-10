import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import Main from './components/Main';

const theme = createTheme({
  components: {
    Button: {
      titleStyle: {

      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Header />
        <Main />
        <Text>Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app!Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! Open up App.js to start working on your app! </Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
