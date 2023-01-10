import { Inter } from "@next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AbleButton, DesableButton } from "../components/Buttons";
import { Form } from "../components/Form";
import { MainLogin } from "../components/Login";
import Navbar from "../components/Navbar";
import { ToastError, ToastSuccess } from "../components/Toastify/toast";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function VerifyEmail() {
    if (email.includes("@") && email.length >= 6) {
      ToastSuccess();
      router.push("/dashboard");
    } else {
      ToastError();
    }
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="https://img1.gratispng.com/20171220/kqw/pokeball-png-5a3a4a7e247ce7.9167778215137695981495.jpg"/>
      </Head>
      <Navbar />
      <MainLogin>
        <Image
          src="/images/pokeball.svg"
          width="100"
          height="70"
          alt="Pokeball"
          className="sppining"
        />
        <Form>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          {email ? (
            <AbleButton type="button" onClick={VerifyEmail}>
              Acessar
            </AbleButton>
          ) : (
            <DesableButton type="button">Acessar</DesableButton>
          )}
        </Form>
      </MainLogin>
    </>
  );
}
