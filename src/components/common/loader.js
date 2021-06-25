import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import style, { colors } from "../../styles/index";

const LoadingWrapper = (prop) => <View style={style.Loader.LoadingWrapper}>{prop.children}</View>
  


export const DefaultLoading = () => (
  <LoadingWrapper>
    <ActivityIndicator
      size={Platform.OS === 'ios' ? 'small' : 'large'}
      color={colors.primaryColor}
    />
  </LoadingWrapper>
);
