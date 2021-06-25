import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { HistoryScreen } from "./index";
import { GraphScreen } from "./historygraph";

const HistoryNavigatorConfig = {
    initialRouteName: 'HistoryList',
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
    HistoryList: HistoryScreen,
    Graph: GraphScreen
};

const HistoryNavigator = createStackNavigator(RouteConfigs, HistoryNavigatorConfig);

export default HistoryNavigator;