import React from "react";
import { Link } from "react-router-dom";


import {NavbarSection ,LogoSection,LogoText,UlList,ListItem,Ancors} from './style.js'


const Navbar =()=>{

    return(
        // Navbar 
        <NavbarSection>
            
            <NavbarSection className="container">
                
                <LogoSection>
                    <LogoText>Ultra Profile</LogoText>
                </LogoSection>
                
                <UlList>
                    <ListItem><Link className="ancors" to="/">Home</Link></ListItem>
                    <ListItem><Ancors href="#">Work</Ancors></ListItem>
                    <ListItem><Ancors href="#">Portfolio</Ancors></ListItem>
                    <ListItem><Ancors href="#">Resume</Ancors></ListItem>
                    <ListItem><Ancors href="#">About</Ancors></ListItem>
                    <ListItem><Link className="ancors" to="/contact">Contact</Link></ListItem>
                </UlList>
                
            </NavbarSection>
            
        </NavbarSection>
    )
}

export default Navbar;