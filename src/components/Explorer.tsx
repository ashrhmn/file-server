import axios from "axios"
import { useQuery } from "react-query"
import { useRecoilValue } from "recoil"
import { apiUrlState } from "../store"

export default () => {

    const baseUrlState = useRecoilValue(apiUrlState)

    const rootFolderQuery = useQuery('/', () => axios.get(baseUrlState).then(response => response.data))

    return (
        <>
            <h1>Folders</h1>
            {rootFolderQuery.isLoading && <h1>Loading...</h1>}
            {rootFolderQuery.isError && <h1>Error loading...</h1>}
            {rootFolderQuery.isFetched && <h1>Fetched...</h1>}
        </>
    )
}