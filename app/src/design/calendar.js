import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, FlatList,Platform } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'

const approveColor = '#79C179';
const pendingColor = '#FFA233'
const Calendar = () => {
  const [date, setDate] = useState(new Date())
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
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
                  <View style={{ width: '25%', }}>
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
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: data.status == 'Approve' ? approveColor : data.status == 'Pending' ? pendingColor : '#605270'

                          }}>
                          </View>



                        </View>
                        {i !== item.cards.length - 1 ? <View style={{
                          height: 100,
                          marginLeft: '28%',
                          borderColor: '#C9C9C9',
                          borderWidth: 1,
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

                    <View style={{ height: 100, backgroundColor: data.status == 'Approve' ? approveColor : data.status == 'Pending' ? pendingColor : '#605270', paddingHorizontal: '5%', width: '75%', borderRadius: 10 }}>
                      <View style={{ height: '10%' }} />
                      <View style={{ height: '20%', flexDirection: 'row', width: '100%', alignItems: 'center', }}>
                        <Image resizeMode='contain' source={require('../images/pin.png')} style={{ height: 15, width: 15, tintColor: '#ffffff' }} />
                        <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'bold' }}>5519 NE Skidmore Portland</Text>
                      </View>
                      <View style={{ flexDirection: 'row', height: '35%', alignItems: 'center' }}>
                        <Image resizeMode='contain' source={require('../images/profile.png')} style={{ height: 30, width: 30 }} />
                        <Text style={{ fontSize: 12, color: '#ffffff', marginLeft: '5%', fontWeight: 'bold' }}>Rick Adams</Text>
                      </View>
                      <View style={{ height: '5%' }} />
                      <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', paddingHorizontal: 5 }}>
                        <Text style={{ fontSize: 12, color: data.status == 'Approve' ? approveColor : data.status == 'Pending' ? pendingColor : '#605270', paddingVertical: 2, fontWeight: 'bold', maxWidth: '70%' }}>{data.status}</Text>
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
      <View style={{ flexDirection: 'row', marginTop: 60, alignItems: 'center' }}>
        <Text style={{ alignSelf: 'center',marginHorizontal: Platform.OS == 'ios' ? 0:30 ,marginRight: Platform.OS == 'ios' ? 5:0, color: '#38274C', fontWeight: 'bold', fontSize: 15 }}>{month[new Date(date).getMonth()]}</Text>
        <CalendarStrip
          showMonth={false}
          highlightDateContainerStyle={{ width: 45, backgroundColor: '#38274C', borderRadius: 0, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}
          dateNumberStyle={{ color: '#B3B4B5', paddingVertical: 5 }}
          dateNameStyle={{ color: '#B3B4B5', paddingVertical: 5 }}
          highlightDateNumberStyle={{ color: '#ffffff' }}
          maxDayComponentSize={62}
          minDayComponentSize={62}
          responsiveSizingOffset={-10}
          highlightDateNameStyle={{ color: '#ffffff' }}
          style={{ height: 100, width: 320 }}
          onDateSelected={(date) => setDate(date)}
          iconLeft={null}
          iconRight={null}
          scrollable
        />

      </View>
      <View style={{ marginHorizontal: 20 }}>

        <FlatList
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