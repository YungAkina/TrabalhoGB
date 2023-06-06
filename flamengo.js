var trapezioResults = [];
var losangoResults = [];
var paralelogramoResults = [];

$(document).ready(function() {
  function calcularAreaTrapezio() {
    var baseMenor = parseFloat($("#baseMenor").val());
    var baseMaior = parseFloat($("#baseMaior").val());
    var altura = parseFloat($("#alturaTrapezio").val());
    var area = (baseMenor + baseMaior) / 2 * altura;

    trapezioResults.push({ baseMenor: baseMenor, baseMaior: baseMaior, altura: altura, area: area });

    $("#resultadoTrapezio").text("A área do trapézio é: " + area);
  }

  function calcularAreaLosango() {
    var diagonalMaior = parseFloat($("#diagonalMaior").val());
    var diagonalMenor = parseFloat($("#diagonalMenor").val());
    var area = (diagonalMaior * diagonalMenor) / 2;

    losangoResults.push({ diagonalMaior: diagonalMaior, diagonalMenor: diagonalMenor, area: area });

    $("#resultadoLosango").text("A área do losango é: " + area);
  }

  function calcularAreaParalelogramo() {
    var base = parseFloat($("#base").val());
    var altura = parseFloat($("#alturaParalelogramo").val());
    var area = base * altura;

    paralelogramoResults.push({ base: base, altura: altura, area: area });

    $("#resultadoParalelogramo").text("A área do paralelogramo é: " + area);
  }

  $("#calcularTrapezio").click(function() {
    calcularAreaTrapezio();
  });

  $("#calcularLosango").click(function() {
    calcularAreaLosango();
  });

  $("#calcularParalelogramo").click(function() {
    calcularAreaParalelogramo();
  });

  function mostrarDadosTrapezio() {
    var resultados = "Resultados de trapézio:<br>";
    for (var i = 0; i < trapezioResults.length; i++) {
      resultados += "Resultado " + (i + 1) + ": " + trapezioResults[i].area + "<br>";
    }
    $("#dadosTrapezio").html(resultados);
  }

  function mostrarDadosLosango() {
    var resultados = "Resultados de losango:<br>";
    for (var i = 0; i < losangoResults.length; i++) {
      resultados += "Resultado " + (i + 1) + ": " + losangoResults[i].area + "<br>";
    }
    $("#dadosLosango").html(resultados);
  }

  function mostrarDadosParalelogramo() {
    var resultados = "Resultados de paralelogramo:<br>";
    for (var i = 0; i < paralelogramoResults.length; i++) {
      resultados += "Resultado " + (i + 1) + ": " + paralelogramoResults[i].area + "<br>";
    }
    $("#dadosParalelogramo").html(resultados);
  }

  $("#mostrarTrapezio").click(function() {
    mostrarDadosTrapezio();
  });

  $("#mostrarLosango").click(function() {
    mostrarDadosLosango();
  });

  $("#mostrarParalelogramo").click(function() {
    mostrarDadosParalelogramo();
  });
});