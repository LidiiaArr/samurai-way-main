import React from "react";

export let updateObjectInArray = <T>(items: T[], itemId: number, objPropName, newObjProps): T[] => {
    return items.map(u => {
        if(u[objPropName] === itemId){
            return {...u, ...newObjProps}
        }
        return u;
    })
}
//универсальная штука которая вернет новый массив, в котором заменит старые свойства