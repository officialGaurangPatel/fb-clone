import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Heeader from '../component/Heeader'
import Login from '../component/Login'
import Sidebar from '../component/Sidebar'


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
      <main>
        <Sidebar />

      </main>
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
