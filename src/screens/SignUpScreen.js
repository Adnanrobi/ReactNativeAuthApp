import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import { Button, Input, Card } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SignUpScreen = (props) => {
  return (
    <View style={styles.ViewStyle}>
        <Card style={styles.CardStyle}>
            <Card.Title>Welcome to the AuthApp!!!</Card.Title>
            <Card.Divider />
        
            <Input
                leftIcon={<AntDesign name="user" size={24} color="black" />}
                placeholder=" StudentID" />

            <Input
                leftIcon={<Zocial name="email" size={24} color="black" />}
                placeholder=" Email" />
            
            <Input
                leftIcon={<Entypo name="lock-open" size={24} color="black" />}
                secureTextEntry={true}
                placeholder=" Password" />

            <Input
                leftIcon={<Entypo name="lock" size={24} color="black" />}
                secureTextEntry={true}
                placeholder=" Confirm Password" />

            <Button
                icon={<AntDesign name="checkcircleo" size={24} color="black" />}
                title="  Sign In"
                onPress={
                function () {
                    props.navigation.navigate('Home')
                }
            } />

            <Button
                icon={<Ionicons name="ios-people-sharp" size={24} color="black" />}
                title="  Already have an account"
                type='clear'
                onPress={
                function () {
                    props.navigation.navigate('SignIn')
                }
            } />
            

        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  ViewStyle: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#cccdcf',
  },
  CardStyle: {

  }
})

export default SignUpScreen