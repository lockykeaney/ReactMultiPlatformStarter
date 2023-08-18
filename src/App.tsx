/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaView, Text, View} from 'react-native';

export type RootStackParamList = {
  RootScreen: undefined;
  AuthedScreen: undefined;
};
export const RootStack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        height: '100%',
      }}>
      <NavigationContainer
        linking={{
          prefixes: [],
          config: {
            screens: {
              RootScreen: '/',
              AuthedScreen: '/authed',
            },
          },
        }}>
        <RootStack.Navigator initialRouteName="RootScreen">
          <RootStack.Screen
            name="RootScreen"
            children={() => (
              <View
                style={{
                  backgroundColor: 'green',
                }}>
                <Text>Root Screen</Text>
              </View>
            )}
            options={{title: 'Root', headerShown: false}}
          />
          <RootStack.Screen
            name="AuthedScreen"
            children={() => (
              <View>
                <Text>Authed Screen</Text>
              </View>
            )}
            options={{title: 'Authed', headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
