import Decimal  from 'decimal.js';
// 防止精度丢失
const accurateMultiply = (first:any,second:any)=> Number (Decimal.mul((first),new Decimal(second)))
const mathMethods = {
    accurateMultiply
}
export default mathMethods