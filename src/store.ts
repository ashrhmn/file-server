import { selector } from "recoil";

export const apiUrlState = selector({
    key:'apiUrl',
    get:()=> 'localhost:4000'
})