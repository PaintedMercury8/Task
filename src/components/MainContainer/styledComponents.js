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
    width:82%;
    max-width:1570px;
    height:88%;
    background:linear-gradient(to bottom,#D9D9D9,#F8FFCC);
    border-radius:10px;
`

export const Content=styled.div`
    padding-top:5%;
    padding-bottom:3%;
    padding-left:5%;
    padding-right:5%;
    height:calc(100% - 10%);
    width:100%;
    display:flex;
    flex-direction:column;
    `
export const PicnomicImgMainContainer=styled.div`
height:70%;
width:100%;
background-color:transparent;
display:flex;
`
export const PicnomicImgContainer=styled.div`
    height:100%;
    width:70%;
    background-color:#ffffff;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:20px;
`
export const PicnomicImg = styled.img`
margin-left:100px;
height:86.39px;
width:326px;
margin-top:30px;
margin-bottom:30px;
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
    margin-top:10px;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    padding:10px;
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
    line-height:1;
`

export const MainHead = styled.h1`
    font-weight:800;
    font-size:100px;
    margin:0px;
    font-style:"Inter";
    line-height:88.57px;

`

export const MainPara = styled.p`
font-size: 28px;
font-weight: 700;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
color:#718400;
margin-top:25px;
margin-bottom:0px;
`

export const PageDescription = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 21.78px;
letter-spacing: 0em;
text-align: left;
margin-top:0px;
margin-top:20px;
font-family:"inter";
`

export const DescriptionContainer = styled.div`
    width:48%;

`

export const Break  = styled.br``

export const SpanEl = styled.span`
background: -webkit-linear-gradient(#99AE1A,#778A00 );
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const ButtonContainer = styled.div`
width:100%;
margin-left:30px;
display:flex;
flex-direction:column;
justify-content:flex-start;
`

export const JoinUs = styled.button`
    width:242px;
    height:48px;
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
font-size: 12px;
font-weight: 500;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
`
export const ArrowIcon = styled.img`
`

export const HummingBeeImg = styled.img`
    display:inline-block;
    position:absolute;
    right:6%;
    width:37%;
    transform: translateY(-30%);
`
export const WeAllContainer = styled.div`
width:100%;
margin-left:30px;
`

export const PicnimicBottomContainer=styled.div`
    display:flex;
    width:100%;
    height:30%;
`