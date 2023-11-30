'number' + 23 + 32
// string + number = string => 'number' + 23 = 'number23'
// string + number = string => 'number23' + 32 = 'number2332'
// result "number2332" (typeof string)
// console.log('number' + 23 + 32)

41 + 1 + 'number'
// number + number = number => 41 + 1 = 42
// number + string = string => 42 + 'number' = "42number"
// result "42number" 
// console.log(41 + 1 + 'number')

null + 1
// null converts to number => 0 
// number + number = number => 0 + 1 = 1
// result 1
// console.log(null + 1)

'five' + + 'two'
// string + +string 
// it tries to convert +string to number => NaN
// string + string = string => 'five' + 'fiveNaN' = "fiveNaN"
// result "fiveNaN"
// console.log('five' + + 'two')

2 && 7
    // In the expression 2 && 7 => 2 is truthy and 
    // the && operator is a logical operator, 
    // the second part of the expression will be selected
    // result 7
    // console.log(2 && 7)

    + '40' + +'2';
// console.log(+ '40' + +'2')
// +string tries convert to number => 40 + 2 = 42
// result 42

'10' - 5 === 6;
// number - number = number => 10 - 5 = 5
// 5 not equal to 6 
// result false
// console.log('10' - 5 === 6)

true + false
// console.log(true + false)
// boolean converts to number 
// number + number = number => 1 + 0 = 1
// result 1

'4px' - 3
// console.log('4px' - 3)
// it tries to convert string ('4px') to number => NaN
// NaN - number = NaN => NaN - 3 = NaN
// result NaN

'4' - 3
// console.log('4' - 3)
// it tries to convert string ('4') to number => 4
// number - number = number
// result 1

'2' + 3 ** 2;
// console.log('2' + 3 ** 2)
// number ** number = number => 3 ** 2 = 9
// string + number = string => '2' + 9 = '29'
// result '29'

12 / '6'
// console.log(12 / '6')
// it tries to convert string ('6') to number => 6
// number / number = number => 12 / 6 = 2
// result 2

23 + 42 + 'number'
// console.log(23 + 42 + 'number')
// number + number = number => 23 + 42 = 65
// number + string = string => 65 + 'number' = '65number'
// result '65number'

'10' + (5 === 6);
// console.log('10' + (5 === 6))
// it compairs two numbers => false 
// false converts to string
// string + string = string => '10' + false = '10false'
// result '10false'

'number' + 15 + 3
// console.log('number' + 15 + 3)
// string + nubmer = string => 'number' + 15 = 'number15'
// string + number = string => 'number15' + 3 = 'number153'
// result 'number153'

undefined + 1;
// console.log(undefined + 1)
// undefined try converts to number => NaN
// NaN + number = NaN => NaN + 1 = NaN
// result NaN

'true' == true
// console.log('true' == true)
// == is compeirson with type coercion 
// it tries to convert both to number => NaN == 1
// result false

false == 'false'
// console.log(false == 'false')
// it tries to convert both to number => 0 == NaN
// result false

null == ''
// console.log(null == '')
// null can be only undefind
// comparison between null and empty string are not equal 
// result false

3 ** (9 / 3);
// console.log(3 ** (9 / 3))
// number / number = number => 9 / 3 = 3 
// number ** number = number => 3 ** 3 = 27
// result 27

!!'false' == !!'true'
//console.log(!!'false' == !!'true')
// !! converts any not empty string into boolean true
// !!'false' => true
// !!'true' => true
// true and true comparison => true
// result true

0 || '0' && 1
// console.log(0 || '0' && 1)
// (&&) has a higher priority than OR (||) 
// '0' && 1 both values, '0' (non-empty string) and 1, are truthy => 1
// 0 is falsy and 1 is truthy. The OR operator (||) returns the first truthy value it encounters => 1
// result 1

1 < 2 < 3
// console.log(1 < 2 < 3)
// number < number = boolean => 1 < 2 = true
// true converse into 1 
// number < number = boolean => 1 < 3 = true
// result true

'foo' + + +'bar'
// console.log('foo' + + +'bar')
// string + ++string 
// it tries to convert ++string to number => NaN
// string + NaN = string => 'foo' + NaN = 'fooNaN'
// result 'fooNaN'

3 ** 2 / 3;
// console.log(3 ** 2 / 3)
// number ** number = number => 3 ** 2 = 9
// number / number = number => 9 / 3 = 3 
// result 3

1 < 2 > 3;
// console.log(1 < 2 > 3)
// number < number = boolean => 1 < 2 = true
// true converse into 1  
// number > number = boolean => 1 > 3 = false
// result false

(+null == false) < 1;
// console.log((+null == false) < 1)
// +null converts to number => 0
// false converts to number => 0
// number == number = boolean => 0 == 0 = true
// true converts to number => 1
// number < number = boolean => 1 < 1 = false
// result false

false && true || true
// console.log(false && true || true)
// && returns the first falsy operand or the last operand if all are true => false && true = false
// || returns the first truthy => false || true = true
// result true

false && (true || true);
// console.log(false && (true || true));
// || returns the first truthy => true || true = true
// && returns the first falsy operand or the last operand if all are true => false && true = false
// result false

(+null == false) < 1 ** 5;
// console.log((+null == false) < 1 ** 5)
// +null converts to number => 0
// false converts to number => 0
// number == number = boolean => 0 == 0 = true
// number ** number = number => 1 ** 5 = 1
// true converts to number => 1
// number < number = boolean => 1 < 1 = false
// result false
