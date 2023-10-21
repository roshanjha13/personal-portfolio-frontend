import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import { useEffect } from "react";
import Loader from "./components/Header/Loader";
import axios from "axios";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortFolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(
        "http://localhost:3000/api/get-portfolio-data"
      );
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortFolioData();
    }
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
