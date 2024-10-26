import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const dataStore = [
  {
    id: 1,
    name: "Trina Kaye",
    age: 23,
    address: {
      street: "English St",
      city: "Marikina City",
      zipcode: "1700",
    },
    isEdit: false,
  },
];

const userSlice = createSlice({
  name: "USER",
  initialState: dataStore,
  reducers: {
    add: (state, action) => {
      return [...state, { ...action.payload, id: nanoid(), isEdit: false }];
    },
    remove: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
    switchEdit: (state, action) => {
      const user = state.find((user) => user.id === action.payload.id);
      if (user) {
        user.isEdit = !user.isEdit;
      }
    },
    update: (state, action) => {
      const { id, name, age, street, city, zipcode } = action.payload;
      const user = state.find((user) => user.id === id);
      if (user) {
        user.name = name;
        user.age = age;
        user.address.street = street;
        user.address.city = city;
        user.address.zipcode = zipcode;
      }
    },
  },
});

export default userSlice.reducer;
export const { add, remove, switchEdit, update } = userSlice.actions;
