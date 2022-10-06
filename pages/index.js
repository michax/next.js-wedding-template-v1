import { Box, Button, Toolbar, Typography } from '@mui/material'

import { CountdownTimer } from '../src/components/CountdownTimer/CountdownTimer'

import GallerySplide from '../src/components/Gallery/GallerySplide'
import { Header } from '../src/components/Header/Header'
import { HistorySection } from '../src/components/HistorySection/HistorySection'
import { Layout } from '../src/components/Layout/Layout'
import { LocationParty } from '../src/components/locationParty/locationParty'


export default function Home() {
  return (
    <Layout>
      <Box sx={{ mt: '5rem' }}>
        <Header />
        <CountdownTimer />
        <HistorySection />
        <GallerySplide/>
        <LocationParty />
      </Box>
    </Layout>
  )
}
