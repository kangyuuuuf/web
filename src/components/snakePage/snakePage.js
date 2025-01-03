import React from "react";
import "./snakePage.css";

function SnakePage() {
  return (
<div
  className="container"
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  }}
>
  <h3>Whoops, 404 error! Looks like the page went missing. Or maybe it's not missing at all…</h3>
  <iframe
    title="SnakeGame"
    src="/snake_game/snake.html"
    style={{
        width: "50%",
        height: "calc(50vw/1980 * 1080)",
      border: "1px solid black",
    }}
  />
</div>
  );
}

export default SnakePage;