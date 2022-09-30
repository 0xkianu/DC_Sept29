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

let canWeGoToTheMovies = (dayOfWeek) => {
    if(myFriendsSchedule[dayOfWeek]==true && myMoneySchedule[dayOfWeek] >= 10) {
        console.log(`On  ${dayOfWeek}? Yes, lets go to the movies!!`);
    } else {
        console.log(`On  ${dayOfWeek}? We can't go to the movies`);
    }    
}

canWeGoToTheMovies('monday');
canWeGoToTheMovies('friday');
canWeGoToTheMovies('sunday');