import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import "../style.scss";
import Description from "../components/Description";
import Articles from "../components/Articles";
import Experience from "../components/Experience";
import Talks from "../components/Talks";
import Footer from "../components/Footer";
import * as Scroll from "react-scroll";

function Index() {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap"
          rel="stylesheet"
        />
        <title>Juani Gallo</title>
      </Head>
      <Navbar />
      <Scroll.Element name="description">
        <Description />
      </Scroll.Element>
      <Scroll.Element name="experience">
        <Experience />
      </Scroll.Element>
      <Scroll.Element name="articles">
        <Articles />
      </Scroll.Element>
      <Scroll.Element name="talks">
        <Talks />
      </Scroll.Element>
      <Footer />
    </React.Fragment>
  );
}

export default Index;
