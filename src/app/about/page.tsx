import style from "./About.module.css";
export default function Page() {
  return (
    <main className="">
      <section id="sobre-nos" className={`${style["about-section"]} container`}>
        <img
          src="image-about.jpg"
          className={style["image-about"]}
          alt="Imagem da sção sobre nós"
        />
        <div className={style["description-about"]}>
          <h1 className="title-section">Sobre nós</h1>
          <p>
            Bem-vindo ao Dattebayo, sua fonte definitiva para explorar o
            universo de Naruto! Aqui, você terá acesso à nossa seção dinâmica de
            personagens, alimentada pela nossa API exclusiva. A cada reload da
            tela, você será apresentado a uma nova seleção de ninjas,
            diretamente da nossa vasta coleção de dados. Graças à nossa
            integração com a API, podemos oferecer uma experiência única e
            sempre atualizada, permitindo que você mergulhe mais fundo no mundo
            de Naruto com facilidade. Explore perfis detalhados, descubra
            curiosidades e apaixone-se ainda mais pelos seus personagens
            favoritos. Junte-se a nós agora e deixe a API do Dattebayo levá-lo a
            uma jornada através dos lendários ninjas do mundo ninja. Não perca
            tempo, comece sua aventura agora! Dattebayo!
          </p>
          <a
            className={style["link-api"]}
            href="https://api-dattebayo.vercel.app/"
          >
            Acesse a página oficial da API &#10132;
          </a>
        </div>
      </section>
    </main>
  );
}
