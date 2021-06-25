import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import AuthNavigator from "./auth-navigator";
import HomeNavigator from "./home-navigator";
import Paranyama from "./app-navigator";
import Exercise from '../scenes/pranayama/exercise';


const RootNavigator = createAnimatedSwitchNavigator(
    {
        Auth: AuthNavigator,
        Home: HomeNavigator,
        Paranyama: Paranyama,
        Exercise: Exercise
    },
    {
        initialRouteName: 'Auth',
        transition: (
            <Transition.Together>
              <Transition.Out
                type="fade"
                interpolation="easeOut"
              />
              <Transition.In type="fade" />
            </Transition.Together>
          ),
    }
);

export default createAppContainer(RootNavigator);