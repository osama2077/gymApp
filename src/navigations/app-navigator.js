import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ParanyamaScreen from "../scenes/pranayama/route";
import HistoryScreen from "../scenes/history/route";
import ParameterScreen from "../scenes/parameter/route";

const AuthNavigatorConfig = {
    initialRouteName: 'Paranyama',
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#fff',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold'
        },
        style: {
          backgroundColor: '#165BAA',
          padding: 16
        },
      },
};

const RouteConfigs = {
    Paranyama: ParanyamaScreen,
    // History: HistoryScreen,
    Parameter: ParameterScreen
};

const ParanyamaNavigator = createBottomTabNavigator(RouteConfigs, AuthNavigatorConfig);

export default ParanyamaNavigator;