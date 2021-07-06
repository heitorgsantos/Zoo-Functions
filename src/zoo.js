const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((especie) => especie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // foi usado o 'find' para encontrar a primeira espécie e verificar se o paramentro da função principal é igual parâmetro do (find).
  const especies = species.find((specie) => specie.name === animal);
  // criado uma variável (idade) para armazenar os paramentros encontrados na variável (espécies). 'usado especies.residents.every' para comparar se TOOOODAS as idades das espécies são MAIORES ou IGUAIS ao paramentro passado.
  const idades = especies.residents.every((resident) => resident.age >= age);
  return idades;
}

function getEmployeeByName(employeeName) {
  // se o parametro da função for undefined retorna um obejto vazio
  if (employeeName === undefined) {
    return {};
  }
  // usado o (find) para encontrar o primeiro e ultimo nome das pessoas colaboradoras.
  const employeeFound = employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  const unic = { ...personalInfo, ...associatedWith };
  return unic;
}

function isManager(id) {
  return employees.some((curr) => curr.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return employees.push(id, firstName, lastName, managers, responsibleFor);
}

function countAnimals(parametSpecies) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
