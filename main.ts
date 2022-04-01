export {}

type MyType = { function1() : string, function2(n : number) : number};

const myObjects : MyType[] = [];

// This is what I started with.  
// Intellisense correctly told me that this literal object does not match the type MyType.
myObjects.push({function1() { return "Hello world!"}});

// This is what intellisense did to the line above.
// I selected "Add missing properties" from the "Quick Fix..." menu.
// This is completely wrong.  It doesn't even compile.  (For multiple
// reasons!)
myObjects.push({
  function1() { return "Hello world!"; },
  length: 0,
  pop: function (): T | undefined {
    throw new Error("Function not implemented.");
  },
  push: function (...items: T[]): number {
    throw new Error("Function not implemented.");
  },
  concat: function (...items: ConcatArray<T>[]): T[] {
    throw new Error("Function not implemented.");
  },
  join: function (separator?: string): string {
    throw new Error("Function not implemented.");
  },
  reverse: function (): T[] {
    throw new Error("Function not implemented.");
  },
  shift: function (): T | undefined {
    throw new Error("Function not implemented.");
  },
  slice: function (start?: number, end?: number): T[] {
    throw new Error("Function not implemented.");
  },
  sort: function (compareFn?: (a: T, b: T) => number): T[] {
    throw new Error("Function not implemented.");
  },
  splice: function (start: number, deleteCount?: number): T[] {
    throw new Error("Function not implemented.");
  },
  unshift: function (...items: T[]): number {
    throw new Error("Function not implemented.");
  },
  indexOf: function (searchElement: T, fromIndex?: number): number {
    throw new Error("Function not implemented.");
  },
  lastIndexOf: function (searchElement: T, fromIndex?: number): number {
    throw new Error("Function not implemented.");
  },
  every: function <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[] {
    throw new Error("Function not implemented.");
  },
  some: function (predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    throw new Error("Function not implemented.");
  },
  forEach: function (callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
    throw new Error("Function not implemented.");
  },
  map: function <U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
    throw new Error("Function not implemented.");
  },
  filter: function <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[] {
    throw new Error("Function not implemented.");
  },
  reduce: function (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T {
    throw new Error("Function not implemented.");
  },
  reduceRight: function (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T {
    throw new Error("Function not implemented.");
  },
  find: function <S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined {
    throw new Error("Function not implemented.");
  },
  findIndex: function (predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number {
    throw new Error("Function not implemented.");
  },
  fill: function (value: T, start?: number, end?: number): T[] {
    throw new Error("Function not implemented.");
  },
  copyWithin: function (target: number, start: number, end?: number): T[] {
    throw new Error("Function not implemented.");
  },
  entries: function (): IterableIterator<[number, T]> {
    throw new Error("Function not implemented.");
  },
  keys: function (): IterableIterator<number> {
    throw new Error("Function not implemented.");
  },
  values: function (): IterableIterator<T> {
    throw new Error("Function not implemented.");
  },
  includes: function (searchElement: T, fromIndex?: number): boolean {
    throw new Error("Function not implemented.");
  },
  flatMap: function <U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This): U[] {
    throw new Error("Function not implemented.");
  },
  flat: function <A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[] {
    throw new Error("Function not implemented.");
  },
  at: function (index: number): T | undefined {
    throw new Error("Function not implemented.");
  },
  "__@iterator@5712": function (): IterableIterator<T> {
    throw new Error("Function not implemented.");
  },
  "__@unscopables@5714": function (): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; } {
    throw new Error("Function not implemented.");
  }
});

// These two lines contain very similar errors, but intellisense does not offer any suggestions.
myObjects[0] = {function1() { return "Hello world!"}};
myObjects.includes({function1() { return "Hello world!"}});


//////////////////////////////////////////////////////////////////////
// In this example I created the simplest function I could.  In this
// case I took intellisense's suggestion and it worked exactly as
// expected.  This is the result that I would expect in all of these
// examples!
//////////////////////////////////////////////////////////////////////

function simpleFunction(anObject : MyType) {
}

// My original code:
simpleFunction({function1() { return "Hello world!"}});

// The same code after intellisense fixed it.
simpleFunction({
  function1() { return "Hello world!"; },
  function2: function (n: number): number {
    throw new Error("Function not implemented.");
  }
});


//////////////////////////////////////////////////////////////////////
// In this example I created a variadic function.  Intellisense 
// failed.  A few details are different, but the results are very
// similar to my original example.
//////////////////////////////////////////////////////////////////////

function variadicFunction(...someObjects : MyType[]) {
}

// My original code:
variadicFunction({function1() { return "Hello world!"}});

// The same code after intellisense tried to fix it.
variadicFunction({
  function1() { return "Hello world!"; },
  length: 0,
  pop: function (): MyType | undefined {
    throw new Error("Function not implemented.");
  },
  push: function (...items: MyType[]): number {
    throw new Error("Function not implemented.");
  },
  concat: function (...items: ConcatArray<MyType>[]): MyType[] {
    throw new Error("Function not implemented.");
  },
  join: function (separator?: string): string {
    throw new Error("Function not implemented.");
  },
  reverse: function (): MyType[] {
    throw new Error("Function not implemented.");
  },
  shift: function (): MyType | undefined {
    throw new Error("Function not implemented.");
  },
  slice: function (start?: number, end?: number): MyType[] {
    throw new Error("Function not implemented.");
  },
  sort: function (compareFn?: (a: MyType, b: MyType) => number): MyType[] {
    throw new Error("Function not implemented.");
  },
  splice: function (start: number, deleteCount?: number): MyType[] {
    throw new Error("Function not implemented.");
  },
  unshift: function (...items: MyType[]): number {
    throw new Error("Function not implemented.");
  },
  indexOf: function (searchElement: MyType, fromIndex?: number): number {
    throw new Error("Function not implemented.");
  },
  lastIndexOf: function (searchElement: MyType, fromIndex?: number): number {
    throw new Error("Function not implemented.");
  },
  every: function <S extends MyType>(predicate: (value: MyType, index: number, array: MyType[]) => value is S, thisArg?: any): this is S[] {
    throw new Error("Function not implemented.");
  },
  some: function (predicate: (value: MyType, index: number, array: MyType[]) => unknown, thisArg?: any): boolean {
    throw new Error("Function not implemented.");
  },
  forEach: function (callbackfn: (value: MyType, index: number, array: MyType[]) => void, thisArg?: any): void {
    throw new Error("Function not implemented.");
  },
  map: function <U>(callbackfn: (value: MyType, index: number, array: MyType[]) => U, thisArg?: any): U[] {
    throw new Error("Function not implemented.");
  },
  filter: function <S extends MyType>(predicate: (value: MyType, index: number, array: MyType[]) => value is S, thisArg?: any): S[] {
    throw new Error("Function not implemented.");
  },
  reduce: function (callbackfn: (previousValue: MyType, currentValue: MyType, currentIndex: number, array: MyType[]) => MyType): MyType {
    throw new Error("Function not implemented.");
  },
  reduceRight: function (callbackfn: (previousValue: MyType, currentValue: MyType, currentIndex: number, array: MyType[]) => MyType): MyType {
    throw new Error("Function not implemented.");
  },
  find: function <S extends MyType>(predicate: (this: void, value: MyType, index: number, obj: MyType[]) => value is S, thisArg?: any): S | undefined {
    throw new Error("Function not implemented.");
  },
  findIndex: function (predicate: (value: MyType, index: number, obj: MyType[]) => unknown, thisArg?: any): number {
    throw new Error("Function not implemented.");
  },
  fill: function (value: MyType, start?: number, end?: number): MyType[] {
    throw new Error("Function not implemented.");
  },
  copyWithin: function (target: number, start: number, end?: number): MyType[] {
    throw new Error("Function not implemented.");
  },
  entries: function (): IterableIterator<[number, MyType]> {
    throw new Error("Function not implemented.");
  },
  keys: function (): IterableIterator<number> {
    throw new Error("Function not implemented.");
  },
  values: function (): IterableIterator<MyType> {
    throw new Error("Function not implemented.");
  },
  includes: function (searchElement: MyType, fromIndex?: number): boolean {
    throw new Error("Function not implemented.");
  },
  flatMap: function <U, This = undefined>(callback: (this: This, value: MyType, index: number, array: MyType[]) => U | readonly U[], thisArg?: This): U[] {
    throw new Error("Function not implemented.");
  },
  flat: function <A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[] {
    throw new Error("Function not implemented.");
  },
  at: function (index: number): MyType | undefined {
    throw new Error("Function not implemented.");
  },
  "__@iterator@5712": function (): IterableIterator<MyType> {
    throw new Error("Function not implemented.");
  },
  "__@unscopables@5714": function (): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; } {
    throw new Error("Function not implemented.");
  }
});


//////////////////////////////////////////////////////////////////////
// In this case I used a templated function.
//
// As always, intellisense correctly identified and described the
// problem.  However, it did not offer any suggestions.
//
// This is an improvement over my first example because intellisense
// did not spit out any bad code!  However, it would be nice if 
// intellisense could have fixed this.  I'm not sure why it couldn't.
//////////////////////////////////////////////////////////////////////

function templatedFunction<T>(anObject : T) {
}

// My original code:
templatedFunction<MyType>({function1() { return "Hello world!"}});


//////////////////////////////////////////////////////////////////////
// In this case the function uses a template **and** it is variadic.
//
// This failed just like the original example.  It seems that 
// * variadic functions cause the bug,
// * template + variadic changes a few details, but templates are not
//   the source of the problem,
// * calling a normal function vs a method make no difference, and
// * calling a built in function vs one of my own makes no difference.
//////////////////////////////////////////////////////////////////////

function templatedVariadicFunction<T>(...someObjects : T[]) {
}

// My original code:
templatedVariadicFunction<MyType>({function1() { return "Hello world!"}});

// The same code after intellisense tried to fix it.
templatedVariadicFunction<MyType>({
  function1() { return "Hello world!"; },
  length: 0,
  pop: function (): T | undefined {
    throw new Error("Function not implemented.");
  },
  push: function (...items: T[]): number {
    throw new Error("Function not implemented.");
  },
  concat: function (...items: ConcatArray<T>[]): T[] {
    throw new Error("Function not implemented.");
  },
  join: function (separator?: string): string {
    throw new Error("Function not implemented.");
  },
  reverse: function (): T[] {
    throw new Error("Function not implemented.");
  },
  shift: function (): T | undefined {
    throw new Error("Function not implemented.");
  },
  slice: function (start?: number, end?: number): T[] {
    throw new Error("Function not implemented.");
  },
  sort: function (compareFn?: (a: T, b: T) => number): T[] {
    throw new Error("Function not implemented.");
  },
  splice: function (start: number, deleteCount?: number): T[] {
    throw new Error("Function not implemented.");
  },
  unshift: function (...items: T[]): number {
    throw new Error("Function not implemented.");
  },
  indexOf: function (searchElement: T, fromIndex?: number): number {
    throw new Error("Function not implemented.");
  },
  lastIndexOf: function (searchElement: T, fromIndex?: number): number {
    throw new Error("Function not implemented.");
  },
  every: function <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[] {
    throw new Error("Function not implemented.");
  },
  some: function (predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    throw new Error("Function not implemented.");
  },
  forEach: function (callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
    throw new Error("Function not implemented.");
  },
  map: function <U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
    throw new Error("Function not implemented.");
  },
  filter: function <S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[] {
    throw new Error("Function not implemented.");
  },
  reduce: function (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T {
    throw new Error("Function not implemented.");
  },
  reduceRight: function (callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T {
    throw new Error("Function not implemented.");
  },
  find: function <S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined {
    throw new Error("Function not implemented.");
  },
  findIndex: function (predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number {
    throw new Error("Function not implemented.");
  },
  fill: function (value: T, start?: number, end?: number): T[] {
    throw new Error("Function not implemented.");
  },
  copyWithin: function (target: number, start: number, end?: number): T[] {
    throw new Error("Function not implemented.");
  },
  entries: function (): IterableIterator<[number, T]> {
    throw new Error("Function not implemented.");
  },
  keys: function (): IterableIterator<number> {
    throw new Error("Function not implemented.");
  },
  values: function (): IterableIterator<T> {
    throw new Error("Function not implemented.");
  },
  includes: function (searchElement: T, fromIndex?: number): boolean {
    throw new Error("Function not implemented.");
  },
  flatMap: function <U, This = undefined>(callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[], thisArg?: This): U[] {
    throw new Error("Function not implemented.");
  },
  flat: function <A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[] {
    throw new Error("Function not implemented.");
  },
  at: function (index: number): T | undefined {
    throw new Error("Function not implemented.");
  },
  "__@iterator@5712": function (): IterableIterator<T> {
    throw new Error("Function not implemented.");
  },
  "__@unscopables@5714": function (): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; } {
    throw new Error("Function not implemented.");
  }
});
