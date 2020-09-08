---
name: WhistleWatch
tagline: Unofficial UK National Rail Train Times Website
link: https://www.whistlewatch.co.uk/
---

As a hobby project I decided to create a website for searching &amp; displaying UK train times.

Fully hosted on <a href="https://azure.microsoft.com/en-us/services/app-service/static/" target="_blank" rel="noopener noreferrer">Azure Static Web Apps</a>.

The frontend uses <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular 8</a> alongside the <a href="https://ngrx.io/guide/store" target="_blank" rel="noopener noreferrer">NgRx Store library</a>.

The backend is written in TypeScript using Azure Functions.

I used the official <a href="https://lite.realtime.nationalrail.co.uk/openldbws/" target="_blank" rel="noopener noreferrer">National Rail OpenLDBWS SOAP API</a> to retrieve timings with the help of the fantastic <a href="https://github.com/magnatronus/ldbs-json" target="_blank" rel="noopener noreferrer">ldbs-json library</a> by <a href="https://github.com/magnatronus" target="_blank" rel="noopener noreferrer">Steve Rogers</a>.
