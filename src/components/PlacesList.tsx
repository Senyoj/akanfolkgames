import { Link } from "react-router-dom";

const placesData = [
  { id: "akyem", title: "Akyem Abuakwa Kingdom", image: "/akyem.jpg" },
  { id: "bono", title: "Bono Kingdom", image: "/bono.jpg" },
  { id: "asante", title: "Asante Kingdom", image: "/asante.jpg" },
];

const PlacesList = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Explore Kingdoms</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {placesData.map((place) => (
          <Link key={place.id} to={`/places/${place.id}`} className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold">{place.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlacesList;
