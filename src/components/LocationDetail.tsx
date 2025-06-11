import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const placesData = [
  {
    id: "akyem",
    title: "Akyem Abuakwa ",
    description:
      "The Akyem  is one of the most powerful and historical regions in Ghana, known for its rich culture and strong heritage.",
    history:
      "The Akyem people are part of the Akan ethnic group and have played a significant role in Ghana's history, especially during the Ashanti wars. The  was known for its fierce warriors and rich traditions that have been preserved for centuries.",
    games: [
      "Oware (Traditional Board Game)",
      "Ampe (Jumping Game)",
      "Pilolo (Treasure Hunt Game)",
    ],
    image: "/akyem.jpg",
    // Kade, Akyem region
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8228.626202111605!2d-0.8431897618045647!3d6.107613811392492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdec18f1caab51b%3A0x3e393242d20e89b8!2sKade!5e0!3m2!1sen!2sgh!4v1740070558767!5m2!1sen!2sgh",
    culturalPractices: [
      "Traditional Adinkra symbols in art and clothing",
      "Sacred forest preservation",
      "Annual Yam Festival celebrations",
      "Traditional drumming and dancing ceremonies",
    ],
    landmarks: [
      "Kyebi Palace - Seat of the Okyenhene",
      "Akyem Sacred Grove",
      "Traditional Craft Centers",
      "Historical Battle Sites",
    ],
  },
  {
    id: "bono",
    title: "Bono ",
    description:
      "The Bono  is one of the earliest Akan states, known for its deep cultural roots and contributions to Ghanaian traditions.",
    history:
      "The Bono people are among the first Akan groups to establish a . Their influence is seen in the early trade networks and architectural designs of their settlements. They were pioneers in gold mining and trade, establishing routes that connected the forest regions to the northern territories.",
    games: [
      "Dame (Strategy Board Game)",
      "Ludu (Dice Game)",
      "Abantu Dwa (Cultural Storytelling Game)",
    ],
    image: "/bono.jpg",
    // Wenchi, Bono region
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21108.761846033874!2d-2.1148203559622276!3d7.744573170181487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfda9e554ecf85c9%3A0x6143f67db14a0dad!2sWenchi!5e0!3m2!1sen!2sgh!4v1740070369529!5m2!1sen!2sgh",
    culturalPractices: [
      "Traditional pottery and craft making",
      "Ancient gold mining techniques",
      "Storytelling traditions",
      "Seasonal harvest festivals",
    ],
    landmarks: [
      "Bono Manso Archaeological Site",
      "Traditional Market Centers",
      "Ancient Trade Route Markers",
      "Sacred Groves and Shrines",
    ],
  },
  {
    id: "asante",
    title: "Asante ",
    description:
      "The Asante  was a powerful empire in West Africa, famous for its military strength, rich traditions, and the Golden Stool.",
    history:
      "Founded in the 17th century, the Asante  played a major role in the region's history, dominating trade routes and resisting British colonial forces. The  is renowned for its sophisticated political system, military organization, and rich cultural heritage centered around the Golden Stool.",
    games: [
      "Kpitinge (Jumping Game)",
      "Ludu (Dice Game)",
      "Oware (Strategy Board Game)",
    ],
    image: "/asante.jpg",
    // Ejisu Asotwe, Asante region
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1849538630945!2d-1.5215705072847416!3d6.747283320207312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbc17db18c24a5%3A0xfda33ded20a19a6!2sEjisu%20Asotwe!5e0!3m2!1sen!2sgh!4v1740071549247!5m2!1sen!2sgh",
    culturalPractices: [
      "Kente cloth weaving traditions",
      "Golden Stool ceremonies",
      "Traditional Akan festivals",
      "Royal court protocols and customs",
    ],
    landmarks: [
      "Manhyia Palace - Royal Residence",
      "Kumasi Central Market",
      "National Cultural Centre",
      "Asante Traditional Buildings (UNESCO Site)",
    ],
  },
];

const LocationDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get the location id from the URL
  const location = placesData.find((place) => place.id === id);

  const [, setCurrentLocationId] = useState("akyem");
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  if (!location) {
    return (
      <>
        <Navbar />
        <div className="p-10 text-center text-xl text-red-600">
          Location not found.
        </div>
      </>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${location.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              {location.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4 drop-shadow-md">
              {location.description}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* History Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-gray-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">History</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {location.history}
            </p>
          </section>

          {/* Cultural Practices */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-green-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                Cultural Practices
              </h2>
            </div>
            <ul className="space-y-3">
              {location.culturalPractices.map((practice, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">{practice}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Popular Games */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-purple-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                Traditional Games
              </h2>
            </div>
            <div className="grid gap-4">
              {location.games.map((game, index) => (
                <div
                  key={index}
                  className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500"
                >
                  <h3 className="font-semibold text-purple-800 text-lg">
                    {game}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* Landmarks */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                Notable Landmarks
              </h2>
            </div>
            <div className="space-y-4">
              {location.landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-red-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">{landmark}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Location Map Section */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Location</h2>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg relative">
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading map...</p>
                </div>
              </div>
            )}
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
              title={`Map of ${location.title}`}
            ></iframe>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Location:</strong> {location.title} is located in{" "}
              {location.id === "akyem"
                ? "the Eastern Region of Ghana, with its capital at Kyebi"
                : location.id === "bono"
                ? "the Bono Region of Ghana, with Sunyani as the regional capital"
                : "the Ashanti Region of Ghana, with its capital at Kumasi"}
              .
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Explore More Cultures</h3>
          <p className="text-xl mb-6">
            Discover the rich heritage of other Ghanaian s
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {placesData
              .filter((place) => place.id !== location.id)
              .map((place) => (
                <button
                  key={place.id}
                  onClick={() => setCurrentLocationId(place.id)}
                  className="bg-white text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Visit {place.title}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
