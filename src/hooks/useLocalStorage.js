import React from 'react';

function useLocalStorage(itemData, initialValue) {

  const [ item, setItem ] = React.useState(initialValue);
  const [ loading, setLoading ] = React.useState(true);
  const [ error, setError ] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemData);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem('TODO_V1', JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {

    let newItemStringified = JSON.parse(newItem);
    localStorage.setItem('TODO_V1', newItemStringified);
    setItem(newItem);

  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
