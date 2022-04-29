import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMyInfo } from "./redux/slices/myInfo/myInfo";
// components
import { Box } from "@mui/system";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Busket from "./pages/Busket/Busket";
import { addElements } from "./redux/slices/shopItems/actionCreators";
import axios from "axios";
import { changeElementsInBusketAction } from "./redux/slices/myInfo/actionCreators";

function App() {
  const [activePage, setActivePage] = useState();
  const pages = [<Main />, <Busket />];

  const dispatch = useDispatch();
  let myInfo = useSelector(selectMyInfo);

  useEffect(() => {
    axios
      .get("http://localhost:8000/myInfo")
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        dispatch(changeElementsInBusketAction(res));
      });
    axios
      .get("http://localhost:8000/shopItems")
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        if (myInfo.length === 0) {
          dispatch(addElements(res));
        }
      });
    axios
      .get("http://localhost:8000/pages")
      .then((res) => {
        return res.data.activePage;
      })
      .then((res) => setActivePage(res));
  }, []);

  return (
    <Box>
      <Header setActivePage={setActivePage} activePage={activePage} />
      {pages[activePage]}
    </Box>
  );
}

export default App;
