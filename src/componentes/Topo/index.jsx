import estilos from "./Topo.module.css";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";

export default function Topo() {
  return (
    <div className={estilos.container_topo}>
      <Image src={Logo} alt="logotipo de um óculos" />

      <nav>
        <Link href="#Produtos">Produtos</Link>
        <Link href="#Sobre">Sobre</Link>
        <Link href="#Contato">Contato</Link>
      </nav>
    </div>
  );
}
