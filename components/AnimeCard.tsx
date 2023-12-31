import Image from "next/image";
import { AnimeItem } from "@/types/Anime";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";

interface Prop {
    anime: AnimeItem;
    index: number;
}

const variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}

function AnimeCard({ anime, index }: Prop) {
    return (
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition= {{
                delay: index * 0.25,
                duration: 0.5,
                ease: "easeInOut"
            }}
            viewport={{ amount: 0}}
            className="max-w-sm rounded relative w-full">
                <Link href={`/anime/${anime.mal_id}`}>
                    <div className="relative w-full h-[37vh]">
                        <Image
                            src={anime.images.jpg.image_url}
                            alt={anime.title}
                            fill 
                            sizes="100%"
                            className="rounded-xl object-cover"
                        />
                    </div>
                    <div className="py-4 flex flex-col gap-3">
                        <div className="flex justify-between items-center gap-1">
                            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
                                {anime.title}
                            </h2>
                            <div className="py-1 px-2 bg-[#161921] rounded-sm">
                                <p className="text-white text-sm font-bold capitalize">
                                    {anime.type}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex flex-row gap-2 items-center">
                                <Image
                                    src="./episodes.svg"
                                    alt="episodes"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-base text-white font-bold">
                                    {anime.episodes}
                                </p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <Image
                                    src="./star.svg"
                                    alt="star"
                                    width={18}
                                    height={18}
                                    className="object-contain"
                                />
                                <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
                            </div>
                        </div>
                    </div>
                </Link>
        </MotionDiv>
    )
}

export default AnimeCard;