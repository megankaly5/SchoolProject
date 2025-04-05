function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(5, 3)); // Output: 8

function reverseArray(arr: any[]): any[] {
  return arr.slice().reverse();
}

const fruits = ['apple', 'banana', 'cherry'];
console.log(reverseArray(fruits)); // Output: ["cherry", "banana", "apple"]
