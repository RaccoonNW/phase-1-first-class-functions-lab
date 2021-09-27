const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const firstTwoDrivers = drivers.slice(0, 2);
const lastTwoDrivers = drivers.slice(-2);

function returnFirstTwoDrivers() {
    return firstTwoDrivers;
}

function returnLastTwoDrivers() {
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(givenValue) {
    return function() {
       return givenValue * givenValue;
    }

}

const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;

function selectDifferentDrivers(drivers, choosingDrivers) {
    //if (choosingDrivers === returnFirstTwoDrivers)
    if (choosingDrivers === returnFirstTwoDrivers) {
       return firstTwoDrivers
        //return (returnFirstTwoDrivers(drivers))
    }
    else if (choosingDrivers === returnLastTwoDrivers) {
        return lastTwoDrivers
    }

}

//WORK THIS LAST FUNCTION OUT TOMORROW