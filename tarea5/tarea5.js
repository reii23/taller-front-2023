function obtenerSuma(notas) {
    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
    return suma;
  }
  
  function obtenerPromedio(notas) {
    var suma = obtenerSuma(notas);
    var promedio = suma / notas.length;
    return promedio;
  }
  
  var notasAlumno = [6, 8, 9, 2, 5, 10];
  var sumaNotas = obtenerSuma(notasAlumno);
  var promedioNotas = obtenerPromedio(notasAlumno);
  
  console.log("La suma de las notas es: " + sumaNotas);
  console.log("El promedio de las notas es: " + promedioNotas);
  