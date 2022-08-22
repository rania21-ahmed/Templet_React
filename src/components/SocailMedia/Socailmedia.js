import React ,{Component} from "react";
import {SocialSection,Social,Icon,SocialP,Span,InfoSpan} from './style.js';
import axios from 'axios';

class SocailMedia extends Component{

    state ={
        socail : []
    }

    componentDidMount(){
        axios.get('js/data.json').then(res => {
            this.setState({socail : res.data.social})
        })
    }


    render(){

        const {socail} =this.state;
        const ListSocail =socail.map( (socailItem )=>{
            return(
                <Social item={socailItem.id} key={socailItem.id}>
                <Icon className={socailItem.icon}></Icon>
                <SocialP>
                    <Span >{socailItem.title}</Span>
                    <InfoSpan>{socailItem.body}</InfoSpan>
                </SocialP>
            </Social>
            )
        })
        return(
            <SocialSection>
                
                {ListSocail}
                
            </SocialSection>
        )
    }
}
//Uncaught TypeError: Class extends value undefined is not a constructor or null
export default SocailMedia;