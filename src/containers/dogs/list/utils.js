export const filterDogsList = (dogsList, searchString) =>
  dogsList.filter(dog => {
    const name = dog.name.toLowerCase();
    const subString = searchString.toLowerCase();
    
    return name.includes(subString);
  });