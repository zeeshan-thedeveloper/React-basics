import { Card, CardContent, Divider, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Headings } from "./Support/Headings/Headings";
import { SimpleTextField } from "./Support/TextFields/TextFields";
import { lightBorder } from "./Theme/borders";
import { SimpleButton } from "./Support/Buttons/Buttons";
import { SimpleLinks } from "./Support/Link/Links";
import SinInForm from "./Components/SinInForm";
import Books from "./Components/Books";
import ResearchArticles from "./Components/ResearchArticles";
import Stories from "./Components/Stories";
import Comics from "./Components/Comics";
import SinUpForm from "./Components/SinUpForm";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Horror from "./Components/Horror";
import LoveStory from "./Components/LoveStory";
import Animated from "./Components/Animated";
function App(props) {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "5%" }}>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/re-search-articles" element={<ResearchArticles />} />
          <Route path="/comics/:id" element={<Comics />} />
          <Route path="/stories" element={<Stories />}>
            <Route index  element={<Horror />} />
            <Route path="horror" element={<Horror />} />
            <Route path="love-story" element={<LoveStory />} />
            <Route path="animated" element={<Animated />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
