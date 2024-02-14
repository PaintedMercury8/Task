import { ButtonContainer,PicnimicBottomContainer,WeAllContainer,MainBackground,ContentBackground,Content,PicnomicWordContainer,PicnomicAiImgContainer,PicnomicImgMainContainer,PicnomicImgContainer,PicnomicImg,PicnomicImgGreyContainer,AiImgContainer,MainHead,Break,SpanEl,MainPara,PageDescription,DescriptionContainer, JoinUs,ButtonPara,ArrowIcon,HummingBeeImg} from "./styledComponents"
import NavBar from "../NavBar"
import { AiImgItems } from "../AiImgItems"

const imagesList=[{id:1,source:"/Pictures/Rectangle 46.png"},{id:2,source:"/Pictures/Rectangle 47.png"},{id:3,source:"/Pictures/Rectangle 48.png"},{id:4,source:"/Pictures/Rectangle 49.png"}]

const MainContainer = ()=>
    <ContentBackground>
    <NavBar/>
    <Content>
        <PicnomicImgMainContainer>
            <PicnomicImgContainer>
                <PicnomicImg src='/Pictures/Group 22.png' />
                <PicnomicImgGreyContainer/>
            </PicnomicImgContainer>
            <WeAllContainer>
                <MainHead>We All <SpanEl> Hate</SpanEl> <SpanEl> <Break/> Pixelated <Break/> Images <HummingBeeImg src="/Pictures/Group 26.png"/> </SpanEl> </MainHead>
            <MainPara>AI Based Image Enhancer </MainPara>
            <DescriptionContainer>
            <PageDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</PageDescription>
            
            </DescriptionContainer>
            </WeAllContainer>
        </PicnomicImgMainContainer>
        <PicnimicBottomContainer>
        <PicnomicAiImgContainer>
                <AiImgContainer>
                    {imagesList.map((eachItem)=>(<AiImgItems data={eachItem} key={eachItem.id}/>))}
                </AiImgContainer>
        </PicnomicAiImgContainer>
        <ButtonContainer><JoinUs>
                <ButtonPara>Join Now</ButtonPara>
                <ArrowIcon src="/Pictures/arrow-right.png"/>
            </JoinUs>
            </ButtonContainer>
        </PicnimicBottomContainer>
    </Content>
    </ContentBackground>
  


export default MainContainer