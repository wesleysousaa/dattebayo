import style from "./PGroup.module.css";

interface props {
  title: string;
  desc: string;
}
export default function PGroup({ desc, title }: props) {
  return (
    <div>
      <small className={style["description"]}>{desc}</small>
      <p className={style["title"]}>{title ? title : "Sem informações"}</p>
    </div>
  );
}
