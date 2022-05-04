import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/slices/fetchingData/actionCreators";

export const saveData = (myInfo, shopItems, pages) => (dispatch) => {
  shopItems.forEach((el, i) => {
    axios
      .patch("http://localhost:8000/shopItems/" + el.id, { ...el })
      .then(() => {
        console.log(myInfo[i] && el.count > 0);
        axios
          .get("http://localhost:8000/myInfo")
          .then((res) => {
            return res.data;
          })
          .then((res) => {
            res[i]?.id == myInfo[i]?.id
              ? axios.patch("http://localhost:8000/myInfo/" + el.id, {
                  ...myInfo[i],
                })
              : axios.post("http://localhost:8000/myInfo", myInfo[i]);
          });
      });
  });
};
