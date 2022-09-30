let newObject = {
    fullname: "Thomas Lee",
    age: "42",
    faveColor: "Green",
    likesPizza: true
}

let favoriteColor = newObject.faveColor;
console.log(favoriteColor);
newObject.fullname= "Le-Dang";

delete newObject.likesPizza;
newObject.likesCookies = true;
console.log(newObject);