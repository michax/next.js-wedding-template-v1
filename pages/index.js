import { Box } from "@mui/material";
import { CountdownTimer } from "../src/components/Blocks/CountdownTimer/CountdownTimer";
import { FormSection } from "../src/components/Sections/FormSection/FormSection";
import GallerySplide from "../src/components/Blocks/Gallery/GallerySplide";
import { Header } from "../src/components/App/Header/Header";
import { HistorySection } from "../src/components/Sections/HistorySection/HistorySection";
import { Layout } from "../src/components/Layouts/Layout/Layout";
import { LocationInfo } from "../src/components/Blocks/LocationInfo/LocationInfo";
import { GiftSection } from "../src/components/Sections/GiftSection/GiftSection";
import { storage } from "../src/firebase/clientApp";
import { ref, getDownloadURL, list } from "firebase/storage";

export default function Home({ imageUrls, imageUrlHeader }) {
  console.log("imageUrls", imageUrls);
  console.log("imageUrlsHeader", imageUrlHeader);
  return (
    <Layout>
      <Box sx={{ mt: "2.5rem" }}>
        <Header imageUrlHeader={imageUrlHeader} />
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

  const imageUrlHeader = await getDownloadURL(
    ref(storage, "header/pexels-criativithy-1805416.jpg")
  );

  return {
    props: {
      imageUrls,
      imageUrlHeader,
    },
  };
}
