import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Info, Image } from "lucide-react";

const contemporaryData = [
  {
    title: "Nana wo ho",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    mainImage: "/main_nanawooho.png",
    images: ["/nanawooho-1.jpg", "/nanawooho-2.jpg", "/nanawooho-3.jpg"],
    video:
      "https://drive.google.com/file/d/14g95n_Ii_gqpmdFwZL13gADxtrcg-hhB/preview",
    howToPlay: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    ],
    players: "4 or more players",
    region: "Akan, Ghana",
    setting: "Outdoor/Indoor",
    ageGroup: "All ages",
  },
  {
    title: "Oware",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
    mainImage: "/main_oware.png",
    images: ["/oware-1.jpg", "/oware-2.jpg", "/oware-3.jpg"],
    video:
      "https://drive.google.com/file/d/1XkHhL2N_SEI6z2g0wytZcEUw224Qpwyn/preview",
    howToPlay: [
      "Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper",
      "Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet",
      "Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci",
      "Sagittis lacus vel augue laoreet rutrum faucibus dolor auctor",
      "Sed posuere consectetur est at lobortis. Cras mattis consectetur",
    ],
    players: "2 players",
    region: "West Africa",
    setting: "Board game",
    ageGroup: "8+ years",
  },
  {
    title: "Mpewaa",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    mainImage: "/main_mpewaa.png",
    images: ["/mpewaa-1.jpg", "/mpewaa-2.jpg", "/mpewaa-3.jpg"],
    video:
      "https://drive.google.com/file/d/1ezLM3myBT6gmbgrYQIgp379HBen9b-_b/preview",
    howToPlay: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
      "Quae ab illo inventore veritatis et quasi architecto beatae vitae",
      "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
      "Sit aspernatur aut odit aut fugit, sed quia consequuntur magni",
    ],
    players: "3-6 players",
    region: "Akan, Ghana",
    setting: "Outdoor",
    ageGroup: "6+ years",
  },
  {
    title: "Kpen Kpen",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    mainImage: "/main_kpenkpen.png",
    images: ["/kpenkpen-1.jpg", "/kpenkpen-2.jpg", "/kpenkpen-3.jpg"],
    video:
      "https://drive.google.com/file/d/1hjLiAEX8i9R_8HxFtaLnLpCrf0P8k7Ee/preview",
    howToPlay: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus",
      "Qui blanditiis praesentium voluptatum deleniti atque corrupti",
      "Quos dolores et quas molestias excepturi sint occaecati cupiditate",
      "Non provident, similique sunt in culpa qui officia deserunt",
      "Mollitia animi, id est laborum et dolorum fuga. Et harum quidem",
    ],
    players: "4-8 players",
    region: "Ghana",
    setting: "Outdoor",
    ageGroup: "5+ years",
  },
  {
    title: "Ye titi ntoma",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.",
    mainImage: "/main_yetitintoma.png",
    images: ["/yetitintoma-1.jpg", "/yetitintoma-2.jpg", "/yetitintoma-3.jpg"],
    video:
      "https://drive.google.com/file/d/1Wjz4tKYDyw3C7f5Nz6oYn1tI9g9LD4UM/preview",
    howToPlay: [
      "Et harum quidem rerum facilis est et expedita distinctio",
      "Nam libero tempore, cum soluta nobis est eligendi optio",
      "Cumque nihil impedit quo minus id quod maxime placeat",
      "Facere possimus, omnis voluptas assumenda est, omnis dolor",
      "Repellendus. Temporibus autem quibusdam et aut officiis debitis",
    ],
    players: "6+ players",
    region: "Akan, Ghana",
    setting: "Outdoor/Circle",
    ageGroup: "All ages",
  },
  {
    title: "Ampe",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    mainImage: "/main_ampe.png",
    images: ["/ampe-1.jpg", "/ampe-2.jpg", "/ampe-3.jpg"],
    video:
      "https://drive.google.com/file/d/1F80Cc_88W-TxTFcFZDc7gEcD5g0_OzKJ/preview",
    howToPlay: [
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
      "Consectetur, adipisci velit, sed quia non numquam eius modi",
      "Tempora incidunt ut labore et dolore magnam aliquam quaerat",
      "Voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem",
      "Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi",
    ],
    players: "2+ players",
    region: "Ghana",
    setting: "Outdoor",
    ageGroup: "All ages",
  },
];

const ContGames = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contemporary Akan Games
        </h1>

        <div className="grid gap-8">
          {contemporaryData.map((game, index) => (
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
                      {game.video && (
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">
                            Watch How to Play
                          </h4>
                          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                              src={game.video}
                              width="100%"
                              height="100%"
                              allow="autoplay"
                              className="w-full h-full"
                            ></iframe>
                          </div>
                        </div>
                      )}
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

export default ContGames;
