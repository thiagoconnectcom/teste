import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './style';

//Components
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    Next = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.back}>
                <View style={styles.container}>

                    <View style={styles.containerForm}>
                        <View style={styles.row}>
                            <Text>BTB</Text>
                            <Text>Solutions</Text>
                        </View>

                        <View style={[styles.row, styles.between]}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                                <Text style={styles.textLink}>Faça o Login</Text>
                            </TouchableOpacity>
                            <Text>|</Text>
                            <Text style={[styles.textLink, styles.linkActive]}>Cadastra-se</Text>
                        </View>

                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="Enter username"
                            placeholderTextColor="#eaeaea"
                        />

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

                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="Enter password"
                            placeholderTextColor="#eaeaea"
                            secureTextEntry={true}
                        />

                        <Button title="Cadastrar" />

                    </View>

                </View>
            </ScrollView>
        )
    }
}
