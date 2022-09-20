console.log('i am back!');

// funkcja strzałkowa
const fn = (item) => {
    console.log("podany argument to " + item);
}

const fn2 = item => console.log("podany argument 2 to " + item);

fn("Hej!");
fn2("Hej2!");

const fn3 = (item, item2) => {
    return `Podany argument to: ${item} o ${item2}`;
}

const resultfn3 = fn3("pierwszy", "drugi");

console.log(resultfn3);

// metody tablic i iteratory

const users = ["adam", "bogdan", "czarek", "darek"];
// join nie zmienia tablicy, zwraca stringa z tabilcy
const usersString = users.join(" ");
console.log(usersString);

const newUser = "edyta";
// concat zwraca nowa tablice
const allUsers = users.concat(newUser);
console.log(allUsers);
// operator spread
const allUsers2 = [...users, "edyta"];
console.log(allUsers2);
console.log(allUsers);

const usersFirstLetterUpperCase = users.map(user => user[0].toUpperCase());
// map tworzy nową tablicę
console.log(usersFirstLetterUpperCase);
console.log(users);

const numbers = [2, 3, 4];
const doubleNumber = numbers.map(number => number * 2);
console.log(doubleNumber);
console.log(numbers);

// forEach nie zwraca przerabia, robi cos na jej podstawie
const usersAge = [20, 21, 23, 43];
usersAge.forEach(age => console.log(`W przyszłym roku uytkownik będzie miał ${age + 1} lat`));

let usersTotalAge = 0;

usersAge.forEach(age => usersTotalAge += age);
console.log(usersTotalAge);

const section = document.createElement('section');

usersAge.forEach((age, index, array) => {
    section.innerHTML += (
        `<h1> Uytkownik ${index + 1}</h1>
        <p>wiek: ${age}</p>`
    )
    if (index === array.length - 1) {
        document.body.appendChild(section);
    }
});

// filter tez pozwala stworzyc nowa tablice
const nameWith6Letter = users.filter(user => user.length === 6);
// zwraca true albo false, jak true to el trafia do nowej tablicy
console.log(nameWith6Letter);

// const nameWithLetterK = users.filter(user => {
//     return (
//         user.indexOf("k") > -1
//         // jak nie znajdzie to zwraca -1; przeszukanie, czy el cos zwiera
//     );
// });
const nameWithLetterK = users.filter(user => user.indexOf("k") > -1);
console.log(nameWithLetterK);

// finIndex - zwraca index elementow, jak znajdziemy el - true
const customers = [
    { name: "adam", age: 67 },
    { name: "basia", age: 27 },
    { name: "marta", age: 17 },
];

const isUsersAdult = customers.findIndex(customer => customer.age < 18);
console.log(isUsersAdult); //indx el ktory jest prawdziwy, pierwszy znaleziony; jak nie ma -1

// find - zwraca po znalezieniu true
const firstAdultUser = customers.find(customer => customer.age >= 18);
console.log(firstAdultUser);

// klasy i instancje
//deklaracja
class City {
}
//tworzenie instancji
const Warsaw = new City();
const NewYork = new City();

class Country {
    constructor(name, capitol, population) {
        this.name = name;
        this.capitol = capitol;
        this.population = population;
        this.showName = () => console.log('funkcja w obiekcie: ' + name); // lepiej w prototypie, nizej
    }

    showCountryName() {
        console.log(`nazwa kraju to ${this.name}`)
    }
}

const poland = new Country('Polska', 'Warsaw', 38000000);
console.log('Polska obiekt: ', poland);

poland.showCountryName();
poland.showName();

//dziedziczenie

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`imie osoby to ${this.name}`)
    }
}

class Student extends Person {
    constructor(name = "", degrees = []) {
        super(name); // super wywołuje konstruktor
        this.degrees = degrees;
    }

    showDegrees() {
        const completed = this.degrees.filter(degree => degree > 2);
        console.log(`student ${this.name} ma stopnie: ${this.degrees} i zaliczył juź ${completed.length}`);
    }
}

const Janek = new Student('Janek', [2, 3, 1, 5, 7]);
Janek.showDegrees();

//mechanizm this

const fnThis = function () {
    console.log(this);
}

fnThis();

const car = {
    brand: 'opel',
    age: 2018,
    showAge() {
        console.log(`rocznik samochodu: ${this.age}`)
    },
    showBrand: () => console.log(`marka: ${this.brand}`), //undefined, arrow function nie tworzy własnego this
}

car.showAge();
car.showBrand();

const dog = {
    name: 'Gandzia',
    showName() {
        console.log(`imie psa ${this.name}`);
    }
}

dog.showName();

const dogName = dog.showName; //wazny jest kontekst wywolania, wracamy do obiektu globalnego
dogName();

const cat = {
    kids: ['lucek', 'lapciuch'],
    showKidsNames() {
        console.log(`kot ma potomstwo ${this.kids}`);
        const showKidsNumber = function () {
            console.log(this.kids.length); //funkcja wykonywana niezaleznie, jest globalnie
        }
        showKidsNumber();
    }
}

// cat.showKidsNames();

//bind przypisanie this na stale
const dogBind = {
    name: 'Rocky',
    showName() {
        console.log(`bindowane imie psa: ${this.name}`);
    }
}

dogBind.showName();
const dogNameBind = dogBind.showName.bind(dog);
dogNameBind();

const catBind = {
    kids: ['lucek', 'lapciuch'],
    showKidsNames() {
        console.log(`kot ma potomstwo ${this.kids}`);
        const showKidsNumber = function () {
            console.log(this.kids.length); //funkcja wykonywana niezaleznie, jest globalnie
        }.bind(this);
        showKidsNumber();
    }
}

catBind.showKidsNames();