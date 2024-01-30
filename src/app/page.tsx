"use client";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import useData from "@/hooks/useData";
import Link from "next/link";

type CharType = {
  id: number;
  name: string;
  images: string[];
  personal: {
    sex: string;
    clan: string;
  };
};

type ResponseType = {
  characters: CharType[];
  current_page: number;
  total_pages: number;
  pageSize: number;
  total: number;
};

export default function Home() {
  const { getAll } = useData();
  const [data, setData] = useState<CharType[]>([]);

  useEffect(() => {
    async function fetch() {
      const randomPage = Math.floor(Math.random() * (1431 / 20));
      const response = await getAll(randomPage);
      const data = (await response.json()) as ResponseType;
      setData(data.characters);
    }
    fetch();
  }, []);
  console.log(data);

  return (
    <main className={`${styles["custom-main-home"]} `}>
      <section
        id="personagens"
        className={`${styles["characters-section"]} container`}
      >
        <h1 className="title-section">Personagens</h1>
        <div className={`${styles["characters-container"]}`}>
          {data.map((item) => (
            <Card
              key={item.id}
              images={item.images}
              name={item.name}
              personal={item.personal}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
