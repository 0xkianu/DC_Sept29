let myFriendsSchedule = {
    monday: true,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: false
};

let myMoneySchedule = {
    monday: 5,
    tuesday: 10,
    wednesday: 15,
    thursday: 2,
    friday: 30,
    saturday: 15,
    sunday: 5
};

const DAYS_OF_WEEK = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

let canWeGoToTheMovies = () => {
    let whatDaysCanWeGoToTheMovies = '';
    let i = 0;
    let dayOfWeek;
    while(i < DAYS_OF_WEEK.length) {
        dayOfWeek = DAYS_OF_WEEK[i];
        if(myFriendsSchedule[dayOfWeek]==true && myMoneySchedule[dayOfWeek] >= 10) {
            whatDaysCanWeGoToTheMovies = whatDaysCanWeGoToTheMovies.concat(`\nOn ${dayOfWeek}?  Yes, let's go to the movies!!`);
        } else if(myFriendsSchedule[dayOfWeek]==true || myMoneySchedule[dayOfWeek] >= 10) {
            whatDaysCanWeGoToTheMovies = whatDaysCanWeGoToTheMovies.concat(`\nOn ${dayOfWeek}?  One of us can go to the movies`);
        } else {
            whatDaysCanWeGoToTheMovies = whatDaysCanWeGoToTheMovies.concat(`\nOn ${dayOfWeek}?  We can't go to the movies`);
        }
        i++;
    }
    console.log(whatDaysCanWeGoToTheMovies);
}

canWeGoToTheMovies();