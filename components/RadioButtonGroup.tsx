import React, { FC } from "react"
import { FormGroup } from "./FormGroup";
import { FormGroupItem } from "./FormGroupItem";
import { RadioButtonGraphic } from "./RadioButtonGraphic";

interface Props {
  title: string,
  options: any
}

export const RadioButtonGroup: FC<Props> = ({options}) => {
  return (
    <FormGroup title="Dette er en radio button group" partyMode>
      {options.map((option: any) => (
        <FormGroupItem 
          key={option.id}   
          renderIcon={({partyColor}) => <RadioButtonGraphic color={partyColor} />} 
        >
          {option.label}
        </FormGroupItem>
      ))}
    </FormGroup>
  )
}

