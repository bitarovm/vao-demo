import data from './data.json';

export const fetchDogsList = () => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.list);
    }, 2000);
  });

};