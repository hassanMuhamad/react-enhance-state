import React from "react";

export function useUpdateStateByKey<T>(
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  return function (key: string, value: any) {
    setState({
      ...state,
      [key]: value,
    });
  };
}

export function useUpdateState<T>(
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  return function (updates: { [key: string]: any }) {
    setState({
      ...state,
      ...updates,
    });
  };
}

export function useStrictUpdateState<T>(
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  return function (updates: { [property in keyof T]?: T[property] }) {
    setState({
      ...state,
      ...updates,
    });
  };
}
