//Primitives, Typconversion, Autoboxing


function bla(a) {
  a = a || 10;
  console.log(a * 3);  
}

bla();

function flaeche( anzahlDerPlatten, seitenlaenge)
  anzahlDerPlatten = anzahlDerPlatten || 30;  
  seitenlaenge = seitenlaenge || 10;  

  return seitenlaenge * seitenlaenge * anzahlDerPlatten;
}

flaeche();


/*

//Boolean: truthy & falsy

false && true

5 && 6

5 || 6

0 && 6

0 || 6

Boolean(0)

Boolean(-200)

Boolean("")

typeof Boolean("lala")

typeof new Boolean("lala")
*/
