import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import style from "../../styles/index";
import ListItem from "./historylistitem";
import { ContainerWithPadding } from "../../components/layout/index";

const DATA = [
    {
        id: 0,
        title: 'Paranyama Practiced'
    },
    {
        id: 1,
        title: 'Average Breath Per Minute'
    },
    {
        id: 2,
        title: 'Volume of Air Per Minute'
    },
    {
        id: 3,
        title: 'Total Volume of Air'
    }
]

export class HistoryScreen extends Component {
    
    render() {
        return(
            <ContainerWithPadding>
                <FlatList 
                            data={DATA}
                            renderItem={({item}) => {
                                return <ListItem item={item}/>
                            }}
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={true}
                        />
            </ContainerWithPadding>
        );
    }
}