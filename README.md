Project webdesign
=================
**Nele Scherrens** & **Sander Wallaert** in opdracht van [Howest](http://www.howest.be) 

###Opgave

De opgave bestond eruit om aan de hand van x- en y-coördinaten de locatie van het mobiele toestel te bepalen.	
Voor deze locatie moet het weer voor vandaag en morgen weergegeven worden.	
Dit weerbericht moet in een webpagina, die er tevens leuk uitziet, geïntegreerd worden. Er worden	
icoontjes voor het weertype, de temperatuur, ... verwacht.	
Dit alles in een mooi kadertje zodat het aantrekkelijk is om deze applicatie in een bestaande website te implementeren.

###Webpagina

Wanneer de webpagina geladen wordt, wordt gevraagd naar de locatie. Uiteraard geven we onze browser de toestemming	
om onze locatie te bepalen.
De browser haalt de locatie op en geeft die op een kaart weer.	
Boven deze kaart staan twee kaders waarin het weer voor vandaag en morgen getoond wordt.


###HTML

De HTML-code van dit project bestaat uit 2 div's voor het weer voor vandaag en voor morgen, 1 div waarin de 2 voorgenoemde div's in zitten en een div waarin de kaart geladen wordt.	
De div's voor het weer voor vandaag en morgen bestaan elk uit een h1-kop waarin de titel staat, een p-element die de temperaturen bevat en een canvas waarin de weericoontjes getoond worden.  
Er staan ook 4 links naar scripts. Eentje naar het script `Geocode.js`, waarin al onze Javascript-code zit. Een tweede naar `jquery-1.9.1.js`, waarin alles in verband met jQuery gestockeerd zit. Deze twee zijn locale scripts.
Een derde verwijst naar [dit](https://rawgithub.com/darkskyapp/skycons/master/skycons.js), een online script dat de weericoontjes definieert. Het laatste verwijst naar [dit](https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false), een online script voor het genereren van de kaart.


###CSS

In de CSS-code worden alle opmaakregels gedefinieerd. Uiteraard zijn deze volledig aanpasbaar (naar eigen wensen).
Ook bevat deze code een aantal media queries om de applicatie weer te geven op een iPhone 5 of een iPad (eender welke generatie). Eventuele extra media queries (voor eerdere generaties iPhone, Android-smartphones, ...) kunnen nog toegevoegd worden.


###JS

De Javascript-code bevat een aantal functies waardoor onze applicatie de locatie kan ophalen en het weer kan weergeven:
* `initialize()`	
Deze functie maakt een nieuwe kaart aan, bepaalt de locatie en geeft alles weer.
* `getLocation()`	
Deze functie vertaalt het IP-adres dat binnenkomt naar latitude en longitude coördinaten.
* `showPosition(position)`	
Deze functie gebruikt de latitude en longitude coördinaten om de kaart te initialiseren.
* `LatLngToAddress()`	
Deze functie vertaalt de latitude en longitude coördinaten naar een werkelijk adres.
* `GetWeather()`	
Deze functie haalt het weer vanop de website [forecast.io](http://forecast.io/) op.
* `DegreesCelsius(degrees)`		
Deze functie zet de graden (die initieel in Fahrenheit staan) om naar Celsius.
* `SetIcon(iconDay, icon)`	
Deze functie defineert de weericoontjes door middel van een `switch` statement

###Integratie
Onze applicatie kan heel makkelijk geïmplementeerd worden in een bestaande website: 
Ieder element in de HTML-code heeft een specifiek ID, waardoor de CSS-regels enkel en alleen op deze elementen toegepast worden. Deze namen zijn ook heel snel aanpasbaar (voor het geval mocht er een element al zo noemen in de bestaande HTML-code). De CSS-regels zijn ook heel snel aangepast zodat onze applicatie op een heel simpele manier geïntegreerd kan worden.  
Het Javascript-bestand hoeft helemaal niet aangepast te worden, tenzij er in de HTML-code ID's gewijzigd zijn. Dan moet gekeken worden of het vorig ID ergens in de Javascript-code voorkwam (enkel toepasbaar op `map-canvas`, `weathertoday`, `weathertomorrow`, `icontoday` en `icontomorrow`).  
