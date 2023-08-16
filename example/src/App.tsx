import  React,{useState} from 'react';

import { StyleSheet, View } from 'react-native';
import { Button, CustomTextInput as TextInput } from 'react-native-md-custom-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function App() {

  const [text,setText] =useState<string>('')

  const onPressFilter =() =>{
    
    console.log('onPressFilter')
  }

  
  
  return (
    <View style={styles.container}>
      <TextInput 
      title='E-mail Adresi' 
      value={text} 
      onChangeText={setText}  
      placeholder='placeholder' 
      rightItem={<Icon name='camera-outline' size={24} color='#172554'/>}/>
      <TextInput 
      title='E-mail Adresi' 
      value={text} 
      onChangeText={setText}  
      placeholder='placeholder' 
      rightItem={<Icon name='home' size={24} color='#172554'/>}/>
      <TextInput 
      title='E-mail Adresi' 
      value={text} 
      onChangeText={setText}  
      placeholder='placeholder' 
      rightItem={<Icon name='home' size={24} color='#172554'/>}/>
      <TextInput 

      title='E-mail Adresi' 
      value={text} 
      onChangeText={setText}  
      placeholder='placeholder' 
      rightItem={<Icon name='home' size={24} color='#172554'/>}/>
      <Button 
      style ={{marginTop:40,}} 
      theme='secondary'  
      text='Filtrele' 
      onPress={onPressFilter} 
      leftItem={<Icon name='delete' size={24} color='#DC2626' />}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:40,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
