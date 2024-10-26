import React from "react";
import { useDispatch } from "react-redux";
import {
  remove as removeUser,
  switchEdit as switchEditUser,
  update,
} from "../feature/userSlicer";

function UseCard(users) {
  const { id, name, age, address, isEdit } = users.user;
  const dispatch = useDispatch();
  const [editUser, setEditedUser] = React.useState({
    name,
    age,
    address: {
      street: address.street,
      city: address.city,
      zipcode: address.zipcode,
    },
  });

  function clickEdit() {
    dispatch(switchEditUser({ id }));
  }

  function clickDelete() {
    dispatch(removeUser({ id }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    if (name === "street" || name === "city" || name === "zipcode") {
      setEditedUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [name]: value,
        },
      }));
    } else {
      setEditedUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  }
  console.log("Edit user", editUser);
  function handleSave() {
    dispatch(
      update({
        id,
        name: editUser.name,
        age: editUser.age,
        street: editUser.address.street,
        city: editUser.address.city,
        zipcode: editUser.address.zipcode,
      })
    );
    dispatch(switchEditUser({ id }));
  }

  const inputNewName = (
    <input
      type="text"
      id="newNameInputElement"
      name="name"
      value={editUser.name}
      style={{ width: "120px" }}
      placeholder="Name"
      onChange={handleInputChange}
    />
  );
  const inputNewAge = (
    <input
      type="number"
      name="age"
      id="newAgeInputElement"
      value={editUser.age}
      style={{ width: "120px" }}
      placeholder="Age"
      onChange={handleInputChange}
    />
  );
  const inputNewStreet = (
    <input
      id="newStreetInputElement"
      name="street"
      type="text"
      value={editUser.address.street}
      style={{ width: "90px" }}
      placeholder="Street"
      onChange={handleInputChange}
    />
  );
  const inputNewCity = (
    <input
      id="newCityInputElement"
      name="city"
      type="text"
      value={editUser.address.city}
      style={{ width: "90px" }}
      placeholder="City"
      onChange={handleInputChange}
    />
  );
  const inputNewZipcode = (
    <input
      id="newInputZipcodeElement"
      name="zipcode"
      type="number"
      value={editUser.address.zipcode}
      style={{ width: "90px" }}
      placeholder="Zipcode"
      onChange={handleInputChange}
    />
  );

  return (
    <div className="user-card">
      <div className="info-card">
        <p>
          <b>NAME:</b> {isEdit ? inputNewName : name}
        </p>
        <p>
          {" "}
          <b>AGE:</b> {isEdit ? inputNewAge : age}
        </p>
        <p>
          <b> ADDRESS:</b>{" "}
          {isEdit ? (
            <>
              {inputNewStreet} {inputNewCity} {inputNewZipcode}
            </>
          ) : (
            ` ${address.street} ${address.city} ${address.zipcode}`
          )}
        </p>
      </div>
      <div className="button-container-edit-and-delete">
        {isEdit ? (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={clickEdit}>
            Edit
          </button>
        )}
        <button className="delete-button" onClick={clickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default UseCard;
