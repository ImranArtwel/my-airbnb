import { format } from "date-fns";
import { useRouter } from "next/dist/client/router"
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";


function search({searchResults, numOfResults}) {
  const router = useRouter();
  const { location, startDate, endDate, guests} = router.query;
  const formattedStartDate = format(new Date(startDate || new Date()), "MMM d, yyyy");
  const formattedEndDate = format(new Date(endDate || new Date()), "MMM d, yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${guests} guests`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">{numOfResults}+ Stays - {range} for {guests} guests</p>
                    <h2 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h2>
                    <div className="hidden lg:inline-flex flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Policy</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                        
                    </div>
                    <div className="flex flex-col">
                        {
                            searchResults?.map(item => (
                                <InfoCard 
                                  key={item.img}
                                  img={item.img}
                                  location={item.location}
                                  title={item.title}
                                  description={item.description}
                                  star={item.star}
                                  price={item.price} 
                                  total={item.total} />
                            ))
                        }
                    </div>
                </section>

            </main>
        </div>
    )
}

export default search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
    return {
        props: {
            searchResults,
            numOfResults: searchResults.length
        }
    }
}
