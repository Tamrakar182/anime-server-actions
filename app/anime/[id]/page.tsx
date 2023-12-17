import { fetchAnimeById } from '@/app/action'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AnimePage from '@/components/AnimePage'

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
          <AnimePage anime={anime} />
        </main>
    )
}