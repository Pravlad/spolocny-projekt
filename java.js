   function datum() { 
      var dat = new Date();
      dat.setTime(Date.parse(document.lastModified));
      var mesiac=1;
      mesiac=mesiac+dat.getMonth();
      var vrat = dat.getDate() + "." + mesiac + "." +
      dat.getFullYear();
      return vrat;
  } 	   

	   
	   
