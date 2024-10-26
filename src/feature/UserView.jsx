import React from "react";
import UseCard from "./UseCard";

import { useSelector, useDispatch } from "react-redux";
import { add } from "./userSlicer";

function UserSlice() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});

  function userInput(event) {
    const { name, value } = event.target;
    setUser((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  const userCard = users.map((user) => <UseCard key={user.id} user={user} />);

  function handleAdd() {
    dispatch(
      add({
        ...user,
        address: {
          street: user.street,
          city: user.city,
          zipcode: user.zipcode,
        },
      })
    );
    setUser({});
  }

  return (
    <div className="main">
      <div className="info-container">
        <input
          name="name"
          type="text"
          id=""
          placeholder="Name"
          onChange={userInput}
          value={user.name || ""}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={userInput}
          value={user.age || ""}
        />
        <input
          name="street"
          type="text"
          placeholder="Street"
          onChange={userInput}
          value={user.street || ""}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          onChange={userInput}
          value={user.city || ""}
        />
        <input
          name="zipcode"
          type="number"
          placeholder="Zipcode"
          onChange={userInput}
          value={user.zipcode || ""}
        />
        <div className="button-container">
          <button className="button-add" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
      <div>{userCard}</div>
    </div>
  );
}

export default UserSlice;
