
// Завдання 1. Пошук максимального числа
function findMax(a, b) {
    return a > b ? a : b;
}

console.log("Завдання 1:", findMax(15, 25));


// Завдання 2. Віднімання двох чисел
const subtract = function(a, b) {
    return a - b;
};

console.log("Завдання 2:", subtract(20, 8));


// Завдання 3. Обчислення квадратного кореня
const sqrt = (n) => Math.sqrt(n);

console.log("Завдання 3:", sqrt(64));


// Завдання 4. Сума геометричної прогресії
function geometricProgression(n, a, r) {
    if (n <= 0) {
        return 0;
    }

    return a * Math.pow(r, n - 1) +
        geometricProgression(n - 1, a, r);
}

console.log("Завдання 4:", geometricProgression(5, 2, 3));


// Завдання 5. Функція-замикання для ділення
function createDivider(divisor) {
    return function(number) {
        if (divisor === 0) {
            throw new Error("Ділення на нуль неможливе");
        }
        return number / divisor;
    };
}

const divideByTwo = createDivider(2);

console.log("Завдання 5:", divideByTwo(20));


// Завдання 6. Функція вищого порядку
function applyOperation(a, b, func) {
    return func(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log("Завдання 6. Додавання:", applyOperation(5, 3, add));
console.log("Завдання 6. Множення:", applyOperation(5, 3, multiply));


// Завдання 7. Обробка множини Set
function processSet(set, callback) {
    const result = new Set();

    for (const element of set) {
        result.add(callback(element));
    }

    return result;
}

const numbers = new Set([1, 2, 3, 4, 5]);

const doubledNumbers = processSet(numbers, number => number * 2);

console.log("Завдання 7:", doubledNumbers);
