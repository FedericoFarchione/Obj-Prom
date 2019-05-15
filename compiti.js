const a = [4, 5, 8, 1, 2, 3];

function beta(x){
  console.log(a.sort()+' '+x);
}

beta('ciao!');

///////////////////////////////////////////////////
function stamp(stampa){
  return console.log(stampa);
};
function somma (par1, par2, callback){
  let sum = par1+par2;
  return callback(sum);
};
somma(1, 2, stamp);

/////////////////////////////////////////////////////
var objj= {
  nome :'Federico',
  cognome :'farchione',
  eta :'20',
  mail: 'federicofarchione@live.it',
  citta : 'Pescara',
  stato : 'Italia'
}
function dimmi(){
  if (objj.nome == 'Federico' && objj.mail === 'federicofarchione@live.it'){
    return objj = 'Benvenuto ZIOFEDE'
  };
  if (typeof(objj.eta) == 'string') return objj.eta = Number(objj.eta)
  if (objj.eta < 18){
     return objj = 'Sei minorenne non può entrare'
   };
  if (objj.stato != 'Italia') {
    return objj = 'Modificare stato & città'
  };
};
dimmi()
console.log(objj);
//////////////////////////////////////////////////////////////////////////////////

var obj = {
  counter : 0,
  get reset() {
    this.counter = 0;
  },
  get increment() {
    this.counter++;
  },
  get decrement() {
    this.counter--;
  },
  set add(value) {
    this.counter += value;
  },
  set subtract(value) {
    this.counter -= value;
  }
};

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;


var saluto = "Buongiorno";
var visualizzaSaluti;
function saluta(persone) {
	var nomeCognome;
	var saluti = [];
	for (var i in persone) {
		nomeCognome = persone[i].nome + " " + persone[i].cognome;
		// immediately-invoked function expression
		saluti.push((function(nc) {
						return function() {
							console.log(saluto + " " + nc);
						};
					})(nomeCognome));
	}
	return saluti;
}
visualizzaSaluti = saluta([{nome: "Mario", cognome: "Rossi"},
                           {nome: "Marco", cognome: "Neri"}]);
for (var i in visualizzaSaluti) { visualizzaSaluti[i](); }



var persona = Object.create(Object.prototype);        //creare un oggetto vuoto
//console.log(persona);  <----------   PAG 38

// var nuovo = new Object()
// nuovo.nome = 'ciao';
// nuovo.cognome = 'miao';
// console.log(nuovo);
//var fede = new persona()
// fede.nome = 'fede';
// fede.cognome = 'miao';
// console.log(fede);


function validaEmail(email) {
    var regexp = /^(([^<>;()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
}

function checkEmail(){
  risultato = document.getElementById("campo_email");
  email = document.getElementById("ripetimail").value;
  risultato.innerHTML = "";
  if (validaEmail(email)) {
    risultato.innerHTML = email + " indirizzo valido";
    risultato.style.color = 'green';
  } else {
    risultato.innerHTML = email + " indirizzo non valido";
    risultato.style.color = 'red';
  }
}
