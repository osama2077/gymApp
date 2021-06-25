import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity, Button, Alert } from "react-native";
import style, {colors} from "../../../styles/index";
import { ExersicePlayButton } from "../../../components/common/inputs/button";
import { Container } from "../../../components/layout/index";
import { H1, H2, P } from "../../../components/common/inputs/heading";
import { DefaultLoading } from "../../../components/common/loader";
import Icon from "react-native-vector-icons/AntDesign";
//import { Player as AudioPlayer } from "@react-native-community/audio-toolkit";
import Sound from "react-native-sound";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ExerciseCreators } from "../../../statemanagement/creators/Exercise";
import BleManagerInstance from "../../../utils/blueToothManager/BleManager";

const HeadingWrapper = (prop) =>  <View style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        marginBottom: 32,
                                }}>{prop.children}</View>

const PlayerWrapper = (prop) => <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                            }}>{prop.children}</View>

const PlayerInnerWrapper = (prop) => <View style={{
                                        flex: 1,
                                        flexDirection: 'row'
                                    }}>{prop.children}</View>

const PlayerInnerWrapperLeft = (prop) => <View style={{
                                            flex: 1,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            marginRight: 52                                        
                                        }}>{prop.children}</View>

const PlayerInnerWrapperCenter = (prop) => <View style={{
                                            flex: 1,
                                            alignItems: 'center'
                                        }}>{prop.children}</View>

const PlayerInnerWrapperRight = (prop) => <View style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            marginLeft: 52,
                                        }}>{prop.children}</View>

const PlayerExerciseDetail = (prop) => <View style={{
                                        flex: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        marginTop: 32,
                                    }}>{prop.children}</View>

const PlayerAsideButton = (prop) => <TouchableOpacity onPress={prop.onPress}>
                                        <Icon name={prop.name} size={32}  />
                                    </TouchableOpacity>

                        
class ExerciseScreen extends Component {

    static navigationOptions = {
        title: 'Exercise',
      }
    
    Player = null 
    state = {
        PlayerLoading: false,
        Play: false,
        Perpare: false,
        Duration: 0,
        CurrentExerciseIndex: 0
    }

    bleManagerInstance = null;

    constructor(props) {
        super(props);
        this.bleManagerInstance = BleManagerInstance.getInstance();
        let device = this.bleManagerInstance.getDevice();
        if(device)
            device.writeCharacteristicWithResponseForService('4fafc201-1fb5-459e-8fcc-c5c9c331914b', 'beb5483e-36e1-4688-b7f5-ea07361b26a8', 'QUJDMTIzMTIz');
    }

    componentDidMount() {
        const { requestExerciseData, navigation } = this.props;
        const { pranayama } = navigation.state.params;
        requestExerciseData(pranayama.Id);
    }

    // componentDidUpdate(prevProp, prevState) {
    //     const prevCurrentExercise = prevState.CurrentExerciseIndex;
    //     const nextCurrentExercise = this.state.CurrentExerciseIndex;
    //     if(nextCurrentExercise == 0 || (prevCurrentExercise !== nextCurrentExercise)) {
    //         this.initPlayer();
    //     }
    // }

    nextExercise() {
        const { payload } = this.props.exercise;
        const { CurrentExerciseIndex } = this.state;
        const NextExerciseIndex = CurrentExerciseIndex + 1;
        
        //this.initPlayer(NextExerciseIndex);
        if (payload[CurrentExerciseIndex + 1])
            this.setState({
                CurrentExerciseIndex: NextExerciseIndex
            }, this.togglePlayer());
    }

    prevExercise() {
        const { payload } = this.props.exercise;
        const { CurrentExerciseIndex } = this.state;
        const PrevExerciseIndex = CurrentExerciseIndex - 1;
        //this.initPlayer(PrevExerciseIndex);
        if (payload[CurrentExerciseIndex - 1])
            this.setState({
                CurrentExerciseIndex: PrevExerciseIndex
            }, this.togglePlayer());
    }

    togglePlayer() {
        const { Play, CurrentExerciseIndex } = this.state;
        const payload = this.props.exercise.payload[CurrentExerciseIndex];
        console.log(payload);
        let switchPlay = !Play;

        if(switchPlay) {
            this.destroyPlayer();

            let PlayerAudio = new Sound(payload.songURL, Sound.MAIN_BUNDLE, (error) => {
                if(error) {
                    alert('Something went wrong. Please reset app and try again.');
                    return;
                }
                this.setState({
                    Duration: (PlayerAudio.getDuration()),
                    Perpare: true,
                    PlayerLoading: false
                });
                PlayerAudio.play();
                this.Player = PlayerAudio;
                this.initTimeout();
            });

            // var PlayerAudio = new AudioPlayer(payload.songURL, { autoDestroy : false })
            // .prepare((err) => {
            //         this.setState({
            //             Duration: (PlayerAudio.duration * 0.001 * 0.0166667).toFixed(2),
            //             Perpare: PlayerAudio.isPrepared,
            //             PlayerLoading: false
            //         });
            //         PlayerAudio.play();
            //         this.Player = PlayerAudio;
            //         this.initTimeout()            
            //     });
        }
        else {
            this.destroyPlayer();
        }

        this.setState({
            Play: switchPlay,
            PlayerLoading: switchPlay
        });
    }


    initTimeout(index = 0) {
        const { CurrentExerciseIndex } = this.state;
        const { DeviceInstructions } = this.props.exercise.payload[CurrentExerciseIndex];
        if(DeviceInstructions.length > index) {
            const { nostrilSide, seconds} = DeviceInstructions[index];
            const timer = setTimeout(() => {
                console.log(this.Player.currentTime)
                console.log('Interval ' + nostrilSide + ' ' + seconds);
                let voiceClip = '';
                switch (nostrilSide) {
                    case 1:
                        voiceClip = 'eb.mp3'; //exhale breath
                        break;
                    case 2:
                        voiceClip = 'el.mp3'; //exhale left
                        break;
                    case 3:     
                        voiceClip = 'er.mp3'; //exhale right
                        break;
                    case 4:     
                        voiceClip = 'hb.mp3'; //hold breath
                        break;
                    case 5:     
                        voiceClip = 'ib.mp3'; //inhale breath
                        break;
                    case 6:     
                        voiceClip = 'il.mp3'; //inhale left
                        break;
                    case 7:     
                        voiceClip = 'ir.mp3'; //inhale right
                        break;
                    case 8:     
                        voiceClip = 'next.mp3'; //next exercise
                        break;
                    case 9:     
                        voiceClip = 'end.mp3'; //end exercise
                        break;
                }
                let PlayerAudioL = new Sound(voiceClip, Sound.MAIN_BUNDLE, (error) => {
                    if(error) {
                        alert('Something went wrong. Please reset app and try again.');
                        return;
                    }
                    PlayerAudioL.play();
                    this.initTimeout(index + 1);
                });
            }, seconds * 1000);
            this.Timer = timer;
        }
        else {
            this.nextExercise()
        }
    }

    destroyPlayer() {
        if(this.Player) {
            this.Player.stop();
            this.Player.release();
            this.Player = null;
            if(this.Timer)
                clearTimeout(this.Timer);
        }
    }

    endSession() {
        this.destroyPlayer();
        this.props.navigation.navigate('Paranyama')
    }

    backToList() {
        Alert.alert(
            'End Session',
            'Are you sure you want to end this session?',
            [
              {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'Yes', onPress: () => this.endSession() },
            ],
            {cancelable: false},
          );
    }

    // initPlayer(index = 0) {
    //     const payload = this.props.exercise.payload[index];
    //     console.log(payload);
    //     if(payload.songURL) {
    //         this.destroyPlayer();
    //         var PlayerAudio = new AudioPlayer('test_pranayama.mp3', { autoDestroy : false })
    //         .prepare((err) => {
    //                 this.setState({
    //                     Duration: (PlayerAudio.duration * 0.001 * 0.0166667).toFixed(2),
    //                     Perpare: PlayerAudio.isPrepared
    //                 });
    //                 this.Player = PlayerAudio;
    //                 this.initTimeout()            
    //             });
    //     }
        
    //     /*new AudioPlayer('close_nostril.mp3')
    //     .play();*/
    // }

//pranayama
    render() {
        const { CurrentExerciseIndex } = this.state;
        const { payload, isLoading, error } = this.props.exercise;
        const { exersiceName, songURL, description } = payload[CurrentExerciseIndex];
        const { pranayama } = this.props.navigation.state.params;
        return(
            <Container>
                <StatusBar
                    hidden={true}
                />
                    {error && (<View><Text>Error</Text></View>)}
                    {isLoading && (<DefaultLoading />)}
                    {!isLoading && !error && (
                    <Container>
                        <HeadingWrapper>
                            <H1 style={{ textAlign: "center" }}>{ exersiceName }</H1>
                        </HeadingWrapper>
                        <PlayerWrapper>
                            <PlayerInnerWrapper>
                                <PlayerInnerWrapperLeft>
                                    {/* <PlayerAsideButton onPress={this.prevExercise.bind(this)} name="banckward" /> */}
                                </PlayerInnerWrapperLeft>
                                <PlayerInnerWrapperCenter>
                                    <ExersicePlayButton isOnPlay={this.state.Play} isLoading={this.state.PlayerLoading}  onButtonPress={this.togglePlayer.bind(this)} />
                                    <Text
                                        style={{
                                            color: colors.darkText,
                                            marginTop: 16
                                        }}
                                    >{this.state.Duration}</Text>
                                </PlayerInnerWrapperCenter>
                                <PlayerInnerWrapperRight>
                                    {/* <PlayerAsideButton onPress={this.nextExercise.bind(this)} name="forward" /> */}
                                </PlayerInnerWrapperRight>
                            </PlayerInnerWrapper>
                        </PlayerWrapper>
                        <PlayerExerciseDetail>
                            <H2>{ pranayama.title }</H2>
                            <P
                                style={{
                                    textAlign: 'center',
                                    marginHorizontal: 32
                                }}
                            >{ description }</P>
                        </PlayerExerciseDetail>
                        
                        <TouchableOpacity onPress={() => this.backToList()} style={{
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#979797'
                        }}>
                            <Text>
                                End Session
                            </Text>
                        </TouchableOpacity>
                    </Container>)}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { exercise: state.exercise }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(ExerciseCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseScreen)