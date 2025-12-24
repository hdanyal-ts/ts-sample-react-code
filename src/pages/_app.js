import React from 'react'
import Head from 'next/head'
import { colors } from '@design/colors'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store from '@redux/store'
import { persistStore } from 'redux-persist'
import GlobalStyle from '@design/global'
import PrivateRoute from '@router/PrivateRoute'

const persistor = persistStore(store)

export default function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>OpsPortal App</title>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='theme-color' content={colors.brandYellow} />
          <meta
            name='viewport'
            content='width=device-width,height=device-height,initial-scale=1,maximum-scale=1'
          />
          <meta name='format-detection' content='telephone=no' />
          <meta name='description' content='OpsPortal React Application' />
        </Head>
        <GlobalStyle />
        <PrivateRoute>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </PrivateRoute>
      </PersistGate>
    </Provider>
  )
}
