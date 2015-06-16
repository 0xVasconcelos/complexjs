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
function getComplex(cNumber) {
	var complexArray = /([-+]?\d+\.?\d*|[-+]?\d*\.?\d+)\s*([-+])?\s*([-+]?\d+\.?\d*|[-+]?\d*\.?\d+)i/.exec(cNumber),
	    complexNumber = /(^[-+]?\d+\.?\d*|^[-+]?\d*\.?\d+$)i/.exec(cNumber),
	    complexAlt = /([-+]?\d+\.?\d*|[-+]?\d*\.?\d+)\s*([-+])?\s*i/.exec(cNumber);
	if (typeof cNumber == "number") {
		var obj = {
			r: cNumber,
			i: 0,
			eq: eqComplex(cNumber, 0)
		};
		return obj;
	}
	else if (typeof cNumber == "string" && complexNumber) {
		var obj = {
			r: 0,
			i: parseFloat(complexNumber[1]),
			eq: eqComplex(0, parseFloat(complexNumber[0]))
		};
		return obj;
	}
	else if (typeof cNumber == "string" && complexArray) {
		if (complexArray[2] == "-") complexArray[3] = -parseFloat(complexArray[3]);
		var obj = {
			r: parseFloat(complexArray[1]),
			i: parseFloat(complexArray[3]),
			eq: eqComplex(parseFloat(complexArray[1]), parseFloat(complexArray[3]))
		};
		return obj;
	}
	else if (typeof cNumber == "string" && complexAlt && !complexArray && !complexNumber) {
		var i = (complexAlt[2] == "-" ? -1 : 1),
			obj = {
				r: parseFloat(complexAlt[1]),
				i: i,
				eq: eqComplex(parseFloat(complexAlt[1]), parseFloat(i))
			};
		return obj;
	}
	else if (typeof cNumber == "object" && (cNumber.r || cNumber.i || cNumber.eq)) {
		if (cNumber.eq) {
			return getComplex(cNumber.eq);
		}
		else {
			return getComplex(eqComplex(cNumber.r||"0", cNumber.i||"0"));
		}
	}	
	else if (typeof cNumber == "string" && cNumber == "i"){
		return getComplex("1i");
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
function eqComplex(a, b) {
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
function complexObj(r, i) {
	var obj = {
		r: r,
		i: i,
		eq: eqComplex(r, i)
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
function sumComplex(a, b) {
	var a = getComplex(a),
		b = getComplex(b),
		r = a.r + b.r,
		i = a.i + b.i;
	return complexObj(r, i);
}
/**
 * Return the subtraction of a and b 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
function subtraComplex(a, b) {
	var a = getComplex(a),
		b = getComplex(b),
		r = a.r - b.r,
		i = a.i - b.i;
	return complexObj(r, i);
}
/**
 * Return the multiplication of a and b 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
function multipliComplex(a, b) {
	var a = getComplex(a),
		b = getComplex(b),
		r = a.r * b.r - (a.i * b.i),
		i = a.r * b.i + a.i * b.r;
	return complexObj(r, i);
}
/**
 * Return the division of a and b 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
function divComplex(a, b) {
	var a = getComplex(a),
		b = getComplex(b),
		r = (a.r * b.r + a.i * b.i) / (b.r * b.r + b.i * b.i),
		i = (b.r * a.i - a.r * b.i) / (b.r * b.r + b.i * b.i);
	return complexObj(r, i);
}
/**
 * Return modulus of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Number
 */
function modComplex(a) {
	var a = getComplex(a),
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
function cosComplex(a) {
	var a = getComplex(a),
	cosComplexR = Math.cos(a.r)*Math.cosh(a.i),
	cosComplexI = -(Math.sin(a.r)*Math.sinh(a.i));
	return complexObj(cosComplexR, cosComplexI);
}
/**
 * Return sin of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Number
 */
function sinComplex(a) {
	var a = getComplex(a),
	sinComplexR = Math.sin(a.r) * Math.cosh(a.i),
	sinComplexI = Math.cos(a.r) * Math.sinh(a.i);
	return complexObj(sinComplexR, sinComplexI);
}
function tanComplex(a){
	var a = getComplex(a),
	tanComplexR = divComplex(sinComplex(a), cosComplex(a)).r,
	tanComplexI = divComplex(sinComplex(a), cosComplex(a)).i;
	return complexObj(tanComplexR, tanComplexI);
}
/**
 * Return trigonometric form of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
function trigonoFormComplex(a) {
	var a = getComplex(a),
		plus = ((a.i/modComplex(a)) >= 0 ? "+" : ""),
		obj = {
			r: modComplex(a) * (a.r/modComplex(a)),
			i: modComplex(a) * (a.i/modComplex(a)),
			eq: String(modComplex(a)) + "(" + (a.r/modComplex(a)) + plus + (a.i/modComplex(a)) + "i" + ")"
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
function logComplex(a) {
	var a = getComplex(a),
		logR = Math.log(modComplex(a)),
		argZ = Math.atan(sinComplex(a) / cosComplex(a));
	return complexObj(logR, argZ);
}
/**
 * Return the log of the complex number with other base 
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @param b-> Number(base)
 * @returns Object(r, i, eq)
 */
function logBaseComplex(a, b) {
	var a = logComplex(a),
		b = Math.log(b),
		logBaseComplexR = a.r / b,
		logBaseComplexI = a.i / b;
	return complexObj(logBaseComplexR, logBaseComplexI);
}
/**
 * Return sinh of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
function sinhComplex(a) {
	var a = getComplex(a),
		sinhComplexR = (Math.pow(Math.E, a.r) * Math.cos(a.i) - Math.pow(Math.E, -a.r) * Math.cos(a.i)) / 2,
		sinhComplexI = (Math.pow(Math.E, a.r) * Math.sin(a.i) + Math.pow(Math.E, -a.r) * Math.sin(a.i)) / 2;
	return complexObj(sinhComplexR, sinhComplexI);
}
/**
 * Return cosh of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
function coshComplex(a) {
	var a = getComplex(a),
		coshComplexR = (Math.pow(Math.E, a.r) * Math.cos(a.i) + Math.pow(Math.E, -a.r) * Math.cos(a.i)) / 2,
		coshComplexI = (Math.pow(Math.E, a.r) * Math.sin(a.i) - Math.pow(Math.E, -a.r) * Math.sin(a.i)) / 2;
	return complexObj(coshComplexR, coshComplexI);
}
/**
 * Return tanh of the complex number
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
function tanhComplex(a){
	var a = getComplex(a),
      tanhComplexR = divComplex(sinhComplex(a), coshComplex(a)).r,
      tanhComplexI = divComplex(sinhComplex(a), coshComplex(a)).i;
  return complexObj(tanhComplexR, tanhComplexI);
}
/**
 * Return *
 * @author Lucas Vasconcelos <lucaslg26@yahoo.com.br> and André Blanco <andrezinho.blanco@gmail.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @param a-> string(literal expression, complex number), numbers(real part) and object(r, i, eq)
 * @returns Object(r, i, eq)
 */
function expComplex(a, c){
	var a = getComplex(a),
      c = getComplex(c),
      expR = Math.pow(Math.E, (c.r * logComplex(a).r - c.i * logComplex(a).i)) * Math.cos(c.r * logComplex(a).i + c.i * logComplex(a).r),
      expI = Math.pow(Math.E, (c.r * logComplex(a).r - c.i * logComplex(a).i)) * Math.sin(c.r * logComplex(a).i + c.i * logComplex(a).r);
  return complexObj(expR, expI);
}
function rtComplex(a, n){
	var a = getComplex(a);
	for (var i=0; i<n; i++){
		var rtComplexR = Math.pow(modComplex(a), n) * Math.cos(Math.asin(a.i/modComplex(a)) + (2 * n * Math.PI)),
		rtComplexI = Math.pow(modComplex(a), n) * Math.sin(Math.asin(a.i/modComplex(a)) + (2 * n * Math.PI));
		return complexObj(rtComplex, rtComplexI);
	} 
}
