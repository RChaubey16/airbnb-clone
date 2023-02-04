import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }: any) => {
  const router = useRouter();
  const { startDate, endDate, numberOfGuests, location }: any = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  console.log(`SSR`, searchResults);
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
      <main className="flex">
        <section className="flex-grow mt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays In {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div>
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }: any) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  key={Math.random()}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

// Search page will be server side rendered per request as we are dealing with dynamic data.
export async function getServerSideProps() {
  const searchResults = await fetch(`https://www.jsonkeeper.com/b/5NPS`).then(
    (res) => res.json()
  );

  return {
    props: { searchResults },
  };
}
