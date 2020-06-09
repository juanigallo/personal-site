import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Head from "next/head";

function Stream() {
  const refContainer = useRef(null)

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap"
          rel="stylesheet"
        />
        <title>Juani Gallo - Stream</title>
        <script src="https://www.youtube.com/iframe_api" />
      </Head>
      <Navbar />

      <div style={{width: "1200px", margin:"0 auto"}}>
        <iframe
          width="900px"
          height="600px"
          src="https://www‍.youtube.com/embed/gVXvA2CUfFA"
          frameBorder="0"
          allowFullScreen
          controls={"0"}
          autoPlay
          id="iframevideo"
          ref={refContainer}
        />
        <iframe
        style={{ marginTop:"70px"}}
          width="300"
          height="600"
          src="https://ww‍w.youtube.com/live_chat?v=gVXvA2CUfFA&embed_domain=juanigallo.com"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    </React.Fragment>
  )
}

export default Stream