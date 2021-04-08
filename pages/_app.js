import "../styles/globals.css";
import { Fragment } from "react";
import { Header } from "../ui/Header";
import { Sidebar } from "../ui/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <main style={{ display: "grid", gridTemplateColumns: "1fr 4fr" }}>
        <div style={{ minWidth: "300px" }}>
          <Sidebar />
        </div>
        <div style={{ marginTop: "43px" }}>
          <Component {...pageProps} />
        </div>
      </main>
    </Fragment>
  );
}

export default MyApp;
