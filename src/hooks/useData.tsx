export default function useData() {
  function getAll(page: number) {
    const response = fetch(
      `https://dattebayo-api.onrender.com/characters?page=${page}`
    );
    return response;
  }

  function getOneById(id: number) {
    const response = fetch(
      `https://dattebayo-api.onrender.com/characters/${id}`
    );
    return response;
  }
  return {
    getAll,
    getOneById,
  };
}
