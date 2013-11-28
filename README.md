Project webdesign
=================

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
