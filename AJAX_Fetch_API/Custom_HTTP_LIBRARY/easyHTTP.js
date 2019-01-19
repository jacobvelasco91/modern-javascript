function EasyHttp(){
  this.http = new XMLHttpRequest();
}

//MAKE A GET HTTP REQUEST
EasyHttp.prototype.get = function(url){
  this.http.open('GET',url,true);

  this.http.onload = function(){
    if () {

    }
  }

  this.http.send();
}


//MAKE A POST HTTP REQUEST



//MAKE A PUT HTTP REQUEST



//MAKE A DELETE HTTP REQUEST
