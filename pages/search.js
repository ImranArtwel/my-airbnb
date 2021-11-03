import { format } from "date-fns";
import { useRouter } from "next/dist/client/router"
import Header from "../components/Header";


function search() {
  const router = useRouter();
  const { location, startDate, endDate, guests} = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
            <Header />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} for {guests} guests</p>
                    <h2 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h2>
                    <div className="hidden lg:inline-flex flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Policy</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                        
                    </div>
                </section>

            </main>
        </div>
    )
}

export default search
