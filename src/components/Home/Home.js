import React from "react";
import {HomeSection,HomeInformation,HomeTitel,HomeInfo,HomeDesc,HomeSpan,HomeBtn} from './styleHome.js'


const Home =()=>{

    return(

        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitel>Rania Ahmed Abdelfattah</HomeTitel>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <HomeSpan>Front End React js</HomeSpan> and Full Stack Developer creating modern and resposive designs to Web . Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;