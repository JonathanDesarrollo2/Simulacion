const investigacionesDB = [
    {
        id: 1,
        titulo: "Modelos de Desarrollo de Software: Análisis Comparativo",
        contenido: "Estudio integral de los principales modelos de desarrollo: escalonado, en V, iterativo, espiral y continuo...",
        contenidoCompleto: [
            {
                introduccion: {
                    titulo: "Evolución Histórica de los Modelos",
                    texto: "Desde el enfoque rígido del modelo escalonado (1970) hasta la fluidez del desarrollo continuo (2010), los paradigmas de ingeniería de software han evolucionado para adaptarse a nuevas necesidades tecnológicas.",
                    lineaTemporal: [
                        "1970: Modelo Escalonado (Royce)",
                        "1985: Modelo en V (Aeronáutica alemana)",
                        "1988: Modelo Espiral (Boehm)",
                        "2001: Modelos Iterativos (Manifiesto Ágil)",
                        "2010: Desarrollo Continuo (Amazon/Netflix)"
                    ]
                }
            },
            
            {
                modeloDestacado: {
                    nombre: "Escalonado",
                    icono: "📐",
                    enfoque: "Secuencial estricto",
                    caracteristicas: [
                        "7 fases no superpuestas",
                        "Documentación exhaustiva",
                        "0% de flexibilidad post-aprobación",
                        "Costo promedio de cambios: $5,000/post-implementación (IEEE)"
                    ],
                    casoEstudio: {
                        titulo: "Sistema de Control de Reactores Nucleares",
                        resultado: "Reducción del 99.97% en errores críticos vs métodos informales"
                    }
                }
            },

            {
                diagramaInteractivo: {
                    titulo: "Modelo en V: Dualidad Desarrollo-Validación",
                    estructura: [
                        "Requisitos → Pruebas de Sistema",
                        "Diseño → Pruebas de Integración",
                        "Codificación → Pruebas Unitarias"
                    ],
                    aplicacion: "Usado en 92% de proyectos médicos clase III (FDA 2023)",
                    flujo: "▶️ Cada etapa izquierda genera artefactos para validación derecha"
                }
            },

            {
                iterativo: {
                    titulo: "Desarrollo por Iteraciones",
                    infografia: [
                        "🔄 Ciclos de 2-6 semanas",
                        "📊 40% menos riesgos técnicos",
                        "💡 15 iteraciones promedio por proyecto",
                        "🛠 Prototipos funcionales desde iteración 3"
                    ],
                    ejemplo: "Desarrollo de ChatGPT: 153 iteraciones en 18 meses"
                }
            },
            {
                espiral: {
                    advertencia: "⚠️ Complejidad Controlada",
                    fases: [
                        {
                            nombre: "Identificación de Riesgos",
                            herramientas: ["FMEA", "Árboles de fallos"],
                            costo: "15-20% del presupuesto total"
                        },
                        {
                            nombre: "Prototipado Rápido",
                            eficiencia: "Reduce incertidumbre técnica en 68%"
                        }
                    ],
                    estadistica: "78% proyectos de criptografía lo utilizan"
                }
            },
            {
                continuo: {
                    titulo: "🚀 DevOps en Acción",
                    pipeline: [
                        "Commit → Build → Test → Deploy → Monitor",
                        "Tiempo promedio ciclo: 11 minutos (GitLab 2023)"
                    ],
                    casosExitos: [
                        "Amazon: 136,000 despliegues/año",
                        "Meta: 1,000+ commits/día en React"
                    ]
                }
            },

            {
                comparativa: {
                    titulo: "📊 Tabla Comparativa",
                    modelos: [
                        {
                            nombre: "Escalonado",
                            flexibilidad: "1/10",
                            documentación: "10/10",
                            velocidad: "3/10"
                        },
                        {
                            nombre: "Continuo",
                            flexibilidad: "10/10",
                            documentación: "6/10",
                            velocidad: "9/10"
                        }
                    ],
                    conclusion: "Elección depende de: criticidad del sistema, madurez de requisitos y cultura organizacional"
                }
            },

            {
                seleccion: {
                    titulo: "🔍 ¿Cómo Elegir?",
                    flujograma: [
                        "¿Requiere certificación? → Sí → Modelo en V",
                        "¿Entorno volátil? → Sí → Iterativo/Espiral",
                        "¿Infraestructura cloud? → Sí → Continuo"
                    ],
                    reglaOro: "Proyectos <6 meses: Ágil/Iterativo || Proyectos >2 años: Espiral/Híbrido"
                }
            },
        ],
        imagen: "R.jpg"
    }
];
// Función para acortar texto
const acortarTexto = (texto, maxLength = 250) => texto.length > maxLength ? `${texto.substring(0, maxLength)}...` : texto;

// Función para crear elementos de lista
const crearLista = (items) => `
  <ul class="list-disc pl-6 mb-4 space-y-2">
    ${items.map(item => `<li class="text-gray-700">${item}</li>`).join('')}
  </ul>
`;

// Componentes reutilizables
const Componentes = {
  tarjetaInvestigacion: ({ imagen, titulo, contenido, id }) => `
    <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div class="flex flex-col md:flex-row">
        <img src="${imagen}" alt="${titulo}" class="w-full md:w-1/3 h-52 object-cover object-center">
        <div class="p-6 md:p-8 flex-1">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">${titulo}</h2>
          <p class="text-gray-600 mb-5 leading-relaxed">${contenido}</p>
          <a href="detalle.html?id=${id}" 
             class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Ver investigación
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,

  timeline: items => `
    <div class="relative pl-8 border-l-2 border-blue-200 space-y-6">
      ${items.map(item => `
        <div class="relative">
          <div class="absolute w-4 h-4 bg-blue-500 rounded-full -left-[25px] top-1"></div>
          <p class="text-gray-600">${item}</p>
        </div>
      `).join('')}
    </div>
  `,

  tablaComparativa: ({ modelos, conclusion }) => `
    <div class="rounded-lg border border-gray-200 overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-4 text-left font-semibold text-gray-700">Modelo</th>
            <th class="px-6 py-4 text-center font-semibold text-gray-700">Flexibilidad</th>
            <th class="px-6 py-4 text-center font-semibold text-gray-700">Documentación</th>
            <th class="px-6 py-4 text-center font-semibold text-gray-700">Velocidad</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          ${modelos.map(modelo => `
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 font-medium text-gray-900">${modelo.nombre}</td>
              <td class="px-6 py-4 text-center">${modelo.flexibilidad}</td>
              <td class="px-6 py-4 text-center">${modelo.documentación}</td>
              <td class="px-6 py-4 text-center">${modelo.velocidad}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="p-4 bg-gray-50 border-t border-gray-200">
        <p class="text-sm text-gray-600">${conclusion}</p>
      </div>
    </div>
  `
};

// Cargar investigaciones en index.html
if (document.getElementById('contenedor-investigaciones')) {
  const contenedor = document.getElementById('contenedor-investigaciones');
  contenedor.innerHTML = investigacionesDB.map(investigacion => 
    Componentes.tarjetaInvestigacion({
      ...investigacion,
      contenido: acortarTexto(investigacion.contenido)
    })
  ).join('');
}

// Cargar detalle en detalle.html
if (document.getElementById('detalle-investigacion')) {
  const params = new URLSearchParams(window.location.search);
  const investigacion = investigacionesDB.find(item => item.id === parseInt(params.get('id')));

  // Dentro de la función renderizarContenido
const renderizarContenido = (contenido) => contenido.map(item => {
    const [key, data] = Object.entries(item)[0];
    
    switch(key) {
      case 'introduccion':
        return `
          <section class="space-y-6">
            <h2 class="text-3xl font-bold text-gray-800">${data.titulo}</h2>
            <p class="text-lg text-gray-600 leading-relaxed">${data.texto}</p>
            ${Componentes.timeline(data.lineaTemporal)}
          </section>
        `;

      case 'modeloDestacado':
        return `
          <section class="bg-blue-50 rounded-xl p-6 space-y-4">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">${data.icono}</span>
              <div>
                <h2 class="text-2xl font-bold text-gray-800">${data.nombre}</h2>
                <p class="text-gray-600">${data.enfoque}</p>
              </div>
            </div>
            ${crearLista(data.caracteristicas)}
            <div class="bg-white p-4 rounded-lg">
              <h3 class="font-bold text-lg mb-2">${data.casoEstudio.titulo}</h3>
              <p class="text-gray-600">${data.casoEstudio.resultado}</p>
            </div>
          </section>
        `;

      case 'diagramaInteractivo':
        return `
          <section class="border-l-4 border-blue-500 pl-6 space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
            <div class="space-y-2">
              ${data.estructura.map(item => `
                <div class="flex items-center gap-2 text-gray-600">
                  <span class="text-blue-500">→</span>
                  ${item}
                </div>
              `).join('')}
            </div>
            <p class="text-sm text-gray-500">${data.aplicacion}</p>
            <div class="bg-blue-50 p-3 rounded-lg">
              <p class="text-gray-600">${data.flujo}</p>
            </div>
          </section>
        `;

      case 'iterativo':
        return `
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              ${data.infografia.map(item => `
                <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p class="text-lg">${item}</p>
                </div>
              `).join('')}
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="font-medium">Ejemplo práctico: ${data.ejemplo}</p>
            </div>
          </section>
        `;

      case 'espiral':
        return `
          <section class="space-y-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <p class="font-bold text-yellow-700">${data.advertencia}</p>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
              ${data.fases.map(fase => `
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <h3 class="font-bold mb-2">${fase.nombre}</h3>
                  ${fase.herramientas ? crearLista(fase.herramientas) : ''}
                  ${fase.costo ? `<p class="text-gray-600">Costo: ${fase.costo}</p>` : ''}
                  ${fase.eficiencia ? `<p class="text-gray-600">${fase.eficiencia}</p>` : ''}
                </div>
              `).join('')}
            </div>
            <p class="text-sm text-gray-500">${data.estadistica}</p>
          </section>
        `;

      case 'continuo':
        return `
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
            <div class="bg-blue-100 p-4 rounded-lg">
              ${crearLista(data.pipeline)}
            </div>
            <div class="grid gap-4 md:grid-cols-2">
              ${data.casosExitos.map(caso => `
                <div class="bg-white p-4 rounded-lg border border-gray-200">
                  <p class="text-gray-600">${caso}</p>
                </div>
              `).join('')}
            </div>
          </section>
        `;

      case 'comparativa':
        return `
          <section class="space-y-6">
            <h2 class="text-3xl font-bold text-gray-800">${data.titulo}</h2>
            ${Componentes.tablaComparativa(data)}
          </section>
        `;

      case 'seleccion':
        return `
          <section class="bg-purple-50 p-6 rounded-xl space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
            <div class="space-y-2">
              ${data.flujograma.map(item => `
                <div class="flex items-center gap-2 text-gray-600">
                  <span class="text-purple-500">▸</span>
                  ${item}
                </div>
              `).join('')}
            </div>
            <div class="bg-white p-4 rounded-lg">
              <p class="font-medium">${data.reglaOro}</p>
            </div>
          </section>
        `;

      default:
        return `<pre class="bg-red-50 p-4 rounded">${JSON.stringify(item, null, 2)}</pre>`;
    }
}).join('');

  if (investigacion) {
    document.getElementById('detalle-investigacion').innerHTML = `
      <article class="max-w-4xl mx-auto space-y-12 pb-12">
        <header class="space-y-8">
          <img src="${investigacion.imagen}" alt="${investigacion.titulo}" 
               class="w-full h-96 object-cover rounded-xl shadow-lg">
          <h1 class="text-4xl font-bold text-gray-900">${investigacion.titulo}</h1>
        </header>
        
        <div class="prose-lg text-gray-700 space-y-12">
          ${renderizarContenido(investigacion.contenidoCompleto)}
        </div>
      </article>
    `;
  } else {
    document.getElementById('detalle-investigacion').innerHTML = `
      <div class="text-center py-20 space-y-4">
        <h2 class="text-2xl text-red-600 font-semibold">Investigación no encontrada</h2>
        <a href="index.html" class="inline-flex items-center text-blue-600 hover:text-blue-800">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Volver al inicio
        </a>
      </div>
    `;
  }
}