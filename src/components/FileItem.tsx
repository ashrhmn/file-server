import { IDirectoryItem, IFileItem, IFolderItem } from "../types"

export default ({item}:{item:IFileItem})=>{
    return <h1>{item.name}</h1>
}