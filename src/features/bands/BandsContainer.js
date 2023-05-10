import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";
import Band from "./Band";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);
  // const bandsList = bands.map((band) => <Band key={band.id} band={band} />)
  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }
  // const bandList = 

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        {/* <div> */}
        {bands.map((band) => <Band key={band.id} band={band} />)}
        {/* </div> */}
      </ul>
    </div>
  );
}

export default BandsContainer;
/*
Displays a band component for each band being returned by the redux store

*/