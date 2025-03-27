import SearchBar from "./components/SearchBar.jsx";
import RestaurantResults from "./components/RestaurantResults";
export default function App() {
  return (
    <div className="flex flex-col justify-start items-center h-screen w-full bg-stone-100 gap-3">
      <h1 className="text-5xl font-bold text-orange-600 p-10 pacifico-regular">
        Find a JEat!
      </h1>
      <h2 className=" text-2xl">
        Craving a bite? Just pop in a postcode, and we’ll fetch the tastiest
        restaurants near you!
      </h2>
      <SearchBar />
      <RestaurantResults />
    </div>
  );
}
