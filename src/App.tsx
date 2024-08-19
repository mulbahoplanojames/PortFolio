import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./Pages/Home/Home";
import PostOne from "./Pages/Posts/Post_1/PostOne";
import PostTwo from "./Pages/Posts/Post_2/PostTwo";
import PostThree from "./Pages/Posts/Post_3/PostThree";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/html-tags" element={<PostOne />} />
          <Route path="/python-in-2024" element={<PostTwo />} />
          <Route path="/javascript-functions" element={<PostThree />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
