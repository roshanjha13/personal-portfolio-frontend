import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import { useEffect } from "react";
import Loader from "./components/Header/Loader";
import axios from "axios";
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from "./redux/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./pages/Admin/Admin";

function App() {
  const { loading, portfolioData,reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortFolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(
        "http://localhost:3000/api/get-portfolio-data"
      );
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false))
      // we add reload data for add and delete item
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

  useEffect(()=>{
    if (reloadData) {
      getPortFolioData()
    }
  },[reloadData])
  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
