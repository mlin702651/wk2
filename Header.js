import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
       原子邦妮
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height:100,
    paddingTop:30,
    elevation:2,
    backgroundColor:'#f5ede2',
    shadowColor:"#613e3b",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2,
    zIndex:2
  },
  textStyle:{
      fontSize:20,
      color:'#613e3b',
  }
});

export default Header;