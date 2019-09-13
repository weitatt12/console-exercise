const dogs = [
    {name: 'Snikers', age: 2},
    {name: 'Hugo', age: 3}
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = 'green';
    p.style.fontSize = '50px';
}

// regular
console.log('hello world!');

// interpolated (%s)
console.log('Hello, I am a %s string', 'man');
// console.log(`Hello, I am a ${insertyourvariable} string'`);

// styled (%c)
console.log('%c I have a great day', 'font-size: 50px; background: red; text-shadow: 2px 3px 0 blue');

// warning (.warn())
console.warn('oh, Noooo!!!');

// error (.error())
console.error('fuck error!!!');

// info (.info())
console.info('Elephant is a big animal');

// testing (.assert()) if true it wont do anything by default
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), "That is wrong!!");

// clearing (clear())
console.clear();

// view DOM element
console.log(p)
console.dir(p) //this is to open directory

console.clear();

// grouping together (.group())
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is my ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting (.count())
console.count('john')
console.count('john')
console.count('steve')
console.count('john')
console.count('john')
console.count('john')
console.count('steve')
console.count('john')
console.count('steve')
console.count('steve')


// timing (.time())
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json)
    .then(data => {
        console.timeEnd('fetching data')
        console.log(data);
    });

