import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
function InfoCard({img, location, title, description, star, total, price}) {
    return (
        <div className="flex py-7 px-2 cursor-pointer border-b hover:opacity-80 :hover shadow-lg rounded-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image className="cursor-pointer rounded-2xl" src={img} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" /> 
                </div>
                <h4 className="lg:text-xl">{title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />{star}
                    </p>
                    <div>
                        <p className="text-sm">{price}</p>
                        <p className="font-semibold lg:text-2xl">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
