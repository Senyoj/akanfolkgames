import { GridGames } from "@/components/Bento";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Compass } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="hero-bg flex justify-center items-center h-screen text-center px-4 ">
        <div className="p-5">
          <h1 className="font-montagu text-3xl md:text-6xl font-bold">
            DIGITISATION OF AKAN FOLK GAMES{" "}
          </h1>
          <h4 className="font-sherif mt-5 text-3xl">
            A PRESERVATION TOOL FOR GHANA'S CULTURAL HERITAGE
          </h4>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-20 p-5 md:px-20">
        <div className="w-full flex  justify-center items-center">
          <img src="/akan.png" alt="" />
        </div>
        <div className="">
          <h6 className="text-gray-400 underline">About</h6>
          <h1 className="font-montagu text-3xl md:text-6xl font-bold">
            Ghana: The Heart of Africa's Rich Heritage
          </h1>
          <h3>
            A Land of Diverse Cultures, Vibrant Traditions, and Timeless Stories
          </h3>
          <p className="text-lg">
            Welcome to Ghana, a nation rich in history and culture, where
            diverse tribes and traditions thrive. At the core of this vibrant
            land is the Akan people, whose dynamic folk games are a joyful
            expression of identity and unity. These games are more than just
            play—they carry the heartbeat of Akan culture, connecting
            generations through music, and Dance.
          </p>
          {/* <Button className="flex bg-white shadow-xl rounded-3xl border justify-center items-center py-6 mt-4 hover:bg-white">
            <div className="flex gap-3 items-center bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent ">
              <span className="">
                <Compass className="text-black" />
              </span>
              <span>Discover More</span>
            </div>
          </Button> */}
        </div>
      </div>

      <div className=" p-5 md:px-44 relative">
        <div>
          <img
            src="/vera.png"
            alt="Vera"
            className="absolute right-0 top-0 mix-blend-multiply opacity-20"
          />
        </div>
        <div className=" w-full md:w-2/3 pt-20">
          <h6 className="text-gray-400 underline">Games</h6>
          <h1 className="font-montagu text-3xl md:text-6xl font-bold">
            The Home of Fun and Learning{" "}
          </h1>
          <p className="text-lg">
            The Akan folk games are not just pastimes; they are a celebration of
            life and togetherness. Played during moonlit settings, community
            gatherings, recreation in schools and festivals, these games unvail
            the Akan Identity, Values and their Cultural practices.
          </p>
        </div>
        <div className="">
          <GridGames />
        </div>
      </div>

      <div className="p-5 md:px-44 relative">
        <div className="flex items-center justify-between">
          <div className=" w-full md:w-2/3 pt-20">
            <h1 className="font-montagu text-3xl md:text-6xl font-bold pb-10">
              Preserving our Cultural Heritage - <br /> Akan Folk Games
            </h1>
            <p className="text-lg ">
              Akan folk games are more than simple pastimes; they are deeply
              woven into the socio-cultural fabric of the Akan people of Ghana.
              These games are not only a source of entertainment but also a tool
              for teaching life skills, strengthening community bonds, and
              celebrating important rites of passage. From games like Ampe,
              which foster agility and coordination, to Karikokoo, symbolizing
              teamwork and endurance, each activity carries its own unique
              cultural significance.
            </p>
            <p className="text-lg pt-2">
              In the past, Akan games often played a pivotal role in rituals and
              ceremonies, serving as a means of storytelling and preserving oral
              histories. Children learned the values of cooperation, leadership,
              and patience through playful competition. The Akan folk games are
              embeded with asthetics which shape the quality of people's lives,
              Hence demostrating critical thinking to solve problems that
              emanates in the society. These folk games are essential aspects of
              Akan identity, celebrated at festivals, schools, and homes across
              Ghana
            </p>
          </div>
          <div>
            <img
              src="/made.png"
              alt="Vera"
              className=" absolute -right-20 top-32 mix-blend-multiply opacity-30"
            />
          </div>
        </div>
      </div>

      <div className="p-5 md:px-44">
        <div className="w-full pt-20">
          <h6 className="text-gray-400 underline mb-4">Gallery</h6>
          <div className="w-full flex flex-col md:flex-row justify-between gap-20 items-center">
            <div className="w-full pt-20">
              <h1 className="font-montagu text-3xl md:text-6xl font-bold">
                A Community of Fun and Learning
              </h1>
              <p className="text-lg py-4">
                Explore a vivid collection of Historical Events,that capture the
                essence of Akan folk games. From the swift movements of Ampe to
                the strategic play of hwehw3 mu koyi wo dɔfo, each frame tells a
                story of cultural pride, community connection, and joyful
                expressions.
              </p>
              <p className="text-lg py-4">
                Witness the vibrant colors, energetic rhythms, and timeless
                Cultures that continue to inspire across generations.
              </p>
              <Button className="flex bg-white shadow-xl rounded-3xl border justify-center items-center py-6 mt-4 hover:bg-white">
                <div className="flex gap-3 items-center bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
                  <span>
                    <Compass className="text-black" />
                  </span>
                  <span>Discover More</span>
                </div>
              </Button>
            </div>

            <div className="w-full rounded-xl space-y-4">
              <img
                src="/dasa.png"
                alt="Main image"
                className="w-full rounded-4xl object-cover"
              />

              <div className="flex gap-4">
                <a href="/games" className="relative group w-1/2">
                  <img
                    src="/gameimg.png"
                    alt="Game 1"
                    className="w-full h-48 rounded-4xl object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-4xl gap-3">
                    <span className=" rounded-full text-5xl bg-white">
                      <ArrowUpRight />
                    </span>
                    <span className="text-white text-lg">View More</span>
                  </div>
                </a>
                <a href="/games" className="relative group w-1/2">
                  <img
                    src="/ong.png"
                    alt="Game 2"
                    className="w-full h-48 rounded-4xl object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-4xl gap-3">
                    <span className=" rounded-full text-5xl bg-white">
                      <ArrowUpRight />
                    </span>
                    <span className="text-white text-lg">View More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 md:px-44">
        <div className="border-2 border-[#FAC70A] flex flex-col md:flex-row justify-between items-center  rounded-3xl overflow-hidden">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="font-montagu text-3xl md:text-6xl font-bold">
              Rediscover the Heart of Akan Culture.{" "}
            </h1>
            <p className="text-lg py-3">
              Join us in preserving and celebrating the rich cultural legacy of
              Akan folk games. Dive into the stories, movements, and timeless
              joy these games bring to your community
            </p>
            <Button className="flex bg-white shadow-xl rounded-3xl border justify-center items-center py-6 mt-4 hover:bg-white">
              <div className="flex gap-3 items-center bg-gradient-to-r from-[#000000] to-[#FAC70A] bg-clip-text text-transparent">
                <span>
                  <Compass className="text-black" />
                </span>
                <span>Join Community</span>
              </div>
            </Button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/ctaimg.png"
              alt="Game Image"
              className="w-full h-full object-cover  rounded-none "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
