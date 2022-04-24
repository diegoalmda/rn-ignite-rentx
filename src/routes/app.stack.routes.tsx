import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { MyCars } from "../screens/MyCars";
import { Confirmation } from "../screens/Confirmation";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator 
      screenOptions={{ 
          headerShown: false 
      }}
      initialRouteName="Home"
    >
      <Screen 
        name="Home"
        component={Home}
        // options={{
        //   gestureEnabled: false
        // }} // impede usuário de voltar a tela anterior
      />
      <Screen 
          name="CarDetails"
          component={CarDetails}
      />
      <Screen 
          name="Scheduling"
          component={Scheduling}
      />
      <Screen 
          name="SchedulingDetails"
          component={SchedulingDetails}
      />
      <Screen 
          name="Confirmation"
          component={Confirmation}
      />
      <Screen 
          name="MyCars"
          component={MyCars}
      />
    </Navigator> 
  );
}