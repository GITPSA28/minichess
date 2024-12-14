import { useHomeData } from "../services/useHomeData";
import PlayerCard from "../ui/PlayerCard";
import ScoreUI from "../ui/ScoreUI";
import { formatDate } from "../utils/helper";
import Results from "./Results";

function Home() {
  const { isLoading, error, nextMatch, scores, players } = useHomeData();
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong with fetching data...</p>;

  return (
    <>
      <div className="flex items-center w-full max-w-screen-sm justify-evenly uppercase sm:mb-8">
        <PlayerCard
          name={players[0].name}
          theme={nextMatch.player1_color}
          photoUrl={players[0].image}
          //   photoUrl="https://media.licdn.com/dms/image/v2/D5603AQE0XlpdEq9oWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669119142954?e=1739404800&v=beta&t=6CvW1ziIHy22m3_5WrmLrPxuCb-YGF1HCVq5nDeIQYE"
        />

        <div className="hidden sm:flex flex-col gap-5 text-center ">
          <ScoreUI
            score1={scores[0]}
            score2={scores[1]}
            date={formatDate(nextMatch.date)}
          />
        </div>
        <PlayerCard
          name={players[1].name}
          theme={nextMatch.player2_color}
          photoUrl={players[1].image}
        />
      </div>
      <div className="flex sm:hidden flex-col gap-5 text-center mb-8">
        <ScoreUI
          score1={scores[0]}
          score2={scores[1]}
          date={formatDate(nextMatch.date)}
          type="secondary"
        />
      </div>
      <Results theme="" />
    </>
  );
}

export default Home;
