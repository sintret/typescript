/*
Exclude null and undefined from T

*/

export type NoEmpty<T> =  T extends null | undefined ? never : T;
type Example = NoEmpty<string | null>;
type Expanded = NoEmpty<string> | NoEmpty<null>;


