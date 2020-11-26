import React, { useEffect } from "react";
import PageContainer, {
  PageContainerType,
} from "../../components/PageContainer";
import Heading from "../../components/Heading";
import { PokemonDetailsProps } from "./types";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ id }) => {
  const {
    isLoading,
    isReady,
    isError,
    details,
    getPokemonDetails,
  } = usePokemonDetails();

  useEffect(() => {
    getPokemonDetails(id).catch((error) => {
      throw error;
    });
  }, []);

  if (isLoading && !isReady) {
    return (
      <PageContainer center>
        <Heading level={2}>...Loading</Heading>
      </PageContainer>
    );
  }

  if (isError) {
    return (
      <PageContainer type={PageContainerType.Danger} center>
        <Heading level={2}>...Oops, something went wrong</Heading>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Heading level={2}>
        <b>Pokemon</b> {details?.name}
      </Heading>
    </PageContainer>
  );
};
export default React.memo(PokemonDetails);
