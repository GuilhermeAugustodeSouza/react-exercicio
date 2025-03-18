import estilos from "./SecaoProdutos.module.css";
import oculos01 from "../../../public/oculos01.png";
import oculos02 from "../../../public/oculos02.png";
import oculos03 from "../../../public/oculos03.png";
import oculos04 from "../../../public/oculos04.png";
import Image from 'next/image';
export default function SecaoProdutos(){
    return(
        <section id='Produtos' className={estilos.containerProdutos}>
            <h2>Nossos Produtos</h2>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado. </p>   
            
            <div className={estilos.containerBox}>
            <div className={estilos.boxProdutos}>
                <h3>Óculos de grau</h3>
                <Image src={oculos01}/>
                <p>R$ 500,00</p>
            </div>

            <div className={estilos.boxProdutos}>
                <h3>Òculos transition</h3>
                <Image src={oculos02}/>
                <p>R$ 750,00</p>
           </div>

            <div className={estilos.boxProdutos}>
                <h3>Òculos de sol</h3>
                <Image src={oculos03}/>
                <p>R$ 700,00</p>
            </div>

            <div className={estilos.boxProdutos}>
               <h3>Òculos infantil</h3>
               <Image src={oculos04}/>
               <p>R$ 500,00</p>
            </div>
            
            </div>  
            <h4>Todos os nossos produtos incluem:</h4>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade no pagamento</li>
            </ul>

        </section>

    )
}