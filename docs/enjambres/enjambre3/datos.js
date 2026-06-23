// =============================================================================
//  DATOS DEL ENJAMBRE 3
//
//  - titulo / desc / eyebrow:  textos que se muestran arriba.
//  - referencia:  la estacion patron (va destacada arriba). f = nombre del PNG
//                 sin extension, code = como se muestra.
//  - estaciones:  el resto. g = grupo:  "ok" seleccionada | "mid" condicional | "no" descartada
//
//  Los PNG van en la subcarpeta  sismogramas/  de este mismo enjambre.
// =============================================================================

window.DATOS_ENJAMBRE = {
  eyebrow: "Enjambre 12 de julio 2022",
  titulo: "Enjambre 12 de julio 2022",
  desc: "Comparación visual de las estaciones frente a la referencia ES.CCAN (canal HHZ).",

  referencia: {
    f: "07_ES_CCAN_",
    code: "ES.CCAN",
    desc: "Estación patrón (canal HHZ). Ruido de fondo bajo, registro continuo y sin saturación. El resto se clasifica por cercanía a este comportamiento."
  },

  estaciones:  [
    {f:"01_ES_CNOR_",    code:"ES.CNOR",     g:"ok"},
    {f:"02_ES_CBOL_",    code:"ES.CBOL",     g:"no"},
    {f:"03_ES_CFOR_",    code:"ES.CFOR",     g:"ok"},
    {f:"04_ES_CTFS_",    code:"ES.CTFS",     g:"no"},
    {f:"05_ES_CLAJ_1K",  code:"ES.CLAJ.1K",  g:"ok"},
    {f:"06_ES_CDIE_1K",  code:"ES.CDIE.1K",  g:"no"},
    {f:"09_ES_GUIA_",    code:"ES.GUIA",     g:"ok"},
    {f:"10_ES_CCHO_00",  code:"ES.CCHO.00",  g:"ok"},
    {f:"11_ES_CCHO_06",  code:"ES.CCHO.06",  g:"mid"},
    {f:"12_ES_CCHO_07",  code:"ES.CCHO.07",  g:"mid"},
    {f:"13_ES_CCHO_08",  code:"ES.CCHO.08",  g:"mid"},
    {f:"14_ES_CCHO_01",  code:"ES.CCHO.01",  g:"mid"},
    {f:"15_ES_CCHO_02",  code:"ES.CCHO.02",  g:"mid"},
    {f:"16_ES_CCHO_03",  code:"ES.CCHO.03",  g:"no"},
    {f:"17_ES_CCHO_04",  code:"ES.CCHO.04",  g:"mid"},
    {f:"18_ES_CCHO_05",  code:"ES.CCHO.05",  g:"mid"},
    {f:"19_ES_CLGU_1K",  code:"ES.CLGU.1K",  g:"no"},
    {f:"20_ES_CARI_1K",  code:"ES.CARI.1K",  g:"no"},
    {f:"21_ES_EBAJ_",    code:"ES.EBAJ",     g:"no"},
    {f:"22_ES_CRAJ_",    code:"ES.CRAJ",     g:"no"},
    {f:"23_ES_CGAR_1K",  code:"ES.CGAR.1K",  g:"no"},
    {f:"24_ES_CGUI_1K",  code:"ES.CGUI.1K",  g:"no"},
    {f:"25_ES_CVIL_",    code:"ES.CVIL",     g:"no"},
    {f:"26_ES_CINF_1K",  code:"ES.CINF.1K",  g:"no"},
    {f:"27_ES_CREA_1K",  code:"ES.CREA.1K",  g:"no"},
    {f:"28_ES_CADE_1K",  code:"ES.CADE.1K",  g:"no"},
    {f:"29_ES_CPIT_1K",  code:"ES.CPIT.1K",  g:"no"},
  ]};