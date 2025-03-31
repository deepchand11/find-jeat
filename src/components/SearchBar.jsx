import { useState } from "react";
import axios from "axios";
import RestaurantResults from "./RestaurantResults";

export default function SearchBar() {
  const [postCode, setPostCode] = useState("");
  const [status, setStatus] = useState("");
  const [apiResult, setApiResult] = useState([]);
  const isValidPostCode = (postCode) => {
    const regex = /^([A-Z]{1,2}[0-9][0-9A-Z]?) ?([0-9][A-Z]{2})$/i; //regex to validate uk postcode , i is for case insensitivity
    return regex.test(postCode);
  };
  const fetchRestaurants = async (event) => {
    event.preventDefault();
    if (!isValidPostCode(postCode)) {
      setStatus(
        "Please enter a valid UK postcode E.g. 'EC4M 7RF' or 'CF11 8AZ' or 'L4 0TH' "
      );
      return;
    } else {
      try {
        setStatus(
          `Please wait while fetching restaurants delivering to ${postCode}... `
        );
        const res = await axios.get(`http://localhost:5000/api/${postCode}`);
        setApiResult(res.data);
        setStatus(`Restaurants delivering to ${postCode}:`);
      } catch (error) {
        setStatus(
          "Error finding restaurants... please try again with a valid postcode E.g. EC4M 7RF"
        );
      }
    }
  };
  return (
    <div className="bg-stone-50 h-full w-[75%] flex flex-col items-center">
      <h2 className=" text-xl p-5 ">
        Craving a bite? Just pop in a postcode, and we’ll fetch the tastiest
        restaurants near you!
      </h2>
      <form className="flex flex-col md:flex-row lg-flex-row w-full justify-center items-center rounded gap-3 p-2 shadow-lg">
        <label className="text-xl px-3 " htmlFor="postcode">
          Postcode:
        </label>
        <input
          className="shadow rounded h-[3em] px-4 border-1 border-orange-600 outline-orange-600 hover:border-3"
          id="postcode"
          value={postCode}
          type="text"
          onChange={(e) => {
            setApiResult([]);
            setStatus("");
            setPostCode(e.target.value);
          }}
          placeholder="E.g. 'EC4M 7RF'"
        />
        <button
          onClick={fetchRestaurants}
          className="bg-orange-600 h-[3em] px-5 rounded-lg !text-white hover:shadow-xl hover:bg-orange-400">
          Go
        </button>
      </form>

      <RestaurantResults
        apiResult={apiResult}
        postCode={postCode}
        status={status}
      />
    </div>
  );
}
