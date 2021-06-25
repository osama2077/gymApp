import React, { Component } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import style, { colors } from "../../styles/index";
import { Container } from "../../components/layout/index";

const ParanyamaWrapper = (prop) => <View
                                        style={{
                                            flexDirection: "row",
                                            flex: 1,
                                            justifyContent: "center",
                                            margin: 16,
                                            borderRadius: 16,
                                            overflow: 'hidden'
                                        }}
                                    >{prop.children}</View>

const ParanyamaButton = (prop) => (<TouchableOpacity style={[{
                                        flex: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: 'hidden'
                                    }, prop.style]}
                                    onPress={prop.switchTo}
                                    >
                                    <Image 
                                        source={prop.ImageSource}
                                        style={{
                                            position: 'absolute',
                                            opacity: 0.5
                                        }}
                                    />
                                    <View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 46,
                                                    letterSpacing: 8,
                                                    textAlign: 'center',
                                                    fontFamily: 'Meditation',
                                                    color: colors.white
                                                }}
                                            >{prop.title}</Text>
                                        </View>
                                    </View>
                                    </TouchableOpacity>)

export class ParanyamaScreen extends Component {

    static navigationOptions = {
        title: 'Paranyama',
      }

    switchToStateOfMind() {
        this.props.navigation.navigate('StateOfMind');
    }

    switchToCourse() {
        this.props.navigation.navigate('Course');
    }
      
    render() {

        return(
            <Container>
                <ParanyamaWrapper>
                    <ParanyamaButton
                        title="State of Mind & Emotions"
                        ImageSource={require("../../statics/images/Wallpaper_5_Half.jpg")}
                        switchTo={this.switchToStateOfMind.bind(this)}
                        style={{
                            backgroundColor: colors.primaryColor,
                        }}
                    />
                    <ParanyamaButton
                        title="Course  Offered"
                        ImageSource={require("../../statics/images/Wallpaper_4_Half.jpg")}
                        switchTo={this.switchToCourse.bind(this)}
                        style={{
                            backgroundColor: colors.secondaryColor,
                        }}
                    />
                </ParanyamaWrapper>
            </Container>
        );
    }
}