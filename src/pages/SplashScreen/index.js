import React, { Component } from "react";
import styles from './style';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing,
    Dimensions
} from "react-native";

//Imagens
import Logo from '../../assets/img/icon.png'

const { width, height } = Dimensions.get("window");

export default class App extends Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0.5);
        this.animatedValue2 = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 4,
            delay: 2500
        }).start();

        Animated.timing(this.animatedValue2, {
            toValue: 1,
            delay: 200,
            duration: 1000
        }).start();

        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 5000);
    }

    render() {
        const truckStyle = {
            transform: [{ scale: this.animatedValue }]
        };

        const scaleText = {
            transform: [{ scale: this.animatedValue2 }]
        };

        return (
            <View
                style={styles.container}
            >
                <Animated.View style={[styles.ring, truckStyle]}>
                    <Animated.Image
                        source={Logo}
                        style={[
                            {
                                resizeMode: "contain",
                                width: 200,
                                height: 200
                            }
                        ]}
                    />
                </Animated.View>

                <Animated.View
                    style={[
                        {
                            position: "absolute",
                            bottom: 20,
                            width: width / 2,
                            height: 4,
                            backgroundColor: "#fff",
                            borderRadius: 2
                        },
                        scaleText
                    ]}
                />
            </View>
        );
    }
}

