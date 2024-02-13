import { AiImgItem } from "./styledComponents";

export const AiImgItems = (props)=>{
    const {data} = props
    const {source} = data
    console.log(source)
    return(<AiImgItem src={`${source}`}/>)
}

export default AiImgItems