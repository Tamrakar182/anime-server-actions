"use server";
import { AnimeItem } from "@/types/Anime";
import AnimeCard from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=8&order_by=members&sort=desc&status=airing`);
    const anime = await res.json();

    return anime.data.map((item: AnimeItem, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} />
      ))
}

export const fetchAnimeById = async (id: string) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const anime = await res.json();

    return anime.data;
}