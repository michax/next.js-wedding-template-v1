import { Box, Button, Toolbar, Typography } from '@mui/material'

import { CountdownTimer } from '../src/components/CountdownTimer/CountdownTimer'
import { Header } from '../src/components/Header/Header'
import { HistorySection } from '../src/components/HistorySection/HistorySection'
import { Layout } from '../src/components/Layout/Layout'


export default function Home() {
  return (
    <Layout>
      <Box sx={{mt:'5rem'}}>
      <Header />
      <CountdownTimer/>
      <HistorySection/>
      </Box>
  
    </Layout>
  )
}
