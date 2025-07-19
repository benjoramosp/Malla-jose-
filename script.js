// === LocalStorage ===
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// === Créditos ===
const creditos = {};
ramos.forEach(r => {
  // Si no hay créditos, asumimos 10 por defecto
  creditos[r.codigo] = r.creditos || 10;
});

function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, codigo) => sum + (creditos[codigo] || 0), 0);
}

// === Lógica de desbloqueo ===
function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const desbloqueados = new Set(aprobados); // todos los ramos aprobados ya están desbloqueados
  const totalCreditos = calcularCreditosAprobados();

  // Recorrer todos los ramos
  ramos.forEach(ramo => {
    const elem = document.getElementById(ramo.codigo);
    if (!elem) return;

    // Si ya está aprobado, siempre está desbloqueado
    if (aprobados.includes(ramo.codigo)) {
      elem.classList.remove('bloqueado');
      return;
    }

    // Buscar si alguno de sus prerrequisitos lo abre
    const requerimientos = ramos.filter(r => r.abre.includes(ramo.codigo)).map(r => r.codigo);
    const cumple = requerimientos.every(req => aprobados.includes(req));

    if (cumple) {
      elem.classList.remove('bloqueado');
    } else {
      elem.classList.add('bloqueado');
    }
  });
}

// === Aprobar o desaprobar un ramo ===
function aprobar(e) {
  const ramo = e.currentTarget;
  const codigo = ramo.id;

  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(codigo)) aprobados.push(codigo);
  } else {
    const idx = aprobados.indexOf(codigo);
    if (idx > -1) aprobados.splice(idx, 1);
  }

  guardarAprobados(aprobados);
  actualizarDesbloqueos();
}

// === Renderizado de la malla ===
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("linea-tiempo");

  // Agrupar por semestre
  const ramosPorSemestre = {};
  ramos.forEach(r => {
    if (!ramosPorSemestre[r.semestre]) ramosPorSemestre[r.semestre] = [];
    ramosPorSemestre[r.semestre].push(r);
  });

  const semestres = Object.keys(ramosPorSemestre).sort((a, b) => a - b);
  semestres.forEach(semestre => {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    divSemestre.appendChild(titulo);

    ramosPorSemestre[semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.className = `ramo ${ramo.tipo}`;
      div.id = ramo.codigo;

      const tituloRamo = document.createElement("strong");
      tituloRamo.textContent = ramo.nombre;
      div.appendChild(tituloRamo);

      const cod = document.createElement("small");
      cod.textContent = ramo.codigo;
      div.appendChild(cod);

      divSemestre.appendChild(div);
    });

    contenedor.appendChild(divSemestre);
  });

  // Restaurar progreso y asignar clics
  const aprobados = obtenerAprobados();
  const todosRamos = document.querySelectorAll(".ramo");

  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add("aprobado");
    }
    ramo.addEventListener("click", aprobar);
  });

  actualizarDesbloqueos();
});
