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
    for(let i=0; i < DAYS_OF_WEEK.length; i++) {
        let dayOfWeek = DAYS_OF_WEEK[i];
        if(myFriendsSchedule[dayOfWeek]==true && myMoneySchedule[dayOfWeek] >= 10) {
            whatDaysCanWeGoToTheMovies += `\nOn ${dayOfWeek}?  Yes, let's go to the movies!!`;
        } else if(myFriendsSchedule[dayOfWeek]==true || myMoneySchedule[dayOfWeek] >= 10) {
            whatDaysCanWeGoToTheMovies += `\nOn ${dayOfWeek}?  One of us can go to the movies`;
        } else {
            whatDaysCanWeGoToTheMovies += `\nOn ${dayOfWeek}?  We can't go to the movies`;
        }
    }
    console.log(whatDaysCanWeGoToTheMovies);
}

canWeGoToTheMovies();