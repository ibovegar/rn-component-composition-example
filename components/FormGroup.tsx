import React, { FC, useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

interface Props {
  title: string,
  partyMode?: boolean;
}

export const FormGroupContext = React.createContext<FormGroupProps>(null as any);

export type FormGroupProps = {
  partyColor?: string;
};


export const FormGroup: FC<Props> = ({title, children, partyMode}) => {
  const [randomColor, setRandomColor] = useState('#FF78AD');

  useEffect(() => {
    const interval = setInterval(() => {
      const n = (Math.random() * 0xfffff * 1000000).toString(16);
      const randomColor = '#' + n.slice(0, 6);
      setRandomColor(randomColor)
    }, 100)
    
    return () => clearInterval(interval);
  }, [])


  return (
    <FormGroupContext.Provider value={{ partyColor: partyMode ? randomColor : undefined }}>
      <View style={{...styles.formGroup, borderColor: partyMode ? randomColor : '#000000'}}>
        <Text style={{...styles.title, color: partyMode ? randomColor : '#000000'}}>{title}</Text>
        {children}
      </View>
    </FormGroupContext.Provider>
  )
}


const styles = StyleSheet.create({
  formGroup: {
    borderWidth: 1,
    padding: 20,
    width: '100%'
  },
  title: {
    fontSize: 18,
    marginBottom: 20
  },
});