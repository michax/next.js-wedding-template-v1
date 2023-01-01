import { Box } from "@mui/material";
import { CountdownTimer } from "../src/components/CountdownTimer/CountdownTimer";
import { FormSection } from "../src/components/FormSection/FormSection";
import GallerySplide from "../src/components/Gallery/GallerySplide";
import { Header } from "../src/components/Header/Header";
import { HistorySection } from "../src/components/HistorySection/HistorySection";
import { Layout } from "../src/components/Layout/Layout";
import { LocationInfo } from "../src/components/LocationInfo/LocationInfo";

export default function Home() {
  return (
    <Layout>
      <Box sx={{ mt: "5rem" }}>
        <Header />
        <CountdownTimer />
        <HistorySection />
        <GallerySplide />
        <LocationInfo />
        <FormSection />
      </Box>
    </Layout>
  );
}
