import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { reducer, reducer1 } from "./BuketlistReducer";
import "./Header.css";
const Header = () => {
  const [state, dispatch] = useReducer(reducer, {
    activity: "",
    date: "",
  });
  const [wish, dispatchwish] = useReducer(reducer1, { wish: [] });

  const handlechange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_INPUT",
      payload: {
        name,
        value,
      },
    });
  };

  const handleclick = () => {
    const id = uuidv4();
    dispatchwish({
      type: "WISH",
      payload: {
        id,
        ...state,
      },
    });
  };

  const handleComplete = (id) => {
    dispatchwish({ type: "COMPLETE", payload: id });
  };

  return (
    <>
      <div>
        <h1>Bucket List</h1>
        <h2>using useReducer hook</h2>
      </div>
      <div>
        I want to <input type="text" name="activity" onChange={handlechange} />
        on
        <input type="date" name="date" onChange={handlechange} />
        <button onClick={handleclick}>Add Wish</button>
      </div>
      {wish.wish.length > 0 ? (
        <div>
          {wish.wish.map((item) => (
            <div key={item.id} className={item.completed ? "completed" : ""}>
              <div>
                Activity: {item.activity}, Date: {item.date}
              </div>
              <button onClick={() => handleComplete(item.id)}>Complete</button>
              <button
                onClick={() =>
                  dispatchwish({ type: "DELETE", payload: item.id })
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Header;
