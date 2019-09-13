export const filterDogsList = (dogsList, searchString) =>
  dogsList.filter(dog => {
    const name = dog.name.toLowerCase();
    const subString = searchString.toLowerCase();
    
    return name.includes(subString);
  });

export const sortDogsList = (dogsList, sortParams) => {
  const { items, fieldId: sortTypeId } = sortParams;
  const sortType = items.find(item => item.id === sortTypeId);
  const { fieldId, direction } = sortType || {};

  if (direction === 'asc') {
    return dogsList.sort((a, b) => a[fieldId].localeCompare(b[fieldId]));
  };

  return dogsList.sort((a, b) => b[fieldId].localeCompare(a[fieldId]));
};