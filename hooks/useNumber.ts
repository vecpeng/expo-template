/*
 * @Author: vecpeng
 * @Date: 2022-03-16 19:08:18
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-16 19:09:33
 * @FilePath: /expo-template/hooks/useNumber.ts
 * @Desc: 
 * 
 * Copyright (c) 2022 by vecpeng, All Rights Reserved. 
 */
import { useState } from 'react';
import { useMethods } from './useMethods';

const numberMethods = {
  increment(value: number) {
      return value + 1;
  },
  decrement(value: number) {
      return value - 1;
  },
  set(current: number, newValue: number) {
      return newValue;
  }
};

export const useNumber = (initialValue = 0) => {
  invariant(typeof initialValue === 'number', 'initialValue must be a number');
  return useMethods(initialValue, numberMethods);
}