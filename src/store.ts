import { selector } from "recoil";

export const apiUrlState = selector({
    key:'apiUrl',
    get:()=> 'http://localhost:4000'
})