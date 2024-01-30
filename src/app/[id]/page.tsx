"use client";
import useData from "@/hooks/useData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./CharacterPage.module.css";
import { CharacterType } from "../types/CharacterType";
import PGroup from "@/components/pGroup/PGroup";
import Link from "next/link";

interface PersonalInfosGroupProps {
  data: string[];
  title: string;
}

function PersonalInfosGroup({ data, title }: PersonalInfosGroupProps) {
  return (
    <div>
      <h3 className={style["title-personal-infos-group"]}>{title}</h3>
      <ul className={style["list-personal-infos-group"]}>
        {data && data.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function Page() {
  const { id } = useParams();
  const { getOneById } = useData();
  const [data, setData] = useState<CharacterType | null>(null);

  useEffect(() => {
    async function fetch() {
      const response = await getOneById(Number(id));
      const data = await response.json();
      setData(data);
    }
    fetch();
  }, []);

  {
    console.log(data);
  }

  return (
    <main className={`${style["character-page"]} container`}>
      {data && <h1 className={style["name-character"]}>{data.name}</h1>}

      <div className={style["gallery"]}>
        {data &&
          data.images?.map((image) => (
            <img key={image} src={image} alt={`imagem de ${data.name}`} />
          ))}
      </div>
      <div className={style["character-body"]}>
        {data && (
          <div className={style["personal-infos"]}>
            <PGroup title={data.debut.appearsIn} desc="Aparece em" />
            <PGroup title={data.personal.clan} desc="Clã" />
            <PGroup title={data.personal.birthdate} desc="Aniversário" />
          </div>
        )}
        <hr />

        {data && (
          <div className={style["personal-infos-group"]}>
            <PersonalInfosGroup
              title="Kekkei Genkai"
              data={data.personal.kekkeiGenkai}
            />

            <PersonalInfosGroup
              title="Clasificação"
              data={data.personal.classification}
            />
            <PersonalInfosGroup title="Tipos naturais" data={data.natureType} />
            <PersonalInfosGroup title="Ferramentas" data={data.tools} />
          </div>
        )}
      </div>
      <Link href={"/"} className={style["btn-back"]}>
        Voltar
      </Link>
    </main>
  );
}
