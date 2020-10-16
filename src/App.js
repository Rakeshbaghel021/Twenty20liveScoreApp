import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Grid, Typography } from "@material-ui/core";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api.js";

function App() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log("DATA :", data.matches);
      })
      .catch((err) => {
        alert(err, "err in data");
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Typography variant="h3" style={{ marginTop: "1.5rem" }}>
        Welcome to the Live Score App
      </Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {matches.map((match) => (
            <>
              {match.type === "Twenty20" ? (
                <MyCard key={match.unique_id} match={match} />
              ) : (
                ""
              )}
            </>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
