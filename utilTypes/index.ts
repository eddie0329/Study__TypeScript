/*****************************************************************************
 *                                                                           *
 *                           GLOBAL_UTIL_TYPES                               *
 *                                                                           *
*****************************************************************************/

/** Refer: https://typescript-kr.github.io/pages/utility-types.html
 * - Partial<T>
 * - Readonly<T>
 * - Record<K,T>
 * - Pick<T,K>
 * - Omit<T,K>
 * - Exclude<T,U>
 * - NonNullable<T>
 * - Parameters<T>
 * - ConstructorParameters<T>
 * - ReturnType<T>
 * - InstanceType<T>
 * - Required<T>
 * - ThisParameterType
 * - OmitThisParameter
 * - ThisType<T>
 */

/*****************************************************************************
 *                                                                           *
 *                           CUSTOM_UTIL_TYPES                               *
 *                                                                           *
*****************************************************************************/

/*________________________________Array______________________________________*/
type Push<T extends any[], U> = [...T, U];
type Unshift<T extends any[], U> = [U, ...T];

/*________________________________Object_____________________________________*/
type ObjectLiteral<T> = { [key in keyof T]: T[key]; }

/*_______________________________Function_____________________________________*/

/*_______________________________Readonly____________________________________*/
type SelectedReadonly<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;
type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never ? T[key] : DeepReadonly<T[key]>;
}
