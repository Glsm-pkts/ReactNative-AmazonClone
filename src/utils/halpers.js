import { FontAwesome } from "@expo/vector-icons";

export const getRating = (rating) => {
  const ratingStar = [];

  const fullStar = <FontAwesome name="star" color="#ffa41c" size={10} />;

  const halfStar = (
    <FontAwesome name="star-half-empty" color="#ffa41c" size={10} />
  );

  const emptyStar = <FontAwesome name="star-o" color="#ffa41c" size={10} />;

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(fullStar);
    } else {
      ratingStar.push(emptyStar);
    }
  }
  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = halfStar;
  }

  return ratingStar;
};