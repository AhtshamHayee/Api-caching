import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'

const approveColor = '#79C179';
const pendingColor = '#FFA233'
const Listings = () => {
 
    let dummy = [
        {
            image: require('../images/hosue6.jpg'),
            request: '4',
            status: 'Inactive',
            address: '5519 NE Skidmore'
        },
        {
            image: require('../images/house2.jpg'),
            request: '4',
            status: 'Active',
            address: '5519 NE Skidmore'
        },
        {
          image: require('../images/hosue6.jpg'),
          request: '4',
          status: 'Inactive',
          address: '5519 NE Skidmore'
      },
      {
          image: require('../images/house2.jpg'),
          request: '4',
          status: 'Active',
          address: '5519 NE Skidmore'
      }
    ]
  const _renderRowItem = ({ item, index }) => {
    return (
      <View key={index} style={{width: '100%', height: 300,}}>
          <View style = {{height: 15}}/>
            <Image source = {item.image} style = {{height: 220, borderRadius: 10, width: 320}}/>
          <View style = {{height: 10}}/>

            <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style = {{fontWeight: 'bold'}}>{item.address}</Text>
                <View  style = {{ height: 23, backgroundColor: item.status === 'Active' ? ('#EEF7EE'):('#FCECEB'), width:  60, borderRadius: 20,justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{fontSize: 12, color: item.status === 'Active' ? ('#58B258'):('#EC7F7B')}}>{item.status}</Text>
                </View>

            </View>
            <Text style = {{color: '#707070', fontSize: 14}}>{item.request} new <Text style = {{color: '#B7B7B7', fontSize: 14}}>request</Text></Text>

      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          showsVerticalScrollIndicator ={false}
          showsHorizontalScrollIndicator={false}
          data={dummy}
          renderItem={_renderRowItem}
          keyExtractor={(item, index) => 'key' + index}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: '#ffffff'
  },
  status: {
    margin: 30
  }
});

export default Listings;