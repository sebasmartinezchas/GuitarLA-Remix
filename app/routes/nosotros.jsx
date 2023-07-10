import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";
export function meta() {
  return [
    {
      title: "GuitarLA - Nosotros",
    },
    {
      description: "Venta de guitarras, blog de música",
    },
  ];
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel:"preload",
      href:imagen,
      as:"image"
    }
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Maecenas fermentum sagittis elit, at porta tellus euismod eu.
            Maecenas nisi urna, semper eget consectetur at, rutrum non dolor.
            Vivamus rhoncus blandit sapien, a placerat risus tristique vitae.
            Nam vehicula urna ut ligula cursus, quis semper mauris semper.
            Pellentesque et rhoncus metus. Quisque purus ipsum, luctus vitae
            blandit id, pharetra eget orci. Sed pretium risus elit, vel accumsan
            dui maximus id. Sed vel egestas lorem, at viverra leo. Integer metus
            lectus, placerat id justo commodo, laoreet cursus lorem. Mauris vel
            libero vitae massa pellentesque molestie ut sed diam. Morbi non
            congue magna. Vivamus non consequat ligula. Duis vehicula sapien
            mauris, ac suscipit lacus efficitur vel. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis at purus id purus rutrum
          </p>
          <p>
            Maecenas fermentum sagittis elit, at porta tellus euismod eu.
            Maecenas nisi urna, semper eget consectetur at, rutrum non dolor.
            Vivamus rhoncus blandit sapien, a placerat risus tristique vitae.
            Nam vehicula urna ut ligula cursus, quis semper mauris semper.
            Pellentesque et rhoncus metus. Quisque purus ipsum, luctus vitae
            blandit id, pharetra eget orci. Sed pretium risus elit, vel accumsan
            dui maximus id. Sed vel egestas lorem, at viverra leo. Integer metus
            lectus, placerat id justo commodo, laoreet cursus lorem. Mauris vel
            libero vitae massa pellentesque molestie ut sed diam. Morbi non
            congue magna. Vivamus non consequat ligula. Duis vehicula sapien
            mauris, ac suscipit lacus efficitur vel. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis at purus id purus rutrum
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
