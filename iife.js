import isNan from 'isNan';
console.log(init)
const result = (function () {
  const init = {
    id: 0,
    methods: {
      call () {

      }
    }
  };

  return init;
})();

var init = 3;
console.log(init)
console.log(result);


const obj = {
  name: 'alex'
}
const newObj = {...obj};

const thirdObj = JSON.parse(JSON.stringify(obj))
newObj.name = 'terasdadfsadsfsdsafdsa'
thirdObj.name = 'new '

console.log(obj)
console.log(newObj)
console.log(thirdObj)

const num = 4;
