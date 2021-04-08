import { Fragment } from "react";
import { Header } from "./Header";
import { dummyData } from "../dummyData";

function Layout({ children }) {
  return (
    <Fragment>
      <div>
        <Header />

        <Sidebar />
        {children}
      </div>
    </Fragment>
  );
}

export { Layout };
