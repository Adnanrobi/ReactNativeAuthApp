import React from 'react';
import { Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      alert("Data added successfully");
    } catch (error) {
      alert(Error)
    }
  }

  const storeDataJSON = async (key, value) => {
    try {
      value = JSON.stringify(value);
      await AsyncStorage.setItem(key, value);
      console.log('value saved')
    } catch (error) {
      alert(Error)
    }
  }

  const getData = async (key) => {
    try {
      let data = await AsyncStorage.getItem(key)
      if (data != null) {
        alert(data)
      } else {
        alert("no data for this key")
      }
    } catch (error) {
      alert(error);
    }
  }
 
  const getDataJSON = async (key) => {
    try {
      let data = await AsyncStorage.getItem(key)
      if (data != null) {
        data = JSON.parse(data);
        console.log(data);
        return data;
      } else {
        alert("no data for this key")
      }
    } catch (error) {
      alert(error);
    }
  }

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log( " data deleted successfully ")
    } catch (error) {
      alert(error);
    }
  }

export { storeData, storeDataJSON, getData, getDataJSON, removeData };