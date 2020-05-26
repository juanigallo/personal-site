import React from "react";
import App, { Container } from "next/app";
import "../style.scss";
import { initGA, logPageView } from "../utils/analytics";
import Router from "next/router";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    this.callGA();

    Router.onRouteChangeComplete = (url) => {
      this.callGA();
    };
  }

  callGA() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div>
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}
