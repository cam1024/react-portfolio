import React from "react";
import Project from "../Project";
import plantAppImg from "../../images/plant-social-media-image.jpg";
import passGenImg from "../../images/generator capture.jpg";
import bseImg from "../../images/BSE-clip.gif";

const ccpApp = {
    title: 'Crypto-conversion-project',
    description: 'search cryptocurrency',
    link: "N/A",
    github: 'https://github.com/cam1024/Crypto-conversion-project',

}
const techlog = {
    title: "tech blog",
    description: "snippet editor",
    link: " https://techology.herokuapp.com/",
    github: "https://github.com/cam1024/techlog",
}
const plantApp = {
    img: plantAppImg,
    title: "Botany Plants Lately",
    description: "plant social media",
    link: "https://fierce-hamlet-24576.herokuapp.com/",
    github: "https://github.com/cam1024/Botany-plants-lately",

}
const passGen = {
    img: passGenImg,
    title: "Password Generator",
    description: "Password Generator",
    link: "https://cam1024.github.io/password-generator/",
    github: "https://github.com/cam1024/password-generator",
}

const bse = {
    img: bseImg,
    title: "Looking Books?",
    description: "Mern Stack",
    link: "N/A",
    github: "",
}

const styles={
    folioStyle:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}

export default function Portfolio() {
    return (
        <div style={styles.folioStyle}>
            <Project title={ccpApp.title} description={ccpApp.description} link={ccpApp.link} github={ccpApp.github} />

            <Project title={techlog.title} description={techlog.description} link={techlog.link} github={techlog.github} />

            <Project img={plantApp.img} title={plantApp.title} description={plantApp.description} link={plantApp.link} github={plantApp.github} />

            <Project img={passGen.img} title={passGen.title} description={passGen.description} link={passGen.link} github={passGen.github} />

            <Project img={bse.img} title={bse.title} description={bse.description} link={bse.link} github={bse.github} />

            
        </div>
    )
}