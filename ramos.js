const ramos = [
  // === SEMESTRE 1 ===
  {
    codigo: "LET0101",
    nombre: "Introducción a los Estudios Literarios",
    tipo: "plan-comun",
    semestre: 1,
    abre: ["LET0102"]
  },
  {
    codigo: "LET0121",
    nombre: "Grandes Preguntas sobre el Lenguaje",
    tipo: "plan-comun",
    semestre: 1,
    abre: ["LET0122"]
  },
  {
    codigo: "LET0131",
    nombre: "Gramática Española I",
    tipo: "plan-comun",
    semestre: 1,
    abre: ["LET0132"]
  },
  {
    codigo: "LET0111",
    nombre: "Literatura Antigua y Medieval",
    tipo: "plan-comun",
    semestre: 1,
    abre: ["LET0112"]
  },
  {
    codigo: "FIL02001",
    nombre: "Filosofía ¿Para qué?",
    tipo: "filosofia",
    semestre: 1,
    abre: []
  },

  // === SEMESTRE 2 ===
  {
    codigo: "LET0102",
    nombre: "Teoría Literaria I",
    tipo: "plan-comun",
    semestre: 2,
    abre: ["LET0107"]
  },
  {
    codigo: "LET0122",
    nombre: "Modelos Lingüísticos Contemporáneos",
    tipo: "plan-comun",
    semestre: 2,
    abre: []
  },
  {
    codigo: "LET0132",
    nombre: "Gramática Española II",
    tipo: "plan-comun",
    semestre: 2,
    abre: ["LET0125"]
  },
  {
    codigo: "LET0112",
    nombre: "Literatura Moderna y Contemporánea",
    tipo: "plan-comun",
    semestre: 2,
    abre: ["LET0113"]
  },
  {
    codigo: "TEOLOGICO",
    nombre: "Teológico",
    tipo: "teologico",
    semestre: 2,
    abre: []
  },

  // === SEMESTRE 3 ===
  {
    codigo: "LET0103",
    nombre: "Letras Coloniales",
    tipo: "plan-comun",
    semestre: 3,
    abre: ["LET0104"]
  },
  {
    codigo: "LET0123",
    nombre: "Fonética y Fonología Españolas",
    tipo: "plan-comun",
    semestre: 3,
    abre: ["LET0124"]
  },
  {
    codigo: "LET0125",
    nombre: "Lingüística del Texto",
    tipo: "plan-comun",
    semestre: 3,
    abre: ["LET0133"]
  },
  {
    codigo: "LET0113",
    nombre: "Literatura Española General",
    tipo: "plan-comun",
    semestre: 3,
    abre: ["LET0114"]
  },
  {
    codigo: "ELECTIVO3",
    nombre: "Electivo Otra Disciplina",
    tipo: "electivo",
    semestre: 3,
    abre: []
  },

  // === SEMESTRE 4 ===
  {
    codigo: "LET0104",
    nombre: "Narrativa Chilena e Hispanoamericana I",
    tipo: "literatura",
    semestre: 4,
    abre: ["LET0105"]
  },
  {
    codigo: "LET0124",
    nombre: "Semántica Española",
    tipo: "plan-comun",
    semestre: 4,
    abre: []
  },
  {
    codigo: "LET0133",
    nombre: "Lengua Latina I",
    tipo: "plan-comun",
    semestre: 4,
    abre: ["LET0135"]
  },
  {
    codigo: "LET0114",
    nombre: "Poesía Chilena Hispanoamericana I",
    tipo: "literatura",
    semestre: 4,
    abre: ["LET0115"]
  },
  {
    codigo: "ELECTIVO4",
    nombre: "Electivo Otra Disciplina",
    tipo: "electivo",
    semestre: 4,
    abre: []
  },

  // === SEMESTRE 5 ===
  {
    codigo: "LET0105",
    nombre: "Narrativa Chilena e Hispanoamericana II",
    tipo: "literatura",
    semestre: 5,
    abre: ["LET0110"]
  },
  {
    codigo: "LET0107",
    nombre: "Teoría Literaria II",
    tipo: "literatura",
    semestre: 5,
    abre: []
  },
  {
    codigo: "LET0135",
    nombre: "Historia de la Lengua",
    tipo: "plan-comun",
    semestre: 5,
    abre: ["LET0126"]
  },
  {
    codigo: "LET0115",
    nombre: "Poesía Chilena Hispanoamericana II",
    tipo: "literatura",
    semestre: 5,
    abre: ["LET0116"]
  },
  {
    codigo: "OPR5",
    nombre: "Optativo de Profundización",
    tipo: "opr",
    semestre: 5,
    abre: []
  },

  // === SEMESTRE 6 ===
  {
    codigo: "LET0110",
    nombre: "Teatro Chileno Hispanoamericano",
    tipo: "literatura",
    semestre: 6,
    abre: ["LET150T"]
  },
  {
    codigo: "LET0108",
    nombre: "Pensamiento y Ensayo Chileno e Hispanoamericano",
    tipo: "literatura",
    semestre: 6,
    abre: []
  },
  {
    codigo: "LET0126",
    nombre: "Estudios del Discurso",
    tipo: "plan-comun",
    semestre: 6,
    abre: []
  },
  {
    codigo: "LET0116",
    nombre: "Literatura Española I",
    tipo: "literatura",
    semestre: 6,
    abre: ["LET0117"]
  },
  {
    codigo: "ELECTIVO6",
    nombre: "Electivo Otra Disciplina",
    tipo: "electivo",
    semestre: 6,
    abre: []
  },

  // === SEMESTRE 7 ===
  {
    codigo: "LET150T",
    nombre: "Investigación en Literatura I",
    tipo: "literatura",
    semestre: 7,
    abre: ["LET160T"]
  },
  {
    codigo: "LET0117",
    nombre: "Literatura Española II",
    tipo: "literatura",
    semestre: 7,
    abre: []
  },
  {
    codigo: "OPR7",
    nombre: "Optativo de Profundización",
    tipo: "opr",
    semestre: 7,
    abre: []
  },
  {
    codigo: "ELECTIVO7",
    nombre: "Electivo Otra Disciplina",
    tipo: "electivo",
    semestre: 7,
    abre: []
  },

  // === SEMESTRE 8 ===
  {
    codigo: "LET160T",
    nombre: "Investigación en Literatura II",
    tipo: "literatura",
    semestre: 8,
    abre: []
  },
  {
    codigo: "OPR8",
    nombre: "Optativo de Profundización",
    tipo: "opr",
    semestre: 8,
    abre: []
  },
  {
    codigo: "ELECTIVO8",
    nombre: "Electivo Otra Disciplina",
    tipo: "electivo",
    semestre: 8,
    abre: []
  }
];
