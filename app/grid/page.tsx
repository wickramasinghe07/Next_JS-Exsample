import React from "react";

const products = [
  {
    id: 1,
    name: "Development of a Industrial park",
    button: "#",
    href: "#",
    imageSrc:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT34IawD3nXe7WNvnAEr1oiyI-KZOn6zpW7-UZgmvERDSoTYEjM",
    imageAlt: "",
  },

  {
    id: 2,
    name: "Road extension through a city and forest area",
    button: "#",
    href: "#",
    imageSrc:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSh_XjeoX__fgxUnBU-L3dLjxCfjMSwnZ-YF6EuifhzZFl0DuBb",
    imageAlt: "",
  },

  {
    id: 3,
    name: "100MW Solar & 500MW Wind power plants",
    button: "#",
    href: "#",
    imageSrc:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTrhDNY18bD5feY9VFd6aqlo1eGC3tE7ZCNBvcVb6ZuJPMYd1oi",
    imageAlt: "",
  },
];

export default function Case() {
  return (
    <div className="p-64 mx-auto bg-white bg-opacity-80 border border-black border-opacity-80  text-3xl text-center ">
      <div className="bg-black bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center ">
        NavBar
      </div>
      <div className="bg-black bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center">
        Main
      </div>

      <div className="bg-black bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center">
        1
      </div>

      <div className="bg-white">
        <h1 className="lg:text-2xl md:text-xl text-gray-900 text-center font-bold tracking-tight sm:text-6xl">
          {" "}
          Case Studies{" "}
        </h1>
        <p className="lg:text-2xl md:text-xl text-gray-600 text-center  text-lg leading-8 sm:text-6xl mt-16">
          {" "}
          Exploring Real-World Success Stories: How SusDev-OS Drives
          Environmental Impact and Sustainability{" "}
        </p>

        <div className="grid grid-cols-auto sm:grid-cols-auto lg:grid-cols-3 gap-4 justify-center mt-16">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-black justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-auto lg:h-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="md:h-full md:w-full lg:h-64 lg:w-64 object-center"
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
                </div>
                <p className=" text-sm text-gray-900 font-medium "></p>
                <div>
                  <button className=" bg-white flex-none w-32 h-10 mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Read More{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black bg-opacity-80 border border-black border-opacity-80 p-20 text-3xl text-center">
          Footer
        </div>
      </div>
    </div>
  );
}
