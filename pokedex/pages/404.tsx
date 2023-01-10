import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ErrorPage } from "../components/404";

export default function NotFound() {
  return (
    <ErrorPage>
      <Head>
        <title>Error</title>
        <link
          rel="icon"
          href="https://img1.gratispng.com/20171220/kqw/pokeball-png-5a3a4a7e247ce7.9167778215137695981495.jpg"
        />
      </Head>
      <Image
        src={"/images/Notfound.png"}
        width="800"
        height="600"
        alt="NotFound"
      ></Image>
      <Link href={"/"}>Home</Link>
    </ErrorPage>
  );
}
