function findMax(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("The array is empty.");
    }

    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}

function sumSquareDifference(nums: number[]): number {
    const squareSum = nums.reduce((acc, num) => acc + Math.pow(num, 2), 0);
    return Math.abs(squareSum - sumOfSquares(nums));
}

function sumOfSquares(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("The array is empty.");
    }

    let sum = nums.reduce((acc, num) => acc + num * num, 0);
    return Math.abs(sum - sumSquareDifference(nums));
}

function averageOfArray(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("The array is empty.");
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);

    return Math.floor(sum / arr.length);
}
