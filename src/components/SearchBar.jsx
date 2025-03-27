import RestaurantResults from "./RestaurantResults";
export default function SearchBar() {
  const fetchRestaurants = () => {};
  return (
    <div className="bg-stone-50 h-full w-[75%] flex flex-col items-center">
      <h2 className=" text-xl p-5 text-gray-600 ">
        Craving a bite? Just pop in a postcode, and we’ll fetch the tastiest
        restaurants near you!
      </h2>
      <form className="flex flex-col md:flex-row lg-flex-row w-full justify-center items-center rounded gap-3 p-2 shadow-lg">
        <label className="text-xl px-3  text-gray-600" htmlFor="postcode">
          Postcode:
        </label>
        <input
          className="shadow rounded h-[3em] px-4 border-1 border-orange-600 outline-orange-600 hover:border-3"
          id="postcode"
          type="text"
          placeholder="E.g. 'EC4M 7RF'"
        />
        <button
          onClick={fetchRestaurants}
          className="bg-orange-600 h-[3em] px-5 rounded-lg text-white hover:shadow-xl hover:bg-orange-400">
          Go
        </button>
      </form>
      <RestaurantResults />
    </div>
  );
}
