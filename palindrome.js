let string = 'madam';

const array = string.split('');
const reversedArray = array.reverse('');
const reverseString = reversedArray.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }