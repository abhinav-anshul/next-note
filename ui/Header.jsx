import { Fragment } from "react";

function Header() {
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "black",
          zIndex: "9",
          position: "fixed",
          width: "100%",
          color: "white",
        }}
      >
        <h1>note.it</h1>
      </div>
    </Fragment>
  );
}

export { Header };
