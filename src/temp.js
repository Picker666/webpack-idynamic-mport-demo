function add (a, b) {
  console.log(a, b);
  return a + b;
}

const minus = (a, b) => {
  console.log('a, b: ', a, b);
  return a - b;
}

export default add;

export {minus};