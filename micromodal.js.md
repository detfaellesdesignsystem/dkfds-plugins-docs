---
title: Micromodal.js
permalink: "/micromodaljs/"
layout: default
lastUpdated: "Senest opdateret juni 2020"
menu:
  sidenav:
    weight: 4
---
{:.font-lead}
Modalvinduer er separate vinduer, som popper-up, når du aktiverer dem. De indeholder typisk afgrænset viden og kommer i to former: Åben modal (aktiv) indeholder tekst og link, som brugeren kan handle på. Åben modal (passiv) indeholder kun tekst, som brugeren kan læse.

{:.h3}
## Anvendes til

- Modalvinduer anvendes til at tvinge brugerens fokus på et specifikt, afgrænset indhold, hvor den interaktive respons og forståelse er centralt for brugerens videre anvendelse af løsningen. Det kunne fx være en godkendelse af en handling, behov for bekræftelse eller overførsel af rettigheder, som løsningen skal kunne udføre for at kunne fuldføre sin dialog med brugeren.
- Brug modalvinduer, når du vil være sikker på, at brugeren ser en bestemt dialog og forholder sig til dens indhold.

{:.h3}
## Anvendes ikke til

- Modalvinduer kan ikke erstatte individuelle sider i en selvbetjeningsløsning eller hjemmeside.
- Modalvinduer anvendes ikke til længere, sammenhængende indhold.
- Modalvinduer anvendes i begrænset omfang, da de kan øge løsningens kognitive load pga brugerens fokus flyttes.
- Undgå modalvinduer på mobile løsninger og visninger, da de ikke fungerer godt for brugeren.

{:.h3}
## Vejledning

- Modalvinduet skal have en meningsfuld overskrift, der klart relaterer sig til konteksten.
- Knapper i modalvinduet skal være tydelige, meningsfulde og følge Det Fælles Designsystems øvrige anbefalinger for knapper.
- Vær sikker på at modalvinduet kun akkurat passer til sit indhold og ikke dækker baggrunden (selve løsningen) fuldstændigt. Det er nødvendigt, at brugeren forstår, at de ikke har skiftet kontekst.
- Brugeren skal selv aktivere modalvinduet. Det må ikke aktiveres per automatik, da det kan have en modsatrettet effekt, hvor brugeren lukker det i affekt.

{:.h3}
## Implementering

Modal komponenten er implementeret med scriptet <a href="https://micromodal.now.sh" class="icon-link">Micromodal<svg class="icon-svg"><use xlink:href="#open-in-new"></use></svg></a>.

Bemærk, at Micromodal.js fejler i Internet Explorer. For at løse dette skal man inkludere et polyfill - fx <a href="https://www.npmjs.com/package/@babel/polyfill" class="icon-link">@babel/polyfill<svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#open-in-new"></use></svg></a>.

Installér <a href="https://www.npmjs.com/package/dkfds-plugins" class="icon-link">dkfds-plugins fra npm<svg class="icon-svg" aria-hidden="true" focusable="false"><use xlink:href="#open-in-new"></use></svg></a> og inkludér enten CSS eller SCSS filen for pluginnet i dit projekt. For mere info, se <a href="/kode/implementering/">implementering af DKFDS</a>.

Stien til filen du skal inkludere for MicroModal er henholdsvis `[path-to-plugins-project]/dist/css/dkfds-micromodal-theme.standalone.min.css` for CSS filen og `~dkfds-plugins/dist/scss/dkfds-micromodal-theme` for SCSS filen.

En modal kan åbnes ved at sætte følgende attribut på fx en knap: `data-micromodal-trigger="modal-id"`. Dette vil åbne modalen som har id 'modal-id'

En modal kan lukkes ved at sætte følgende attribut på en knap inde i modalen: `data-micromodal-close`.

Det er også muligt at åbne og lukke modalen programmatisk via javascript: `MicroModal.show('modal-id');` og `MicroModal.close('modal-id');`</p>

Html struktur af en modal:

- For at modalen kan åbne skal denne have et id: `<div class="modal" id="modal-id" aria-hidden="false">`
- Der sættes automatisk fokus på det første fokusbare element i modalen. Luk-knappen skal derfor HTML-mæssigt placeres til sidste i modalen.
- En modal er opdelt i tre dele: `modal__header`, `modal__content` og `modal__footer`.

{:.h3}
## Tilgængelighed

- Det anbefalede plugin, MicroModal, følger WAI-anbefalingerne for tilgængelighed.
- Du skal fortsat sikre, at der sættes focus på første element fx brødtekst i dit modalvindue, da indholdet ellers ikke læses op af skærmlæsere.

{% include example.html component="micromodaljs/standard" %}
