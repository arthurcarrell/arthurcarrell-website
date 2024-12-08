// my birthdate in unix time: 1214523900 | June 26th 2008 (11:45PM)
const birthdate = 1214523900000;
//                1733432208787

function getUnixTimeDifference(startDate, endDate) {
    let difference = endDate-startDate;
    let dateEdit = new Date(0);
    // convert from milliseconds to seconds (/1000)
    difference = difference / 1000;
    

    let yearsSecondsAmount = 31_536_000;
    let monthsSecondsAmount = 2_629_746;
    let daysSecondsAmount = 86_400;

    let years = difference / yearsSecondsAmount // this is an approximation
    let years_remainder = difference % yearsSecondsAmount;
    let months = years_remainder / monthsSecondsAmount;
    let months_remainder = years_remainder % monthsSecondsAmount;
    let days = months_remainder / daysSecondsAmount;

    return [years,months,days];
    
}

function displayTime(elementToEdit,unixTimeDifference) {
    elementToEdit.textContent = `${~~unixTimeDifference[0]} years, ${~~unixTimeDifference[1]} months and ${~~unixTimeDifference[2]} days`
}

displayTime(document.getElementById("exactage"),getUnixTimeDifference(birthdate,Date.now()));
let displayOldness = setInterval(function(){
    displayTime(document.getElementById("exactage"),getUnixTimeDifference(birthdate,Date.now()));
},10000)
