function moltiplica(moltiplicando, moltiplicatore){
  if (moltiplicatore === 0 ) {
    return null;
  }

  moltiplicatore -=1;
  if ( moltiplicatore > 0){
    return moltiplicando += moltiplica(moltiplicando, moltiplicatore);
  } return moltiplicando;
};

console.log(moltiplica(2,3));

/*esempio di funzione ricorsiva, utilizziamo la funzione moltiplica,
come prima cosa ci siamo dati un valore contrario quindi abbiamo detto alla funzione
che deve saper calcolare anche il valore 0, poi decrementiamo il moltiplicatore di uno
ed eseguiamo se i lmoltiplicatore e ancora maggiore di 0 la somma del valore
del moltiplicando (2) più tutta la funzione che sarà reinvocata e ripeterà il ciclo
fino a valore 0 del moltiplicatore*/

function resto(dividendo, divisore){

  //console.log('prima della sottrazione '+ dividendo);  <--- LOG DI DEBUG
  dividendo -= divisore;
  //console.log('dopo la sottrazione ' + dividendo);   <---- LOG DI X DEBUG

  if(dividendo > divisore || dividendo == divisore){
    return resto(dividendo, divisore);
  } return dividendo;
};

console.log('resto ' + resto(10,2));
console.log('---------------------');
/////////////////////////////////////////////////////////////////////////////
// let count = 0;
//
// var conta = function divisione(dividendo, divisore){
//
//   if(dividendo >= divisore){
//     dividendo -= divisore;
//     count++;
//     //console.log(dividendo);
//     return divisione(dividendo, divisore);
//   } return count + ' resto: '+ dividendo;
// };
// console.log('divisione: '+ conta(24,3));

let conta = (dividendo, divisore)=>{
  let count = 0;
  function divisione(dividendo, divisore){
    if(dividendo >= divisore){
      dividendo -= divisore;
      count++;
      //console.log(dividendo);
      return divisione(dividendo, divisore);
    } return count + ' resto: '+ dividendo;
  };
//console.log('divisione: '+ divisione(24,3)); //se uso divisione() è uguale xke assegnata a una var
return divisione(dividendo, divisore);
};
conta();
console.log(conta(24,3));

/////////////////////////////////////////////////////////////////////////////
/*FUNZIONE DIVISIONE: la funzione sopra è una ricorsiva che prende due parametri
e l'obbiettivo è di fare una divisione tramite ricorsiva. quindi gli dico di
togliere il parametro B da A, se il parametro A è >= B  allora ritorna la funzione
rinizia  LE DUE SOPRA SONO UGUALI*/
//////////////////////////////////////////////////////////////////////////////////
console.log('---------------------');

let myarr =[
  {nome1 : 'fede', nome2 : 'ste'},
  {cognome1 : 'ciao', cognome2 : 'miao'}]

let coppia1 = myarr.slice(0,1);
let coppia2 = myarr.slice(1);

let mix = function combina (par1, par2){
  if (par1 != par2) {
    return console.log('ok');
  };
};
mix(coppia1, coppia2);
console.log(coppia1.nome1);

console.log(coppia1);
console.log(coppia2);



//console.log(myarr[0]);
/*LAVORO CON OGGETI E CON ARRAY filtri su arrey dati due nome e cognome
popola un array di oggetti con la coppia*/
