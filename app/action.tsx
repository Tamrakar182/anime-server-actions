"use server";
import { AnimeItem } from "@/types/Anime";
import AnimeCard from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=8&order_by=members&sort=desc&status=airing`);
    const data = await res.json();

    return data.data.map((item: AnimeItem, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} />
      ))
}