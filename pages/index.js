import React from 'react';
import { GlobalStyles } from '../styles/globals';

import config from '../landing-page.config.json'
import Header from '../src/components/Header';
import Head from 'next/head';
import Profile from '../src/components/Profile';
const redes = config.redes

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Paulo Marques Dev</title>
      </Head>


      {/* {console.log(redes)} */}
      <GlobalStyles />
      <Header />
      <Profile />

    </React.Fragment>
  )
}
