let district;
let year;
let postNo;
let birth;
let zero;
let priority;
let gift;

const cardDistribution = (district, year, postNo, birth, priority) => {

    // checking current year and birth year
    if (year.toString().length > 4 || birth.toString().length > 4) {
        alert("Year or Birth year must be in 4 digit. Please try again.")
        return;
    }


    // zero count by priority
    if (priority < 10) {
        zero = "00000";
    }
    else if (priority < 100) {
        zero = "0000";
    }
    else if (priority < 1000) {
        zero = "000"
    }
    else if (priority < 10000) {
        zero = "00";
    }
    else if (priority < 100000) {
        zero = "0";
    }
    else if (priority >= 100000) {
        zero = "";
        priority = 99999;
    }

    // district
    let district2Capital = district[0].toUpperCase() + district[1].toUpperCase();

    // year
    let num2str = year.toString();
    let yearLast2 = num2str[2] + num2str[3];

    // postal No
    let num2str1 = postNo.toString();
    let postFirst2 = num2str1[0] + num2str1[1];

    // birthdYear
    let birthYear = birth.toString();

    // priority
    let priorityNum = priority.toString();

    // CARD
    let card = (district2Capital + yearLast2 + postFirst2 + birthYear + zero + priorityNum);

    let cardNum = parseInt(card.slice(2));

    if (cardNum % 2 === 0) {
        gift = "R";
    }
    else {
        gift = "W";
    }

    const fullCard = `{cardNumber: ${card}, gift:${gift}, priority: ${priority}}`;

    console.log(fullCard)

}

cardDistribution("Dhaka", 2022, 1022, 1998, 1)
cardDistribution("Chittagong", 2022, 1200, 1998, 2)




