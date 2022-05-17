/* SLEEP DEBT CALCULATOR */

const getSleepHours = (day) => {

    day = day.toLowerCase();

    

    switch (day) {
        case 'monday':
            return 8;
            
        case 'tuesday':
            return 5;
            
        case 'wednesday':
            return 6;

        case 'thursday':
            return 8;

        case 'friday':
            return 6;

        case 'saturday':
            return 12;

        case 'sunday': 
            return 10;

    }

};

const getActualSleepHours = () => {

    const daysOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    let sumOfSleepHours = 0;

    for (const day of daysOfTheWeek) {

        getSleepHours(day);

        sumOfSleepHours += getSleepHours(day);

    }

    return sumOfSleepHours;

};

const getIdealSleepHours = () => {

    const idealNightlySleepHours = 8;

    return idealNightlySleepHours * 7;

};

const calculateSleepDebt = () => {

    const actualSleepHours = getActualSleepHours();

    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than your ideal amount.');
    } else if (actualSleepHours < idealSleepHours) { 
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep than your ideal amount. You should get some rest!');
    };


};

calculateSleepDebt();