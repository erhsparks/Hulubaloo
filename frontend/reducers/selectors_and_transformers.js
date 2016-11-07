export const rowsOfFour = (array) => {
  let rows = [];
  for (let i = 0; i < array.length; i += 4) {
    rows.push(array.slice(i + 0, i + 4));
  }

  return rows;
};
