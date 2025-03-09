import estilos from "./SecaoCapa.module.css";
import Logo from "../../../public/capa.png";
import Image from "next/image";
export default function SecaoCapa() {
  return (
    <div className={estilos.containerCapa}>
      <Image src={Logo} alt="Background" />
      <div className={estilos.boxText}>
        <p>Preços baixos em</p>
        <h1>ÓCULOS DE GRAU E DE SOL</h1>
        <p>Você so encontra aqui</p>
      </div>
    </div>
  );
}
