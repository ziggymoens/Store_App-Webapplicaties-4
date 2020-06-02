# 1920-b1-fe-ziggymoens

## App user:
| Username | Password | Role |
| :---: | :---:| :---: |
| admin@hotmail.com | P@ssword1 | admin |
| customer@hotmail.com | P@ssword1 | customer |

The accounts are created in the [API](https://github.com/Web-IV/1920-b1-be-ziggymoens)

## Summary
Voor dit project heb ik een webapplicatie geschreven dat een fictieve schoenenwinkel moet voorstellen namelijk Sneaker Store.
In de Sneaker Store bevinden zich tal van verschillende schoenen die men kan bekijken. Via detailpagina’s is het mogelijk om de huidige stockaantallen te zien en de schoenen in 360 graden te bekijken. 
Elke schoen is voorzien van een barcode wat het voor de winkel een stuk makkelijker maakt om de schoenen te stockeren en terug te vinden in de winkel.
Ook hebben mensen de mogelijkheid om extra schoenen toe te voegen, tijdens het proces van toevoegen kunnen de gebruikers een live preview zien van wat opgeslagen zal worden in de databank.
Voor het gebruik van de applicatie is een account verplicht, gebruikers die dit nog niet hebben kunnen zich registreren en zullen nadien de site kunnen gebruiken. 


## Hierarchy

* app
  * SelectivePreloadStrategy
   * about-us
        * about-us.component
   * app-routing.module
   * app.component
   * app.module
   * http-interceptors
        * AuthenticationInterceptor
        * index
   * main-nav
        * main-nav.component
   * material
        *  material.module
   * page-not-found
        * page-not-found.component
   * sneaker
        * SneakerResolver
        * add-sneaker
           * add-sneaker.component
        * brand
            * brand.component
        * dataServices
            * brand-data.service
            * mock-sneakers
            * sneaker-data.service
        * filters
            * barcode-filter.pipe
            * brand-filter.pipe
            * sneaker-filter.pipe
        * models
            * brand.model
            * sneaker.model
            * stock.model
        * sneaker
            * sneaker.component
        * sneaker-detail
            * sneaker-detail.component
        * sneaker-list
            * sneaker-list.component
        *  sneaker-scan
            * sneaker-scan.component
        * sneaker.module
        * stock-sales
            * stock-sales.component
    * user
        * auth.guard
        * authentication.service 
        * login
          * login.component
        * register
          * register.component
        * user.module
* assets 
    * images
        * brands
          * adidas.jpg
          * airjordan.jpg
          * default.png
          * nike.jpg
          * offwhite.jpg
          * supreme.jpg
        * sneakers
          * default.png
* environments
    * environment
* favicon.ico
* index.html
* main.ts
* polyfills.ts
*  styles.css
* test.ts

## Extra technologies
### Google Maps (https://github.com/angular/components/releases/tag/9.0.0-rc.0)
Aan de hand van de Google Maps Component heb ik de hoofdzetel van de Sneaker Store weergegeven. Dit met een custom map met aangepast kleuren thema en special effects op de marker. 
De installatie van deze component kan via npm install @angular/google-maps 
Deze map implementeert ook de Google Maps Javascript API, meer info hierover vindt u hier: https://developers.google.com/maps/documentation/javascript/reference/

De Google maps implementatie is hier terug te vinden: http://localhost:4200/about

### Barcode (https://github.com/efgiese/ngx-barcode6)
Aan de hand van deze barcode component heb ik de style codes van de sneakers weergegeven. Dit is een makkelijk iets om snel in een systeem iets terug te vinden. 
Voor het installeren van de component kan je volgend commando gebruiken: npm install --save ngx-barcode6 jsbarcode@3.11.0
Bij deze installatie hebben we echter ook Jsbarcode (https://github.com/lindell/JsBarcode
) nodig, deze installeren we met npm install --save jsbarcode 

De barcodes kunnen in allerlei vormen worden gegenereerd maar ik deze situatie heb ik geopteerd om CODE128 te gebruiken aangezien deze alle tekens ondersteunt.

De barcodes zijn terug te vinden op http://localhost:4200/sneaker/scan of op een van de detailpagina's van de sneakers bv. http://localhost:4200/sneaker/detail/1

### 360 graden foto’s
Aan de hand van de mat-slider component heb ik een soort van 360 graden beeld laten maken van de sneakers. Dit door de gepaste afbeelding op te halen van het internet. 
Dit is niet de meest optimale manier om dit op te lossen, indien dit project verder zou uitgewerkt worden zou hier best geopteerd worden op met observables te werken.

De 360 graden foto’s zijn terug te vinden op de detailpagina's van de sneakers zoals bv. http://localhost:4200/sneaker/detail/1

