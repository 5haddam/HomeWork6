birthYear = prompt('Введіть свій рік народження?');
cityOfLocation = prompt('В якому місті ти живешь?');
favoriteSport = prompt('Твій улюблений вид спорту?');

currentDate = new Date();
currentYear = currentDate.getFullYear();

age = currentYear - birthYear;

finalResultForAge = null;
finalResultForCityOfLocation = null;
finalResultForFavoriteSport = null;

if (birthYear === null) {
    finalResultForAge = 'Шкода, що Ви не захотіли ввести свій рік народження';
} else {
    finalResultForAge = `Ваш вік ${age}`;
}

if (cityOfLocation === null) {
    finalResultForCityOfLocation = 'Шкода, що Ви не захотіли ввести місто свого проживання';
} else if(cityOfLocation.toLowerCase() === 'київ') {
    finalResultForCityOfLocation = 'Ви живете в столиці України';
} else if(cityOfLocation.toLowerCase() === 'вашингтон') {
    finalResultForCityOfLocation = 'Ви живете в столиці США';
} else if(cityOfLocation.toLowerCase() === 'лондон') {
    finalResultForCityOfLocation = 'Ви живете в столиці Британії';
} else {
    finalResultForCityOfLocation = `Ви живете в ${cityOfLocation[0].toUpperCase()}${cityOfLocation.slice(1, cityOfLocation.lenght)}`;
}

if (favoriteSport === null) {
    finalResultForFavoriteSport = 'Шкода, що Ви не захотіли ввести свій улюбленний вид спорту';
} else if (favoriteSport.toLowerCase() === 'футбол') {
    finalResultForFavoriteSport = 'Круто! Хочете стати як Ліонель Мессі?';
} else if (favoriteSport.toLowerCase() === 'баскетбол') {
    finalResultForFavoriteSport = 'Круто! Хочете стати як Антуан Брізіар?';
} else if (favoriteSport.toLowerCase() === 'плавання') {
    finalResultForFavoriteSport = 'Круто! Хочете стати як Майкл Фелпс?';
} else {
    finalResultForFavoriteSport = `Ваш улюбленний вид спорту ${favoriteSport}`;
}

alert(`
    ${finalResultForAge};
    ${finalResultForCityOfLocation};
    ${finalResultForFavoriteSport}
`)