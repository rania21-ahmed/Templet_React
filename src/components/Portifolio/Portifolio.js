import React ,{useState ,useEffect} from "react";
import {PortfolioSection,PortfolioTitle,ActiveSpan,Span,PortfolioList,PortfolioItem,ImageWerapper,Image,OverLay,OverLaySpan} from './styleportifolio.js'
import axios from "axios";
const Portifolio =()=>{

    const [images ,setImages] =useState([])

    useEffect(()=>{
        axios.get('js/data.json').then(res =>{setImages(res.data.portfolio)})
    },[])

    const PortfolioImages =images.map((imageItem)=>{
        return(
            <ImageWerapper key={imageItem.id}>
                <Image src={imageItem.image} alt="" />
                <OverLay>
                    <OverLaySpan>
                        Show Image
                    </OverLaySpan>
                </OverLay>
            </ImageWerapper>
        )
    })

    return(
        <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem > <ActiveSpan>All</ActiveSpan></PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        
        <div className="box">
            
            {PortfolioImages}
            
        </div>
        
    </PortfolioSection>
    )
}

export default Portifolio;