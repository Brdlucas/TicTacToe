import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const LandingTest = createNativeStackNavigator();

const Accueil = () => {
  return (
    <LandingTest.Navigator>
      <LandingTest.Screen name="Landing" component={Landing} />
    </LandingTest.Navigator>
  );
};
export default Accueil;
