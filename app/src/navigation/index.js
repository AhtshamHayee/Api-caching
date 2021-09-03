import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import 'react-native-gesture-handler';
import Splash from '../design/splash';
import Listings from '../design/listings';
import Calendar from '../design/calendar';
import Universities from '../data/universities'
import UniversityDetails from '../data/universityDetails'
import Selection from '../Selection'

console.disableYellowBox = true;

const InitialStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabComp = () => {
    return (
        <BottomTab.Navigator
        tabBarOptions={{
            activeTintColor: 'tomato',
            showLabel: false,
            tabStyle: styles.tabStyle,
            style: styles.tabContainerStyle,
          }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerTitleAlign: 'center'
            })}>
            <BottomTab.Screen name="Listings" component={Listings}
                options={{
                    tabBarIcon: ({focused,color,size}) => {
                        return focused ? (
                          <View style={styles.labelFocusedContainer}>
                            <Ionicons name={'list'} size={size} color={color} />
                            <Text style={styles.labelFocusedStyle}>Listings</Text>
                          </View>
                        ) : (
                          <View style={styles.labelContainer}>
                            <Ionicons name={'list'} size={size} color={color} />
                            <Text style={styles.labelStyle}>Listings</Text>
                          </View>
                        );
                      },
                }} />
            <BottomTab.Screen name="Calendar" component={Calendar} options={{
                tabBarIcon: ({focused,color,size}) => {
                    return focused ? (
                      <View style={styles.labelFocusedContainer}>
                        <Ionicons name={'calendar'} size={size} color={color} />
                        <Text style={styles.labelFocusedStyle}>Calendar</Text>
                      </View>
                    ) : (
                      <View style={styles.labelContainer}>
                        <Ionicons name={'calendar'} size={size} color={color} />
                        <Text style={styles.labelStyle}>Calendar</Text>
                      </View>
                    );
                  },
            }} />
        </BottomTab.Navigator>
    );
}

const MainStack = () => {

    return (
        <NavigationContainer>
            <InitialStack.Navigator
                screenOptions={{ tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerTitleAlign: 'center',
                headerBackVisible:false 
              }}
                initialRouteName={'Splash'}>
                <InitialStack.Screen name={'Splash'} component={Splash} options={{headerShown:false}}/>
                <InitialStack.Screen name={'Selection'} component={Selection} />
                <InitialStack.Screen name={'Universities'} component={Universities} />
                <InitialStack.Screen name={'UniversityDetails'} component={UniversityDetails} options={{title:'Details',headerBackVisible:true}} />
                <InitialStack.Screen name={'BottomTabComp'} component={BottomTabComp} options={{headerShown:false}}/>
            </InitialStack.Navigator>
        </NavigationContainer>

    );
};
const styles = StyleSheet.create({
    labelContainer: {
      alignItems: 'center',
      width: '100%',
    },
    labelFocusedContainer: {
      alignItems: 'center',
      width: '100%',
      borderTopWidth: 3,
      borderTopColor: 'tomato',
    },
    labelFocusedStyle: {
      textAlign: 'center',
      marginVertical: 4,
      color: 'tomato',
      backgroundColor: 'transparent',
      fontSize: 10,
    },
    labelStyle: {
      textAlign: 'center',
      marginVertical: 4,
      color: 'black',
      backgroundColor: 'transparent',
      fontSize: 10,
    },
  });


export default MainStack;