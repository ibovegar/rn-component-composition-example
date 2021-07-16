import React, { FC } from "react"
import { View, StyleSheet } from "react-native"

interface Props {
  color?: string;
}


export const CheckboxGraphic: FC<Props> = ({color}) => <View style={{...styles.graphic, borderColor: color}} />

const styles = StyleSheet.create({
  graphic: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    marginRight: 10
  }
});
