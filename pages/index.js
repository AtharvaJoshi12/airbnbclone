import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* {exploreData?.map((item) => (
            <h1>{item.location}</h1>
          ))} */}

          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SmallCard
              img="/images/london.webp"
              distance="45-minute drive"
              location="London"
            />{" "}
            <SmallCard
              img="/images/manchester.webp"
              distance="4.5-hour drive"
              location="Manchester"
            />{" "}
            <SmallCard
              img="/images/liverpool.webp"
              distance="4.5-hour drive"
              location="Liverpool"
            />{" "}
            <SmallCard
              img="/images/yorl.webp"
              distance="4-hour drive"
              location="York"
            />{" "}
            <SmallCard
              img="/images/cardiff.webp"
              distance="45-minute drive"
              location="Cardiff"
            />{" "}
            <SmallCard
              img="/images/birkenhead.webp"
              distance="4.5-hour drive"
              location="Birkenhead"
            />{" "}
            <SmallCard
              img="/images/newquay.webp"
              distance="6-hour drive"
              location="Newquay"
            />{" "}
            <SmallCard
              img="/images/hove.webp"
              distance="2-hour drive"
              location="Hove"
            />
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            <MediumCard img="/images/outdoor.webp" title="Outdoor getaways" />
            <MediumCard img="/images/unique.webp" title="Unique stays" />
            <MediumCard img="/images/entire.webp" title="Entire homes" />
            <MediumCard img="/images/pet.webp" title="Pet allowed" />
          </div>
        </section>

        <LargeCard
          img="/images/largeimage.webp"
          title="The Greatest Outdoors"
          desc="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       exploreData,
//     },
//   };
// }
