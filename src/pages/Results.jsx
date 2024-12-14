import { useHomeData } from "../services/useHomeData";
import ResultRow from "../ui/ResultRow";

function Results({ theme = "" }) {
  const { chess, isLoading, error, scores, players } = useHomeData();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong with fetching data...</p>;

  return (
    <>
      <table className="text-sm rounded-md bg-chessbg-800 w-11/12 max-w-screen-sm text-neutral-100">
        <thead className="text-center bg-black/30">
          <tr className="divide-x-2  divide-black/20">
            <th className="py-2 w-1/2 rounded-tl-md">
              <div className="grid grid-cols-[1fr_2rem] sm:grid-cols-[1fr_4rem]">
                <p>Champion</p>
                <p>{scores[0]}</p>
              </div>
            </th>
            <th className="rounded-tr-md">
              <div className="grid sm:grid-cols-[4rem_1fr] grid-cols-[2rem_1fr]">
                <p>{scores[1]}</p>
                <p>Challenger</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {theme === "home"
            ? chess
                ?.filter((match) => match.result)
                .map((match) => {
                  return (
                    <ResultRow
                      key={match.id}
                      players={players}
                      colors={[match.player1_color, match.player2_color]}
                      result={match.result}
                      link={match.game_link}
                    />
                  );
                })
            : chess?.map((match) => {
                return (
                  <ResultRow
                    key={match.id}
                    players={players}
                    colors={[match.player1_color, match.player2_color]}
                    result={match.result}
                    link={match.game_link}
                  />
                );
              })}
        </tbody>
      </table>
    </>
  );
}

export default Results;
