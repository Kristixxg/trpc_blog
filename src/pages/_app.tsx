import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { withTRPC } from '@trpc/next'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default withTRPC({
  config({ctx}) {

    const url = process.env.NEXT_PUBLIC_VERCEL_URL ? `http://$n`
  }
})
