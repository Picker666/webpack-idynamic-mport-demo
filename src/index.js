const calc = async () => {
  const module = await import('./temp.js')
  module.default(1,2);
  module.minus(2, 2)
}
(() => {
  document.querySelector('.div').addEventListener('click', calc)
})()

export default calc;