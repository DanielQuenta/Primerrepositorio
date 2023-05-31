function captura(){
    let resp=1;
    var dato=document.getElementById("dato").value;
    while(dato>0){
        resp=dato*resp;
        dato--;
    }
    //alert(resp);
    document.write("EL FACTORIAL DE TU NUMERO ES ");
    document.write(resp);
}
function gradosc(){
    let dato2=document.getElementById("dato").value;
    if(dato2<=15){
        document.write("EL CLIMA ES FRIO");
    }
    if(dato2>=16&&dato2<=25){
        document.write("EL CLIMA ES TEMPLADO");
    }
    if(dato2>=26&&dato2<=40){
        document.write("EL CLIMA ES CALIDO");
    }
}
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        document.writeln('FizzBuzz');
      } else if (i % 3 === 0) {
        document.writeln('Fizz');
      } else if (i % 5 === 0) {
        document.writeln('Buzz');
      }
    }
  }
  function fecha(){
    var fecha = new Date();
   var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
   var dia= fecha.getDate();
   let sem=semana[fecha.getDay()];
   var meses=['enero','febrero','marzo','abril','Mayo','junio']
   var mes=meses[fecha.getMonth()]; 
   var anio=fecha.getFullYear();
   document.write(sem+','+dia+' de '+mes+' del '+anio);
  }