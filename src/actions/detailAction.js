import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(gameScreenshotsURL(id));

  // Promise.all([detailData, screenshotsData]).then((data) => {
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotsData.data,
    },
  });
  // });
};
