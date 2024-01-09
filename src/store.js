import { reactive } from "vue";
export const store= reactive({
    cardlistgeneral:[],
    cardlist:[],
    typeCardlist:[],
    apiUrl:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",
    TypeChoose:'',
    loading: true
})