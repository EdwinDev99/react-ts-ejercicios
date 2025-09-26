import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "./useGames";

type Props = {};

function Games({}: Props) {
  const { data, isLoading } = useGames();
  return (
    <SimpleGrid p="40px" columns={[2, null, 3]} spacing="30px">
      {isLoading && "Cargando..."}
      {data?.map((game) => (
        <GameCard key={game.gameID} game={game} />
      ))}
    </SimpleGrid>
  );
}

export default Games;
