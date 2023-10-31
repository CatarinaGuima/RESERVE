import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Pages/home';
import { HistoricScreen } from './src/Pages/historic';
import { ApointmentScreen } from './src/Pages/appointment';
import { ReserveScreen } from './src/Pages/reserve';
import { WelcomeScreen } from './src/Pages/welcome';
import { IconAppointment,IconHome,IconProfile,IconSettings } from './src/Componentes/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'gray', tabBarInactiveTintColor: 'black' }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Home', headerTitleAlign: 'center', tabBarLabel: 'Home', tabBarIcon: IconHome }} />
      <Tab.Screen name='Calendário' component={ApointmentScreen} options={{ headerShown: false, tabBarLabel: 'Calendário', tabBarIcon: IconAppointment }} />
      <Tab.Screen name='Reservar' component={ReserveScreen} options={{ headerShown: true,  title: "Reservar", headerTitleAlign: 'center', tabBarLabel: 'Reservar', tabBarIcon: IconProfile }} />
      <Tab.Screen name='Histórico' component={HistoricScreen} options={{ title: "Histórico", headerTitleAlign: 'center', tabBarLabel: 'Histórico', tabBarIcon: IconSettings }} />
    </Tab.Navigator>
  );
}

function MyStacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false, headerTitleAlign: 'center' }} >
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Menu' component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {

  return (
      <MyStacks/>
  )
}
