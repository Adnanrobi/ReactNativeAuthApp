import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Input, Button, Card } from 'react-native-elements';
import { Zocial } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../providers/AuthProvider';
import { getDataJSON } from '../functions/AsyncStorageFunctions';

const SignInScreen = (props) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.ViewStyle}>
                    <Card style={styles.CardStyle}>
                        <Card.Title>Welcome to the AuthApp!!!</Card.Title>
                        <Card.Divider />

                        <Input
                            leftIcon={<Zocial name="email" size={24} color="black" />}
                            placeholder=" Email"
                            onChangeText={
                                function (currentInput) {
                                    setEmail(currentInput);
                                }
                             } />
                
                        <Input
                            leftIcon={<Entypo name="lock-open" size={24} color="black" />}
                            secureTextEntry={true}
                            placeholder=" Password"
                            onChangeText={
                                function (currentInput) {
                                    setPassword(currentInput);
                                }
                             } />
                
                        <Button
                            icon={<AntDesign name="checkcircleo" size={24} color="black" />}
                            title="  Sign In"
                            onPress={
                                async function () {
                                    let UserData = await getDataJSON(Email);
                                    console.log(UserData.email);
                                    console.log(UserData.password)
                                    setTimeout( ()=> {if (UserData.password == Password) {
                                        auth.setIsLoggedIn(true);
                                        auth.setCurrentUser(UserData);
                                    }
                                    else {
                                        alert("Please enter correct password");
                                        console.log(UserData);
                                        /* props.navigation.navigate('SignIn'); */
                                    }},2000)
                                    
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
            )}
        </AuthContext.Consumer>
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