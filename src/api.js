// Base URl
const base_url = "https://api.rawg.io/api/";

// Getting the Date

//Get Current Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Get current Day
const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Get Current Day/Month/Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Game category fetch URLs
const popularGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcomingGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// Game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API}`;

// Game Screenshots
export const gameScreenshotsURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;
