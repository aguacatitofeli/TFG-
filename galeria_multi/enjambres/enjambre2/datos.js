// =============================================================================
//  DATOS DEL ENJAMBRE 2  (estaciones distintas al enjambre 1)
//  Ver explicacion completa en enjambre1/datos.js
// =============================================================================

window.DATOS_ENJAMBRE = {
  eyebrow: "Enjambre · octubre 2022",
  titulo: "Enjambre de octubre 2022",
  desc: "Comparación visual de las estaciones del enjambre frente a la referencia ES.CRAJ.",

  referencia: {
    f: "01_ES_CRAJ_",
    code: "ES.CRAJ",
    desc: "Estación patrón de este enjambre. Buena relación señal/ruido y registro estable durante la serie."
  },

  estaciones: [
    {f:"02_ES_CVIL_",   code:"ES.CVIL",    g:"ok"},
    {f:"03_ES_CINF_1K", code:"ES.CINF.1K", g:"ok"},
    {f:"04_ES_CARI_1K", code:"ES.CARI.1K", g:"ok"},

    {f:"05_ES_CADE_1K", code:"ES.CADE.1K", g:"mid"},
    {f:"06_ES_CPIT_1K", code:"ES.CPIT.1K", g:"mid"},

    {f:"07_ES_CREA_1K", code:"ES.CREA.1K", g:"no"},
    {f:"08_ES_CGAR_1K", code:"ES.CGAR.1K", g:"no"},
  ]
};
