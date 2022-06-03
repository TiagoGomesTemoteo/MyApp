import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Start } from '../screens/start';
import { SignIn } from '../screens/signin';
import { ForgotPassword } from '../screens/forgotpassword';
import { ForgotPasswordComplete } from '../screens/forgotpasswordcomplete';
import { NewAccountData } from '../screens/newaccountdata';
import { NewAccountPersonalData } from '../screens/newaccountpersonaldata';
import { NewAccountAddress } from '../screens/newaccountaddress';
import { NewAccountProfilePicture } from '../screens/newaccountprofilepicture';
import { ProfileCreatedSuccessfully } from '../screens/profilecreatedsuccessfully';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordComplete" component={ForgotPasswordComplete} />
      <Stack.Screen name="NewAccountData" component={NewAccountData} />
      <Stack.Screen name="NewAccountPersonalData" component={NewAccountPersonalData} />
      <Stack.Screen name="NewAccountAddress" component={NewAccountAddress} />
      <Stack.Screen name="NewAccountProfilePicture" component={NewAccountProfilePicture} />
      <Stack.Screen name="ProfileCreatedSuccessfully" component={ProfileCreatedSuccessfully} />
    </Stack.Navigator>
  );
}