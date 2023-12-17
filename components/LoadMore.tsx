"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "@/app/action";

let page = 2;
type AnimeCard = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
        setIsLoading(res.length > 0);
        console.log(res.length > 0);
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;