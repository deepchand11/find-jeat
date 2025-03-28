import RestaurantCard from "./RestaurantCard";
export default function RestaurantResults(props) {
  return (
    <>
      <p>
        {props.apiResult.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </p>
    </>
  );
}
