import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./Pages/Home/Home";
import PostOne from "./Pages/Posts/Post_1/PostOne";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/html-tags" element={<PostOne />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
