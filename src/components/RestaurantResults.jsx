import RestaurantCard from "./RestaurantCard";
export default function RestaurantResults(props) {
  return (
    <>
      <h2 className=" text-xl p-5 m-2 w-full">{props.status}</h2>

      <div className="flex flex-col justify-stretch gap-5 w-full mb-5">
        {props.fetchedRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} />
          );
        })}
      </div>
    </>
  );
}
