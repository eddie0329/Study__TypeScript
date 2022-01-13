/*****************************************************************************
 *                                                                           *
 *                           GLOBAL_UTIL_TYPES                               *
 *                                                                           *
*****************************************************************************/

/** Refer: https://typescript-kr.github.io/pages/utility-types.html
 * - [X] Partial<T> 
 * - [X] Readonly<T>
 * - [X] Record<K,T>
 * - [X] Pick<T,K>
 * - [X] Omit<T,K>
 * - [ ] Exclude<T,U>
 * - [ ] NonNullable<T>
 * - [ ] Parameters<T>
 * - [ ] ConstructorParameters<T>
 * - [ ] ReturnType<T>
 * - [ ] InstanceType<T>
 * - [ ] Required<T>
 * - [ ] ThisParameterType
 * - [ ] OmitThisParameter
 * - [ ] ThisType<T>
 */

/*****************************************************************************
 *                                                                           * 
 *                                                                           *
 *                              *UTIL_TYPES*                                 *
 *                                                                           *
 *             Note: Global typescript util types are commented              *
 *                                                                           *
*****************************************************************************/

/*________________________________Array______________________________________*/
type Push<T extends any[], U> = [...T, U];
type Unshift<T extends any[], U> = [U, ...T];

/*________________________________Object_____________________________________*/
// type Partial<T> = { [K inf keyof T]?: T[K]; }
// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
type ObjectLiteral<T> = { [K in keyof T]: T[K]; }

/*_______________________________Promise______________________________________*/

/*_______________________________Function_____________________________________*/

/*_______________________________Readonly____________________________________*/
// type Readonly<T> = { readonly [P in keyof T]: T[P]; }
type SelectedReadonly<T, K extends keyof T = keyof T> = 
  Readonly<Pick<T, K>> & Omit<T, K>;
type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never ? 
    T[key] : 
    DeepReadonly<T[key]>;
}
