import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonOrange}>
                <Text style={styles.textButton}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}