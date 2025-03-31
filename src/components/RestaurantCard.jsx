export default function RestaurantCard(props) {
  const restaurant = props.restaurant;

  return (
    <div className="flex flex-col lg:flex-row md:flex-row border-2 border-orange-600 rounded-lg shadow-lg p-5 gap-2  w-full">
      <h3 className="flex-1 ">
        <strong>Name:</strong> <p>{restaurant.name}</p>
      </h3>
      <div className="flex-1 ">
        <strong>Cuisines:</strong>
        {restaurant.cuisines.map((cuisine, index) => {
          return <p key={index}>{cuisine.name}</p>;
        })}
      </div>
      <div className="flex-1 ">
        <strong> Address:</strong>
        <p>{restaurant.address.firstLine}</p>
        <p>{restaurant.address.city}</p>
        <p>{restaurant.address.postalCode}</p>
      </div>
      <h3 className="flex-1">
        <strong>Rating:</strong> <p>{restaurant.rating.starRating} /5</p>
      </h3>
    </div>
  );
}
