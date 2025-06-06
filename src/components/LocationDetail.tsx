import { useParams, Navigate } from "react-router-dom";
import Navbar from "./Navbar";

// Dummy data for places
const placesData = [
  {
    id: "akyem",
    title: "Akyem Abuakwa Kingdom",
    description:
      "The Akyem Kingdom is one of the most powerful and historical regions in Ghana, known for its rich culture and strong heritage.",
    history:
      "The Akyem people are part of the Akan ethnic group and have played a significant role in Ghana's history, especially during the Ashanti wars. The kingdom was known for its fierce warriors and rich traditions that have been preserved for centuries.",
    games: ["Oware (Traditional Board Game)", "Ampe (Jumping Game)", "Pilolo (Treasure Hunt Game)"],
    image: "/akyem.jpg",
    culturalPractices: [
      "Traditional Adinkra symbols in art and clothing",
      "Sacred forest preservation",
      "Annual Yam Festival celebrations",
      "Traditional drumming and dancing ceremonies"
    ],
    landmarks: [
      "Kyebi Palace - Seat of the Okyenhene",
      "Akyem Sacred Grove",
      "Traditional Craft Centers",
      "Historical Battle Sites"
    ]
  },
  {
    id: "bono",
    title: "Bono Kingdom",
    description:
      "The Bono Kingdom is one of the earliest Akan states, known for its deep cultural roots and contributions to Ghanaian traditions.",
    history:
      "The Bono people are among the first Akan groups to establish a kingdom. Their influence is seen in the early trade networks and architectural designs of their settlements. They were pioneers in gold mining and trade, establishing routes that connected the forest regions to the northern territories.",
    games: ["Dame (Strategy Board Game)", "Ludu (Dice Game)", "Abantu Dwa (Cultural Storytelling Game)"],
    image: "/bono.jpg",
    culturalPractices: [
      "Traditional pottery and craft making",
      "Ancient gold mining techniques",
      "Storytelling traditions",
      "Seasonal harvest festivals"
    ],
    landmarks: [
      "Bono Manso Archaeological Site",
      "Traditional Market Centers",
      "Ancient Trade Route Markers",
      "Sacred Groves and Shrines"
    ]
  },
  {
    id: "asante",
    title: "Asante Kingdom",
    description:
      "The Asante Kingdom was a powerful empire in West Africa, famous for its military strength, rich traditions, and the Golden Stool.",
    history:
      "Founded in the 17th century, the Asante Kingdom played a major role in the region's history, dominating trade routes and resisting British colonial forces. The kingdom is renowned for its sophisticated political system, military organization, and rich cultural heritage centered around the Golden Stool.",
    games: ["Kpitinge (Jumping Game)", "Ludu (Dice Game)", "Oware (Strategy Board Game)"],
    image: "/asante.jpg",
    culturalPractices: [
      "Kente cloth weaving traditions",
      "Golden Stool ceremonies",
      "Traditional Akan festivals",
      "Royal court protocols and customs"
    ],
    landmarks: [
      "Manhyia Palace - Royal Residence",
      "Kumasi Central Market",
      "National Cultural Centre",
      "Asante Traditional Buildings (UNESCO Site)"
    ]
  },
];

const LocationDetail = () => {
  const { id } = useParams();
  
  // Find the specific location data
  const location = placesData.find(place => place.id === id);
  
  // If location not found, redirect to home or show 404
  if (!location) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* History Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
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
              <h2 className="text-3xl font-bold text-gray-800">Cultural Practices</h2>
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
              <h2 className="text-3xl font-bold text-gray-800">Traditional Games</h2>
            </div>
            <div className="grid gap-4">
              {location.games.map((game, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-800 text-lg">{game}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Landmarks */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">Notable Landmarks</h2>
            </div>
            <div className="space-y-4">
              {location.landmarks.map((landmark, index) => (
                <div key={index} className="flex items-center p-3 bg-red-50 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">{landmark}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Explore More Cultures</h3>
          <p className="text-xl mb-6">Discover the rich heritage of other Ghanaian kingdoms</p>
          <div className="flex flex-wrap justify-center gap-4">
            {placesData
              .filter(place => place.id !== location.id)
              .map(place => (
                <a
                  key={place.id}
                  href={`/locations/${place.id}`}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Visit {place.title}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;