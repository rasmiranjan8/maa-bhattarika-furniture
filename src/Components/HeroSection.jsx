const HeroSection=()=>{
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: `url('/landingPage.webp')` }}
    >
      <div className="bg-black bg-opacity-40 p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-4">
          Crafting Dreams in Wood
        </h2>
        <p className="text-lg text-gray-200">
          Explore our premium wooden furniture collection.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;