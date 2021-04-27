const formatDate = (date) => {
  return new Date(
    new Date(date).getTime() - new Date(date).getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];
};

export default formatDate;
