import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../../styles/SliderEntry.style';
import { SliderFormSubmit, SliderFormBehaviour, SliderFormMain, SliderFormToWorkOn } from "./welcomeSliderForm";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SignUpCreators } from "../../statemanagement/creators/SignUp";
import AsyncStorage from '@react-native-community/async-storage';

class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };


    state = {
        name: '',
        age: 0,
        gender: 0,
        weight: 0,
        height: 0,
        notification_Id: 1,
        subscription_Id: 1,
        modalVisible: false,
        personalityData: [],
        exerciseData: []
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={illustration}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }
    
    async componentDidUpdate(prevProp, prevState) {

        if(prevProp.signUp.payload !== this.props.signUp.payload) {
            const { payload, isLoading, error } = this.props.signUp;
            if(payload && !isLoading && !error)
            {
                console.log('User Data: ', JSON.stringify(payload));
                await AsyncStorage.setItem('@UserData', JSON.stringify(payload), ()=> {
                    this.props.navigation.navigate('Home');
                });
            } 
        }
    }

    switchToHomeScreen() {
        const { setSignUpData } = this.props;
        setSignUpData({
            name: 'Test User',
            age: 20,
            gender: 1,
            weight: 43,
            height: 5,
            personalityData: [1, 2],
            exerciseData: [1, 2],
            notificationId: 1,
            subscriptionId: 1
        });
        //this.props.navigation.navigate('Home');
    }

    render() {
        const { even, screenNumber, switchToNextScreen, data: { overlayColor } } = this.props;
        const { signUp: { isLoading, error, payload: { name, age, gender, weight, height, modalVisible, personalityData, exerciseData } } } = this.props;
        
        const FormViews = () => {
            if (screenNumber === 0) {

                return <SliderFormMain switchToNextScreen={switchToNextScreen} />

            } else if (screenNumber === 1) {
                return <SliderFormBehaviour />
            }
            else if (screenNumber === 2) {
                return <SliderFormToWorkOn />
            }
            else if (screenNumber === 3) {
                return <SliderFormSubmit onclick={() => this.switchToHomeScreen() } isLoading={isLoading} />
            }
        }

        return (
            <View
              style={styles.slideInnerContainer}
              >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                </View>
                <View style={[styles.shadow, { backgroundColor: overlayColor }]} />
                <View style={[styles.textContainer]}>
                    <FormViews  />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {

    return { signUp: state.signUp }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(SignUpCreators, dispatch)


export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(SliderEntry));