/*
 * @Author: vecpeng
 * @Date: 2022-03-16 18:16:54
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-16 19:05:44
 * @FilePath: /expo-template/hooks/useArray.ts
 * @Desc: 
 * 
 * Copyright (c) 2022 by vecpeng, All Rights Reserved. 
 */
import { useState, useEffect } from 'react';
import invariant from 'invariant';
const arrayMethods  = {
    push(state: any[], item: any) {
        return state.concat(item);
    },
    pop(state: string | any[]) {
        return state.slice(0, -1);
    },
    slice(state: string | any[], start: any, end: any) {
        return state.slice(start, end);
    },
    empty() {
        return [];
    },
    set(state: any, newValue: any) {
        return newValue;
    },
    remove(state: string | any[], item: any) {
        const index = state.indexOf(item);
        if (index < 0) {
            return state;
        }
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
};

export const useArray = (initialValue: any[] = []) => {
  invariant(Array.isArray(initialValue), 'initialValue must be an array');
  const [value, setValue] = useState(initialValue);
  return useMethods(initialValue, arrayMethods);
}