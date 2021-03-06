const { species, employees, prices, hours } = require('./data');
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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // const addEmployees = {
  //   id,
  //   firstName,
  //   lastName,
  //   managers,
  //   responsibleFor,
  // };
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// const calculatorAnimal = (calculator) => species
//   .reduce((acc, { name, residents }) => (calculator === name ? residents.length : acc), 0);

function countAnimals(parametSpecies) {
  const especiesEquantidades = species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  if (!parametSpecies) {
    return especiesEquantidades;
  }
  return especiesEquantidades[parametSpecies];
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = Object.keys(hours);
  const week = days.reduce((acc, currValue) => {
    acc[currValue] = `Open from ${hours[currValue].open}am until ${hours[currValue].close - 12}pm`;
    return acc;
  }, {});
  week.Monday = 'CLOSED';
  if (dayName in week) {
    return { [dayName]: week[dayName] };
  }
  return week;
}

function getOldestFromFirstSpecies(id) {
  const foundEmployee = employees.find((employee) => employee.id === id);
  const specieId = foundEmployee.responsibleFor[0];
  const foundSpecies = species.find((specie) => specie.id === specieId);
  const arrayResidents = foundSpecies.residents.map((resident) => resident);
  const arrayOrder = arrayResidents.sort((resident1, resident2) =>
    resident2.age - resident1.age)[0];
  return [arrayOrder.name, arrayOrder.sex, arrayOrder.age];
}

function increasePrices(percentage) {
  const arrayOfPrices = [];
  const arrayPrices = Object.values(data.prices);
  arrayPrices.forEach((element) => arrayOfPrices.push(element + element * (percentage / 100)));
  const [adult, senior, child] = arrayOfPrices;
  prices.Adult = Math.round(adult * 100) / 100;
  prices.Senior = Math.round(senior * 100) / 100;
  prices.Child = Math.round(child * 100) / 100;
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
