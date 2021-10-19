import axios from 'axios'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { apiUrlState } from '../store'
import { IDirectoryItem, IFileItem, IFolderItem } from '../types'
import FileItem from './FileItem'
import FolderItem from './FolderItem'

export default () => {
  const baseUrlState = useRecoilValue(apiUrlState)

  const rootFolderQuery = useQuery('dir', () =>
    axios
      .get(baseUrlState+'/dir')
      .then((response) => response.data as IFileItem[] | IFolderItem[]),
  )

  return (
    <>
      {rootFolderQuery.isLoading && <h1>Loading...</h1>}
      {rootFolderQuery.isError && <h1>Error loading...</h1>}
      {rootFolderQuery.isFetched && (
        <>
          {rootFolderQuery.data?.map((item) => {
            if (item.type == 'directory') {
              return <FolderItem key={item.path} item={item as IFolderItem} />
            } else {
              return <FileItem key={item.path} item={item as IFileItem} />
            }
          })}
        </>
      )}
    </>
  )
}
