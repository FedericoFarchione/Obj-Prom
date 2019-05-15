const a = function (x){
  return x.map((v, i)=>{
    if (typeof(v) != 'number'){
      return 'ok'
    };
  });
};
console.log(a([21, 32, 'ciao0', 'miao', 98]));
///////////////////////////////////////////////////////////////

const arr1 = [3, 7, 5, 1, 9];
arr1.sort((a, b)=>{
  if(b < a) return 1;
});
console.log(arr1);

/*se passo la funzione al sort quindi name.sort() all'interno delle parentesi function(a, b)
function compare(a, b) gli passo un metro di orfinamento{
  if (a è inferiore a b secondo un criterio di ordinamento) {
    return -1;
  }
  if (a è maggiore di b secondo un criterio di ordinamento) {
    return 1;
  }
  // a deve essere uguale a b
  return 0;
}*/
////////////////////////////////////////////////////////////////////////////
const prim = 1;
const sec = 10;

function extern(){
  const sum = prim + 9 + sec;
  function inside(){
    return console.log(sum);
  }
  inside();
};
extern();
/////////////////////////////////////////////////////////////////////////////
var a1 = 1
var b1 = 1
var somma = `La somma di ${a1} e ${b1} è ${a1+b1}`;
console.log(somma);
////////////////////////////////////////////////////////////////////////////

const primo = [1, 2, 3, 4];
  primo.map(function(v, i){
    console.log(v + ' => ' + [i] );
  });

/////////////////////////////////////////////////////////////////////////////

var sum = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
}, 0);
console.log(sum);

/*il metodo reduce serve per sommare gli elementi di un array, la somma avviene da
dx verso sx quindi 0+1 poi il risultato(1)+2, poi il risultato(3)+3 ecc...*/

/////////////////////////////////////////////////////////////////////////////
const stampa = (x, w)=>{
  console.log(x, w);
};

const back = (can, ban, callback)=>{
  let a = can + ban;
  let b = ban - can;
  return callback(a, b)
};
back(9,8, stampa)

/*callback creo una funczione di stampa a cui assegnerò n parametri, poi creo la
funzione di callback a cui assegno tre parametri di cui il terzo sarà la callback
quindi una volta ritornata la callback invochero la funzione di callback passando
come terzo parametro ( quindi quello di call) la funzione di stampa*/

const prima = (a, b)=>{
  return new Promise((resolve, reject)=>{
    let somma = a+b;
    setTimeout(()=>{
      if(typeof(somma) == 'string'){
        return resolve(true)
      }else{
        return reject(false)
      };
    }, 2000);
  });
};

const stamp = (a, b)=>{
  prima(a, b).then((data)=>{
    console.log(data);
  }).catch((err)=>{
      console.log(err);
  });
};
stamp([1, 3]);
//---------------------------------------------------------------------

const prom = (obj)=>{
  return new Promise((resolve, reject)=>{

      setTimeout(()=>{
        let obby = {
          nome : 'federico',
          cognome:'farchione',
          eta:26
        }
        if (typeof(obby.nome) == 'string') return obby.nome = 'ok'
        if (Number(obby.eta)) return obby.eta = 'ok'
        if (typeof(obby.cognome) != 'string'){
          return resolve(obby)
        }else{
          return reject(false)
        }
      }, 2500);
  });
};

const print = (obj)=>{
  prom(obj).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });
};

print(1)
/*PROMISE creo una const che prende una funzione al cui internosi crea una nuova
instanza dell'oggetto Promise il quale prende due parametri STANDARD
il resolve e il reject gli diamo un check da fare e se sarà vera sarò resolve
altrimenti reject*/
