import React, { Component } from "react";
import { Text } from "react-native";
import style from "../../../styles/index";


export const H1 = (prop) => <Text style={[style.Heading.H1, prop.style]}>{prop.children}</Text>

export const H2 = (prop) => <Text style={[style.Heading.H2, prop.style]}>{prop.children}</Text>

export const P = (prop) => <Text  style={[style.Heading.P, prop.style]}>{prop.children}</Text>