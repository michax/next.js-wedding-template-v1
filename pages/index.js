import { Box, Button, Toolbar, Typography } from '@mui/material'

import { CountdownTimer } from '../src/components/CountdownTimer/CountdownTimer'
import { FormSection } from '../src/components/FormSection/FormSection'

import GallerySplide from '../src/components/Gallery/GallerySplide'
import { Header } from '../src/components/Header/Header'
import { HistorySection } from '../src/components/HistorySection/HistorySection'
import { Layout } from '../src/components/Layout/Layout'
import { LocationChurch } from '../src/components/LocationChurch/LocationChurch'



export default function Home() {
  return (
    <Layout>
      <Box sx={{ mt: '5rem' }}>
        <Header />
        <CountdownTimer />
        <HistorySection />
        <GallerySplide/>
        <LocationChurch />

        <FormSection/>
      </Box>
    </Layout>
  )
}
