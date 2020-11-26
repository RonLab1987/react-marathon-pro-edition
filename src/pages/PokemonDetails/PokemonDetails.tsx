import React from "react";
import PageContainer from "../../components/PageContainer";
import Heading from "../../components/Heading";
import { PokemonDetailsProps } from "./types";

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ id }) => {
  // const {
  //   isLoading,
  //   isReady,
  //   isError,
  //   total,
  //   list,
  //   getPokemonList,
  // } = usePokemonList();
  // const [search, setSearch] = useState<string | undefined>(undefined);
  //
  // useEffect(() => getPokemonList(search), [search]);
  //
  // const debouncedChangeHandler = debounce<(search: string | undefined) => void>(
  //   (search) => setSearch(search),
  //   400
  // );
  //
  // if (isLoading && !isReady) {
  //   return (
  //     <PageContainer center>
  //       <Heading level={2}>...Loading</Heading>
  //     </PageContainer>
  //   );
  // }
  //
  // if (isError) {
  //   return (
  //     <PageContainer type={PageContainerType.Danger} center>
  //       <Heading level={2}>...Oops, something went wrong</Heading>
  //     </PageContainer>
  //   );
  // }

  return (
    <PageContainer>
      <Heading level={2}>
        <b>Pokemon</b> {id}
      </Heading>
    </PageContainer>
  );
};
export default React.memo(PokemonDetails);
