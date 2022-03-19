import { View, Text } from 'react-native'
import React from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Button } from 'react-native-elements';

const HomeScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {
        (auth) => (
          <View>
            <Text>HomeScreen</Text>
            <Button
              title="LogOut"
              type="outline"
              onPress={
                function () {
                  auth.setIsLoggedIn(false);
                }
              }/>
          </View>
        )
      }
    </AuthContext.Consumer>
  )
}

export default HomeScreen