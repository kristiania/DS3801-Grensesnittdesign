# 2. Introduksjon til JavaScript
Dette er en repetisjon av hva dere kan lage ved bruka av HTML, CSS og JavaScript. Jeg anbefaler dere å fullføre oppgaven med følgende verktøy:
- VS Code [https://code.visualstudio.com][1]
- Live serve: Extension i VS Code 

## Oppgave:
Lag et grensesnitt for js filen som ligger i mappen data og presenter det på best mulig måte på en mobil. ￼￼Dette kan gjøres slik som du slev ønsker, men du må presentere bildet, tittelen, og beskrivelsen i en liste. 

**MERK: Trenger du en forfriskning på kunnskap innfor JavaScript så har jeg skrevet et lite synopsis under**


## Utvikle web-grensesnitt for mobil
Majoriteten av dagens utviklere fokuserer på bruken av rammeverk. 

## Dagens oppgave
Å lage et grensesnitt som fungerer fint på mobil og som benytter et dynamisk layout. 

### Litt JavaScript repetisjon
#### Funskjoner
- For gjenbruk av funksjonalitet
- Bidrar til en klarere og bedre kode i tillegg
- Navngivning basert på hva funksjonene gjør. Dette kan gi et klart og tydlige overblikk på hva hva funksjonen prøver å oppnå.
```
//Klassisk funskjonsform
function name(parameters) {
	//body
}

//Moderne javaScript funksjon, også kalt en arrow function
const name = (parameters) => {
}
```


Eksempel på bruk av begge typer funksjon:
```js
var bimCalc = 90 / (1.90 * 1.90)

//Klassisk funskjonsform
function calculateBMI(weight, height) {
	return weight / (height * height)
}

//Moderne javaScript funksjon, også kalt en arrow function
const calculateBMI = (weight, height) => {
	return weight / (height * height)
}

//Dette vil fungere for begge versjoner av funskjonen
var result = calculateBMI(90, 1.9)
```


#### Objekter i array
Array kan holde på alle generiske typer slik som tekst, tall osv. Men det kan også holde på mer komplekse typer slik som klasser eller til og med funksjoner. 

```js
const posts = [
	{
		id: 1,
		title: "Mitt innlegg"
	},
	{
		id: 2,
		title: "Mitt andre innlegg"
	},
]

posts.push({id: 3, title: "Mitt tredje innlegg"})
```

Man kan hente ut hele objektet eller bare en gjenstand fra objektet på følgende måte: 

```js
posts[0]; // {id: 1, title: "Mitt innlegg"}
posts[0].title; // "Mitt innlegg"
```

#### For-løkker
For å jobbe videre med eksemplet fra forrige oppgave kan man fint iterere over og hente ut hver tittel lagret i arrayet som et eksempel. 
```js
for (let i = 0; i < posts.length; i++) {
	const post = posts[i];
	console.log("Tittel: " + post.title)
	// En annen måte å skrive den over på er med en konkatinert streng, det kan man gjøre på følgende måte:

	console.log(`Tittel: $(post.title)`)
}

//Alternativ løkke, som vil oppnå det samme som for løkka over:
posts.forEach(post => console.log(`Tittel: $(post.title)`)
);
```

#### Document Object Model (DOM)
DOM er en modell som representerer alle elementer som befinner seg på en nettside. Gjør det mulig for oss å muliggjør for kommunikasjon mellom HTML og JavaScript. Man kan manipulere HTML ved å bruke DOM gjennom JavaScript. Da kan man modifisere, legge til eller fjerne elementer. 

##### DOM-manipulasjon
```js
document.getElementById();
```
EN av de mest brukte metodene for DOM-manipulering. Med `getELementByID()` oppretter man en referanse til ett element i DOM, basert på en ID (identifikator). Denne ID-en settes på et element i HTML -koden. 

Man kan hente elementer fra html på følgende måte:
```html
<!--HTML-->
<input id="username" />
<input id="password" type="password" />
```

```js
//JavaScript
const elUsernameInput = document.getElementById("username");
const elPasswordInput = document.getElementById("password");

console.log(elUsernameInput.value); // Henter ut brukernavn
console.log(elPasswordInput.value); // Henter ut passordet
```

`document.createElement();`
For å lage et nytt HTML-element programmatisk bruker vu metoden `createElement()`.  Som første argument tar den hvilken HTML-tag skal opprette: 
`document.createElement("img")`representerer for eksempel et \<img /\> element. 
```js
const listItemImageElement = document.createElement("img");
listItemImageElement.src = "https://url.com/bilde.jpg"
```

`appendChild()`
For å skape komplekse DOM-node-structurer, må man bruke metoden `.appendChild()`

```html
<!-- HTML -->
<div>
	<p>Hello World!</p>
	<img src="https://url.com/bilde.jpg"/>
</div>
```

Hvordan gjenskap i kode:
```
const bodyElement = document.body

const containerDivElement = document.createElement("div");
const paragraphElement = document.createElement("p");
const imageElement = document.createElement("img");

paragraphElement.inneText = "Hello World"
imageElement.src = "https://url.com/bilde.jpg"

containerDivElement.appendChild(paragraphElement);
containerDivElement.appendChild(imageElement);


bodyElement.appendChild(containerDivElement);
```

**MERK: Trenger du en mer grunnleggende gjennomgang så har jeg lagt med mitt samlenotat jeg benyttet for å lære bort JavaScript til Digital markedsføring under. NB! Det er skrevet på en god blanding av norsk og engelsk. Jeg husker ikke hvorfor jeg gjorde det sånn**

## Different files
There are mainly three different files that goes in to creating a webpage. Each of these three files can be put in to one, however if you are working with someone or on a large project, then it’s much smarter to split the files in to different expert domains. 

### HTML
The html file is probably the moste important one. This course does not go in to detail on what this file should include, but think of it as the content of on the page. The text that you can read, and the images that you can see. However this file should not contain how the page should look and not specific functions. You can include these in this file by doing the following. 

#### Styles:
```html
<h1 style="font-family:verdana;">
	This is a heading
</h1>

<p style="font-family:courier;">
	This is a paragraph.
</p>
```
#### Script:
```html
<script type="text/javascript">
	var i = 10;
	if (i < 5) {
	  // some code
	}
</script>
```
If you split them into different files the HTML needs to know about the others. So if you want to include a script with your html do the following:

```html
<body>
	<!— Your HTML here —>

	<script src=«./filepah/filename.js» />
</body>
```

The file path and file name needs to be changed to where you have stored the file. As an example, lets say you have a index.html file stored in a folder. You create a file called myJavaScript.js and want all the code to work with your html. Then you have to do the following. 

```html
<body>
	<!— Your HTML here —>

	<script src=«./myJavaScript.js» />
</body>
```

This does not need any other file path since the file lays side by side with the html file. 

#### File
The HTML file should end with .html. This indicate that it contains html


### Javascript 
This is the file that is moste important in this course. This is where you can write javascript code and compartmentalise it form the rest of your code. 

Unlike HTML Javascript does not need to begin with any specific tags. What you do have to do is type concise code. 

#### Store the file
The best place to store the file is inside the same folder as you stored your HTML file. This is for convenience so if your project gets big then you might need to change this structure. 

#### File name
You can call the file what ever you like.

#### File ending
The file should end with .js as a rule. This indicate that the file is a javascript file. 


## Typer
I JavaScript har vi en rekke forskjellige typer. 
- String er tekst typen i JavaScript og kan deklareres enten med ‘’ eller «». Dette gjør det tydelig for tatasaskinen at hva du skriver er tekst og ikke tall eller noe annet. 
- Tall i JavaScript er alle heltall, det vil si både positive og negative tall, samt alle desimaltall. 
- Boolkse variabler er verdier som enten er sant eller ikkesant. Disse brukes først og fremst i boolske operasjoner. 
- I tillegg til disse tre hovedtypene så har vi også de udefinerte. Disse har ingen verdi.

```js
//Numbers
4
9.3
-10

//Strings
"Hello World"
"43"

//Booleans
true
false

//null and undefined
null
undefined
```

### Matematikk med tall
Vi kan gjøre mattematikk på tall. 
```js
4 + 10     //14
1/5        //0.2

// Modulo - remainder operator
// Ser etter hvor mange ganger et tall går opp i et annet
// hvis du skriver 10%2 vil du få 0. Det vil si, 2 går opp i 10
// 5 ganger. 2+2+2+2+2 = 10
// Dersom du skriver 10%3 vil du få svaret 1. En er da retsen
// siden 3 bare går opp i 10 3 ganger. 3+3+3+1 = 10

10 % 3   //1
24 % 2   //0
15 % 11  //4
```

### Tekst
```js
"hello world"
'hello world'

//Concatenation
"charlie" + "brown"  //"charliebrown"

//Du kan sjekke lengden til en tekst
"hello world".length  //11

//Access individual characters using [] and an index
//Du kan få tilgang til en karakter i en tekst ved å skrive [] og index plassen dens. Indexer starter på 0 og teller opp fra der. 
"hello"[0]  //"h"
"hello"[4]  //"o"
```

## Variabler
Variabler er en konteiner som kan holde på verdier for deg slik at du kan bruke dem igjen senere. 

```js
var yourVariableName = yourValue;

//De kan lagre alle verdiene vi har sett på til nå
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

// Du kan kalle på verdien ved å kalle på navnet du lagde til den
var name = "Rusty";
"hello there " + name    //"hello there Rusty"

var num = 37;
num + 3 + 10    //50

// Vi kan også endre på den lagrede verdien ved å sette navnet på venstreside, et likhetstegn også hva enn du ønsker å sette den til. 
var name = "Robert";
name = "Bob";
```

## Ukjente verdier

```js
// De to siste primitivene er null og undefined

//Variabler som har fått et navn, men ikke en verdi er automatisk undefined.
var name;
var age;

//null er explisitt ingenting
var currentPlayer = "charlie";
currentPlayer = null;   //game over
```

## If, else if og else
Datamaskiner brukes først og fremst til å gjennomføre kode basert på om noe er sant eller ikke. Du kan sette flere sammen, det spiller ingen rolle hvor mange du setter sammen, bare vit at dersom du ønsker at mer enn en skal skje så er det bedre så sette dem hver for seg. 

```js
var a = 9;
var b = 10;

if (a < b) {
	//Kode som skal gjøre dersom det boolske uttrykket er sant
}
```

I tilfellet over dersom a ikke er mindre enn b så vil ikke koden inne mellom krøll parentesene kjøre. 

```js
var a = 9;
var b = 10;

if (a < b) {
	//Kode som skal gjøre dersom det boolske uttrykket er sant
} else {
	// Kode som kjører dersom a ikke er mindre enn b
}
```

I dette tilfellet vil alltid enten if delen eller else delen kjøre. 

```js
var a = 9;
var b = 10;

if (a < b) {
	//Kode som skal gjøre dersom det boolske uttrykket er sant
} else if (a === b) {
	//Kode som vil kjøre dersom a er lik b
} else {
	// Kode som kjører dersom a ikke er mindre enn b
}
```

I dette tilfellet så har vi to alternativer først. Dersom if delen ikke er sant så sjekker vi else if delen. Hvis det er sant så kjører den koden. Hvis ikke det er sant så kjører else. Vit at du ikke trenger else delen dersom du ikke ønsker at noe skal skje dersom de to kjører og ingen ting skjer. Du kan også legge til flere `else if`  dersom du ønsker det. 

## Boolkse operatorer
Det er en rekke oprasjoner vi kan gjøre på alle bookes utrykk. Disse kan brukes for å sammenlikne to verdier. 
```js
// < minder enn
// > større enn
// <= mindre eller lik
// >= større eller lik
// !== ikke lik
// === lik 
```
Vi kan også sette sammen to boolske uttrykk dersom vi ønsker at enten en av to er sanne, eller for å passe på at to ting er sanne samtidig. 

```js
// && to boolkse uttrykk må begge være sanne
// || den første eller andre må være sann
```

### ! - Operasjon
Ved å sette ! foran en boolsk variabel så gjør vi den til det motsatte av hva enn det var i utgangspunktet. 
```js
var erLoggetInn = false

if (!erLoggetInn) {
	// Denne koden vil nå kjøre siden fals blir til true.
}
```

## Løkker
Hva om vi ønsker å printe alle tall mellom 1 og 10. 
```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
```

Dette er ekstremt konotete og ikke noe vi ønsker å skrive. Derfor har vi løkker! Vi ønsker å holde koden vår så enkel som mulig. Det gjør det lettere både å lese igjennom. 

### While
```js
while(et_boolsk_utrykk) {
  //Kode som vil kjøre om og om igjen helt til 
}
```

En enkel løkke som skal telle fra 1 til 5 kan skrives på følgende måte:
```js
var count = 1;

while(count < 6) {
 console.log("count is: " + count);
 count++;
}

// Consolen
//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5
```

#### Evige løkker
Vi kan generer evige løkker noe som er kjipt fordi det vil krasje nettleseren din
```js
var count = 0;

while(count < 10) {
 console.log(count);
}

```
Denne løkka slutter aldri å kjøre fordi count aldri endres.

## For
Dette er en litt mer samlet utgave av en while løkke. Her er alt samlet i toppen av løkken. Dette sikker at vi unngår evige løkker.
```js
for(teller; boolskUttrykk; telleOpp) {
  //Kode vi ønsker å utføre
}
```

Hvis vi ønsker å printe tall fra 1 til 5 med en for gjør vi det på følgende måte
```js
for(var count = 0; count < 6; count++) {
  console.log(count);
}
```

Vi kan også skrive ut hvert enkel bokstav av en tekststreng på følgende måte
```js
var str = "hello";

for(var i = 0; i < str.length; i++){
  console.log(str[i]);
}
```

## Array
Array er en måte å kunne samle data inn i en liste. Det er tungvindt å gjøre oppreasjoner på masse ting som ligger løst hver for seg. Derfor kan vi organsere dataene våres inn i en liste. 
```js
//Lagret som variabler
var venn1 = "Kari";
var venn2 = "Truls";
var venn3 = "Daniel";
var venn4 = "Marthe";

//Lagret i et array
var venner = ["Kari", "Truls", "Daniel", "Marthe"];
```
Arrayer lar deg grupere data sammen i en liste. Du kan fint hente ut enkelte elemeneter. 

### Indeks i array
Dette er noe som ofte er ganske forvirrende med hvordan array fungerer. Hvis tar `venner` arrayet som utgangspunkt så kan vi enkelt hente ut gjenstander og vi kan sjekke lengeden til arrayet. __MERK:__ lengde og indeks til gjenstand er to forskjellige tall. Arrayet over har 4 gjenstander i arrayet, men indexene teller fra null. Det vil da si at indeksene til arrayet går fra 0 til 3. Dette føles kanskje rart, men husk at en datamaskin teller fra 0.

### Bruke løkker til å gå igjennom array
Løkker brukes ofte når det kommer til å gå igjennom et array. De er perfekte for å enkelt gå igjennom vær gjenstand i et array. 

Eks med venner definert i forrige kodeblok. 
```js
venner.length //Dette vil skrive tallet 4

for (var teller = 0; teller < venner.length; teller++){
	console.log(venner[teller]);
}
```

Denne løkken går igjennom arrayet og printer ut hevrt navn som står i arrayet. Legg merke til at teller starter på null, så det er det samme som arrayet sin indeks, samtidig så fortsetter den bare så lenge teller er mindre enn `venner.length`. 

#### Hva ville skjedd dersom vi satte teller til å fortsette til den var lik  `venner.length`?
Dette er en klassisk feil å gjøre. Koden din vil da også kjøre en runde til da `teller = 4`. Da vil vi prøve å hente ut gjenstanden som er på indeks 4 i arrayet, og der finner vi ingen ting. Arrayet har som sagt 4 gjenstander, men deres indekser er bare fra 0 til 3. 

### Legge til nye ting i et array
Du kan fint legge til så mange gjenstander du vil (og av hvilken som helst type) inn i et array. Dette kan gjøres på et par forskjellige måter:
```js
//Legge til i et array

//Legge til med funksjon
venner.push("Thomas");
venner.length //Er nå 5

//Legge til eller endre verdi med indeks
venner[5] = "Hanne";
venner[1] = "Nina";

//Venner vil nå inneholde:
//["Kari", "Nina", "Daniel", "Marthe", "Thomas", "Hanne"]
//	0		 1		  2			3		  4			5
```

### Et par siste ting om array
```js
//Vi kan starte med et tomt array med å skrive følgende:
var familie = [];
var familie = new Array() //Utypisk måte å gjøre det på 

//Array kan innholde alle typer data
//Men ikke balnd sånn som jeg har gjort her da det vil føre til ekstremt mye hode bry for deg selv og andre senere. 
var random_collection = [49, true, "Hermione", null];

//Du kan finne array sin lengde med å skrive .length
var nums = [45,37,89,24];
nums.length   //4
```

### Tekst er et Array
Husker du at vi bruket `.length`på tekst? Det er fordi en tekst er egentlig et array av karakterer 🤯

Alt du kan gjøre med et array kan du også gjøre med tekst. 
```js
//Single or Double quotes OK
"Hei på deg"
'hello world'

//Concatenation
"Harald" + "Rex"  //"HaraldRex"

//Kan bruke .length på tekst
"Hei på deg".length  //10

//Få tilgang til enkelte tegn i en tekst streng med å skrive [] og indeksen på bokstaven du ønsker
"hei"[0]  //"h"
"hei"[2]  //"i"
"hei"[4]  //undefined
```

## Funksjoner
Funksjoner lar deg samle data og/eller funksjonalitet slik at man enkelt kan gjøre den samme opprasjonen flere ganger. En funksjoner gjør at du kan gjenta noe du gjør ofte i koden din slik at du ikke må repitere hav du skriver flere ganger. 

Det er veldig smart å skrive funksjoner sånn at hvis du først må gjøre en endring som skal skje flerer steder i koden din så er du 100% sikker på at den er endret alle stedene samtidig. 

Du definerer funksjoner ved å skrive på den følgende formen:

```js
function navnetDuØnskerPåFUnksjonen () {
	//Her inne bestemmer du hva funksjonen skal gjøre.
}
```

### Argumenter
For at funksjoner virkelig skal bli brukbare så må de ta inn noe informasjon. Den beste måten å tenke på en funksjoner er at alt som foregår inne i den foregår inne i et svart avlukke vekke fra resten av koden din. Hvis du da ønsker å sende den data så kan du gjøre det gjennom argumenter. Argumenter er verdier du definerer når du definerer funksjonen din, men de får ikke noen verdier før du kaller på funksjonen. 

```js
//Funksjon med arguemnt

function funksjonNavn(argument1){
	console.log(arguemnt1);
}

// Funksjon med flere argumenter 
function leggeSammen(argument1, argument2){
	console.log(arguemnt1 + argument2);
}
```

### Return
Ofte så ønsker vi at noe skal skje inne i denne svarte boksen, men at vi vil ha noe tilabke fra den. Da kommer nøkkel ordet `return` inn. Når man skriver return så stopper funksjonen din å kjøre og koden er tilbake til der den kalte på funksjonen. 

```js
//Denne funksjonen tar inn tekst og sørger for at den får stor forbokstav

function storForbokstav(tekst) {
  return tekst.charAt(0).toUpperCase() + tekst.slice(1);
}

var by = "paris";              				   //"paris"
var byMedStorBokstav = storForbokstav(city);  //"Paris"

//vi kan fange hva enn vi får tilabke fra en funksjon med en variabel
```

## Document Object Manipulation (DOM)
Dette er svært praktisk for mye, spesielt:
- Spill
- Animasjoner
- Dropdown menyer
- Form Validation

Dette er overgangen mellom HTML/CSS og JavaScriptet ditt. Nettleseren din gjør alle elementene dine om til JavaScript elementer. På denne måten kan du endre så mye du vil både oppdatere innhold og styling. 

### Hente ut objekter fra HTML
Du kan hente ut HTML elementer ved å kalle på `document`. Dette referer til HTML dokumentet. Pass alltid på å koble JavaScriptet deres i bunnen av en HTML fil. Da sørger dere for at alle HTML elementer eksisterer før JavaScriptet fungerer. 

```js
var minVaribal = document.getElementById("element")
```

Over har vi satt en variabel i JavaScriptet vårt. Den kan kalles på når som helst i JavaScript koden vår. PASS PÅ: det som står inne i getElementByID må tilsvare en ID som eksisterer i HTML-en din. 

#### Måter å hente ut fra HTML
```js
document.getElementById() //Henter ut noe med en ID
document.getElementsByClassName() //Lager en liste med alle elementene som har en klasse i HTML-en din
document.querySelector() //Henter ut det første elemente det finner
//Hvis du ønsker å hente ut en klasse så skriv . foran navnet
//Øsnker du å hente ut noe med en ID så må du skrive # foran navnet

document.querySelectorAll() 
//Henter ut alle elementene av enten type eller navn. Den fungerer som querySelector, men den henter ut ALLE den finner. 
```

### innerHTML
Returnerer en tekst av hva enn som står mellom to \<tag\>\</tag\>. Så hvis dette er et tall så vil det automatisk allikevel bli gjort om til tekst. Men, dersom den inneholder indere HTML tagger så får man tilbake HTML i form av en tekst.

#### I HTML fil:
```html
<p>
  Dette er en <strong>kul</strong> paragraf 
</p>
```

#### I JavaScript:
```js
//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
//"Dette er en <strong>kul</strong> paragraf"
```

Du kan alltid endre alle indre elementer ved å skrive:
```js
tag.innerHTML = "Noe nytt"
//Noe nytt
```

### textContent
Fungerer litt som innerHTML, men den fjerner alle indre \<tag\>\</tag\> elementer. 

#### I HTML fil:
```html
<p>
  Dette er en <strong>kul</strong> paragraf 
</p>
```

#### I JavaScript:
```js
//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
//"Dette er en kul paragraf"
```

### ClassList
Dette er en liste med alle klassene som er på et element, du kan oppdatere og endre dette så mye du bare vil med følgende kode. 
```js
var tag = document.querySelector("h1");

//Legger til en klasse på h1 elementet
tag.classList.add("klasse-navn");

//Fjerner klassen
tag.classList.remove("klasse-navn");
```

### Style changes
Alle HTML elementer kan bli stil satt. Dette gjorde dere i faget kreativt web, der lærte dere å endre på hvordan ting ser ut ved hjelp at CSS. Dette er fremdeles hvordan vi gjør ting, men dere kan også endre elementer ved hjelp at JavaScript. Ved å hente ut et element så kan dere skrive .style. På den måten kan dere manipulere alle ting dere kan gjøre i CSS. Dette kan gjøres på følgende måte:

```js
var h1 = document.querySelector("h1");

h1.style.color = "pink";
```

Her henter jeg ut en h1 tag fra HTML-en også endrer jeg fargen dens til å bli rosa. 

```js
//SELECT
var tag = document.getElementById("highlight");

//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```

##### Endre attributter til HTML
Dette er mer komplisert, men du kan fint endre attributter slik som bilder og lenker dersom det er ønskelig. 

__HTML__
```html
<a href="www.google.com">Trykk på meg</a>
<img src="logo.png">
```

__JavaScript__
```js
var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"

//Bytter ut lenka
link.setAttribute("href","www.dogs.com"); 
///<a href="www.dogs.com">Trykk på meg</a>

//Bytt ut bilde
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">
```

### Event Listener
Vi kan lytte etter eventer slik at funksjonene vår først skyter, dersom brukeren gjør noe på siden så aktiverer de koden vår. Det er mye mer brukervennlig enn å bare fyre av masse funksjoner i hytt og gevær. Det er en lang liste med eventer vi kan lytte etter. Vi kan da legge en event på HTML elemente vår ved å skrive:

#### Attributter I event listneren
Som våre egene funksjoner så trenger add eventlister to attributter. 
1. Den første er en tekststreng for hvilken event du ønsker at koden din skal lytte etter. 
2. Er funksjonen som skal kjøre dersom eventen forekommer. Pass på å ikke ha () etter funskjonskallet ditt. 

```js
function minFunskjoner() {
	//DEN GJØR ET ELLER ANNET
}
element.addEventListener('click', minFunskjoner); 
```

Som dere ser så har jeg lagt til navnet til funksjonen som eksisterer utenfor inne i `eventListener()`kallet. 

#### Typiske Eventer å lytte etter
Over gjør vi den mest typiske eventen å lytte etter. Den kjører da `minFunksjoner` hver gang noen trykker på hva enn som har fått denne event listneren. Dere kan lese alle type eventer her [https://www.w3schools.com/jsref/dom_obj_event.asp ]()(), men vit at de vanligste er de følgene:
- ‘click’ -\> Når et element blir trykket på
- 'change’ -\> Når verdien dens endrer seg
- ‘mouseover’ -\> Når musa er over elementet (samme som :hover i CSS)

Det er vanlig å sette klikk eventer på knapper, men dere kan fint sette det på alle elementer. 

[1]:	https://code.visualstudio.com
