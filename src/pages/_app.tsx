import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Provider } from 'react-redux'
import store from '@Redux/store'
import '../styles/index.css'
import 'swiper/swiper-bundle.css'
import 'react-toastify/dist/ReactToastify.css'
import AppWrapper from '@Components/templates/AppWrapper'
import { CookiesProvider } from 'react-cookie'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </Provider>
    </CookiesProvider>
  )
}

export default MyApp
