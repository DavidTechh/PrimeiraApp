import React from 'react';
import './styles.css';


function Header(){
    
 return (
    <div>

        <nav>

            <ul>
                <link to='/'>
                    <li>Home</li>
                </link>

                <link to='/fotos'>
                    <li>Fotos</li>
                </link>
                <link to='/contatos'>
                    <li>contato</li>
                </link>
                <link to='/comentarios'>
                    <li>comentarios</li>
                </link>
            </ul>
        </nav>

    </div>
 )
           

}

export default Header;