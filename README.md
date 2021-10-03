# Online-Calculator
 Ez egy online számológép, mely React frontend és ExpressJS backend keretrendszerekkel készült.

Telepítési útmutató

A telepítéshez/futtatáshoz szükségünk van a Node Package Manager-re (NPM), így szükséges NodeJS telepítése is: https://nodejs.org/en/download/ .
1. A tömörített fájlt letöltjük, majd kicsomagoljuk.
2. A könytvártat megnyitjuk egy Integrált fejlesztői környezetben (pl.: Visual Studio Code), majd a terminálba begépeljük az 'npm install' parancsot a szükséges fájlok  telepítéséhez.
3. Miután települtek a szükséges fájlok (node_modules), az 'npm start' paranccsal elindíthatjuk a React webalkalmazást.
4. A backend elindításához a terminállal be kell lépnünk az 'src' mappába (ahol a server.js fájl található), majd begépelnünk a 'node server.js' parancsot.

Működés

Egy zsebszámológéphez hasonlóan egyszerűbb matematikai műveleteket végezhetünk az alkalmazással.
A 'Store' gombot megnyomva eltárolhatjuk az éppen a kijelzőn található számot egy külső fájlba.
A 'Load in' gombot megnyomva a már eltárolt számot újra kiírhatjuk a kijelzőre.
