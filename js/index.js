  /* =========================================================================
    LISTA DE ENJAMBRES 
  
    Para cada enjambre:
      carpeta: nombre de la carpeta dentro de "enjambres/" 
      titulo:  nombre que se muestra
      desc:    descripcion corta (fecha, zona, lo que quieras)
      n:       numero de estaciones (solo informativo, para la tarjeta)
   ========================================================================= */
  const ENJAMBRES = [
    {carpeta:"enjambre1", titulo:"Enjambre de junio 2019", desc:"Zona Las Cañadas · Canal HHZ", n:26},
    {carpeta:"enjambre2", titulo:"Enjambre de junio 2022", desc:"Zona Las Cañadas · Canal HHZ", n:28},
    {carpeta:"enjambre3", titulo:"Enjambre de julio 2022", desc:"Zona Las Cañadas · Canal HHZ", n:28},
  ];

  const grid = document.getElementById("grid");
  ENJAMBRES.forEach((e,i) => {
    const a = document.createElement("a");
    a.className = "card";
    // Construimos la URL pasando el nombre de la carpeta por parámetro (?e=...)
    a.href = "enjambre.html?e=" + encodeURIComponent(e.carpeta);
    // Insertamos la estructura HTML de la tarjeta
    a.innerHTML =
      '<div class="num">ENJAMBRE ' + String(i+1).padStart(2,"0") + '</div>'
      + '<h2>' + e.titulo + '</h2>'
      + '<p>' + e.desc + '</p>'
      + '<div class="meta"><span>' + e.n + ' estaciones</span>'
      + '<span class="arrow">&rarr;</span></div>';
    grid.appendChild(a);
  });