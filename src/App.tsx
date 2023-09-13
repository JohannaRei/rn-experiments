import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './navigation/routes';
import HomeView from './views/HomeView';
import {useTheme} from './theme';

const MainStack = createNativeStackNavigator();

function App(): JSX.Element {
  const theme = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <MainStack.Navigator
        initialRouteName={Routes.HOME}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}>
        <MainStack.Screen name={Routes.HOME} component={HomeView} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
