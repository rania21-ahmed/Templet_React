import styled from 'styled-components';

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden
`

export let ProfilE =styled.div`
    width: 50%;
    float: left;
`

export let ProfileLIst =styled.ul`
list-style: none
`
export let ProfileItem =styled.li`
margin-bottom: 8px
`
export let Span=styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const SpanWeb =styled.span`
font-weight: normal;
color: #eb5424
`

export const Skills=styled.div`
width: 50%;
float: left;
`

export const SkillsDesc =styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px

`

export let Bar =styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export let BarTitle =styled.span`
float: left
`

export let BarPerc =styled.span`
float: right;
margin-right: 100px
`

export let BarParent =styled.span`

    height: 2px;
    clear: both;
    background: #333;
    position: relative;
    top: 5px;
    width :${props => props.sp === 1 ? '100%' :''};
    width :${props => props.sp === 2 ? '90%' :''};
    width :${props => props.sp === 3 ? '800%' :''};

`

export let BarSpan =styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    
`


/*.profile_skills .skills .bar .parent span.sp1 {
    width: 100%
}

.profile_skills .skills .bar .parent span.sp2 {
    width: 90%
}

.profile_skills .skills .bar .parent span.sp3 {
    width: 80%;
}*/

export const  ProfileAndSkills =styled.div`
font-size: 40px; 
margin-bottom: 20px
`
export const ProfileskillsSpan =styled.span`
    font-weight: normal
`

