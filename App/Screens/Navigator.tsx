import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from './ScreenPairings';
import { SCREEN_NAMES } from './ScreenNames';
// import DrawerContent from './Main/Drawer';

const StackScreenOptions = {
  // headerBackground: () => (<HeaderBackground />),
  headerTintColor: '#fff', // COLORS.HEADER.ICON_BUTTON
  headerTitle: '',
  // headerTitleStyle: { fontSize: responsive(17) },
  headerBackTitleVisible: false,
  // headerLeftContainerStyle: { fontSize: responsive(12) },
  // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

const Main = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={StackScreenOptions} initialRouteName={SCREEN_NAMES.DRAWER}>
      {/*<Main.Screen name={SCREEN_NAMES.DRAWER} component={DrawerNavigator} options={{ headerShown: false }} />*/}
      <Main.Screen name={SCREEN_NAMES.HOME} component={SCREENS[SCREEN_NAMES.HOME]} />
    </Main.Navigator>
  );
};

/*****************************************************************/
/************************* App Navigator *************************/
/*****************************************************************/

const App = createNativeStackNavigator();

export const AppNavigator = () => {
  // const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      <App.Navigator screenOptions={{ headerShown: false }}>
        {/*(user !== null) ?
          (<App.Screen name={SCREEN_NAMES.NAME} component={MainNavigator} />) :
          (<App.Screen name={SCREEN_NAMES.AUTH.NAME} component={AuthNavigator} />)
        */}
        <App.Screen name={SCREEN_NAMES.NAME} component={MainNavigator} />
      </App.Navigator>
    </NavigationContainer>
  );
};
