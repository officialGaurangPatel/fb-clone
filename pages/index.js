import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Heeader from '../component/Heeader'


export default function Home({ session }) {
  if (!session) {
    return <Login />
  }
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      <Heeader />
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
