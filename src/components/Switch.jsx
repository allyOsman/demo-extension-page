import { useState } from "react";
import classNames from "classnames";

export default function Switch() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={classNames(
        "flex w-10 h-5 bg-gray-700 rounded-full translate-all duration-500 shadow-lg",
        {
          "bg-red-600": isSelected,
        }
      )}
    >
      <span
        className={classNames(
          "w-5 h-5 bg-white rounded-full translate-all duration-500 shadow-lg",
          {
            "ml-5": isSelected,
          }
        )}
      />
    </div>
  );
}
