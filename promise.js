//promise si usano x salvare dati nel db

const x = ()=>{
  return new Promise((resolve, reject)=>{
    console.log('Federico');     //standard per le promise
    setTimeout(function () {
        return resolve('stocazzo!!!')
      }, 3000);
  });
};

const y = ()=>{
  x().then((data)=>{         //data è il parametro che passiamo nel resolve // return del resolve
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });
};
y();


// const x = (a, b)=>{
//   return new Promise((resolve, reject)=>{
//     let sum = a+b;
//     if (sum === 2){
//       return resolve(true);
//     }else {
//       return reject(false);
//     }
//   });
// };
//
// const y = (a, b)=>{
//   return x(a, b).then((data)=>{
//     console.log(data);
//   }).catch((err)=>{
//     console.log(err);
//   });
// };
// y(1,1);
//////////////////////////////////////////////////////////////////////////////
const z = (a)=>{
  return new Promise ((resolve, reject)=>{
    let str = 'federico'.length
    setTimeout(function () {
      return resolve(str + '  sono le lettere della stringa')
    }, 2000);
  });
};

const k = (a)=>{
  return z(a).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });
};
k('federico');
////////////////////////////////////////////////////////////////////////////
const num = (par1, par2)=>{
  return new Promise((resolve, reject)=>{
    let plus = par1*par2;
    if (plus > 7){
      return resolve(true);
    }else{
      return reject(false);
    };
  });
};

const rich = (par1, par2)=>{
  return num(par1, par2).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });
};
rich(1, 3)


/////////////////////////////  PROMISE  /////////////////////////////////////

const ciao = (g)=>{
  return new Promise((resolve, reject)=>{
    let al = g+'ciao' ;
    setTimeout(()=>{
      if(typeof(this.nome) == 'undefined') return this.nome == 'OK'
      if(this.eta >= 20) this.eta == 'ti stai facendo vecchio'
      if (this.cognome != 'billo'){
        return resolve(true);
      }else{
        return reject(false);
      }
  }, 2500);
  });
};

const miao = (g)=>{
  ciao(g).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });
};

miao({
  nome : 'federico',
  cognome:'farchione',
  eta:29
})


const proto = (a, b)=>{
    return new Promise((resolve, reject)=>{
      let qq = a+b+5;
      if(qq > 10){
      return resolve('ok')
    }else{
      return reject('NO!!!')
    }
});
}

const pippo = (a, b)=>{
  proto(a, b).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });
};
pippo(9,2)

//ESEMPIO DI PROMISE CON FUNZIONE INTERNA

const gino = ()=>{
  return new Promise((resolve, reject)=>{
    let uno = [1, 3, 5, 6,5,6];
    let due = ['uno','tre','cinque','sei'];
    let con = function(a, b){
      let tre = a.concat(b);
      //console.log(tre);
      return tre;
    }
    let x = con(uno,due);
    setTimeout(()=>{
      if(x.length <8){
      //  con().push(99);
        return resolve('lunghezza ok ' + x)
      }else{
        return reject('ancora piccolo ' + x.length+'='+x)
      }
},4000);
  });
}
const bino = ()=>{
  gino().then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });
};
bino()


const alpha = (a, b)=>{
  return new Promise((resolve, reject)=>{
    let ph = a/b
    let gh = a*b
    setTimeout(()=>{
      if (ph > 9 ){
        return resolve(ph+gh + ' = eccoli')
      }else{
        return reject('NO')
      }
    }, 2000)
  });
}
const beta = (a, b)=>{
  alpha(a, b).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  });
}
beta(2, 2)



const baka = ()=>{
  return new Promise((resolve, reject)=>{
    let arr = [1, 2, 3, 4, 5, 6, 'ciao', '3', '5'];
    let str = 'miao';
    let num = 99;
    let tot = arr.map((v,i)=>{
        if (typeof(v) == 'string'){
          return tot;
        }
      });
      console.log(arr);
  });
};

const agata = ()=>{
  baka().then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err);
  })
};
agata();
