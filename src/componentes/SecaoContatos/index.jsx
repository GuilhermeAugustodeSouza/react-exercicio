import estilos from './SecaoContatos.module.css';
export default function SecaoContatos(){
    return(
 <section className={estilos.containerSecaoContatos}>
        <h6>Fale Conosco</h6>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes socias ou da central de atendimento.{" "}
        </p>
<div className={estilos.cardContato}>
  
     <div className={estilos.boxCard}>
          <h6>Nossos Contatos</h6>
          <p>Nova Iguaçu- RJ</p>
          <p>(11)99999-0000</p>
          <p>someWhere@unknow.com</p>
        </div>

        <div className={estilos.boxCard}>
          <h6>Nossas Redes Socias</h6>
          <p>/OpticaVida</p>
          <p>@opticaVidaRj</p>
          <p>@opticaVidaRj</p>
        </div>

 </div>

  </section>

    );
}