import { Key, Utensils } from "lucide-react";

import { Link } from "react-router-dom";

const CategorySelection = ({filterByCategory}) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];
  return (
    <>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-100 mb-8 tracking-tight border-l-4 border-yellow-400 pl-4 flex items-center">
          <Utensils className="w-6 h-6 mr-3 text-blue-500" />
          Quick Filter by Primary Ingredient
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {featuredCategories.map((cat, index) => (
            <Link
              to={`search/${cat}`}
              key={index}
              onClick={()=>filterByCategory(cat)}
              className="bg-gray-800 px-6 py-7 rounded-xl shadow-xl shadow-black/50 transition duration-300 text-center font-semibold text-gray-100 border border-gray-700 hover:border-blue-500 hover:text-blue-400 transform hover:scale-[1.05] hover:bg-gray-700/50"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategorySelection;