import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
    <Layout>
      <h1>Contact Page</h1>
    </Layout>
    </div>
  )
}
