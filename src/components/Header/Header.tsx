"use client";
import Link from "next/link";
import style from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="container">
      <nav className={style["header-nav"]}>
        <h2 className={style["header-title"]}>
          Datte<span className={style["header-title-vibrant"]}>bayo</span>
        </h2>
        <ul className={style["header-ul"]}>
          <li className={style["header-li"]}>
            <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>
              Início
            </Link>
          </li>
          <li className={style["header-li"]}>
            <Link
              href={"/about"}
              className={`${pathname === "/about" ? "active" : ""}`}
            >
              Sobre
            </Link>
          </li>
          <li className={style["header-li"]}>
            <a
              href={"/about"}
              className={`${pathname === "/about" ? "active" : ""}`}
            >
              <img
                src="github.png"
                alt="ir para github"
                style={{
                  width: "20px",
                }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
