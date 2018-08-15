const curry = func => (...args) => {
  if (args.length >= func.length) return func(...args);
  else return curry(func.bind(null, ...args));
};
