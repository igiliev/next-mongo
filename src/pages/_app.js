import Header from '@/components/header/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header><Header /></header>
      <Component {...pageProps} />
    </>
    )
}
