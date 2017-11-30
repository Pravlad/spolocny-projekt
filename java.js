function tiktak(){
var cas=new Date()
var hodina=cas.getHours()
var minuta=cas.getMinutes()
var sekunda=cas.getSeconds()

if (minuta<10)
minuta="0"+minuta

if (sekunda<10)
sekunda="0"+sekunda

document.zobraz.hodiny.value=hodina+":"+minuta+":"+sekunda
setTimeout("tiktak()",1000)
}
tiktak()
	   
  function datum() { 
      var dat = new Date();
      dat.setTime(Date.parse(document.lastModified));
      var mesiac=1;
      mesiac=mesiac+dat.getMonth();
      var vrat = dat.getDate() + "." + mesiac + "." +
      dat.getFullYear();
      return vrat;
  } 	   
	   
	   
