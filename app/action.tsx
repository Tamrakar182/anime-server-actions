"use server";
import { AnimeItem } from "@/types/Anime";
import AnimeCard from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
    const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity&kind=tv&status=ongoing`);
    const data = await res.json();

    return data.map((item: AnimeItem, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))
}