import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScreensParamsList, SCREEN_NAMES } from '@Screens';

type ScreenProps = NativeStackScreenProps<ScreensParamsList, SCREEN_NAMES.INNER_HOME>;

const HomeScreen: React.FC<ScreenProps> = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: '#f00' }}>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
