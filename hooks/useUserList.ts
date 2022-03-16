/*
 * @Author: vecpeng
 * @Date: 2022-03-16 22:42:41
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-16 22:52:19
 * @FilePath: /expo-template/hooks/useUserList.ts
 * @Desc: 
 * 
 * Copyright (c) 2022 by vecpeng, All Rights Reserved. 
 */
import { useArray } from './useArray';
import { useTaskPendingState } from './useTaskPending';

export const useUserList = () => {
  const [users, {push, remove, set}] = useArray([]);
  const [load, pending] = useTaskPendingState(users, set);
  return [users. {pending, load, addUser: push, deleteUser: remove}];
}