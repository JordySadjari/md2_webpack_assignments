/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */
console.log(55);
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
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
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
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
 */

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
 */

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */

/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */

