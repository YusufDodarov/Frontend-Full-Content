// async await
function fetchData() {
  let data = [
    {
      id: 1,
      name: "Muhamad",
    },
    {
      id: 1,
      name: "Muhamad",
    },
    {
      id: 1,
      name: "Muhamad",
    },
  ];
  return new Promise((res, rej) => {
    if (data.length !== 0) {
      return res(data);
    }
    return rej("error");
  });
}
async function getData() {
  try {
    console.log(await fetchData());
  } catch (error) {
    console.log(error);
  }
}
getData();
