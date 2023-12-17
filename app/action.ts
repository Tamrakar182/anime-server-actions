"use server";

export const fetchAnime = async (page: number) => {
    const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity&kind=tv&status=ongoing`);
    const data = await res.json();
    return data;
}