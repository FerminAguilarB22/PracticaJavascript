function NumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min);
  }

document.write(NumeroAleatorio(0,99));