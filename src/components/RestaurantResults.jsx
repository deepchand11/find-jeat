import RestaurantCard from "./RestaurantCard";
export default function RestaurantResults(props) {
  return (
    <>
      {props.apiResult && (
        <h2 className=" text-xl p-5 text-gray-600 ">
          Restaurants delivering to {props.postCode}
        </h2>
      )}

      <div className="flex flex-col justify-stretch gap-5">
        {props.apiResult.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
    </>
  );
}
