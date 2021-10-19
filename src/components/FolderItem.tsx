import { IDirectoryItem, IFolderItem } from '../types'

export default ({ item }: { item: IFolderItem }) => {
  return <h1>{item.name}</h1>
}
