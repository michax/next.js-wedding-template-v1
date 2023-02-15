import { Box } from "@mui/material";
import { CountdownTimer } from "../src/components/CountdownTimer/CountdownTimer";
import { FormSection } from "../src/components/FormSection/FormSection";
import GallerySplide from "../src/components/Gallery/GallerySplide";
import { Header } from "../src/components/Header/Header";
import { HistorySection } from "../src/components/HistorySection/HistorySection";
import { Layout } from "../src/components/Layout/Layout";
import { LocationInfo } from "../src/components/LocationInfo/LocationInfo";
import { GiftSection } from "../src/components/GiftSection/GiftSection";
import { storage } from "../src/firebase/clientApp";
import { ref, getDownloadURL, list } from "firebase/storage";

export default function Home({ imageUrls }) {
  console.log("imageUrls", imageUrls);
  return (
    <Layout>
      <Box sx={{ mt: "2.5rem" }}>
        <Header />
        <CountdownTimer />
        <HistorySection />
        <GallerySplide imageUrls={imageUrls} />
        <GiftSection />
        <LocationInfo />
        <FormSection />
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  const imagesListRef = ref(storage, "images/");
  const images = await list(imagesListRef);
  const imageUrls = await Promise.all(
    images.items.map((item) => getDownloadURL(item))
  );

  return {
    props: {
      imageUrls,
    },
  };
}
