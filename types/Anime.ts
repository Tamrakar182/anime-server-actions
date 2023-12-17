export interface AnimeItem {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    type: string;
    episodes: number;
    score: number;
}

export interface Anime {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
    title_english: string;
    title_japanese: string;
    type: string;
    episodes: number;
    status: string;
    airing: boolean;
    rating: string;
    score: number;
    rank: number;
    popularity: number;
    synopsis: string;
    season: string;
    year: number;
}
