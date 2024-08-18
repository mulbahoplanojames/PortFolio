import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
