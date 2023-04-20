import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Header/> */}
      <Layout>
      <h1>Home Page</h1>  
      </Layout>
    </div>
  )
}
