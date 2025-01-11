import React from "react";
import "./snakePage.css";

function SnakePage() {
  return (
<div
  className="container-game"
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  }}
>
  <h3>Whoops, 404 error!</h3>
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