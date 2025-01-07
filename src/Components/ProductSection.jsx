import React from "react";

const ProductSection = ({
  items,
  itemDetails,
  selectedItem,
  setSelectedItem,
}) => {
  const sendMessegeWp = (item) => {
    const phoneNumber = "+919937822101"; // Your phone number
    const message = `Hello, I am interested in the item: ${item.name}\nDescription: ${item.description}\nPrice: ${item.price}\nImage: ${item.image}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="products" className="py-12">
      <div className="container mx-auto px-4">
        {!selectedItem ? (
          <>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => setSelectedItem(item.name)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              {selectedItem}
            </h2>
            <button
              className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              onClick={() => setSelectedItem(null)}
            >
              Back to Products
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {itemDetails[selectedItem].map((detail, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={detail.image}
                      alt={detail.name}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {detail.name}
                    </h3>
                    <p className="text-gray-600 mt-2 mb-4">
                      Price: {detail.price}
                    </p>
                    <button
                      onClick={() => sendMessegeWp(detail)}
                      className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                    >
                      Select Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
