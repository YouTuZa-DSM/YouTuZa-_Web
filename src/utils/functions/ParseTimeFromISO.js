export const parseTimeFromISO = (isoString) => {
  const date = new Date(isoString);
  const options = { hour: "2-digit", minute: "2-digit", hour12: false };
  return date.toLocaleTimeString("en-GB", options);
};
