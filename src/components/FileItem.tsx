import axios from "axios"
import { useQueryClient } from "react-query"
import { IFileItem } from "../types"

export default ({item}:{item:IFileItem})=>{
    const client = useQueryClient()
    const clickHandler = ()=>{

    }
    return <a href={"http://1.10.11.108:4000/file/"+item.name}>{item.name}</a>
}