import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/slices/fetchingData/actionCreators";

const replaceShopItems = (el, dbItems) => {
  return dbItems.forEach(elem => {
        if(elem.id == el.id && elem.itemsLeft != el.itemsLeft){
          return axios.put("http://localhost:8000/shopItems/" + el.id, { ...el })  
        }
      })
}

const replaceMyInfoItems = (el, dbItems) => {
  return dbItems.forEach(elem => {
          if(elem.id == el.id){
            if(el.count > 0){
              axios.put("http://localhost:8000/myInfo/" + el.id, el)
            }
            else{
              axios.post("http://localhost:8000/myInfo" , el)
            }
          }
        })
}

export const saveData = (myInfo, shopItems, pages) => (dispatch) => {

  const dbShopItems = axios.get('http://localhost:8000/shopItems').then(res => res.data)
  const dbMyInfo = axios.get('http://localhost:8000/myInfo').then(res => res.data)

  console.log(dbShopItems);

  const request1 = shopItems.map(el => {
    return replaceShopItems(el, dbShopItems)
  })
  console.log(request1);

  const request2 = myInfo.map(el => {
    return replaceMyInfoItems(el, dbMyInfo)
  })

  Promise.all([...request1, ...request2]).then(el => {
    console.log(el);
  })
};
