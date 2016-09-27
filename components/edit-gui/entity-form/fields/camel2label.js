export default function (camelCase) {
  const x = camelCase.replace(/([A-Z0-9])/g, (match) => ` ${match.toLowerCase()}`);
  return x.charAt(0).toUpperCase() + x.slice(1);
};
