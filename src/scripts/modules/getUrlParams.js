export default (...args) => {
  let paramsResult = {};
  let params = new URLSearchParams(document.location.search);

  args.forEach((param) => {
    paramsResult[param] = params.get(param);
  });

  return paramsResult;
};
