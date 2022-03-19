import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Input, Button, Card } from 'react-native-elements';
import { Zocial } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SignInScreen = (props) => {
    return (
        <View style={styles.ViewStyle}>
            <Card style={styles.CardStyle}>
                <Card.Title>Welcome to the AuthApp!!!</Card.Title>
                <Card.Divider />

                <Input
                    leftIcon={<Zocial name="email" size={24} color="black" />}
                    placeholder=" Email" />
                
                <Input
                    leftIcon={<Entypo name="lock-open" size={24} color="black" />}
                    secureTextEntry={true}
                    placeholder=" Password" />
                
                <Button
                    icon={<AntDesign name="checkcircleo" size={24} color="black" />}
                    title="  Sign Up"
                    onPress={
                    function () {
                        props.navigation.navigate('SignUp')
                    }
                } />

                <Button
                    icon={<Ionicons name="ios-people-sharp" size={24} color="black" />}
                    title="  Don't have any account?"
                    type='clear'
                    onPress={
                    function () {
                        props.navigation.navigate('SignUp')
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

export default SignInScreen