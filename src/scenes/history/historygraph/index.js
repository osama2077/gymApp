import React, { Component } from "react";
import { View } from "react-native";
import { ContainerWithPadding } from "../../../components/layout/index";
import { colors, metrics } from "../../../styles/index";
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

const contentInset = { top: 20, bottom: 20 }

export class GraphScreen extends Component {
    
    render() {

        return(
            <ContainerWithPadding>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            height: metrics.getHeightFromDP(60),
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}
                    >
                        <YAxis
                            data={ data }
                            contentInset={ contentInset }
                            svg={{
                                fill: colors.darkLayer,
                                fontSize: 8
                            }}
                            numberOfTicks={ 10 }
                            formatLabel={ value => `${value}ºC` }
                        />
                    </View>
                    <View
                        style={{
                            flex: 20,
                            alignContent: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <AreaChart
                            style={{ height: metrics.getHeightFromDP(60) }}
                            data={ data }
                            contentInset={{ top: 30, bottom: 30 }}
                            curve={ shape.curveNatural }
                            svg={{ fill: colors.primaryColor }}
                        >
                            <Grid/>
                        </AreaChart>
                        <XAxis
                            style={{ marginHorizontal: 10 }}
                            data={ data }
                            formatLabel={ (value, index) => index }
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 8, fill: colors.darkText }}
                        />
                    </View>
                </View>
            </ContainerWithPadding>
        );
    }
}