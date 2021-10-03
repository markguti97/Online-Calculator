# Online-Calculator
 Ez egy online számológép, mely React frontend és ExpressJS backend keretrendszerekkel készült.

Telepítési útmutató

1. A tömörített fájl letöltjük, majd kicsomagoljuk.
2. A könytvártat megnyitjuk egy Integrált fejlesztői környezetben (p.: Visual Studio Code), majd a terminálba begépeljük az 'npm install' parancsot a szükséges fájlok  feltelepítéséhez.
3. Miután feltelepültek a szükséges fájlok (node_modules), az 'npm start' parancsal elindíthatjuk a React webapplikációt.
4. A backend elindításához a terminállal be kell lépnünk az 'src' mappába (ahol a server.js fájl található), majd begépelnünk a 'node server.js' parancsot.

Működés

Egy zsebszámológéphez hasonlóan egyszerűbb matematikai műveleteket végezhetünk az alkalmazással.
A 'Store' gombot megnyomva eltárolhatjuk az éppen a kijelzőn található számot egy külső fájlba.
A 'Load in' gombot megnyomva a már eltárolt számot újra kiírhatjuk a kijelzőre.
