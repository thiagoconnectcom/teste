import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native'
import styles from './style';

//Imagens
import Icon from '../../assets/img/b.png'

export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Dashboard</Text>
                    <View style={[styles.row, styles.card]}>
                        <Image source={Icon} />
                        <View style={styles.col}>
                            <Text>HOME</Text>
                            <Text>HOME</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.card]}>
                        <Image source={Icon} />
                        <View style={styles.col}>
                            <Text>HOME</Text>
                            <Text>HOME</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.card]}>
                        <Image source={Icon} />
                        <View style={styles.col}>
                            <Text>HOME</Text>
                            <Text>HOME</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.card]}>
                        <Image source={Icon} />
                        <View style={styles.col}>
                            <Text>HOME</Text>
                            <Text>HOME</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}