import estilos from "@/componentes/SecaoSobre/SecaoSobre.module.css";
import Image from "next/image";
import Logo from "../../../public/atendimento.png";
import Logo2 from "../../../public/loja.png";

export default function SecaoSobre() {
  return (
    <section className={estilos.containerSecaoSobre}>
    
        <h3>Quem somos nós</h3>
        <p>
          Fundada em 2001, em Nova-Iguaçu Rio de janeiro, a óptica vidas iniciou
          suas atividades focada no atendimento ao público de renda mais baixa,
          sempre com o ojetivo de proporcionar ao cliente, bom atendimento,
          qualidade e preço baixo.
        </p>

        <div className={estilos.containerCards}>
         
           <Image src={Logo} alt="Remédios em uma farmacia" />
         

          <div className={estilos.card}>
            <h3>NOSSAS FILIAIS</h3>
            <p> Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

                   

          <div className={estilos.card}>
            <h3>ATENDIMENTO FLEXÍVEL</h3>
            <p> Nossa equipe é treinada para te atender </p>
          </div>
          
          <Image src={Logo2} alt="Foto a loja farmacia" />

        </div>
   

      
    </section>
  );
}
