import { createStackNavigator } from "react-navigation-stack";
import { WelcomeScreen, SplashScreen } from "../scenes/welcome";

const AuthNavigatorConfig = {
    initialRouteName: 'Splash',
    header: null,
    headerMode: 'none'
};

const RouteConfigs = {
    Welcome: WelcomeScreen,
    Splash: SplashScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;