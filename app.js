//var let const

/*
------- Scope (kapsam)--------
    global scope: her yerden erişilir
    function scope :function içinde tanımlanan değişkenler sadece o fonksiyon içinde erişilebilir
    block scope :block içinde tanımlanan değişkenler sadece o block içinde erişilebilir ifin içinde
*/

var a = 10; // global scope her yerden erişilebilir
console.log(a); // 10

function metot() {
  var b = 20; // function scope sadece bu fonksiyon içinde erişilebilir
  console.log(b); // 20
}
metot();

//console.log(b); // ReferenceError: b is not defined
// var let const
/*
int falan yok var let const kullanılır
let sayi1=9;
*/
function selamver() {
    var selam="herkese selam"; //function scope
    console.log(selam);
}
selamver(); 

/*
!var =FUNCTİON SCOPE blokta da tanımlasan globelde tanımlarsan globel
!let/const =BLOCK SCOPE aynı değişken isminden sadece bir tane varda aynı kullanılabilir const sabit değer olur değişmez let değişir

*/