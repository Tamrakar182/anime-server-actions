import Image from "next/image";
import Link from "next/link";
import { Anime } from "@/types/Anime";

interface Prop {
    anime: Anime;
}

export default function AnimePage({ anime }: Prop) {
    return (
        <>
            <h2 className="text-3xl text-white font-bold">{anime.title}</h2>
            <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-10">
                <div className="relative w-full h-[37vh]">
                    <Image
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        fill
                        sizes="100%"
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2 items-center">
                        <Image
                            src="/episodes.svg"
                            alt="episodes"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <p className="text-white text-sm font-bold capitalize">
                            {anime.episodes} Episodes
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Image
                            src="/star.svg"
                            alt="score"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <p className="text-white text-sm font-bold capitalize">
                            {anime.score} Score
                        </p>
                    </div>
                    
                    <div className="flex flex-row gap-2 items-center">
                        <p className="text-white text-sm font-bold capitalize">
                            {anime.status}
                        </p>
                        <p className="text-white w-fit bg-[#161921] text-sm p-2 rounded-lg font-bold capitalize">
                            {anime.type}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <h2 className="text-2xl text-white font-bold">Synopsis</h2>
                <p className="text-white text-base">{anime.synopsis}</p>
            </section>

            <section className="py-4">
                <h2 className="text-2xl text-white font-bold">Popularity</h2>
                <p className="text-white text-base">{anime.popularity}</p>
            </section>

            <section className="py-4">
                <h2 className="text-2xl text-white font-bold">Rating</h2>
                <p className="text-white text-base">{anime.rating}</p>
            </section>

            <section className="py-4">
                <h2 className="text-2xl text-white font-bold">Season</h2>
                <p className="text-white text-base">{anime.season}</p>
            </section>

            <section className="py-4 text-center">
                <Link href={anime.url} className="underline hover:text-red-400">
                For more information, go to the MAL page
                </Link>
            </section>

        </>
    )
}