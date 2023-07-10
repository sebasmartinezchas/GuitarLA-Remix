import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helper";



function Post({post}) {
  const {contenido,imagen,titulo,publishedAt,url}=post;



  return (
   <article className="post">
    <img src={imagen.data.attributes.formats.small.url} className="imagen" alt={`Imagen Blog ${titulo}`} />
    <div className="contenido">
      <h3>{titulo}</h3>
      <p className="fecha">{formatearFecha(publishedAt)}</p>
      <p className="resumen">{contenido}</p>
      <Link to={`/blog/${url}`} className="enlace">Leer Post</Link>
    
    </div>
   </article>
  )
}

export default Post