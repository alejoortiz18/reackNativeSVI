import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import BarraNav from './components/BarraNav';

const Stack = createStackNavigator()

export default function App() {
  return ( 
    <NavigationContainer >
          <BarraNav></BarraNav>
      </NavigationContainer>
      );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080 ',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
