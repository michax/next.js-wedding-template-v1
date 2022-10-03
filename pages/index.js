import { Box, Button, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../src/components/Header/Header'
import { Layout } from '../src/components/Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Header />
    </Layout>
  )
}
