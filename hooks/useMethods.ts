/*
 * @Author: vecpeng
 * @Date: 2022-03-16 18:52:54
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-16 19:00:09
 * @FilePath: /expo-template/hooks/useMethods.ts
 * @Desc: 
 * 
 * Copyright (c) 2022 by vecpeng, All Rights Reserved. 
 */
import { useState, useMemo } from 'react';

// 状态+多个函数
export function useMethods(initialValue: unknown, methods: Function[]) {
  const [state, setState] = useState(initialValue);

  const reducer = () => Object.entries(methods).reduce(
    (methods: Record<string, unknown>, [name, fn]: [string, Function]) => {
      methods[name] = (...args: any) => setState(fn(state, ...args));
      return methods;
    },
    {}
  )
  const boundMethods = useMemo(
    reducer,
    [methods]
  );
}