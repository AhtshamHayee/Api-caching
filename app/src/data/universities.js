import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ActivityIndicator, Dimensions} from "react-native";
import { useFetch } from './hooks';
import { Searchbar } from 'react-native-paper';

const { height, width } = Dimensions.get('window')

const Universities = (props) => {

    const [university, setUniversity] = useState('');
    const [country, setCountry] = useState('');
    const [_uni, setUni] = useState('');
    const [_country, setCont] = useState('');


    const url = `http://universities.hipolabs.com/search?${country ? 'country=' + country : ''}${university ? '&name=' + university : ''}`;
    const { status, data, error } = useFetch(url);

    const _renderRowItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={index}
                onPress={
                    () => {
                        props.navigation.navigate('UniversityDetails', {
                            university: item
                        })
                    }
                }
                style={{
                    justifyContent: "center",
                    height: 80,
                    width: width - 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    marginVertical: 5,
                    backgroundColor: '#bbbbbb',
                    borderColor: '#999999',

                }}
            >
                <Text
                    style={{
                        color: 'black',
                        fontSize: 12,
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    {item.name}
                </Text>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 12,
                        textAlign: 'center',
                    }}
                >
                    {item.country} - {item.alpha_two_code}
                </Text>

            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>

            {
                status === 'idle' || status === 'fetching' ? <ActivityIndicator size={'large'} color={'black'} /> : status === 'error' ?
                    <Text style={{ fontWeight: 'bold' }}>Something went wrong...</Text>

                    : status === 'fetched' && data.length > 0 ?
                        <FlatList
                            ListHeaderComponent={
                                <View>
                                    <Searchbar
                                        style={{ marginVertical: 5 }}
                                        inputStyle={{
                                            color: 'black',
                                            fontSize: 12,
                                        }}
                                        placeholder="Type university name..."
                                        onChangeText={(text) => {
                                            if (text.length == 0) {
                                                setUniversity('')
                                            }
                                            setUni(text)

                                        }}
                                        value={_uni}
                                        onIconPress={() => setUniversity(_uni)}
                                        onSubmitEditing={() => setUniversity(_uni)}
                                    />
                                    <Searchbar
                                        style={{ marginVertical: 10 }}
                                        inputStyle={{
                                            color: 'black',
                                            fontSize: 12,
                                        }}
                                        placeholder="Type country name..."
                                        onChangeText={(text) => {
                                            if (text.length == 0) {
                                                setCountry('')
                                            }
                                            setCont(text)
                                        }}
                                        value={_country}
                                        onIconPress={() => setCountry(_country)}
                                        onSubmitEditing={() => setCountry(_country)}

                                    />
                                </View>
                            }
                            contentContainerStyle={{
                                width: width - 20,
                            }}
                            data={data}
                            renderItem={_renderRowItem}
                            keyExtractor={(item, index) => 'key' + index}
                        /> : <>
                            <Text style={{ fontWeight: 'bold' }}>Nothing Found...</Text>
                            <TouchableOpacity onPress={() => {
                                setCountry(''),
                                    setUniversity('')
                            }}
                                style={{ backgroundColor: 'black', borderRadius: 10, marginTop: 10, height: 40, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Retry</Text>
                            </TouchableOpacity>
                        </>
            }
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

export default Universities;