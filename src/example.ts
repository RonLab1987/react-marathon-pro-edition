// example 1 - concat fn
export type ConcatFn = (a: string, b: string) => string

const concat: ConcatFn = (a, b) => a + b

concat('Hello ', 'World')

// example 2 - work with Interfaces
export interface MyHomeTask {
  howIDoIt: string
  simeArray: Array<string | number>
}

export interface ExtendedMyHomeTask extends MyHomeTask {
  withData: Array<MyHomeTask>
}

const MyHometask: ExtendedMyHomeTask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// example 3 - 'like array' generic with reduce method
export interface MyArray<T = any> {
  [index: number]: T
  reduce<R = any>(callbackfn: (accumValue: R, currentValue: T, currentIndex: number, myArray: MyArray<T>) => R, initialValue?: R): R
}

const myArray: MyArray<number> = [1, 2, 3, 5]
const myArraySum: number = myArray.reduce<number>((sum, item) => sum + item, 0)
