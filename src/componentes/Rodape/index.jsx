import estilos from "./Rodape.module.css";
export default function Rodape() {
  return (
    <div>
      <footer className={estilos.container_footer}>
        <p>© 2024 Óticas Vida. - Todos os direitos reservados. </p>
      </footer>
    </div>
  );
}
