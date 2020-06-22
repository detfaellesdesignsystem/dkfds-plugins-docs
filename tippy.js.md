---
title: Tippy.js
permalink: "/tippyjs/"
layout: default
menu:
  sidenav:
    weight: 6

---
{:.font-lead}
Tooltip og popover er komponenter, som brugerne enten kan aktiverer eller fører musen hen over for at få en kort forklaring på indhold, ord eller begreber.

## Implementering

Tippy.js er et tredjeparts bibliotek, som du selv skal hente ind i dit projekt. Vi har lavet et tema i dkfds-plugins pakken, som kan lægges ind over således at pluginnet følger det visuelle udtryk i Det Fælles Designsystem.

Installer <a href="https://www.npmjs.com/package/dkfds-plugins" class="icon-link">dkfds-plugins fra npm<svg class="icon-svg" aria-hidden="true" focusable="false"><use xlink:href="#open-in-new"></use></svg></a> og inkludér enten CSS eller SCSS filen for pluginnet i dit projekt.

Stien til tema-filen du skal inkludere for Tippy.js er henholdsvis `[path-to-plugins-project]/dist/css/dkfds-tippy-theme.standalone.min.css` for CSS filen og `~dkfds-plugins/dist/scss/dkfds-tippy-theme` for SCSS filen.

Man skal dog stadig inkludere Tippys egen CSS og JavaScript. Følg <a href="https://atomiks.github.io/tippyjs/" class="icon-link">Tippys egen dokumentation<svg class="icon-svg "><use xlink:href="#open-in-new"></use></svg></a> for implementering af pluginnet i dit projekt.

## Standard

{% include example.html component="tippyjs/icon" %}

## Position

{% include example.html component="tippyjs/position" %}

## Ikon med popover (kræver tryk)

{% include example.html component="tippyjs/popover" %}