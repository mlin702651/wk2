import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import list from "./list";

const Albumlist = () => {
  return (
    <ScrollView>
        <View style={styles.background}>
        <View style={styles.box}>
            <View style={styles.titalbox}>
                <Text style={styles.titalword}> {list[0].title} </Text>
            </View>
            <View style={styles.imgbox}>
                <Image
                    style={styles.img}
                    source={{uri:list[0].image}}/>
            </View>
        </View>
        <View style={styles.box}>
            <View style={styles.titalbox}>
                <Text style={styles.titalword}> {list[1].title} </Text>
            </View>
            <View style={styles.imgbox}>
                <Image
                    style={styles.img}
                    source={{uri:list[1].image}}/>
            </View>
        </View>
        <View style={styles.box}>
            <View style={styles.titalbox}>
                <Text style={styles.titalword}> {list[2].title} </Text>
            </View>
            <View style={styles.imgbox}>
                <Image
                    style={styles.img}
                    source={{uri:list[2].image}}/>
            </View>
        </View>
        <View style={styles.box}>
            <View style={styles.titalbox}>
                <Text style={styles.titalword}> {list[3].title} </Text>
            </View>
            <View style={styles.imgbox}>
                <Image
                    style={styles.img}
                    source={{uri:list[3].image}}/>
            </View>
        </View>
        <View style={styles.box}>
            <View style={styles.titalbox}>
                <Text style={styles.titalword}> {list[4].title} </Text>
            </View>
            <View style={styles.imgbox}>
                <Image
                    style={styles.img}
                    source={{uri:list[4].image}}/>
            </View>
        </View>

        </View>
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#fff',
        paddingTop:5
    },
    box:{
        justifyContent:"center",
        alignItems: 'center',
        backgroundColor:'#f5ede2',
        elevation:1,
        padding:20,
        margin:9
    },
    titalword:{
        color:'#613e3b',
        padding:10,
        fontSize:15
    },
    img:{
        height:300,
        width:300,


    }
});

export default Albumlist;