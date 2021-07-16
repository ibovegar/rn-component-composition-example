import React, { FC, useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { FormGroupContext, FormGroupProps } from './FormGroup';

interface renderIconProps {
  partyColor?: string
}

interface Props {
  renderIcon: ( props: renderIconProps) => React.ReactNode,
  renderRight?: React.ReactNode,
}

export const FormGroupItem: FC<Props> = ({renderIcon, children}) => {
  return (
    <FormGroupContext.Consumer>
      {({partyColor}: FormGroupProps) => (
        <View style={styles.container}>
          <View style={styles.renderIcon}>{renderIcon({partyColor: partyColor})}</View>
          <Text style={{
            ...styles.container,
            color: partyColor ? partyColor : '#000000'
          }}>{children}</Text>
        </View>
      )}
    </FormGroupContext.Consumer>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  renderIcon: {
    flexDirection: 'row',
    marginBottom: 10
  },
  label: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginRight: 10
  }
});