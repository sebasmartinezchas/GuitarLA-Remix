import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";
import ListadoPosts from "~/components/listado-posts";
import Curso from "~/components/curso";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";
import styledGuitarras from "~/styles/guitarras.css";
import styledPosts from "~/styles/blog.css";
import styledCurso from "~/styles/curso.css";
export function meta() {}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styledGuitarras,
    },
    {
      rel: "stylesheet",
      href: styledPosts,
    },
    {
      rel:"stylesheet",
      href:styledCurso
    }
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  console.log(curso);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso
      curso={curso.attributes}
      />
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}

export default Index;
