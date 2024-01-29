export type SetState<T> = (callback: ((prev: T) => T) | T) => void;
