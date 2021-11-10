import { ThemeProvider, createTheme} from "@mui/material";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SocialProof from "../components/SocialProof";
import Chart from "../components/Chart"
import pallete from "../styles/theme";
import Pricing from "../components/Pricing";
import Contracts from "../components/Contracts";
import Footer from "../components/Footer";

const theme = createTheme(pallete)

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Header />
        <SocialProof />
        <Features />
        <Cta />
        <Chart />
        <Pricing />
        <Contracts />
        <Footer />
    </ThemeProvider>
  )
}
