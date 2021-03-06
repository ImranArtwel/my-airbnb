import Image from "next/image";
import { SearchIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
    const [guests, setGuests] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      };
    const router = useRouter();

    const handeDateSelect = ({selection}) => {
        setStartDate(selection.startDate)
        setEndDate(selection.endDate)
    }
    const resetInput = () => {
        setSearchInput("")
    }
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
              location: searchInput,
              startDate: startDate.toString(),
              endDate: endDate.toString(),
              guests      
            }
        });
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={() => router.push('/')}>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                    
                />
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input 
                 className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" 
                 type="text" 
                 placeholder={placeholder || "Start your search"}
                 value={searchInput}
                 onChange={(e) => setSearchInput(e.target.value)}
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2" />

            </div>
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            {
                searchInput && (
                    <div className="flex flex-col col-span-3 mx-auto">
                        <DateRangePicker 
                          ranges={[selectionRange]}
                          minDate={new Date()}
                          rangeColors={["#FD5B61"]}
                          onChange={handeDateSelect}
                        />
                        <div className="flex items-center border-b mb-4">
                            <h3 className="text-2xl flex-grow font-semibold">Number of Guests</h3>
                            <UsersIcon className="h-5" />
                            <input 
                                type="number"
                                className="w-12 pl-2 outline-none text-red-500"
                                value={guests}
                                min={1}
                                onChange={(e) => setGuests(e.target.valueAsNumber)} 
                            />

                        </div>
                        <div className="flex">
                            <button className="flex-grow text-gray-400" onClick={resetInput}>Cancel</button>
                            <button className="flex-grow text-red-400" onClick={search}>Search</button>
                        </div>
                    </div>
                )
            }
        </header>

    )
}

export default Header
