export default function RestaurantCard(props) {
  const restaurant = props.restaurant;

  return (
    <div className="flex border-2 border-orange-600 rounded-lg shadow-lg my-5 p-5 gap-5 justify-between">
      <h3 className="felx-1"> Name: {restaurant.name}</h3>
      <div className="felx-1">
        Cuisines:
        {restaurant.cuisines.map((cuisine, index) => {
          return <p key={index}>{cuisine.name}</p>;
        })}
      </div>
      <div className="felx-1">
        Address:
        <p>{restaurant.address.firstLine}</p>
        <p>{restaurant.address.city}</p>
        <p>{restaurant.address.location.postalCode}</p>
      </div>
      <h3 className="felx-1">Rating /5: {restaurant.rating.starRating}</h3>
    </div>
  );
}
