import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';
import BookingScreen from './components/BookingScreen';
import ConfirmBooking from './components/CornfirmBooking';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name='Confirm-Booking' component={ConfirmBooking} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
