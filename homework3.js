//A function that takes at least three arguments and returns the result of some set of operations using those arguments
const myFunc1 = function (num1, num2, num3, num4) {
	const sum = num1 + num2 + num3 + num4;
	const mult = num1 * num2 * num3 * num4;
	const diff = mult - sum;
	const result = diff ** 4;
	return result;
};
//A function that takes no arguments and returns something 
const myFunc2 = function() {
	return "Hello";
};
//A function that takes arguments, does something but does not return anything 
const myFunc3 = function(arg1, arg2) {
	const result= arg1 + arg2;
};
/*A function called fullName that takes as argument first name and last name and returns the full name of the person 
(first name concatenated with last name with a space in between)*/
const fullName = function (firstName, lastName) {
	return firstName + " " + lastName;
};
//A function that takes three strings and returns the string that is the longest.
const longest = function (str1, str2, str3) {
 if(str1.length === str2.length && str1.length === str3.length) {
 	return str1 + " and " + str2 + " and also " + str3;
 }
 if (str1.length === str2.length) {
 	if (str1.length > str3.length){
 		return str1 + " and " + str2;
 	}
 	else {
 		return str3;
    }
 }
 if (str1.length === str3.length){
 	if (str1.length > str2.length){
 		return str1 + " and " + str3;
 	}
 	else {
 		return str2;
 	}
 }
 if ( str2.length === str3.length){
 	if( str2.length > str1.length) {
 		return str2 + " and " + str3;
 	}
 	else {
 		return str1;
 	}
 }
  if ( str1.length > str2.length && str1.length > str3.length) {
 	return str1;
 }
  else if (str2.length > str3.length){
  	return str2;
  }
  else {
  	return str3;}
 
};
//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
const myFunc4 = function (num1, num2) {
	if (num1 === num2) {
		return 0;
	}
	   else if ( num1 > num2) {
	   	return 1;
	   }
	   else {
	   	return -1;
	   }
};
//A function that takes three inputs and returns the first truethy value
const firstTruethy = function (arg1, arg2, arg3) {
	return arg1 || arg2 || arg3 || "There are no truethy values";
};
