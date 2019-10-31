import data from "./data.json";

let dogsData = [...data.list];

export const fetchDogsList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dogsData);
    }, 200);
  });
};

export const fetchDogById = chipId =>
  new Promise((resolve, reject) => {
    const dogData = dogsData.find(dog => dog.chipId === chipId);

    setTimeout(() => {
      resolve(dogData);
    }, 200);
  });

export const saveDogData = data =>
  new Promise((resolve, reject) => {
    dogsData = dogsData.map(dog => (dog.chipId === data.chipId ? data : dog));

    setTimeout(() => {
      resolve(data.chipId);
    }, 200);
  });