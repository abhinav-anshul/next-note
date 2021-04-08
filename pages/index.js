import Head from "next/head";
// import styles from '../styles/Home.module.css'
import { getAllData } from "../dummyData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>This is from indexjs, {JSON.stringify(getAllData())}</h1>
      </main>
    </div>
  );
}
