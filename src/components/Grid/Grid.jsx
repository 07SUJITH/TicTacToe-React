import { useState } from "react";
import Card from "./../Card/Card.jsx";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Grid() {
  const [turn, setTurn] = useState(1);
  const [cards, setCard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  // 0 - X  1- O
  const play = (index) => {
    if (turn) cards[index] = "O";
    else cards[index] = "X";
    const win = isWinner(cards);
    if (win) {
      setWinner(win);
      toast(`Congratulations Player ${win} wins!`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setCard([...cards]); // update the cards array using spread operator
    setTurn(!turn);
  };
  // play is change the turn and sent it as a callback to onPlay custom props.

  const reset = () => {
    setCard(Array(9).fill(""));
    setTurn(1);
    setWinner("");
  };

  return (
    <>
      {
        winner && (
          <>
            <h1> Winner is {winner}</h1>
            <button onClick={reset}>Reset Game </button>
            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </>
        )
        // conditional rendering
      }

      <h2>Current turn : {turn ? "O" : "X"} </h2>
      <div className="Grid">
        {cards.map((value, idx) => (
          <Card onPlay={play} player={value} index={idx} key={idx} gameEnd={ winner? true:false} />
        ))}
      </div>
    </>
  );
}

export default Grid;
