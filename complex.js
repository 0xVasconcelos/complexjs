/*
Complex.js - Complex numbers library for JavaScript
@author Lucas Vasconcelos <lucaslg26@yahoo.com.br>; André Blanco <andrezinho.blanco@gmail.com>
@license http://www.apache.org/licenses/LICENSE-2.0
*/
/**
 * Return real, imaginary parts and the algebric expression from expressions, objects and numbers.
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
var Complex = Complex || {};
Complex.get = function(cNumber) {
	var complexArray = /([-+]?\d+\.?\d*|[-+]?\d*\.?\d+)\s*([-+])?\s*([-+]?\d+\.?\d*|[-+]?\d*\.?\d+)i/.exec(cNumber),
	    complexNumber = /(^[-+]?\d+\.?\d*|^[-+]?\d*\.?\d+$)i/.exec(cNumber),
	    complexAlt = /([-+]?\d+\.?\d*|[-+]?\d*\.?\d+)\s*([-+])?\s*i/.exec(cNumber);
	if (typeof cNumber == "number") {
		var obj = {
			r: cNumber,
			i: 0,
			eq: Complex.eq(cNumber, 0)
		};
		return obj;
	}
	else if (typeof cNumber == "string" && complexNumber) {
		var obj = {
			r: 0,
			i: parseFloat(complexNumber[1]),
			eq: Complex.eq(0, parseFloat(complexNumber[0]))
		};
		return obj;
	}
	else if (typeof cNumber == "string" && complexArray) {
		if (complexArray[2] == "-") complexArray[3] = -parseFloat(complexArray[3]);
		var obj = {
			r: parseFloat(complexArray[1]),
			i: parseFloat(complexArray[3]),
			eq: Complex.eq(parseFloat(complexArray[1]), parseFloat(complexArray[3]))
		};
		return obj;
	}
	else if (typeof cNumber == "string" && complexAlt && !complexArray && !complexNumber) {
		var i = (complexAlt[2] == "-" ? -1 : 1),
			obj = {
				r: parseFloat(complexAlt[1]),
				i: i,
				eq: Complex.eq(parseFloat(complexAlt[1]), parseFloat(i))
			};
		return obj;
	}
	else if (typeof cNumber == "object" && (cNumber.r || cNumber.i || cNumber.eq)) {
		if (cNumber.eq) {
			return Complex.get(cNumber.eq);
		}
		else {
			return Complex.get(eqComplex(cNumber.r||"0", cNumber.i||"0"));
		}
	}	
	else if (typeof cNumber == "string" && cNumber == "i"){
		return Complex.get("1i");
	}
	else{
		return "Houston, we have a problem. Where's the complex?"
	}
}
/**
 * Return the algebric expression from real and imaginary parts.
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a->number
 * @param b->number
 * @returns String((r)+(i)i)
 */
Complex.eq = function(a, b) {
	var plus = (b >= 0 ? "+" : "");
	return String(a) + plus + String(b) + "i";
}
/**
 * Return the object from real and imaginary parts.
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param r->number
 * @param i->number
 * @returns Object(r, i, eq)
 */
Complex.obj = function(r, i) {
	var obj = {
		r: r,
		i: i,
		eq: Complex.eq(r, i)
	};
	return obj;
}
/**
 * Return the sum of a and b 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.sum = function(a, b) {
	var a = Complex.get(a),
		b = Complex.get(b),
		r = a.r + b.r,
		i = a.i + b.i;
	return Complex.obj(r, i);
}
/**
 * Return the subtraction of a and b 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.subtra = function(a, b) {
	var a = Complex.get(a),
		b = Complex.get(b),
		r = a.r - b.r,
		i = a.i - b.i;
	return Complex.obj(r, i);
}
/**
 * Return the multiplication of a and b 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.multipli = function(a, b) {
	var a = Complex.get(a),
		b = Complex.get(b),
		r = a.r * b.r - (a.i * b.i),
		i = a.r * b.i + a.i * b.r;
	return Complex.obj(r, i);
}
/**
 * Return the division of a and b 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.div = function(a, b) {
	var a = Complex.get(a),
		b = Complex.get(b),
		r = (a.r * b.r + a.i * b.i) / (b.r * b.r + b.i * b.i),
		i = (b.r * a.i - a.r * b.i) / (b.r * b.r + b.i * b.i);
	return Complex.obj(r, i);
}
/**
 * Return modulus of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Number
 */
Complex.mod = function(a) {
	var a = Complex.get(a),
		modZ = Math.hypot(a.r, a.i);
	return modZ;
}
/**
 * Return cos of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Number
 */
Complex.cos = function(a) {
	var a = Complex.get(a),
		cosComplexR = Math.cos(a.r)*Math.cosh(a.i),
		cosComplexI = -(Math.sin(a.r)*Math.sinh(a.i));
	return Complex.obj(cosComplexR, cosComplexI);
}
/**
 * Return sin of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Number
 */
Complex.sin = function(a) {
	var a = Complex.get(a),
		sinComplexR = Math.sin(a.r) * Math.cosh(a.i),
		sinComplexI = Math.cos(a.r) * Math.sinh(a.i);
	return Complex.obj(sinComplexR, sinComplexI);
}
/**
 * Return tan of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Number
 */

Complex.tan = function(a){
	var a = Complex.get(a),
		tanComplexR = divComplex(sinComplex(a), cosComplex(a)).r,
		tanComplexI = divComplex(sinComplex(a), cosComplex(a)).i;
	return Complex.obj(tanComplexR, tanComplexI);
}
/**
 * Return trigonometric form of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.trigonoForm = function(a) {
	var a = Complex.get(a),
		plus = ((a.i/Complex.mod(a)) >= 0 ? "+" : ""),
		obj = {
			r: Complex.mod(a) * (a.r/Complex.mod(a)),
			i: Complex.mod(a) * (a.i/Complex.mod(a)),
			eq: String(Complex.mod(a)) + "(" + (a.r/Complex.mod(a)) + plus + (a.i/Complex.mod(a)) + "i" + ")"
		};
	return obj;
}
/**
 * Return log of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.log = function(a) {
	var a = Complex.get(a),
		logR = Math.log(Complex.mod(a)),
		argZ = Math.atan2(a.i, a.r);
	return Complex.obj(logR, argZ);
}
/**
 * Return the log of the complex number with other base 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> Number(base)
 * @returns Object(r, i, eq)
 */
Complex.logBase = function(a, b) {
	var a = Complex.log(a),
		b = Math.log(b),
		logBaseComplexR = a.r / b,
		logBaseComplexI = a.i / b;
	return Complex.obj(logBaseComplexR, logBaseComplexI);
}
/**
 * Return sinh of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.sinh = function(a) {
	var a = Complex.get(a),
		sinhComplexR = (Math.pow(Math.E, a.r) * Math.cos(a.i) - Math.pow(Math.E, -a.r) * Math.cos(a.i)) / 2,
		sinhComplexI = (Math.pow(Math.E, a.r) * Math.sin(a.i) + Math.pow(Math.E, -a.r) * Math.sin(a.i)) / 2;
	return Complex.obj(sinhComplexR, sinhComplexI);
}
/**
 * Return cosh of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.cosh = function(a) {
	var a = Complex.get(a),
		coshComplexR = (Math.pow(Math.E, a.r) * Math.cos(a.i) + Math.pow(Math.E, -a.r) * Math.cos(a.i)) / 2,
		coshComplexI = (Math.pow(Math.E, a.r) * Math.sin(a.i) - Math.pow(Math.E, -a.r) * Math.sin(a.i)) / 2;
	return Complex.obj(coshComplexR, coshComplexI);
}
/**
 * Return tanh of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.tanh = function(a){
	var a = Complex.get(a),
      		tanhComplexR = Complex.div(Complex.sinh(a), Complex.cosh(a)).r,
      		tanhComplexI = Complex.div(Complex.sinh(a), Complex.cosh(a)).i;
  return Complex.obj(tanhComplexR, tanhComplexI);
}
/**
 * Return a complex number high the other number complex or natural number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.exp = function(a, c){
	var a = Complex.get(a),
      		c = Complex.get(c),
      		expR = Math.pow(Math.E, (c.r * Complex.log(a).r - c.i * Complex.log(a).i)) * Math.cos(c.r * Complex.log(a).i + c.i * Complex.log(a).r),
      		expI = Math.pow(Math.E, (c.r * Complex.log(a).r - c.i * Complex.log(a).i)) * Math.sin(c.r * Complex.log(a).i + c.i * Complex.log(a).r);
  	return Complex.obj(expR, expI);
}
/**
 * return the roots of complex number, according to the degree of root (second parameter)
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.root = function(a, n){
	var a = Complex.get(a);
	var roots=[];
	for (var z=0; z<n; z++){
		var rtComplexI = Math.pow(Complex.mod(a), 1/n) * Math.cos(Math.atan2(a.i,a.r)/n + (2 * z * Math.PI)/n),
			rtComplexR = Math.pow(Complex.mod(a), 1/n) * Math.sin(Math.atan2(a.i,a.r)/n + (2 * z * Math.PI)/n);
			roots.push(Complex.obj(rtComplexI, rtComplexR));
	}
	return roots;
}
/**
 * return an asin of the complex number 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.asin = function(a){
	var a = Complex.get(a),
		b = Complex.multipli(a,'1i'),
		c = Complex.multipli(a,a),
		d = Complex.subtra('1+0i',c),
		e = Complex.exp(d, 0.5),
		f = Complex.sum(b,e),
		asinComplexR = Complex.log(f).i,
		asinComplexI = -1 * Complex.log(f).r;
	return Complex.obj(asinComplexR, asinComplexI);
}
/**
 * return an acos of the complex number 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */

Complex.acos = function(a){
	var a = Complex.get(a),
		b = Complex.multipli(a,a),
		c = Complex.subtra(b, 1),
		d = Complex.exp(c, 0.5),
		e = Complex.sum(a, d),
		acosComplexR = Complex.log(e).i,
		acosComplexI = -1 * Complex.log(e).r;
	return Complex.obj(acosComplexR, acosComplexI);
}
/**
 * return an atan of the complex number 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.atan = function(a){
	var a = Complex.get(a),
		b =  Complex.multipli('0.5i', Complex.log(Complex.div(Complex.sum('i', a), Complex.subtra('i', a)))),
		atanComplexR = b.r,
		atanComplexI = b.i;
	return Complex.obj(atanComplexR, atanComplexI);
}
/**
 * return an asinh of the complex number 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.asinh = function(a){
	var a = Complex.get(a),
		b = Complex.exp(a,2),
		c = Complex.sum(b, 1),
		d = Complex.exp(c, 0.5),
		e = Complex.sum(a, d),
		asinhComplexR = Complex.log(e).r,
		asinhComplexI = Complex.log(e).i;
	return Complex.obj(asinhComplexR, asinhComplexI);
}
/**
 * return an acosh of the complex number 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.acosh = function(a){
	var a = Complex.get(a),
		b = Complex.exp(a,2),
		c = Complex.subtra(b, 1),
		d = Complex.exp(c, 0.5),
		e = Complex.sum(a, d),
		acoshComplexR = Complex.log(e).r,
		acoshComplexI = Complex.log(e).i;
	return Complex.obj(acoshComplexR, acoshComplexI);
}
/**
 * return an atanh of the complex number 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
Complex.atanh = function(a){
	var a = Complex.get(a),
		b =  Complex.multipli(0.5, Complex.log(Complex.div(Complex.sum(1, a), Complex.subtra(1, a)))),
		atanhComplexR = b.r,
		atanhComplexI = b.i;
	return Complex.obj(atanhComplexR, atanhComplexI);
}
