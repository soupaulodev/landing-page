import React from 'react';
import { GlobalStyles } from '../styles/globals';
import Header from '../src/components/Header';
import Head from 'next/head';
import Profile from '../src/components/Profile';
import Social from '../src/components/Social';

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Paulo Marques</title>
      </Head>

      <GlobalStyles />
      <Header />
      <Profile />
      <Social />

    </React.Fragment>
  )
}
