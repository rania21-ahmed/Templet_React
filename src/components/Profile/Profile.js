import React ,{useState,useEffect} from "react";
import {ProfileSkills,ProfilE,ProfileLIst,ProfileItem,Span,SpanWeb,Skills,SkillsDesc,Bar,BarTitle,BarPerc,BarParent,BarSpan,ProfileAndSkills,ProfileskillsSpan} from './styleProfile.js'

import axios from "axios"

const Profile =()=>{

    const [bars ,setBar]=useState([])

    useEffect(()=>{
        axios.get('js/data.json').then(res =>{setBar(res.data.bar)})
    },[])


    const BarData =bars.map((barItem)=>{
        return(
            <Bar key={barItem.id}>
                    <BarTitle>{barItem.title}</BarTitle>
                    <BarPerc>{barItem.perc}</BarPerc>
                    <BarParent sp ={barItem.id}>
                        <BarSpan ></BarSpan>
                    </BarParent>
                </Bar>
        )
    })

    return(
        <ProfileSkills>
        <div className="container">
            <ProfilE>
                <ProfileAndSkills><ProfileskillsSpan>My </ProfileskillsSpan>Profile</ProfileAndSkills>
                <ProfileLIst>
                    <ProfileItem>
                        <Span>Name</Span>
                        Rania Ahmed
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Birthday</Span>
                        16/11/1999
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Address</Span>
                        Banha
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Phone</Span>
                        4444 5555 6666
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Email</Span>
                        raniaaabdelfatah@gmail.com
                    </ProfileItem>
                    <ProfileItem>
                        <Span>Website</Span>
                        <SpanWeb>www.google.com</SpanWeb>
                    </ProfileItem>
                </ProfileLIst>
            </ProfilE>
            
            <Skills>
                <ProfileAndSkills>Some <ProfileskillsSpan>skills</ProfileskillsSpan></ProfileAndSkills>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
               
                {BarData}
                
            </Skills>
            
        </div>
    </ProfileSkills>
    )
}

export default Profile;