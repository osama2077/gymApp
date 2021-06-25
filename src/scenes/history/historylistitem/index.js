import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { withNavigation } from "react-navigation";


class HistoryListItem extends Component {
    
    render() {
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
                        this.props.navigation.navigate('Graph')
                    }}
                >
                    <Text
                        style={{
                            color: '#fff'
                        }}
                    >
                        {this.props.item.title}
                    </Text>
                    <Icon name="rightcircle" color="#fff" size={16}/>
                </TouchableOpacity>
        );
    }
}

export default withNavigation(HistoryListItem)