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

const replaceMyInfoItems = (el, myInfo, dbItems) => {
  if(dbItems.length > 0){
      if(dbItems.filter(item => item.id == el?.id).length == 1){
        if(el.count >= 1){
          return axios.put("http://localhost:8000/myInfo/" + el.id , el)
        }
        else{
          return axios.delete("http://localhost:8000/myInfo/" + el.id)
        }
      }
      else{
        return axios.post("http://localhost:8000/myInfo" , el)
      }
  } 
  else{
    return axios.post("http://localhost:8000/myInfo" , el)
  }
}

const removeMyInfoItems = (el , myInfo , dbItems) => {
  return myInfo.forEach(elem => {
  console.log(el.count);
    if(el.count < 1){
      return axios.delete("http://localhost:8000/myInfo/" + el.id)
    }
  })
}

export const saveData = (myInfo, shopItems, pages, dbShopItems, dbMyInfo) => (dispatch) => {
  const request1 = shopItems.map(el => {
    return replaceShopItems(el, dbShopItems)
  })

  const request2 = myInfo.map(el => {
    return replaceMyInfoItems(el, myInfo, dbMyInfo)
  })

  const request3 = dbMyInfo.map(el => {
    return removeMyInfoItems(el , myInfo , dbMyInfo)
  })

  Promise.all([...request1, ...request2 , ...request3]).then(el => {
    console.log(el);
  })
};
