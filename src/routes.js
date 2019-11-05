import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

//pages
import SplashScreen from './pages/SplashScreen';
import Login from './pages/User/login';
import Register from './pages/User/register';
import Home from './pages/Home';


class LogoTitle extends React.Component {
    render() {
        return <Image source={require("./assets/img/icon.png")} />;
    }
}


const AppStack = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen
    },
    Home: {
        screen: Home
    }
}, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerTitle: (
                    <View
                        style={{
                            alignItems: "center",
                            flex: 1
                        }}
                    >
                        <LogoTitle />
                    </View>
                ),

                headerStyle: {
                    backgroundColor: "#15b2ad",
                    height: 84,
                    textAlign: "center"
                },
            };
        }
    }
);

const AuthStack = createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    }
});

const AppSwitchNavigator = createSwitchNavigator({

    AuthLoading: SplashScreen,
    App: AppStack,
    Auth: AuthStack,

},
    {
        initialRouteName: 'AuthLoading',
    },

);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;