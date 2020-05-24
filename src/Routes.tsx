import React from 'react'
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { Text, Button } from 'react-native'

import { Center } from './Center'
import { AuthParamList } from './AuthParamList'

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>()

function Login({ navigation }: any) {
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title='go to register'
        onPress={() => {
          navigation.navigate('Register')
        }}
      />
    </Center>
  )
}

function Register({
  navigation,
  route
}: {
  navigation: StackNavigationProp<AuthParamList, 'Register'>
  route: RouteProp<AuthParamList, 'Register'>
}) {
  return (
    <Center>
      <Text>I am a register screen</Text>
      <Text>I am a register screen master branch</Text>
      <Text>I am a register screen test commit  master branch</Text>
      <Text>route name: {route.name}</Text>
      <Button
        title='go to login'
        onPress={() => {
          navigation.navigate('Login')
        }}
      />
    </Center>
  )
}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          options={{ headerTitle: 'Sign In' }}
          component={Login}
        />
        <Stack.Screen
          name='Register'
          options={{ headerTitle: 'Sign Up' }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
