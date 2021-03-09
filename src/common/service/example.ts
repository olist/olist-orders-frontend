export interface ExampleServiceResponse {
  name: string;
  species: string;
}

const ExampleService = {
  commonRequest: async (): Promise<ExampleServiceResponse> => {
    const res = await fetch('https://rickandmortyapi.com/api/character/1');
    const resData = await res.json();
    return resData;
  },
};

export default ExampleService;
