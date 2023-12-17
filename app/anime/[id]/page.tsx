import { fetchAnimeById } from '@/app/action'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const anime = await fetchAnimeById(params.id)
    if (!anime) {
      notFound()
    }
    return {
      title: `${anime.title}`,
      description: `Server Action with Anime API | ${anime.title}`,
    }
  }
  

export default async function Anime({ params }: Props) {
    const anime = await fetchAnimeById(params.id).catch(() => notFound())

    return (
        <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
            <h2 className="text-3xl text-white font-bold">{anime.title}</h2>
        </main>
    )
}