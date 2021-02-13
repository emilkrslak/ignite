//Base url
const base_url = 'https://api.rawg.io/api/';

//Get moneth
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    } else{
        return month;
    }
    
}

//Get day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    } else{
        return day;
    }
    
}

//Date functions
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//Assign dates
const date = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`

//URL Creator
const popular_games = `games?dates=${lastYear},${date}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${date},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${date}&ordering=-released&page_size=10`;

//Export API-Url
export const popularGamesURL = () => {return`${base_url}${popular_games}`}
export const upcomingGamesURL = () => {return`${base_url}${upcoming_games}`}
export const newGamesURL = () => {return`${base_url}${new_games}`}