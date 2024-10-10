import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ServiceCard = ({item}) => {
  return (
    <View style={styles.outherContainer}>
      <Text style={styles.recentSearch}>{item.title}</Text>
      <Image style={styles.serviceImg} source={item.image}/>
    </View>
  )
}

export default ServiceCard

const styles = StyleSheet.create({
    outherContainer:{
        backgroundColor: "#FFFF",
        marginLeft:8,
        width:140,
        padding:5,
        borderRadius:5,
    },
    recentSearch:{
        fontSize:13,
        marginBottom:8,
        color:"#00000"
    },
    serviceImg:{
        height: 130,
        width: "100%",
        
    }
})