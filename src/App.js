import React, { useState } from "react";
// components
import { Box } from "@mui/system";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Busket from "./pages/Busket/Busket";

function App() {
  const [activePage, setActivePage] = useState(0);

  const pages = [<Main />, <Busket />];

  return (
    <Box>
      <Header setActivePage={setActivePage} activePage={activePage} />
      {pages[activePage]}
    </Box>
  );
}

export default App;
