import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
