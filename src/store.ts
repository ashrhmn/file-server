import { selector } from "recoil";

export const apiUrlState = selector({
    key:'apiUrl',
    get:()=> 'http://1.10.11.108:4000'
})