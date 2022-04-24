import React from "react";
export declare function useUpdateStateByKey<T>(state: T, setState: React.Dispatch<React.SetStateAction<T>>): (key: string, value: any) => void;
export declare function useUpdateState<T>(state: T, setState: React.Dispatch<React.SetStateAction<T>>): (updates: {
    [key: string]: any;
}) => void;
export declare function useStrictUpdateState<T>(state: T, setState: React.Dispatch<React.SetStateAction<T>>): (updates: { [property in keyof T]?: T[property] | undefined; }) => void;
