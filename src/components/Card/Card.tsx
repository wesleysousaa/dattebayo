import Link from "next/link";
import PGroup from "../pGroup/PGroup";
import style from "./Card.module.css";

interface cardProps {
  id: number;
  name: string;
  images: string[];
  personal: {
    sex: string;
    clan: string;
  };
}

export default function Card({ images, name, personal, id }: cardProps) {
  return (
    <div className={style["card"]}>
      <img
        className={style["card-img"]}
        src={images[0]}
        alt={`imagem de ${personal}`}
      />
      <div className={style["card-body"]}>
        <h3>{name}</h3>
        <div className={style["card-body-description"]}>
          <PGroup title={personal.sex} desc="Gênero" />
          <PGroup title={personal.clan} desc="Clã" />
        </div>
      </div>
      <Link href={`${id}`} className={style["see-more"]}>
        Ver mais
      </Link>
    </div>
  );
}
