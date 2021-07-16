import React, { FC } from "react"
import { CheckboxGraphic } from "./CheckboxGraphic";
import { FormGroup } from "./FormGroup";
import { FormGroupItem } from "./FormGroupItem";

interface Props {
  title: string,
  options: any
}

export const CheckboxGroup: FC<Props> = ({options}) => {
  return (
    <FormGroup title="Dette er en checkbox group" partyMode>
      {options.map((option: any) => (
        <FormGroupItem 
          key={option.id} 
          renderIcon={({partyColor}) => <CheckboxGraphic color={partyColor} />} 
        >
          {option.label}
        </FormGroupItem>)
      )}
    </FormGroup>
  )
}