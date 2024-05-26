export const generateId = () => {
  const random = Math.random().toString(36).substr(2, 9);
  const date = Date.now().toString(36);
  const id = `${random}-${date}`;
  // console.log("random :>> ", random);
  // console.log("date :>> ", date);
  // console.log("id :>> ", id);
  return id;
};
