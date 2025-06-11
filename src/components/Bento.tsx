import { Link } from "react-router-dom";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function GridGames() {
  return (
    <>
      <BentoGrid className="pt-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={
              i === 3 || i === 6
                ? "md:col-span-2 bg-[#FFF6C5] relative overflow-hidden h-auto"
                : "bg-[#FFF6C5] relative h-full "
            }
          />
        ))}
      </BentoGrid>
      <div className="underline flex justify-center py-4">
        <Link to="/games">Discover More Games</Link>
      </div>
    </>
  );
}

const items = [
  {
    title: "Ampe",
    description:
      " Ampe is a folk game involving two or more female teams. Each team chooses either Ohyiwa or Opare. It involves jumping, clapping, and singing, with the winner declared when more selected choices occur. Played during leisure hours, simple song and requires intensive observation to avoid cheating.",
  },
  {
    title: "Karikokoo",
    description:
      "A fitness game once used to test the strength of men loading cocoa beans, Karikokoo is now a fun competition for children and adults alike.",
  },
  {
    title: "Anhwɛwoakyire",
    description:
      "Meaning 'don’t look back,' this game requires players to stay alert as they squat in a circle, accompanied by songs and clapping.",
  },
  {
    title: "Mpeewa",
    description:
      " Mpeewa is a female game played to entertain and educate the public. It involves slapping and clapping hands, with the song sung to the rhythm of the performers. The game is played in the evening, school sessions, and daytime, with casual dresses worn during performances. The game is governed by rhythm, with defaulters standing behind until the game is over.",
    header: (
      <div className=" flex items-center justify-center h-full bg-[#FFF6C5] rounded-xl overflow-hidden">
        <img
          src="/src/assets/mena.png"
          alt="Mpeewa"
          className="absolute right-0 -bottom-16 mix-blend-multiply h-full opacity-10 "
        />
      </div>
    ),
  },
];
