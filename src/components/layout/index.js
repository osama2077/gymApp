import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import style from "../../styles/index";

export const Container = (prop) => <SafeAreaView style={[style.Layout.container, prop.style]}>{prop.children}</SafeAreaView>

export const ContainerWithPadding = (prop) => <SafeAreaView style={[style.Layout.containerWithPadding, prop.style]}>{prop.children}</SafeAreaView>

export const SelectContainer = (prop) => <View style={[style.Select.Select, prop.style, (prop.isModal ? style.Select.SelectModal : {})]}>{prop.children}</View>

export const SelectItemContainer = (prop) => <View style={[style.Select.SelectItem, prop.style, (prop.isModal ? style.Select.SelectItemModal : {})]}>{prop.children}</View>