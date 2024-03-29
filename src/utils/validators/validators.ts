import React from "react";
export type FieldValidatorType = (value: string)=> string | undefined

export const required  :FieldValidatorType= (value ) => {
    if(value) return undefined
    return "Field is required"
}

export const maxLengthCreator = (maxLength: number):FieldValidatorType => (value: string) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

