import React from 'react';

function useLocalStorage(itemData, initialValue) {

  const localStorageItem = localStorage.getItem(itemData);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem('TODO_V1', JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [ item, setItem ] = React.useState(parsedItem);

  const saveItem = (newItem) => {

    let newItemStringified = JSON.parse(newItem);
    localStorage.setItem('TODO_V1', newItemStringified);
    setItem(newItem);

  };

  return [item, saveItem];
}

export { useLocalStorage };
