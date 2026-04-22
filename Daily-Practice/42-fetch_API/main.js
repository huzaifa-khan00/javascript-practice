let fetchData = async () => {
  try {
    let receipt = await fetch("https://dummyjson.com/products");
    if (!receipt.ok) {
      throw new Error("Error Occured: " + receipt.status);
    }

    let data = await receipt.json();
    return data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

let manageData = (fetchedData) => {
  return fetchedData.filter((item) => item.category === 'beauty');
};

(async () => {
  let data = await fetchData();
  let result = manageData(data);
  console.log(result);
})();
