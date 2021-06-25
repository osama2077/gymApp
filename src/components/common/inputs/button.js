import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import style, { colors } from "../../../styles";
import { ActivityIndicator } from 'react-native';

export class PlayButton extends Component {
    
    render() {
        const { isOnPlay, isLoading, onButtonPress } = this.props;
        return(
            <TouchableOpacity
                onPress={() => onButtonPress()}
                style={this.props.style}
            >
                <View
                    style={style.Button.PlayButton}
                >
                    {
                        !isLoading && !isOnPlay && <Icon name="controller-play" size={32} color={colors.white}
                                            style={{
                                                alignSelf: 'center',
                                            }}
                                        />
                    } 
                    {
                        !isLoading && isOnPlay && <Icon name="controller-stop" size={32} color={colors.white}
                                                    style={{
                                                        alignSelf: 'center',
                                                    }}
                                                />
                    }
                    {
                        isLoading && <ActivityIndicator
                                                    size={Platform.OS === 'ios' ? 'small' : 'large'}
                                                    color={colors.white}
                                                />
                    }
                </View>
            </TouchableOpacity>
        );
    }
}


export class ExersicePlayButton extends Component {
    render() {
        return(
            <View style={style.Button.ExersicePlayButtonWrapper}>
                <PlayButton {...this.props} />
            </View>
            )
    }
}