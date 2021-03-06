import Image from "next/image"

function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative h-80 w-80">
               <Image
                className="rounded-xl"
                src={img}
                layout="fill"
                ob
               /> 
            </div>
            <h3 className="mt-3 text-lg">{title}</h3>

        </div>
    )
}

export default MediumCard
