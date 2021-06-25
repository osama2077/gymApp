import React, { Component } from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SelectContainer, SelectItemContainer } from "../../layout/index";
import { colors } from "../../../styles";

class SelectItem extends Component {

    state = {toggle: false};

    componentDidMount() {
        const { item, selectedData } = this.props;
        const { Id, title } = item

        if (selectedData.indexOf(Id) > -1) {
            this.setState({
                toggle: true
            })
        }
    }

    render() {
        const { item, isModal, isMultiSelect, selectedData, onItemSelect } = this.props;
        const { Id, title } = item
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        toggle: !this.state.toggle
                    });
                    onItemSelect(item);
                }}
            >
                <SelectItemContainer isModal={isModal}>
                    <Text
                        style={{
                            color: (isModal ? colors.white: colors.darkText)
                        }}
                    >
                        {title}
                    </Text>
                    {this.state.toggle && <Icon style={{ alignSelf: 'center' }} size={16} color={(isModal ? colors.white : colors.primaryColor)} name="checkcircle" />}
                </SelectItemContainer>
            </TouchableOpacity>
        );
    }
}

export class SelectDefault extends Component {

    render() {
        const { data, isModal, isMultiSelect, selectedData, onItemSelect } = this.props;
        const _selectedData = selectedData ? selectedData : []
        return (
            <SelectContainer isModal={isModal}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => {
                        return <SelectItem 
                                    item={item} 
                                    isModal={isModal} 
                                    isMultiSelect={isMultiSelect} 
                                    selectedData={_selectedData}
                                    onItemSelect={onItemSelect} />
                    }}
                    keyExtractor={item => item.Id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </SelectContainer>
        )
    }
}