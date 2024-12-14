import { useQuery } from "@tanstack/react-query";
import { getChess } from "../services/chessApi";

export function useChess() {
  const {
    isLoading,
    data: chess,
    error,
  } = useQuery({
    queryKey: ["chess"],
    queryFn: getChess,
  });

  return { isLoading, chess, error };
}
