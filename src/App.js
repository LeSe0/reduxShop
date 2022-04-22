import React from "react";

// components
import { Box } from "@mui/system";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Header />
      <Content />
    </Box>
  );
}

export default App;
