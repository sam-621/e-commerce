import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/index.css';
import 'swiper/swiper-bundle.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
