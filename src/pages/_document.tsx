import Document, { Html, Head, Main, NextScript } from 'next/document';

// eslint-disable-next-line no-use-before-define
import React, { ReactElement } from 'react';

class AppDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="../favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
