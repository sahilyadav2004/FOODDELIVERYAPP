import React, { useContext } from "react";
import Header from "../components/Header.jsx";
import Fooddisplay from "../components/Fooddisplay.jsx";
import Exploremenuslider from "../components/Exploremenuslider.jsx";
import { useState } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
const Home = () => {
  const [category, setcategory] = useState("All");
  const { email, setemail } = useContext(StoreContext);
  return (
    <div >
      <Header />
      {email ? (
        <>
          <Exploremenuslider category={category} setcategory={setcategory} />
          <Fooddisplay category={category} />{" "}
        </>
      ) : (
        <div className="m-auto text-center w-full font-extrabold text-2xl">Please login or sigin</div>
      )}
    </div>
  );
};

export default Home;
