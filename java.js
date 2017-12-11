   function datum() { 
      var dat = new Date();
      dat.setTime(Date.parse(document.lastModified));
      var mesiac=1;
      mesiac=mesiac+dat.getMonth();
      var vrat = dat.getDate() + "." + mesiac + "." +
      dat.getFullYear();
      return vrat;
  } 	   
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

 writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Action is the real measure of intelligence.";
    quotes[1] = "Baseball has the great advantage over cricket of being sooner ended.";
    quotes[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one’s level of peace of mind.";
    quotes[3] = "A good head and a good heart are always a formidable combination.";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
 function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
  }
