/**
 * 
 * @param {*} a First param
 * @param {*} b Second param
 * @returns Sum params a and b
 */
const multiplication = (a, b) => {
   
   if(typeof a === 'number' && typeof b === 'number') {
       return a*b;
   }
   return Error('Number expected as parameter');
   
}
export default multiplication;