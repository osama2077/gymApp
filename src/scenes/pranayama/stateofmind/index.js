import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import style from "../../../styles/index";
import Icon from "react-native-vector-icons/AntDesign";
import { SelectDefault } from "../../../components/common/inputs/Select";
import { Container } from "../../../components/layout/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PranayamaCourseCreators } from "../../../statemanagement/creators/PranayamaCourse";
import { DefaultLoading } from "../../../components/common/loader";
import Modal from "react-native-modal";
import { metrics, colors } from "../../../styles/index";


class StateOfMindScreen extends Component {

    static navigationOptions = {
        title: 'State of Mind',
    }

    state = {
        modalVisible: false,
        options: []
    }

    setModalVisible = (modalVisible, options) => {
        this.setState({ 
            modalVisible: modalVisible,
            options: options 
        })
    }

    onPranayamaSelect(pranayama) {
        if(pranayama.options) {
            this.setModalVisible(true, pranayama.options);
        }
        else {
            const { navigation } = this.props;
            navigation.navigate('Exercise', { pranayama: pranayama });
        }
    }

    componentDidMount() {
        const { requestExerciseData } = this.props;
        requestExerciseData(1);
    }

    render() {
        const { payload, isLoading, error } = this.props.pranayamaCourse;
        const { modalVisible, options } = this.state;
        console.log(this.props.pranayamaCourse)
        return(
            <Container>
                    {error && (<View><Text>Error</Text></View>)}
                    {isLoading && (<DefaultLoading />)}
                    {!isLoading && !error && (
                        <SelectDefault 
                            data={payload}
                            isModal={true}
                            isMultiSelect={false}
                            onItemSelect={this.onPranayamaSelect.bind(this)}
                        />
                    )}
                    <Modal isVisible={modalVisible} 
                    swipeDirection={['down']}
                    onSwipeComplete={() => this.setModalVisible(false)}
                    style={{
                        margin: 0,
                        justifyContent: 'flex-end'
                    }}
                    >
                        <View
                            style={{
                                minHeight: metrics.getHeightFromDP(30),
                                maxHeight: metrics.getHeightFromDP(70),
                                backgroundColor: colors.white,
                                padding: 24,
                                justifyContent: 'center',
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16
                            }}
                        >
                            <View
                                style={{
                                    height: 5,
                                    width: 30,
                                    backgroundColor: colors.gray,
                                    borderRadius: 16,
                                    alignSelf: 'center',
                                    marginBottom: 18
                                }}
                            ></View>
                            <SelectDefault
                                isModal={true}
                                data={options}
                                onItemSelect={ this.onPranayamaSelect.bind(this) }
                            />
                        </View>
                </Modal>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { pranayamaCourse: state.pranayamaCourse }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(PranayamaCourseCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StateOfMindScreen)