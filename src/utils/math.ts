// 防止精度丢失
function multiply(num1:any, num2:any) {
	if (isNaN(num1) || isNaN(num2)) return '';
	if (num1 === '0' || num2 === '0') return '0';

	let l1 = num1.length,
		l2 = num2.length;

	let result = [];

	for (let i = l1 - 1; i >= 0; i--) {
		for (let j = l2 - 1; j >= 0; j--) {
			let index1 = i + j;
			let index2 = i + j + 1;

			let product:any = num1[i] * num2[j] + (result[index2] || 0);
			result[index2] = product % 10;
			result[index1] = Math.floor(product / 10) + (result[index1] || 0);
		}
	}
	return result.join('').replace(/^0+/, '');
}
function accurateMultiply(arg1:any, arg2:any) {
	if (arg1) {
		let s1 = arg1.toString().trim();
		let s2 = arg2.toString().trim();
		let pre = '';
		const s1Firststr = s1[0];
		if (isNaN(Number(s1Firststr))) {
			s1 = s1.slice(1);
		}
		const s2Firststr = s2[0];
		if (isNaN(Number(s2Firststr))) {
			s2 = s2.slice(1);
		}
		if ((s2Firststr == '-') !== (s1Firststr == '-')) {
			pre = '-';
		}
		let index1 = s1.indexOf('.');
		let index2 = s2.indexOf('.');
		let dotlen = 0;
		if (index1 != -1) {
			dotlen += s1.length - index1 - 1;
		}
		if (index2 != -1) {
			dotlen += s2.length - index2 - 1;
		}
		s1 = s1.replace('.', '');
		s2 = s2.replace('.', '');
		let res = multiply(s1, s2);
		if (dotlen) {
			const reslen = res.length;
			if (reslen <= dotlen) {
				res = '0'.repeat(dotlen) + res;
				res = `0.${res.slice(-dotlen)}`;
			} else {
				res = [res.slice(0, reslen - dotlen), res.slice(-dotlen)].join('.');
			}
		}
		return Number(pre + res) ;
	}
	return 0;
}
const mathMethods = {
    accurateMultiply
}
export default mathMethods