import React from "react";
import { FaStar } from "react-icons/fa";

export interface IStarRating {
  ratingValue: number;
  setRating: (arg: React.SyntheticEvent) => void;
}

const StarRating: React.FC<IStarRating> = ({
  ratingValue,
  setRating,
}: IStarRating) => {
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          const adjustedValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                onChange={(e: React.SyntheticEvent) => setRating(e)}
                value={adjustedValue}
                checked={adjustedValue == ratingValue}
                required
              />
              <FaStar
                color={adjustedValue <= ratingValue ? "#01af93" : "#bbb"}
              />
            </label>
          );
        })}
    </div>
  );
};

export default StarRating;
