import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.buttonOrange}>
                <Text style={styles.textButton}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}