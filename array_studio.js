var arr = new Array('ciao', 'miao', 1, 5, 10,); //creo un nuovo Array;
arr.lenght = 5;  //con questo definisco la lunghezza degli elementi;

arr.push('bello'); //con il push aggiungo un parametro in coda all'array;

arr.pop(); //con il pop elimino l'ultimo parametro in coda;

//I metodi SHIFT() & UNSHIFT() aggiungono e tolgono all'inizio dell'array

var x = arr.splice(1, 1, 'bion');
/*il metodo splice permette di tagliare un elemento in un punto preciso dell'array
dove il primo parametro indica la posizione dell'elemento, il secondo la quantita
di elementi da eliminare ed il terzo gli elementi da aggiungere*/

var y = arr.slice(1,3);
/*il metodo slice invece permette di estrarre gli elementi di un array definendo
il punto di partenza e il punto di fine*/

arr.sort();
//con il metodo sort() come abbiamo già visto ordiniamo un array;

var z = new Array();
//var w = z. join();
console.log(z);
//con il JOIN convertiamo l'array in una stringa!!
// console.log(arr);
// console.log(y);
// console.log(w);
 //------------------------------------------

var mySet = new Set();
  mySet.add(1);
  mySet.add(2);
  mySet.add("tre");
  mySet.delete("tre");
  console.log(mySet);

/*Un Set può contenere dati di qualsiasi tipo ma senza duplicati.
La prima istruzione crea un Set mentre le istruzioni successive
aggiungono alcuni elementi all’insieme tramite il metodo add().*/

/*Per eliminare un elemento da un Set utilizziamo il metodo delete()
 passandogli l’elemento da eliminare:*/

/*con il metodo clear() invece cancelliamo tutto il contenuto*/


var myMap = new Map();
myMap.set("nome", "Mario");
myMap.set(3.14, "Pi greco");
var myObj = {id: 123, data: "test"};
myMap.set(myObj, "Oggetto");

myMap.delete(3.14);
console.log(myMap.has(3.14));	//false
console.log(myMap.size);		//2
console.log(myMap.get("nome"));	//'Mario'
console.log(myMap.get(myObj));	//'Oggetto'

/*Nell’esempio abbiamo creato la mappa ed aggiunto tre coppie chiave-valore tramite il metodo set().
Analogamente agli insiemi, le mappe prevedono il metodo has() per verificare
se una chiave esiste e delete() per eliminare un’associazione. La proprietà size
consente di ottenere il numero degli elementi della mappa
mentre get() consente di accedere al valore associato ad una chiave:*/


const lettere = ['a', 'b', 'c', 'd']
const a = lettere.map((value, index)=>{
  const incrementa = 0;
  if (value == 'b' && lettere.indexOf(value) != -1){
     return value;
  }
});
console.log(a);

const filtro = a.filter((v)=>{
  return v !== undefined;
});
console.log(filtro);

/*filter() ti permette di togliere valori definiti su array cosi da pulire e tenere
solo quello che ti serve*/
