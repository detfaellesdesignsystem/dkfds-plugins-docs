---
layout: default
title: Datatables
permalink: "/datatables/"
lastUpdated: Senest opdateret november 2019
menu:
  sidenav:
    weight: 2

---
{:.font-lead}
Datatables er et eksternt plugin, hvormed man kan udvide sin tabel med sortering, filtrering etc.

* Datatables anvender bl.a. ARIA til at øge tilgængeligheden. Du skal imidlertid være opmærksom på, at en kompliceret tabel med mange rækker, kolonner og muligheder øger det kognitive load og dermed sænker den reelle tilgængelighed.
* Du skal bruger- og performanceteste prototyper med Datatables med entydigt positive resultat ift din målgruppe, hvis du ønsker at anvende den.

{:.h3}
## Anvendes til

Avancerede tabeller med behov for at tilknytte udvidet interaktion som fx søgning og editering af felt-indhold.

{:.h3}
## Anvendes ikke til

Simple søgeresultater eller oversigter.

{:.h3}
## Vejledning

* Datatables er en stor og kompleks funktion, der kun bør anvendes til afgrænsede og klart definerede målgrupper og kun i begrænset omfang.
* Før du implementerer Datatables bør du overveje, om den ekstra funktionalitet er nødvendig eller blot en nice-to-have.
* Overvej om behovet kan løses ved enten en anden præsentation af data eller funktion.
* Datatables er afhængig af jQuery og dermed kræver den et ekstra request og ekstra kode i indlæsningen – dette kan nedsætte funktionens performance.

{:.h3}
## Implementering

Datatables fejler på tilgængelig, når det kommer til disabled pagineringsknapper. For at gøre paginering tilgængeligt skal der tilføjes attributten `aria-disabled="true"` på knapper, som er disabled.

<a href="https://github.com/detfaellesdesignsystem/dkfds-plugins-docs/blob/master/assets/js/example-datatables.js" class="icon-link">Se evt. hvordan vi har gjort det i vores eksempler på siden her<svg class="icon-svg" focusable="false" aria-hidden="true" tabindex="-1"><use xlink:href="#open-in-new"></use></svg></a>.

## Standard

{% include example.html component="datatables/standard" %}

## Udfoldelig række

En udfoldelig række tillader brugeren at vise og gemme ekstra information tilhørende en række.

{% include example.html component="datatables/expandable" %}

## Valgbar række

{% include example.html component="datatables/selectable" %}

## Rediger og slet række

{% include example.html component="datatables/edit-delete" %}