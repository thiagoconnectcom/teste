import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style';

//Components
import Button from '../../components/Button';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    Next = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.containerForm}>
                    <View style={styles.row}>
                        <Text>BTB</Text>
                        <Text>Solutions</Text>
                    </View>

                    <View style={[styles.row, styles.between]}>

                        <Text style={[styles.textLink, styles.linkActive]}>Faça o Login</Text>

                        <Text>|</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }}>
                            <Text style={styles.textLink}>Cadastra-se</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Enter username"
                        placeholderTextColor="#eaeaea"
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Enter password"
                        placeholderTextColor="#eaeaea"
                        secureTextEntry={true}
                    />

                    <Button onPress={this.Next} title="Logar" />

                </View>
            </View>

        )
    }
}
