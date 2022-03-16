/*
 * @Author: vecpeng
 * @Date: 2022-03-16 19:18:46
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-16 19:57:44
 * @FilePath: /expo-template/hooks/useTaskPending.ts
 * @Desc: 
 * 
 * Copyright (c) 2022 by vecpeng, All Rights Reserved. 
 */
import { useState, useCallback } from 'react';
import { useNumber } from './useNumber';

export const useTaskPending = <T>(task: (...arg0: any) => Promise<T>): [(...args: any[]) => Promise<T>, boolean] => {
  const [pendingCount, {increment, decrement}] = useNumber(0);
  const taskWithPending = useCallback(
      async (...args) => {
          increment();
          const result = await task(...args);
          decrement();
          return result;
      },
      [task, increment, decrement]
  );
  return [taskWithPending, pendingCount > 0];
};

export const useTaskPendingState = <T>(task: (...args: any[]) => Promise<T>, storeResult: (arg0: T) => void) => {
  const [taskWithPending, pending] = useTaskPending(task);
  const callAndStore = useCallback(
      async () => {
          const result = await taskWithPending();
          storeResult(result);
      },
      [taskWithPending, storeResult]
  );
  return [callAndStore, pending];
};