import { useEffect, useState } from "react";
import { Pokemon } from "../../generated/graphql";
import { usePaginatedPokemons } from "./usePaginatedPokemons";

export function useFilteredPokemons() {
  const [dataCopy, setDataCopy] = useState<any>();
  const { data, loading, error, handlePageChange } = usePaginatedPokemons();

  useEffect(() => {
    setDataCopy(data);
  }, [data]);

  function handleTypeSelect(e) {
    setDataCopy((p) => ({
      ...p,
      results: e.target.value === 'All' ? [...data.results] : data.results.filter(
        (pok: Pokemon) => pok.types?.includes(e.target.value)
      ),
    }));
  }

  function handleNameInput(e) {
    setDataCopy((p) => ({
      ...p,
      results: data.results.filter(
        (pok: Pokemon) => pok.name.includes(e.target.value)
      ),
    }));
  }

  return {
    data: dataCopy,
    loading,
    error,
    handlePageChange,
    handleTypeSelect,
    handleNameInput,
  }; 
}