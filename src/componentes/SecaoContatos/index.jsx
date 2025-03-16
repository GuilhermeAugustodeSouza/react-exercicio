import estilos from './SecaoContatos.module.css';
import Image from 'next/image';
import Logo from '../../../public/email.png';
import Facebook from '../../../public/fb.png';
import Instagram from '../../../public/ig.png';
import Fone from '../../../public/telefone.png';
import Twiter from '../../../public/tt.png';


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
          <p><Image src={Fone}/>(11)99999-0000</p>
          <p> <Image src={Logo}/>someWhere@unknow.com</p>
        </div>

        <div className={estilos.boxCard}>
          <h6>Nossas Redes Socias</h6>
          <p><Image src={Twiter}/>OpticaVida</p>
          <p> <Image src={Facebook}/>@opticaVidaRj</p>
          <p> <Image src={Instagram}/>@opticaVidaRj</p>
        </div>

 </div>

  </section>

    );
}