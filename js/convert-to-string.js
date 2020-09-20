// check if it is plain object
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

// overriding the toString method
function toString(val) {
  if (val === null || val === undefined) return "";
  if (Array.isArray(val)) return JSON.stringify(val);
  if (isPlainObject(val) && val.toString === Object.prototype.toString)
    return JSON.stringify(val);
  // other cases
  return String(val);
}
