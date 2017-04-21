import "les_6";

/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 **/
    var studentName = "jordy";
    var schoolName = "Media College";
    var place = "contactweg 36";
    var language = "dutch";
    var line = "yeah.... yeah";
 /**
 * 5 variabelen met daarin een number
  **/
    var age = 16;
    var amount = 200;
    var price = 13.30;
    var number = 23;
    var height = 1.65;
  /**
 * 5 variabelen met daarin een boolean
<<<<<<< HEAD
   **/
    var wet = true;
    var lie = false;
    var password = true;
    var sick = true;
    var broken = false;
   /**
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
=======
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
>>>>>>> BerendWeij/master
 */

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *

 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
 **/

    var teachers = ["Berend","Rosmerta","Lutse"];
    var students = ["Gerwin","Nino","Wesly"];
    var grades = ["6","9","7"];

    console.log(teachers);
    console.log(students);
    console.log(grades);


/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

    var array = [];
    array.push("not empty");
    console.log(array);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
    var array2 = ["Kelvin","Jordy","Dzavirt"];
    array2.splice(0,1);
    array2.splice(1,1);
    console.log(array2);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */

    var student = {name:"jordy",
                    age:17,
                    height:1.75,
                    gender:"male",
                    education:"media-developement",
                    sick:false
                    };

    var bottle = {brand:"sourcy",
                    empty:true,
                    value:"500cl"};

    var laptop = {brand:"Alternate",
                    size:"17.3",
                    gpu:"GTX 960m",
                    cpu:"i7 4720HQ",
                    ram:"16gb",
                    storage:"1TB"};

    var phone = {brand:"One plus Two",
                    size:"5.5",
                    LTE:true,
                    bluetooth:true,
                    headphoneJack:true,
                    };

    var car = {brand:"Fiat",
                    type:"bravo",
                    gasType:'diesel',
                    colour:"red"
    };

    var kelvin = {name:"kelvin",
                    age:18,
                    gender:"unknown",
                    fuckboi:true
    };


/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */



    function add(a,b) {
       var c;

        c = a + b;

        return c;
}

console.log(add(5,5))

    function subtract(a,b) {
        var c;

        c = a - b;

        return c;
}

    console.log(subtract(12,5))

function multiply(a,b) {
    var c;

    c = a * b;

    return c;
}

console.log(multiply(6,7))

function divide(a,b) {
    var c;

    c = a / b;

    return c;
}

console.log(divide(48,8))


/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

function makePerson(firstName,lastName){
    var person = {fname:firstName,lname:lastName};
    return person;
}

    console.log(makePerson('jordy','sadjari'));

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */
function object(nameS){
    var student = {name:nameS,showName:function() {
        return this.name;
    }};
    return student;
}
var student = object('jordy');

console.log(student.showName());
/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

var students = ['nino','gerwin','romesh','wesly','jrody','kelvin','dzabir','pim','xavier','precinio'];

    for (var i = 0 ; i < 10 ; i++){
        console.log(students[i]);
    }
/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log(
    'Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
    { array : false, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen
 * uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */

/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */

/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */

/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?',
            'jouw antwoord');


/**
 * Opdracht 19: Zelf een custom prototype method maken
 * Soms wil je een array leeg kunnen gooien. Het zou dus wel handig zijn als
 * je bij elke array een empty() functie kunt aanroepen.
 * Zorg ervoor dat deze functie er is en laat met 3 arrays zien dat hij werkt
 */

/**
 * Opdracht 20: Monkey patching (?)
 * Je begint nu in te zien hoe JS werkt. Probeer nu de splice() en push()
 * functies van Arrays te overschrijven met een eigen functie.
 * Maak 2 arrays aan en laat zien dat je code werkt
 */