import Head from "next/head"
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Contributors({ contributors}){
  return (
    <>
      <Head></Head>
      <Layout>
        <Hero />
      </Layout>
    </>
    )
  }
  
  export async function getStaticProps() {
    const contributorsReq = await fetch("https://api.github.com/repos/SaraVieira/blender-resources/stats/contributors");
    const contributions = await contributorsReq.json();
    const contributors = contributions.map(c => c.author);
    console.log(contributors);
    return {
      props:{
        contributors
      }
    }
  }