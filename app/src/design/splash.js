import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    StatusBar,
} from "react-native";


class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate('Selection');
        }, 3000);

    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <Image source={require('../images/logo.png')} style={styles.logo} />
            </View>
        );
    }
}

export default Splash;
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

