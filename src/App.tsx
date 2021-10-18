import Explorer from "./components/Explorer"
import FileItem from "./components/FileItem"
import FolderItem from "./components/FolderItem"

export default ()=>{
  return <>
    <h1 className="text-blue-600">Hello</h1>
    <Explorer/>
    <FileItem/>
    <FolderItem/>
  </>
}