import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import DashBoard from "./Components/DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./Actions/DataAction";
import Loading from "./Components/Loading/Loading";
const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);
  return allTickets ? (
    <div style={{ paddingTop: "10px" }}>
      <NavBar />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  ) : (
    <Loading />
  );
};
export default App;
