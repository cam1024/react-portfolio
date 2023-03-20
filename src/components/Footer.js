import React from 'react';
import '../styles/Footer.css'


const styles ={
    footerStyle: {
        background:'#0F1A18',
        color:'#D3DFB8',
        position: 'fixed',
        left:0,
        bottom:0,
       
    }
}
export default function Footer() {
    return(
        <div style={styles.footerStyle} className="footer">
        <a href='https://github.com/cam1024' className="fa-brands fa-github fa-3x"></a>

        <a href='https://www.linkedin.com/in/cameron-duran-a848a2269/' className="fa-brands fa-linkedin fa-3x"></a>
        </div>
    )
}