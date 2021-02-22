import '@/styles/global.css';

import {Provider} from 'next-auth/client';
import {AppProps} from 'next/app';
import NextNprogress from 'nextjs-progressbar';

function App({Component, pageProps}: AppProps): React.ReactNode {
  return (
    <Provider session={pageProps.session}>
      <NextNprogress
        color="#2b82d4"
        height="3"
        options={{showSpinner: false}}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
