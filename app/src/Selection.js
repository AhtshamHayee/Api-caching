import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    BackHandler,
    Alert 
} from "react-native";


class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleBackButton = () => {

        Alert.alert(
            'Exit App',
            'Exiting the application?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => BackHandler.exitApp()
                }
            ],
            {
                cancelable: false
            }
        );
        return true;
    };
    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    // }
    // componentWillUnmount(){
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);

    // }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                              this.props.navigation.navigate('Universities')  
                            }}
                                style={{ backgroundColor: 'black', borderRadius: 10, marginTop: 10, height: 40, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Data </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                             this.props.navigation.navigate('BottomTabComp')   
                            }}
                                style={{ backgroundColor: 'black', borderRadius: 10, marginTop: 10, height: 40, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Design</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Selection;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        height: 140,
        width: 140,
    },
});

