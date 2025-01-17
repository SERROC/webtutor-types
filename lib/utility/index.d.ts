/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Make all properties in T optional.
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Make all properties in T required.
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Make all properties in T readonly.
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K.
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T.
 */
type Record<K extends keyof any, T> = {
  // eslint-disable-next-line no-unused-vars
  [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U.
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U.
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Obtain the return type of a function type.
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type.
 */
// eslint-disable-next-line max-len
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

/**
 * From T, pick a set of properties whose keys has type K.
 */
type OnlyProperties<T, K> = {
  [P in keyof T as T[P] extends K ? P : never]: T[P];
};