// Code your solution in this file!
// 1) Returning the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

// 2) Returning the last two drivers
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// 3) & 4) Selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 5) Creating a fare multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// 6) & 7) Doubling fares
const fareDoubler = createFareMultiplier(2);

// 8) & 9) Tripling fares
const fareTripler = createFareMultiplier(3);

// 10) Selecting different drivers
function selectDifferentDrivers(drivers, selector) {
    return selector(drivers);
}

// Example usage:
const drivers = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'];

console.log(returnFirstTwoDrivers(drivers)); // ['Alice', 'Bob']
console.log(returnLastTwoDrivers(drivers)); // ['Dan', 'Eve']
console.log(selectingDrivers[0](drivers)); // ['Alice', 'Bob']
console.log(selectingDrivers[1](drivers)); // ['Dan', 'Eve']
console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Alice', 'Bob']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Dan', 'Eve']
