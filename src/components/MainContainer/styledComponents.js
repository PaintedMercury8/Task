import styled from 'styled-components'


export const MainBackground = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#000000;

`

export const ContentBackground = styled.div`
    margin-top:0px;
    width:100vw;
    height:100vh;
    background:linear-gradient(to bottom,#D9D9D9,#F8FFCC);
    padding-top:2vh;
    display:flex;
    flex-direction:column;
`

export const Content=styled.div`
    flex-grow:1;
    padding-top:10vh;
    padding-bottom:5vh;
    padding-left:5vw;
    padding-right:5vw;
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    `
export const PicnomicImgMainContainer=styled.div`
height:65%;
width:100%;
background-color:transparent;
display:flex;
`
export const PicnomicImgContainer=styled.div`
    height:100%;
    width:70%;
    background-color:#ffffff;
    padding:1.5vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:20px;
`
export const PicnomicImg = styled.img`
margin-left:2vw;
height:2vh;
width:19vw;
margin-top:5vh;
height:10vh;
margin-bottom:5vh;
`
export const PicnomicImgGreyContainer=styled.div`
    background-color:#f6f6f6;
    height:100%;
    width:100%;
    border-radius:10px;
`

export const PicnomicAiImgContainer = styled.div`
    height: 100%;
    background-color:#ffffff;
    margin-top:2vh;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    padding:1.5vh;
    width:70%;
`
export const AiImgContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#f7f7f7;
    border-radius:10px;
   
`

export const PicnomicWordContainer=styled.div`
    background-color:transparent;
    flex-grow:1;
    height:100%;
    margin-left:50px;
    padding-left:30px;
    padding-right:30px;
    padding-top:10px;
    line-height:2;
`

export const MainHead = styled.h1`
    font-weight:800;
    font-size:6vw;
    margin-top:0.5vh;
    font-style:"Inter";
    line-height:9vh;
    margin-bottom:0px;
    @media screen and (max-width:1200px){
        font-size:8vh;
        line-height:7vh;
    }
`

export const MainPara = styled.p`
font-size: 1.7vw;
font-weight: 700;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
color:#718400;
margin-top:3.5vh;
margin-bottom:0px;
@media screen and (max-width:1200px){
    margin-top:2vh;
    font-size:2.3vh;
}
`

export const PageDescription = styled.p`
font-size: 1.8vh;
font-weight: 400;
line-height: 2.5vh;
letter-spacing: 0em;
text-align: left;
margin-top:3vh;
font-family:"Inter";
color:#686868;
@media screen and (max-width:1200px){
    margin-top:2vh;
}
`

export const DescriptionContainer = styled.div`
    width:43%;

`

export const Break  = styled.br``

export const SpanEl = styled.span`
background: -webkit-linear-gradient(#99AE1A,#778A00 );
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const ButtonContainer = styled.div`
width:100%;
margin-left:5vh;
display:flex;
flex-direction:column;
justify-content:flex-start;
`

export const JoinUs = styled.button`
    width:12vw;
    height:2vw;
    background-color:#E1FF2B;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:none;
    padding-left:20px;
    padding-right:20px;
    border-radius:20px;
    box-shadow: 0px 3px 5px 0px #0000000A;
    cursor:pointer;
    margin-top:10px;
    margin-top:5%;
`

export const ButtonPara = styled.p`
font-size: 0.6vw;
font-weight: 500;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
`
export const ArrowIcon = styled.img`
width:0.6vw;
height:0.6vw;
`

export const HummingBeeImg = styled.img`
    display:inline-block;
    position: absolute;
    width:38vw;
    right:3vw;
    transform: translateY(-4.5vw);
    
    
`
export const WeAllContainer = styled.div`
width:100%;
margin-left:5vh;
`

export const PicnimicBottomContainer=styled.div`
    display:flex;
    width:100%;
    height:30%;
`