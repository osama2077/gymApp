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

const ListItem = ({item, navigation}) => {
    return (
        <TouchableOpacity
                style={{
                    backgroundColor: '#165BAA',
                    padding: 16,
                    paddingHorizontal: 24,
                    marginVertical: 8,
                    borderRadius: 32,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
                onPress={() => {
                    navigation.navigate('Exercise')
                }}
            >
                <Text
                    style={{
                        color: '#fff'
                    }}
                >
                    {item.title}
                </Text>
                <Icon name="rightcircle" color="#fff" size={16}/>
            </TouchableOpacity>
    );
}

const DATA = [
    {
        id: 0,
        title: '21 Day Modi Shodhana'
    },
    {
        id: 1,
        title: '40 Day 3 Minute'
    },
    {
        id: 2,
        title: '40 Day 7 Minute'
    },
    {
        id: 3,
        title: 'More Courses'
    },
    {
        id: 4,
        title: '40 Day 3 Minute'
    },
    {
        id: 5,
        title: '40 Day 3 Minute'
    },
    {
        id: 6,
        title: '40 Day 3 Minute'
    },
]

class CourseScreen extends Component {

    static navigationOptions = {
        title: 'Course Wanted',
    }

    onPranayamaSelect(pranayama) {
        console.log(pranayama);
    }
    
    componentDidMount() {
        const { requestExerciseData } = this.props;
        requestExerciseData(2);
    }

    render() {
        const { payload, isLoading, error } = this.props.pranayamaCourse;
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
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { pranayamaCourse: state.pranayamaCourse }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(PranayamaCourseCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CourseScreen)