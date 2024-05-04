import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(-1);
  /*
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL+resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  */

  if (resInfo === null) return <Shimmer />;
  else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    const categories =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    /* console.log(itemCards)
     console.log(categories) */

    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/* categories accordion */}
        {categories.map((category,index) => (
          //Controlled component
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index == showIndex? true: false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    );
  }
};

export default RestaurantMenu;
