import React from 'react';
import { TextInput, View, Text } from 'react-native';

//functional component i.e. controlled component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry} //-> covers up text (for password) if true
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  //flex adds up the # for adjacent components -> denominator (A)
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2 //-> 2/3
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 //-> 1/3
  },
  containerStyle: {
    height: 40,
    flex: 1, //how much space container should take in parent same as (A) if there's another component in parent
    flexDirection: 'row', //align side by side 
    alignItems: 'center' //how its children will be placed horizontally in it's 'flexboxes' -> label will be center (and input) in flexbox
  }
};

export { Input };
