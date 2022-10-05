import { Box, Button, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CountdownTimer } from '../src/components/CountdownTimer/CountdownTimer'
import { Header } from '../src/components/Header/Header'
import { HistorySection } from '../src/components/HistorySection/HistorySection'
import { Layout } from '../src/components/Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Box sx={{mt:'5rem', minHeight:`calc(100vh-5rem)`}}>
      <Header />
      <CountdownTimer/>
      <HistorySection/>
      </Box>
  
    </Layout>
  )
}
