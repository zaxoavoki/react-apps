import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import config from '../config';
import GET_POKEMONS from '../queries/getPokemons.graphql';

export function usePaginatedPokemons() {
  const [pagination, setPagination] = useState({
    limit: config.ITEMS_PER_PAGE,
    offset: 0
  });
  const { data, loading, error, refetch } = useQuery(gql(GET_POKEMONS), {
    variables: { ...pagination }
  });

  useEffect(() => {
    refetch({ ...pagination });
  }, [pagination]);

  function handlePageChange(page: number) {
    setPagination(p => ({...p, offset: p.limit * (page - 1)}))
  }

  return { data: data?.pokemons, loading, error, handlePageChange };
}