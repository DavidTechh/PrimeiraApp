import React from 'react';
import './style.css'
import Video from '../../assets/video.mp4'
import App from '../../App';

function Home(){
    return (
        <>

            
            <div id='banner'></div>   
            <div id='trailer-conteiner'>
                <div className='content'>
                    <video controls className='trailer'>
                    <source src={Video} />
                    Seu navegador nao possui suporte para videos
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                        Clark Kent/Kal-El é um jornalista de vinte e poucos anos que se sente alienado por poderes além da imaginação. Transportado de Krypton um planeta alienígena avançado para a Terra anos atrás, Clark se pergunta “Por que estou aqui?”. Moldado pelos valores de seus pais adotivos Martha e Jonathan Kent, Clark logo descobre que ter super-habilidades significa tomar decisões extremamente difíceis. E quando o mundo é atacado, Clark deve se tornar o herói conhecido como Superman, não só para brilhar como o último raio de esperança, mas para proteger aqueles que ama.
                        </p>
                        <button className='button'> Comprar ingresso</button>
                        </div> 
                    </div>   
                </div>     
               
   
        </>
    )
}


export default App;
