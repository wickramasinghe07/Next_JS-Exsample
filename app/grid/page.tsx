import React from "react";

const products = [
  {
    id: 1,
    name: "Development of a Industrial park",
    button: "#",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRBIfZh8-Npwi4TmdCogfnEulsqiYEMqTVg&s",
    imageAlt: "",
  },

  {
    id: 2,
    name: "Road extension through a city and forest area",
    button: "#",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRBIfZh8-Npwi4TmdCogfnEulsqiYEMqTVg&s",
    imageAlt: "",
  },

  {
    id: 3,
    name: "100MW Solar & 500MW Wind power plants",
    button: "#",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRBIfZh8-Npwi4TmdCogfnEulsqiYEMqTVg&s",
    imageAlt: "",
  },
];

export default function Grids() {
  return (
    <div className="mx-auto bg-white bg-opacity-80 border border-black border-opacity-80 p-60 text-3xl text-center ">
      <div className="bg-black bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center ">
        NavBar
      </div>
      <div className="bg-black bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center">
        Main
      </div>

      <div className="bg-black bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center">
        1
      </div>

      {/* My task is to create a grid of case studies   */}
      {/*I use the grid component to crate a grid of case studies*/}

      <div className="mt-[-86px] sm:px-auto sm:py-40">
        <h2 className=" text-3xl font-outfit font-bold tracking-tight text-gray-900 sm:text-4xl mx-auto max-w-2xl sm:text-center">
          Case Studies
        </h2>
        <p className=" font-outfit mt-8 text-lg leading-8 text-gray-600 mx-auto max-w-2xl sm:text-center">
          Exploring Real-World Success Stories: How SusDev-OS Drives
          Environmental Impact and Sustainability{" "}
        </p>

        <div className=" flex h-screen items-center justify-center mt-[-200px] grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 sm:text-center ">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="mx-auto aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-auto lg:h-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" md:h-full md:w-48 lg:h-64 lg:w-64 object-center"
                />
              </div>

              <div className="mt-4 flex-colum justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-10 text-sm text-gray-500  font-bold "></p>
                </div>
                <p className=" text-sm font-medium text-gray-900  "></p>
                <div>
                  <button
                    className="flex-none w-32 h-10 mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline
                 focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {" "}
                    Read More{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black mt-[-200px] bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center">
        3
      </div>

      <div className="bg-black bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center">
        Footer
      </div>
    </div>
  );
}
