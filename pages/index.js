import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Best from "../components/Best"

export default function Home() {
  return (
    <>
      <SeoHead title='Plunge pool' />
      <Layout>
        <Hero />
        <Best />
        <Services />
        <Pricing />
      </Layout>
    </>
  );
}
