import { View, Text , StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Button, Input, Card } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { storeDataJSON } from '../functions/AsyncStorageFunctions';

const SignUpScreen = (props) => {

    const [Name, setName] = useState('');
    const [SID, setSID] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

  return (
    <View style={styles.ViewStyle}>
        <Card style={styles.CardStyle}>
            <Card.Title>Welcome to the AuthApp!!!</Card.Title>
              <Card.Divider />
              
            <Input
            leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
            placeholder=" Name"
            onChangeText={
                function (currentInput) {
                    setName(currentInput);
                        }
                    }/>
        
            <Input
                leftIcon={<AntDesign name="idcard" size={24} color="black" />}
                  placeholder=" StudentID"
                  onChangeText={
                    function (currentInput) {
                        setSID(currentInput);
                            }
                        }/>

            <Input
                leftIcon={<Zocial name="email" size={24} color="black" />}
                  placeholder=" Email"
                  onChangeText={
                    function (currentInput) {
                        setEmail(currentInput);
                            }
                        }/>
            
            <Input
                leftIcon={<Entypo name="lock-open" size={24} color="black" />}
                secureTextEntry={true}
                  placeholder=" Password"
                  onChangeText={
                    function (currentInput) {
                        setPassword(currentInput);
                            }
                        }/>

            <Button
                icon={<AntDesign name="checkcircleo" size={24} color="black" />}
                title="  Sign Up"
                onPress={
                function () {
                    let currentUser = {
                        name: Name,
                        sid: SID,
                        email: Email,
                        password: Password,
                    };
                    storeDataJSON(Email, currentUser);
                    console.log("Successfully created account");
                    props.navigation.navigate('SignIn');
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