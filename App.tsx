import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Accueil from './src/components/accueil/Accueil';

const RedirectionTest = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RedirectionTest.Navigator
          initialRouteName="Accueil"
          screenOptions={{
            headerShown: false,
          }}>
          <RedirectionTest.Screen name="Accueil" component={Accueil} />
        </RedirectionTest.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
