import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Linking, Platform,ScrollView } from "react-native";

const UniversityDetails = (props) => {
    const [uniDetails, setUniDetails] = useState({});
    const [geoEncoding, setGeoEncoding] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getGeoEncoding = async () => {
        try {
            await fetch(`https://nominatim.geocoding.ai/search.php?q=${uniDetails.name}`)
                .then(response => response.json())
                .then(data => {
                    setIsLoading(false)
                    setGeoEncoding(data)
                    console.log(data)
                });
        } catch (error) {
            console.log('ERROR::', error)
            setIsLoading(false)
        }
    }
    const _gotoMap = (item) => {
        const { lat, lon } = item
        if (Platform.OS == 'android') {
            Linking.openURL(`google.navigation:q=${lat}+${lon}`)
        }
        else Linking.openURL(`maps://app?saddr=${lat}+${lon}&daddr=${lat}+${lon}`)
    }
    useEffect(() => {
        let { university } = props.route.params
        console.log('Uni == ',university)
        getGeoEncoding()
        setUniDetails(university)
        return () => {

        };
    }, []);

    return (
        <View style={styles.container}>
            {
                isLoading ? <ActivityIndicator size={'large'} color={'black'} /> :
                    <ScrollView style={{marginVertical:10}}>
                        <Text style={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginVertical: 10
                        }}>
                            {uniDetails.name }

                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            marginVertical: 10
                        }}>
                            {uniDetails.country + ' - ' + uniDetails.alpha_two_code}

                        </Text>
                        <Text style={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginVertical: 5
                        }}>
                            {'Web Pages:'}

                        </Text>
                        {uniDetails.web_pages.map((item,index)=>{
                            return <TouchableOpacity onPress={()=>{
                                Linking.openURL(item)
                            }}>
                                <Text style={{
                            textAlign: 'center',
                            textDecorationLine:'underline',
                            color:'blue'
                        }}>
                            {item}

                        </Text>
                            </TouchableOpacity>
                        })}


                        {geoEncoding.map((item,index)=>{
                            return <View style={{alignItems:'center',marginTop:10}}>
                                <Text style={{
                            textAlign: 'center',
                        }}>
                            {'Address : ' + item.display_name}

                        </Text>
                        <Text style={{
                            textAlign: 'center',
                        }}>
                            {'Licence : ' + item.licence}

                        </Text>
                        <TouchableOpacity onPress={() => _gotoMap(item)}
                                style={{ backgroundColor: 'black', borderRadius: 10, marginTop: 10, height: 40, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Go to Map</Text>
                            </TouchableOpacity>
                        
                            </View>
                        })}

                    </ScrollView>}

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default UniversityDetails;