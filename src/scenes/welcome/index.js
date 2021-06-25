import React, { Component } from 'react';
import { Platform, View, StatusBar, TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../styles/SliderEntry.style';
import SliderEntry from '../../components/slider/SliderEntry';
import { Container, ContainerWithPadding } from "../../components/layout/index";
import { H1 } from "../../components/common/inputs/heading";
import style , { colors } from '../../styles/index';
import { ENTRIES1 } from '../../statics/entries';
import AsyncStorage from '@react-native-community/async-storage';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

export class WelcomeScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItemWithParallax ({item, index}, parallaxProps, switchToNextScreen) {
        return (
            <SliderEntry
              data={item}
              even={true}
              parallax={true}
              screenNumber={index}
              parallaxProps={parallaxProps}
              switchToNextScreen={switchToNextScreen}
            />
        );
    }

    main () {
        const { slider1ActiveSlide } = this.state;

        return (
            <View>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={1}
                  inactiveSlideShift={0}
                //   scrollEnabled={false}
                  containerCustomStyle={style.Slider.slider}
                  autoplay={false}
                  onSnapToItem={(index) =>  console.log('onSnapToItem', index) }
                  switchToNextScreen={this.switchToNextScreen.bind(this)}
                />
                {/* this.setState({ slider1ActiveSlide: index }) */}
                <View>
                    <Pagination
                        dotsLength={ENTRIES1.length}
                        activeDotIndex={slider1ActiveSlide}
                        //containerStyle={styles.paginationContainer}
                        dotColor={'rgba(255, 255, 255, 0.92)'}
                        dotStyle={style.Pagination.paginationDot}
                        inactiveDotColor={colors.dark}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={this._slider1Ref}
                        tappableDots={!!this._slider1Ref}
                    />
                </View>
            </View>
        );
    }
    
    switchToNextScreen(index) {
        console.log('click')
        this._slider1Ref._snapToItem(index);
    }

    get gradient () {
        return (
            <LinearGradient
              colors={[colors.primaryColor, colors.secondaryColor]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={style.Gradient.gradient}
            />
        );
    }

    render () {
        const mainView = this.main();
        return (
            <Container>
                <StatusBar
                    hidden={true}
                />
                { mainView }
            </Container>
        );
    }
}


export class SplashScreen extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(async () => {
            await AsyncStorage.getItem('@UserData').then((data) => {
                console.log(data);
                if(data){
                    this.props.navigation.navigate('Paranyama');
                }
                else {
                    this.props.navigation.navigate('Welcome');
                }
            })
        }, 2000)
    }

    render () {
        return (
            <ContainerWithPadding
                style={{
                    backgroundColor: colors.primaryColor,
                }}
            >
                <StatusBar
                    hidden={true}
                />
                <View
                    style={{
                        flex: 1,
                        alignSelf: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image source={require("../../statics/images/Logo.png")}
                        style={{
                            height: 100,
                            width: 100
                        }}
                    />
                    <H1
                    style={{
                        color: colors.white,
                    }}
                    >
                        Pranayama
                    </H1>
                    <ActivityIndicator 
                        size={Platform.OS === 'ios' ? 'small' : 'large'} 
                        color={colors.white}
                        style={{
                            marginTop: 100
                        }}
                        />
                </View>
            </ContainerWithPadding>
        );
    }
}