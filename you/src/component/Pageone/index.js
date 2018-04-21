import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';

import {    StyleSheet,
            View,
            Text,
            ScrollView,
            TouchableHighlight,
            Image,
            TextInput,
            Dimensions
        } from 'react-native';

const { height, width } = Dimensions.get('window')

export default class Pageone extends Component {
    state = {
        isSenderCollapsed: true,
        isReceiver1Collapsed: true,
        isReceiver2Collapsed: true
    };


    _toggleSender = () => {
        this.setState ({ isSenderCollapsed: !this.state.isSenderCollapsed })
    }
    _toggleReceiver1 = () => {
        this.setState ({ isReceiver1Collapsed: !this.state.isReceiver1Collapsed })
    }
    _toggleReceiver2 = () => {
        this.setState ({ isReceiver2Collapsed: !this.state.isReceiver2Collapsed })
    }

    render() {
        return (
            <View>
                <View style={ header.container }>
                    <Icon name="md-arrow-round-back" size={30} style={ header.icon } />
                    <Text style={ header.text }>Confirm Order</Text>
                </View>
                <ScrollView>
                    <View style={ styles.cardPhoto }>
                        <Text style={ styles.txt }>Your Package Photo </Text>
                        <Icon name="ios-add-circle" size={30} style={ styles.iconPlus } />
                    </View>

                    <View style={ styles.cardAddr }>
                        <Text style={ styles.txt }>
                            Enter contact number (sender dan receiver) and note for the driver
                        </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Icon name="md-pin" size={32} style={ styles.iconPin } />
                            </View>
                            <View style={{ flex: 9 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, color: '#361c8e', fontWeight: 'bold', marginTop: 7, flex: 1 }}>
                                        Sender
                                    </Text>
                                    <TouchableHighlight onPress={this._toggleSender} underlayColor="#fff">
                                        <Icon name={this.state.isSenderCollapsed ? 'ios-arrow-down' : 'ios-arrow-up'} size={30} style={ styles.iconChevron } />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 13, color: '#7b7a7c'}}>
                                        Jl. Jendral Sudirman No.1
                                    </Text>
                                </View>
                                <Collapsible collapsed={this.state.isSenderCollapsed} align="center">
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Icon name="md-contact" size={30} style={ styles.iconPin } />
                                        </View>
                                        <TextInput style={{ flex:9, fontSize: 16 }} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Name" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5 }} />
                                    
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1}}>
                                            <Image source={require('../../images/phone.png')} style={styles.imgStyle} />
                                        </View>
                                        <TextInput style={{ flex: 9, fontSize: 16, marginTop: 5, paddingBottom: 3}} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Phone number" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5 }} />

                                    <View style={{ flexDirection: 'row'}}>
                                        <TextInput style={{ flex: 10, fontSize: 16, marginTop: 10, paddingBottom: 3 }} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Notes, instruction or location details" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5, paddingBottom: 0, marginBottom: 20 }} />
                                </Collapsible>
                            </View>
                        </View>

                        <View style={{ borderColor: '#7b7a7c', borderBottomWidth:0.4, margin:10, width: width }}/> 

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Icon name="md-pin" size={32} style={ styles.iconReceiver } />
                            </View>
                            <View style={{ flex: 9 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, color: '#e0941a', fontWeight: 'bold', marginTop: 7, flex: 1 }}>
                                        Receiver 1
                                    </Text>
                                    <TouchableHighlight onPress={this._toggleReceiver1} underlayColor="#fff">
                                        <Icon name={this.state.isReceiver1Collapsed ? 'ios-arrow-down' : 'ios-arrow-up'} size={30} style={ styles.iconChevron } />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 12, color: '#7b7a7c'}}>
                                        Jl. Pamoyanan No.14
                                    </Text>
                                </View>
                                <Collapsible collapsed={this.state.isReceiver1Collapsed} align="center">
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Icon name="md-contact" size={30} style={ styles.iconReceiver } />
                                        </View>
                                        <TextInput style={{ flex:9, fontSize: 16 }} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Name" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5 }} />
                                    
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1}}>
                                            <Icon name="ios-call" size={30} style={ styles.iconReceiver } />
                                        </View>
                                        <TextInput style={{ flex: 9, fontSize: 16, marginTop: 5, paddingBottom: 3}} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Phone number" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5 }} />

                                    <View style={{ flexDirection: 'row'}}>
                                        <TextInput style={{ flex: 10, fontSize: 16, marginTop: 10, paddingBottom: 3 }} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Notes, instruction or location details" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5, paddingBottom: 0, marginBottom: 20 }} />
                                </Collapsible>
                            </View>
                        </View>

                        <View style={{ borderColor: '#7b7a7c', borderBottomWidth:0.4, margin:10, width: width }}/>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Icon name="md-pin" size={32} style={ styles.iconReceiver } />
                            </View>
                            <View style={{ flex: 9 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, color: '#e0941a', fontWeight: 'bold', marginTop: 7, flex: 1 }}>
                                        Receiver 2
                                    </Text>
                                    <TouchableHighlight onPress={this._toggleReceiver2} underlayColor="#fff">
                                        <Icon name={this.state.isReceiver2Collapsed ? 'ios-arrow-down' : 'ios-arrow-up'} size={30} style={ styles.iconChevron } />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 12, color: '#7b7a7c'}}>
                                        Jl. A. Yani No.292
                                    </Text>
                                </View>
                                <Collapsible collapsed={this.state.isReceiver2Collapsed} align="center">
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Icon name="md-contact" size={30} style={ styles.iconReceiver } />
                                        </View>
                                        <TextInput style={{ flex:9, fontSize: 16 }} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Name" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5 }} />
                                    
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1}}>
                                            <Icon name="ios-call" size={30} style={ styles.iconReceiver } />
                                        </View>
                                        <TextInput style={{ flex: 9, fontSize: 16, marginTop: 5, paddingBottom: 3}} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Phone number" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5 }} />

                                    <View style={{ flexDirection: 'row'}}>
                                        <TextInput style={{ flex: 10, fontSize: 16, marginTop: 10, paddingBottom: 3 }} placeholderTextColor={'#7b7a7c'}
                                        placeholder="Notes, instruction or location details" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flexDirection: 'row', borderBottomColor: '#7b7a7c', borderBottomWidth: 0.5, paddingBottom: 0, marginBottom: 20 }} />
                                </Collapsible>
                            </View>
                        </View>

                    </View>
                                        
                </ScrollView>
            </View>
        );
    }
}

const header = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row',
    },
    icon:{
        width: 70,
        color:'#000',
        textAlign:'center',
    },
    text:{
        color:'#000',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 20,
        flex:0.8,
    }
});

const styles = StyleSheet.create({
    cardPhoto:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        marginTop:7,
        padding:10,
        borderRadius: 10,
    },
    txt: {
        fontSize: 16,
        color:'#000',
        flex: 1
    },
    iconPlus: {
        textAlign: 'right',
        color:'#361c8e'
    },
    cardAddr:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginBottom: 5,
        marginTop:5,
        marginLeft: 10,
        marginRight: 10,
        padding:10,
        borderRadius: 10,
    },
    iconPin: {
        marginTop: 7,
        textAlign: 'left',
        color:'#361c8e'
    },
    iconChevron: {
        color: '#7b7a7c',
        textAlign: 'right',
        paddingTop: 0,
        marginTop: 5
    },
    iconReceiver: {
        color: '#e0941a',
        marginTop: 7,
        textAlign: 'left'
    },
    imgStyle: {
        padding: 0,
        marginTop: 12,
        height: 30,
        width: 30,
        resizeMode : 'stretch',
        alignItems: 'center'
    }
})