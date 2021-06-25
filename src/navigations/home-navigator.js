import { createStackNavigator } from "react-navigation-stack";
import ConnectBluetoothScreen  from "../scenes/home/index";
import HomeScreen from "../scenes/home/testbreath";

const HomeNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none'
};

const RouteConfigs = {
    Home: HomeScreen,
    Connect: ConnectBluetoothScreen,
};

const HomeNavigator = createStackNavigator(RouteConfigs, HomeNavigatorConfig);

export default HomeNavigator;