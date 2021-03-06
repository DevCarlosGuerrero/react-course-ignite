import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

//Styles
import styled from "styled-components";

// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

// Animations
import { motion } from "framer-motion";

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Retreive the Data
  const { popularGames, upcomingGames, newGames } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      {pathID && <GameDetail />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames &&
          upcomingGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </Games>
      <h2>Pouplar Games</h2>
      <Games>
        {popularGames &&
          popularGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames &&
          newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
