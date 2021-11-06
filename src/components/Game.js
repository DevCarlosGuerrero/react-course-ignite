import { Link } from "react-router-dom";

// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  // Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0.8px 1.6px 2.7px rgba(0, 0, 0, 0.022),
    2px 4.2px 6.9px rgba(0, 0, 0, 0.031),
    4.1px 8.5px 14.2px rgba(0, 0, 0, 0.039),
    8.4px 17.5px 29.2px rgba(0, 0, 0, 0.048), 23px 48px 80px rgba(0, 0, 0, 0.07);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Game;
