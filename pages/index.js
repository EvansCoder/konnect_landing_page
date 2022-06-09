import Head from "next/head";
import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Konnect | Beyond Limits </title>
        <meta content="Get Started on KONNECT WiFi" name="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Homepage />
    </div>
  );
}


