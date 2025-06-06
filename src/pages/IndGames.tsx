import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Info, Image } from "lucide-react";
import { games } from "../../data/data";

const IndGames = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Traditional Akan Games
        </h1>

        <div className="grid gap-8">
          {games.map((game, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Hero Image Section */}
              <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <img
                  src={game.mainImage || "/anhwewoakyire-1.png"}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    {game.title}
                  </h2>
                  <div className="flex gap-3 flex-wrap">
                    <span className="bg-blue-500/20 backdrop-blur-xl px-3 py-1 rounded-full text-sm">
                      {game.region}
                    </span>
                    <span className="bg-green-500/20 backdrop-blur-xl px-3 py-1 rounded-full text-sm">
                      {game.players}
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-0">
                <Tabs defaultValue="overview" className="w-full">
                  {/* Tabs Navigation */}
                  <div className="bg-gray-100 p-4">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger
                        value="overview"
                        className="flex items-center gap-2"
                      >
                        <Info className="w-4 h-4" />
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="gallery"
                        className="flex items-center gap-2"
                      >
                        <Image className="w-4 h-4" />
                        Gallery
                      </TabsTrigger>
                      <TabsTrigger
                        value="howto"
                        className="flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Play Mode
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="p-6">
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {game.description}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {game.materials && (
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              Materials
                            </h4>
                            <p className="text-gray-600">
                              {game.materials.join(", ")}
                            </p>
                          </div>
                        )}
                        {game.setting && (
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              Setting
                            </h4>
                            <p className="text-gray-600">{game.setting}</p>
                          </div>
                        )}
                        {game.ageGroup && (
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              Age Group
                            </h4>
                            <p className="text-gray-600">{game.ageGroup}</p>
                          </div>
                        )}
                      </div>
                      {game.song && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Game Song
                          </h4>
                          <p className="text-gray-700 italic">"{game.song}"</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  {/* Gallery Tab */}
                  <TabsContent value="gallery" className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {game.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
                        >
                          <img
                            src={img || "/api/placeholder/400/300"}
                            alt={`${game.title} gameplay ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* How to Play Tab */}
                  <TabsContent value="howto" className="p-6">
                    <div className="space-y-6">
                      {/* <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                        <img
                          src={game.mainImage || "/api/placeholder/800/450"}
                          alt={`Play Mode ${game.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div> */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          Play Mode
                        </h3>
                        <ol className="space-y-3">
                          {game.howToPlay.map((step, stepIndex) => (
                            <li
                              key={stepIndex}
                              className="flex gap-3 items-start"
                            >
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                                {stepIndex + 1}
                              </span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndGames;
