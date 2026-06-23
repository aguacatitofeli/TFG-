// Lee que enjambre mostrar desde la URL: enjambre.html?e=enjambre1
const params = new URLSearchParams(location.search);
const carpeta = params.get("e");

const GRUPOS = [
  {key:"ok",  titulo:"Óptimas — seleccionadas",      color:"var(--ok)"},
  {key:"mid", titulo:"Aceptables — uso condicional", color:"var(--mid)"},
  {key:"no",  titulo:"Deficientes — descartadas",    color:"var(--no)"},
];
function render(D){
  const base = "enjambres/" + carpeta + "/sismogramas/";
  document.getElementById("eyebrow").textContent = D.eyebrow || "Enjambre";
  document.getElementById("titulo").textContent = D.titulo;
  document.getElementById("desc").textContent = D.desc || "";
  document.title = D.titulo + " · TFG";
  // Referencia
  if(D.referencia){
    const r = D.referencia;
    document.getElementById("refBox").style.display = "grid";
    document.getElementById("refImg").src = base + r.f + ".png";
    document.getElementById("refImg").alt = "Sismograma de " + r.code;
    document.getElementById("refCode").textContent = r.code;
    document.getElementById("refDesc").textContent = r.desc || "";
    document.getElementById("refThumb").dataset.full = base + r.f + ".png";
    document.getElementById("refThumb").dataset.code = r.code + " · referencia";
  }
  // Grupos
  const cont = document.getElementById("groups");
  GRUPOS.forEach(gr => {
    const items = D.estaciones.filter(e => e.g === gr.key);
    if(!items.length) return;
    const sec = document.createElement("section");
    sec.className = "group";
    sec.innerHTML =
      '<div class="group-head"><span class="gdot" style="background:'+gr.color+'"></span>'
      + '<h3>'+gr.titulo+'</h3><span class="count">'+items.length+' estaciones</span></div>'
      + '<div class="group-rule"></div><div class="grid">'
      + items.map(e =>
          '<div class="card" data-full="'+base+e.f+'.png" data-code="'+e.code+'">'
          + '<div class="imgwrap"><img loading="lazy" src="'+base+e.f+'.png" alt="Sismograma de '+e.code+'"></div>'
          + '<div class="label"><span class="code">'+e.code+'</span>'
          + '<span class="badge" style="background:'+gr.color+'"></span></div></div>'
        ).join("")
      + '</div>';
    cont.appendChild(sec);
  });
}
// Lightbox
const lb=document.getElementById("lb"),lbImg=document.getElementById("lbImg"),lbCap=document.getElementById("lbCap");
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-full]");
  if(t){lbImg.src=t.dataset.full;lbImg.alt="Sismograma de "+t.dataset.code;
    lbCap.innerHTML=t.dataset.code+'<span class="hint">clic para cerrar</span>';
    lb.classList.add("open");}
});
function closeLb(){lb.classList.remove("open");lbImg.src="";}
lb.addEventListener("click",closeLb);
document.getElementById("lbClose").addEventListener("click",closeLb);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLb();});
// Carga el datos.js del enjambre indicado
if(!carpeta){
  document.getElementById("err").style.display="block";
  document.getElementById("err").textContent="No se ha indicado ningún enjambre. Vuelve al catálogo.";
  document.getElementById("titulo").textContent="Error";
} else {
  const s=document.createElement("script");
  s.src="enjambres/"+carpeta+"/datos.js";
  s.onload=()=>{ if(window.DATOS_ENJAMBRE) render(window.DATOS_ENJAMBRE); };
  s.onerror=()=>{
    document.getElementById("err").style.display="block";
    document.getElementById("err").textContent="No se pudo cargar el enjambre '"+carpeta+"'. Revisa que exista enjambres/"+carpeta+"/datos.js";
    document.getElementById("titulo").textContent="Error";
  };
  document.head.appendChild(s);
}