import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  //Fetch Axios
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
