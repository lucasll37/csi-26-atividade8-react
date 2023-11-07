// Este é um serviço de dados simulado
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  // ... mais dados
];

const DataService = {
  fetchData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000); // Simula delay de 1 segundo
    });
  },
};

export default DataService;
