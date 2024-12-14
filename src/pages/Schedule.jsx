import { useChess } from "../services/useChess";
import { formatDate } from "../utils/helper";

function Schedule() {
  const { chess, error, isLoading } = useChess();
  const sortedChess = chess?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  if (isLoading) return <p className="text-neutral-100">Loading...</p>;
  if (error) return <p className="text-neutral-100">{error.message}</p>;
  return (
    <>
      <table className="table-auto  rounded-md bg-chessbg-800 text-neutral-200 w-11/12 sm:w-2/3 text-left  max-w-screen-sm">
        <thead>
          <tr className="bg-black/30 ">
            <th className="py-3 pl-6 rounded-tl-md">Date</th>
            <th>Event</th>
            <th className="text-right rounded-tr-md  pr-6">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm ">
          {sortedChess.map((match) => {
            return (
              <tr className="hover:bg-black/10" key={match.id}>
                <td className="py-4 px-6">{formatDate(match.date)}</td>
                <td className="">
                  <p>{match.event}</p>
                </td>
                <td className="text-right py-3 px-6">{match.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Schedule;
