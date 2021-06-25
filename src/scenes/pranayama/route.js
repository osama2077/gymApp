import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { ParanyamaScreen } from "./index";
import CourseScreen from "./course";
import StateOfMindScreen from "./stateofmind";

const ParanyamaNavigatorConfig = {
    initialRouteName: 'Paranyama',
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
    Paranyama: ParanyamaScreen,
    Course: CourseScreen,
    StateOfMind: StateOfMindScreen
};

const ParanyamaNavigator = createStackNavigator(RouteConfigs, ParanyamaNavigatorConfig);

export default ParanyamaNavigator;