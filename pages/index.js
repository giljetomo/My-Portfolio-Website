import Head from 'next/head'
import About from './about'

export default function Home() {
  return (
    <>
    <Head>
      <title>About Gil</title>
    </Head>
      <div>
        <About />
      </div>
    </>
  )
}