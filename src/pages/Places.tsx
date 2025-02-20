
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
  },
  {
    id: "bono",
    title: "Bono Kingdom",
    description:
      "The Bono Kingdom is one of the earliest Akan states, known for its deep cultural roots and contributions to Ghanaian traditions.",
    history:
      "The Bono people are among the first Akan groups to establish a kingdom. Their influence is seen in the early trade networks and architectural designs of their settlements.",
    games: ["Dame (Strategy Board Game)", "Ludu (Dice Game)", "Abantu Dwa (Cultural Storytelling Game)"],
    image: "/bono.jpg",
  },
  {
    id: "asante",
    title: "Asante Kingdom",
    description:
      "The Asante Kingdom was a powerful empire in West Africa, famous for its military strength, rich traditions, and the Golden Stool.",
    history:
      "Founded in the 17th century, the Asante Kingdom played a major role in the region's history, dominating trade routes and resisting British colonial forces.",
    games: ["Kpitinge (Jumping Game)", "Ludu (Dice Game)", "Oware (Strategy Board Game)"],
    image: "/asante.jpg",
  },
];

const Places = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {placesData.map((place) => (
        <div key={place.id} className="mb-16">
          {/* Hero Section */}
          <div
            className="relative w-full h-[60vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${place.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold">{place.title}</h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto py-10 px-6">
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">About {place.title}</h2>
              <p className="text-lg text-gray-700">{place.description}</p>
            </section>

            {/* History */}
            <section className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">History</h2>
              <p className="text-lg text-gray-700">{place.history}</p>
            </section>

            {/* Popular Games */}
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;
