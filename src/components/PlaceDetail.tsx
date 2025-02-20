import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { placesData } from "../../data/data";
import { useState } from "react";

const PlaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const place = placesData.find((p) => p.id === id);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  if (!place) {
    return <div className="text-center text-2xl py-10">Place not found.</div>;
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div
          className="relative w-full h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${place.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              {place.title}
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-10 px-6">
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">About {place.title}</h2>
            <p className="text-lg text-gray-700">{place.description}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-6">History</h2>
            <p className="text-lg text-gray-700">{place.history}</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Popular Games</h2>
            <ul className="list-disc pl-5 space-y-2">
              {place.games.map((game, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {game}
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Location</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg relative">
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <p className="text-gray-600">Loading map...</p>
                </div>
              )}
              <iframe
                src={place.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoaded(true)}
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PlaceDetail;
