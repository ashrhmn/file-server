export interface IFolderItem{
    name:string,
    type:string,
    path:string
}

export interface IFileItem extends IFolderItem{
    ext:string,
    size:number
}

export interface IDirectoryItem{
    name:string,
    type:string,
    path:string,
    ext?:string,
    size?:number
}