import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { ParameterScreen } from "./index";
import ProfileScreen from "./profile";
const ParameterNavigatorConfig = {
    initialRouteName: 'Parameter',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#165BAA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
};

const RouteConfigs = {
    Parameter: ParameterScreen,
    Profile: ProfileScreen
};

const ParameterNavigator = createStackNavigator(RouteConfigs, ParameterNavigatorConfig);

export default ParameterNavigator;