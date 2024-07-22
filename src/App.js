import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import "./App.css";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const supabaseFetch = async () => {
  const { data, error } = await supabase
    .from("my_set")
    .select("todos")
    .match({ id: 1 });

  console.log(data, error);
  if (data) return data[0].todos;
};

const supabaseUpdate = async (value) => {
  console.log(value);
  const { data, error } = await supabase
    .from("my_set")
    .update({ todos: value })
    .match({ id: 1 });

  console.log(data, error);
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function handleFetch() {
      const data = await supabaseFetch();
      if (data) setTodos(data);
    }
    handleFetch();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    const newArray = todos;
    newArray.push(input);
    setTodos(newArray);
    setInput("");
    supabaseUpdate(newArray);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        padding: "20px",
        background: "aliceblue",
      }}
    >
      <div>
        <label htmlFor="insert">
          <b>Insert:</b>{" "}
        </label>
        <input id="insert" type="string" value={input} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "fit-content",
        }}
      >
        <p>
          <b>Todos:</b>{" "}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "8px",
          }}
        >
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <p
                style={{
                  marginBottom: 0,
                  marginTop: 0,
                  textAlign: "start",
                }}
                key={index}
              >
                • {todo}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
