import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyInfo, selectMyInfo } from "./redux/slices/myInfo/myInfo";
import {
  getActivePage,
  selectActivePage,
} from "./redux/slices/pagesSlice/pagesSlice";
import { getShopItems } from "./redux/slices/shopItems/shopItemsSlice";
// components
import { Box } from "@mui/system";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Busket from "./pages/Busket/Busket";

const SHOW_MAIN_PAGE = 0;

function App() {
  const dispatch = useDispatch();
  const activePageSelect = useSelector(selectActivePage);
  const myInfo = useSelector(selectMyInfo);

  useEffect(() => {
    if (myInfo.length === 0) {
      dispatch(getShopItems);
    }
    dispatch(getMyInfo);
    dispatch(getActivePage);
  }, []);

  return (
    <Box>
      <Header />
      {activePageSelect == SHOW_MAIN_PAGE ? <Main /> : <Busket />}
    </Box>
  );
}

export default App;
