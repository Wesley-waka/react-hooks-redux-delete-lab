import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    // create reducer methods
    bandAdded(state, action) {
      // -change structure in which each band is rendered its own id

      state.entities.push({
        // -band object should include name and id

        id: uuid(),
        name: action.payload
      });
    },
    bandRemoved(state, action) {
      const index = state.entities.findIndex((band) => band.id === action.payload);
      state.entities.splice(index, 1);
    }

  },
});

// export the action creators
export const { bandAdded, bandRemoved } = bandsSlice.actions;

export default bandsSlice.reducer;
/*
-new action deleting a band called bandRemoved-should remove band from store using id(export)



*/