import { ScrollView, StyleSheet, Image, View , Text } from 'react-native'
import React from 'react'
import AmazonPay from "../assets/amazon-pay.png"
import SendMoney from "../assets/send-money.jpg"
import Scan from "../assets/scan-qr.jpeg"
import PayBills from "../assets/pay-bills.jpeg"
import { RecentSearchData } from '../Data/RecentSearchData'
import ServiceCard from './ServiceCard'
const Services = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingRight: 20}}
    style={styles.container}
    >
      <View style={styles.serviceContainer}>

        <View style={styles.row}>

            <View style={styles.innerContainer}>
                <Image source={AmazonPay} style={styles.imgStyle}/>
                <Text style={styles.title}>Amazon Pay</Text>
            </View>

            <View style={styles.innerContainer}>
                <Image source={SendMoney} style={styles.imgStyle}/>
                <Text style={styles.title}>Send Money</Text>
            </View>
            </View>

            <View style={styles.row}>
            <View style={styles.innerContainer}>
                <Image source={Scan} style={styles.imgStyle}/>
                <Text style={styles.title}>Scan QR</Text>
            </View>

            <View style={styles.innerContainer}>
                <Image source={PayBills} style={styles.imgStyle}/>
                <Text style={styles.title}>Pay Bills</Text>
            </View>

        </View>
      </View>

    {RecentSearchData.map((item) =>(
        <ServiceCard item={item}/>
    ))}

    </ScrollView>
  )
}

export default Services

const styles = StyleSheet.create({
    container:{
        marginTop: -35,
        paddingHorizontal: 10
    },
    serviceContainer:{
        backgroundColor:"#fff",
        borderRadius:5,
        
    },

    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        
    },

    innerContainer:{
padding:10,
alignItems: 'center',
paddingTop: 15

    },

    imgStyle:{
        height:50,
        width:50,
        borderRadius:50
    },

    title:{
        fontSize:10,
        color:"#2c4341",
        marginTop:5
    },
})