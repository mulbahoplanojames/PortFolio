import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Spinner from "./components/Spinner/Spinner";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const PostOne = React.lazy(() => import("./Pages/Posts/Post_1/PostOne"));
const PostTwo = React.lazy(() => import("./Pages/Posts/Post_2/PostTwo"));
const PostThree = React.lazy(() => import("./Pages/Posts/Post_3/PostThree"));
const PostFour = React.lazy(() => import("./Pages/Posts/Post_4/PostFour"));

// Vercel analytics
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Analytics />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/html-tags" element={<PostOne />} />
            <Route path="/python-in-2024" element={<PostTwo />} />
            <Route path="/javascript-functions" element={<PostThree />} />
            <Route path="/python-libraries" element={<PostFour />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
