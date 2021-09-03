import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'

const approveColor = '#79C179';
const pendingColor = '#FFA233'
const Calendar = () => {
  let dummy = [
    {
      id: 0,
      date: 'Wednesday, 07 August 2021',

      cards: [
        {
          title: 'first',
          status: 'Approve',
          time: '8 AM',
          duration: '30 min'
        },
        {
          title: 'second',
          status: 'Pending',
          time: '9 AM',
          duration: '60 min'

        }
      ]
    },
    {
      id: 1,
      date: 'Thursday, 07 August 2021',

      cards: [
        {
          title: 'first',
          status: 'Buyer Reschedule',
          time: '8 AM',
          duration: '30 min'
        }
      ]
    }
  ]

  useEffect(() => {

  }, []);

  const _renderRowItem = ({ item, index }) => {
    return (
      <View key={index} style={{ marginTop: 10 }}>



        <View style={{}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.date.split(',')[0]}
            <Text style={{ fontSize: 15, fontWeight: 'normal' }}>{item.date.split(',')[1]}</Text>
          </Text>
          <View style={{ height: 20 }} />

          {item.cards.map((data, i) => {
            return (
              <View key={i} style={{ marginTop: 5 }}>
                <View style={{ height: 100, width: '100%', flexDirection: 'row', }}>
                  <View style={{ width: '30%', }}>
                    <View style={{ flexDirection: 'row', marginTop: '40%' }}>
                      <View style={{}}>
                        <View style={{
                          height: 20,
                          width: 20,
                          borderRadius: 20 / 2,
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderColor: '#C2BDC8'
                        }}>

                          <View style={{
                            height: 15,
                            width: 15,
                            borderRadius: 100,
                            // borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            // borderColor: 'red'
                            backgroundColor: data.status == 'Approve' ? approveColor : data.status == 'Pending' ? pendingColor : '#605270'

                          }}>
                          </View>



                        </View>
                        {i !== item.cards.length - 1 ? <View style={{
                          height: 100,
                          marginLeft: '28%',
                          borderColor: '#C9C9C9',
                          borderWidth: 1,
                          //  backgroundColor: '#C9C9C9',
                          width: '2%',
                        }}>

                        </View> : null

                        }

                      </View>
                      <View style={{ height: '80%', }}>
                        <View style={{ alignItems: 'center' }}>
                          <Text style={{ color: '#707070', fontSize: 13 }}>{data.time}</Text>
                          <Text style={{ color: '#707070', fontSize: 13 }}>{'(' + data.duration + ')'}</Text>
                        </View>
                      </View>
                    </View>
                  </View>


                  {/* card  */}
                  <View style={{ width: '100%', height: 100 }}>

                    <View style={{ height: 100, backgroundColor: data.status == 'Approve' ? approveColor : data.status == 'Pending' ? pendingColor : '#605270', paddingHorizontal: '5%', width: '70%', borderRadius: 10 }}>
                      <View style={{ height: '10%' }} />
                      <View style={{ height: '20%', flexDirection: 'row', width: '100%', alignItems: 'center', }}>
                        <Image resizeMode='contain' source={require('../images/pin.png')} style={{ height: 15, width: 15, tintColor: '#ffffff' }} />
                        <Text style={{ fontSize: 10, color: '#ffffff' }}>5519 NE Skidmore Portland</Text>
                      </View>
                      <View style={{ flexDirection: 'row', height: '35%', alignItems: 'center' }}>
                        <Image resizeMode='contain' source={require('../images/profile.png')} style={{ height: 30, width: 30 }} />
                        <Text style={{ fontSize: 10, color: '#ffffff', marginLeft: '5%' }}>Rick Adams</Text>
                      </View>
                      <View style={{ height: '5%' }} />

                      <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: '70%' }}>
                        <Text style={{ fontSize: 15, color: data.status == 'Approve' ? approveColor : data.status == 'Pending' ? pendingColor : '#605270', paddingVertical: 1 }}>{data.status}</Text>

                      </TouchableOpacity>
                    </View>

                  </View>


                </View>
              </View>
            )
          })}

        </View>

      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <CalendarStrip
          calendarHeaderContainerStyle={{ height: 0, width: 0 }}
          headerText={' '}
          calendarColor={'#E5E5E5'}
          style={{ height: 100, }}
        />
        <FlatList
          contentContainerStyle={{
            flex: 1
          }}
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
    justifyContent: "center"
  },
  status: {
    margin: 30
  }
});

export default Calendar;


