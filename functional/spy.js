function spy(func) {
  let callCount = 0;
  const calledWith = new Set();
  const returnedWith = new Set();
  function subSpy(...args) {
    const res = func(...args);
    args.forEach(x => calledWith.add(x));
    returnedWith.add(res);
    callCount++;
    return res;
  }
  subSpy.getCallCount = function() {
    return callCount;
  };
  subSpy.wasCalledWith = function(val) {
    return calledWith.has(val);
  };
  subSpy.returned = function(val) {
    return returnedWith.has(val);
  };
  return subSpy;
}
