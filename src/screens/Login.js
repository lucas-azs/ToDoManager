import React, { Component } from 'react';
import {
    StyleSheet, KeyboardAvoidingView, View, Image, TextInput, Button, Text,
    Alert
} from 'react-native';
import { signInOnFirebaseAsync } from '../services/FirebaseApi';
import { StackActions } from 'react-navigation-stack'
import { NavigationActions } from 'react-navigation'



const img = require('../assets/TodoList.png');


export default class Login extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        email: this.props.email,
        password: ''
    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior='padding'>
                <View style={styles.topView}>
                    <Image style={styles.img} source={img} />
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.input}
                        value={this.state.email}
                        placeholder='Email'
                        keyboardType={'email-address'}
                        autoCapitalize='none'
                        onChangeText={(text) => this.setState({ email: text })} />
                    <TextInput style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <Button title='Sign In'
                        onPress={() => this._signInAsync()} />
                    <View style={styles.textConteiner}>
                        <Text>Not a member? Let's </Text>
                        <Text style={styles.textRegister}
                            onPress={() => {
                                const { navigate } = this.props.navigation;
                                navigate('pageRegister');
                            }}>
                            Register </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
    async _signInAsync() {
        try {
            const user = await signInOnFirebaseAsync(this.state.email,
                this.state.password);
            const resetNavigation = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({
                    routeName:
                        'pageTasksList'
                })]
            });
            this.props.navigation.dispatch(resetNavigation);
        } catch (error) {
            Alert.alert("Login Failed", error.message);
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    img: {
        width: 200,
        height: 200
    },
    bottomView: {
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
        marginBottom: 20
    },
    textConteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textRegister: {
        fontWeight: 'bold'
    }
});