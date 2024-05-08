export const handleAPIStatus = (error) => {
  const data = { err: null, data: null };
  if (error.response) {
    data.err = error.response.status;
    data.data = error.response.data;
  } else {
    data.err = 503;
    data.data = "Server Down";
  }
  return data
};
