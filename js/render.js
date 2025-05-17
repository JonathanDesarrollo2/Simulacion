


class RenderManager {
  constructor() {
    this.investigaciones = [];
    this.init();
  }

  async init() {
    await this.cargarDatos();
    this.renderizarVista();
  }

  async cargarDatos() {
    try {
      const response = await fetch('investigaciones.json');
      this.investigaciones = await response.json();
    } catch (error) {
      console.error('Error cargando datos:', error);
      this.mostrarErrorCarga();
    }
  }

  renderizarContenido(contenido) {
    let htmlFinal = '';
    for (let i = 0; i < contenido.length; i++) {
      const item = contenido[i];
      const [key, data] = Object.entries(item)[0];
      
      let componente;
      switch(key) {
        case 'introduccion': componente = this.renderIntroduccion(data); break;
        case 'modeloDestacado': componente = this.renderModeloDestacado(data); break;
        case 'diagramaInteractivo': componente = this.renderDiagramaInteractivo(data); break;
        case 'iterativo': componente = this.renderIterativo(data); break;
        case 'espiral': componente = this.renderEspiral(data); break;
        case 'continuo': componente = this.renderContinuo(data); break;
        case 'comparativa': componente = this.renderComparativa(data); break;
        case 'seleccion': componente = this.renderSeleccion(data); break;
        case 'agil': componente = this.renderAgil(data); break;
        case 'extremo': componente = this.renderExtremo(data); break;
        case 'hibrido': componente = this.renderHibrido(data); break;
        case 'scrumEmpresas': componente = this.renderScrumEmpresas(data); break;
        case 'kanbanPequeñas': componente = this.renderKanbanPequeñas(data); break;
        case 'hibridacion': componente = this.renderHibridacion(data); break;
        case 'rolesScrum': componente = this.renderRolesScrum(data); break;
        case 'sprints': componente = this.renderSprints(data); break;
        case 'kanbanDetalle': componente = this.renderKanbanDetalle(data); break;
        case 'otrasMetodologias': componente = this.renderOtrasMetodologias(data); break;
        case 'fundamentos': componente = this.renderFundamentos(data); break;
        case 'clasificacionVariables': componente = this.renderClasificacionVariables(data); break;

        case 'casoEstudio': componente = this.renderCasoEstudio(data); break;
        case 'validacionEstadistica': componente = this.renderValidacionEstadistica(data); break;
        case 'aplicacionesAvanzadas': componente = this.renderAplicacionesAvanzadas(data); break;
        case 'herramientasAvanzadas': componente = this.renderHerramientasAvanzadas(data); break;
        case 'retosInvestigacion': componente = this.renderRetosInvestigacion(data); break;
        case 'capasDetalladas': componente = this.renderCapasDetalladas(data); break;
        default: componente = this.renderComponenteNoReconocido(item); break;
      }
      
      htmlFinal += componente;
    }
    return htmlFinal;
  }

  // Métodos de renderizado específicos
  renderIntroduccion(data) {
    return `
      <section class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-800">${data.titulo}</h2>
        <p class="text-lg text-gray-600 leading-relaxed">${data.texto}</p>
        ${Componentes.timeline(data.lineaTemporal)}
      </section>
    `;
  }
  renderScrumEmpresas(data) {
    return `
      <section class="bg-indigo-50 p-6 rounded-xl space-y-6">
        <div class="flex items-center gap-4">
          ${Componentes.renderizarIcono(data.icono)}
          <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        </div>
        ${crearLista(data.ventajas)}
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="font-bold mb-3">Caso Real</h3>
            <p class="text-gray-600">${data.casoReal}</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="font-bold mb-3">Estadísticas Clave</h3>
            ${crearLista(data.estadisticas)}
          </div>
        </div>
      </section>
    `;
  }
  
  renderKanbanPequeñas(data) {
    return `
      <section class="bg-green-50 p-6 rounded-xl space-y-6">
        <div class="flex items-center gap-4">
          ${Componentes.renderizarIcono(data.icono)}
          <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        </div>
        ${crearLista(data.beneficios)}
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="font-bold mb-3">Ejemplo Práctico</h3>
            <p class="text-gray-600">${data.ejemplo}</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="font-bold mb-3">Datos Relevantes</h3>
            ${crearLista(data.estadisticas)}
          </div>
        </div>
      </section>
    `;
  }
  
  renderHibridacion(data) {
    return `
      <section class="bg-purple-50 p-6 rounded-xl space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        ${crearLista(data.estructura)}
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <h3 class="font-bold mb-3">Casos de Éxito</h3>
          ${data.casosExito.map(item => `
            <div class="flex items-start gap-2 mb-3">
              <span class="text-purple-500">▸</span>
              <p class="text-gray-600">${item}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
  
  renderRolesScrum(data) {
    return `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        <div class="bg-orange-50 p-4 rounded-lg">
          ${crearLista(data.funciones)}
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="font-bold mb-3">Perfil Requerido</h3>
            <p class="text-gray-600">${data.perfil}</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="font-bold mb-3">Estructura Jerárquica</h3>
            ${data.jerarquia.niveles.map(nivel => `
              <div class="flex items-center gap-2 mb-2">
                <span class="text-orange-500">→</span>
                <p class="text-gray-600">${nivel}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
  
  renderSprints(data) {
    return `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        <div class="bg-blue-50 p-4 rounded-lg">
          <p class="font-bold">Duración Típica:</p>
          <p class="text-gray-600">${data.duracion}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="font-bold mb-3">Fases del Sprint</h3>
            ${crearLista(data.fases)}
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="font-bold mb-3">Métricas Clave</h3>
            ${crearLista(data.metricas)}
          </div>
        </div>
        <div class="bg-yellow-50 p-4 rounded-lg">
          <p class="font-bold text-yellow-700">${data.consejo}</p>
        </div>
      </section>
    `;
  }
  
  renderKanbanDetalle(data) {
    return `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        <div class="grid md:grid-cols-4 gap-4">
          ${data.columnas.map(col => `
            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 class="font-bold text-lg mb-2">${col.nombre}</h3>
              <p class="text-gray-600 mb-3">${col.tareas}</p>
              <div class="mt-auto bg-gray-100 p-2 rounded">
                <p class="text-sm font-medium">${col.regla}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h3 class="font-bold mb-3">Flujo de Trabajo</h3>
          <p class="text-gray-600">${data.diagrama.flujo}</p>
          <p class="mt-3 text-sm">Herramientas recomendadas: ${data.diagrama.herramientas}</p>
        </div>
      </section>
    `;
  }
  
  renderOtrasMetodologias(data) {
    return `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">${data.titulo}</h2>
        <div class="grid md:grid-cols-3 gap-4">
          ${data.modelos.map(modelo => `
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h3 class="font-bold mb-3">${modelo.nombre}</h3>
              ${crearLista(modelo.caracteristicas)}
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
  renderModeloDestacado(data) {
    return `
      <section class="bg-blue-50 rounded-xl p-6 space-y-4">
        <div class="flex items-center gap-3 mb-4">
          ${Componentes.renderizarIcono(data.icono)}
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
  }

  renderDiagramaInteractivo(data) {
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
  }

  renderIterativo(data) {
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
  }

  renderEspiral(data) {
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
  }

  renderContinuo(data) {
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
  }

  renderComparativa(data) {
    return `
      <section class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-800">${data.titulo}</h2>
        ${Componentes.tablaComparativa(data)}
      </section>
    `;
  }

  renderSeleccion(data) {
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
  }
  



  renderComponenteNoReconocido(item) {
    return `<pre class="bg-red-50 p-4 rounded">${JSON.stringify(item, null, 2)}</pre>`;
  }

  renderizarVista() {
    this.renderVistaPrincipal();
    this.renderVistaDetalle();
  }

  renderVistaPrincipal() {
    const contenedor = document.getElementById('contenedor-investigaciones');
    if (!contenedor) return;

    contenedor.innerHTML = this.investigaciones.map(investigacion => 
      Componentes.tarjetaInvestigacion({
        ...investigacion,
        contenido: acortarTexto(investigacion.contenido)
      })
    ).join('');
  }

  renderVistaDetalle() {
    const contenedor = document.getElementById('detalle-investigacion');
    if (!contenedor) return;

    const params = new URLSearchParams(window.location.search);
    const investigacion = this.investigaciones.find(item => item.id === parseInt(params.get('id')));

    if (investigacion) {
      contenedor.innerHTML = `
        <article class="max-w-4xl mx-auto space-y-12 pb-12">
          <header class="space-y-8">
            <img src="${investigacion.imagen}" alt="${investigacion.titulo}" 
                class="w-full h-96 object-cover rounded-xl shadow-lg">
            <h1 class="text-4xl font-bold text-gray-900">${investigacion.titulo}</h1>
          </header>
          <div class="prose-lg text-gray-700 space-y-12">
            ${this.renderizarContenido(investigacion.contenidoCompleto)}
          </div>
        </article>
      `;
    } else {
      this.renderError();
    }
  }

  renderError() {
    const contenedor = document.getElementById('detalle-investigacion');
    if (!contenedor) return;

    contenedor.innerHTML = `
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

  mostrarErrorCarga() {
    const contenedor = document.getElementById('contenedor-investigaciones') || 
                      document.getElementById('detalle-investigacion');
    if (!contenedor) return;

    contenedor.innerHTML = `
      <div class="alert-error bg-red-100 p-4 rounded-lg">
        <h3 class="text-red-600 font-semibold">Error cargando los datos</h3>
        <p class="text-red-600">Por favor intenta recargar la página</p>
      </div>
    `;
  }




















// Agrega este método en tu RenderManager
renderCapasDetalladas(data) {
  return `
    <section class="space-y-8 bg-blue-50 p-6 rounded-xl">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">${data.titulo}</h2>
      <div class="grid gap-6 md:grid-cols-2">
        ${data.capas.map(capa => `
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-blue-500 font-bold">#${capa.id}</span>
              <h3 class="text-xl font-semibold">${capa.nombre}</h3>
            </div>
            <p class="text-gray-600 mb-2">${capa.resumen}</p>
            <div class="space-y-3">
              <div class="bg-gray-50 p-4 rounded-md">
                <p class="text-sm font-medium text-blue-700 mb-2">Descripción técnica:</p>
                <p class="text-gray-600">${capa.descripcion}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-md">
                <p class="text-sm font-medium text-blue-700 mb-2">Especificaciones:</p>
                <ul class="list-disc pl-5 space-y-2">
                  ${capa.detallesTecnicos.map(d => `<li class="text-gray-600">${d}</li>`).join('')}
                </ul>
              </div>
              <div class="bg-blue-100 p-3 rounded-md">
                <p class="text-sm font-medium text-blue-800">Protocolos asociados:</p>
                <div class="flex flex-wrap gap-2 mt-2">
                  ${capa.protocolos.map(p => `
                    <span class="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                      ${p}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

































  







  renderFundamentos(data) {
    const safeData = {
      teoremas: data.teoremas || [],
      lineaTemporal: data.lineaTemporal || [],
      aplicacionesModernas: data.aplicacionesModernas || {},
      ...data
    };
  
    return `
      <section class="space-y-8 animate-fadeInUp">
        <h2 class="text-3xl font-bold text-navy-900 dark:text-white">${safeData.titulo}</h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">${safeData.texto}</p>
        
        <div class="grid md:grid-cols-2 gap-8 mt-6">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400">Teoremas Fundamentales</h3>
            ${safeData.teoremas.map(teorema => `
              <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <p class="text-gray-600 dark:text-gray-300">${teorema}</p>
              </div>
            `).join('')}
          </div>
          
          <div class="relative group transform transition duration-500 hover:scale-[1.02]">
            <img src="${safeData.imagen}" alt="Fundamentos" 
                class="w-full rounded-xl shadow-lg object-cover h-full">
            <div class="absolute inset-0 bg-gradient-to-r from-navy-900/20 to-transparent rounded-xl"></div>
          </div>
        </div>
  
        <div class="mt-8 space-y-6">
          <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400">Línea Temporal</h3>
          <div class="relative pl-8 border-l-2 border-teal-500 space-y-8">
            ${safeData.lineaTemporal.map((item, index) => `
              <div class="relative animate-slideIn delay-${index * 100}">
                <div class="absolute w-4 h-4 bg-teal-500 rounded-full -left-[25px] top-2"></div>
                <p class="text-gray-600 dark:text-gray-300">${item}</p>
              </div>
            `).join('')}
          </div>
        </div>
  
        <div class="mt-8 grid md:grid-cols-2 gap-6">
          ${Object.entries(safeData.aplicacionesModernas).map(([key, value]) => `
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 class="font-semibold text-teal-600 dark:text-teal-400 mb-2">${key.charAt(0).toUpperCase() + key.slice(1)}</h4>
              <p class="text-gray-600 dark:text-gray-300">${value}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
  
  renderClasificacionVariables(data) {
    const safeData = {
      estructura: data.estructura || {},
      comparativa: {
        caracteristica: data.comparativa?.caracteristica || [],
        discreta: data.comparativa?.discreta || [],
        continua: data.comparativa?.continua || [],
      },
      ...data
    };
  
    return `
      <section class="space-y-8 animate-fadeInUp">
        <div class="flex items-center gap-4 border-b-2 border-teal-500 pb-4">
          <h2 class="text-2xl font-bold text-navy-900 dark:text-white">${safeData.titulo}</h2>
        </div>
  
        <div class="grid lg:grid-cols-3 gap-8">
          ${Object.entries(safeData.estructura).map(([tipo, detalles]) => {
            const safeDetalles = {
              propiedades: detalles.propiedades || [],
              ejemplos: detalles.ejemplos || [],
              ...detalles
            };
            
            return `
              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 class="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h3>
                <div class="space-y-4">
                  <p class="text-gray-600 dark:text-gray-300">${safeDetalles.definicion}</p>
                  <div class="space-y-2">
                    <h4 class="font-medium text-navy-800 dark:text-gray-200">Propiedades Clave:</h4>
                    ${safeDetalles.propiedades.map(prop => `
                      <p class="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                        ${prop}
                      </p>
                    `).join('')}
                  </div>
                  ${safeDetalles.ejemplos.length > 0 ? `
                    <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 class="font-medium text-navy-800 dark:text-gray-200">Ejemplos:</h4>
                      ${safeDetalles.ejemplos.map(ej => `
                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">▸ ${ej}</p>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
  
        <div class="mt-8 bg-navy-50 dark:bg-gray-700 p-6 rounded-xl">
          <h3 class="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">Comparativa Técnica</h3>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[600px]">
              <thead>
                <tr class="text-left border-b-2 border-teal-500">
                  ${safeData.comparativa.caracteristica.map(c => `
                    <th class="pb-2 pr-4 text-teal-600 dark:text-teal-400">${c}</th>
                  `).join('')}
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-600">
                  ${safeData.comparativa.discreta.map(d => `
                    <td class="py-3 pr-4 text-gray-600 dark:text-gray-300">${d}</td>
                  `).join('')}
                </tr>
                <tr>
                  ${safeData.comparativa.continua.map(c => `
                    <td class="py-3 pr-4 text-gray-600 dark:text-gray-300">${c}</td>
                  `).join('')}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }
  

  
  renderElementoIndividual(elemento) {
    const safeElemento = {
      tipo: elemento?.tipo || '',
      configuracion: {
        animacion: '',
        accion: '',
        texto: '',
        parametro: '',
        rango: [0, 100],
        paso: 1,
        evento: '',
        opciones: [],
        default: '',
        ...elemento?.configuracion
      }
    };
  
    switch(safeElemento.tipo) {
      case 'boton':
        return `
          <button class="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg 
                    transition-all duration-300 ${safeElemento.configuracion.animacion}"
                  onclick="${safeElemento.configuracion.accion}">
            ${safeElemento.configuracion.texto}
          </button>
        `;
      
      case 'controlDeslizante':
        return `
          <div class="space-y-2">
            <label class="block text-gray-700 dark:text-gray-300">${safeElemento.configuracion.parametro}</label>
            <input type="range" 
                  class="w-full range-slider"
                  min="${safeElemento.configuracion.rango[0]}"
                  max="${safeElemento.configuracion.rango[1]}"
                  step="${safeElemento.configuracion.paso}"
                  oninput="${safeElemento.configuracion.evento}(this.value)">
          </div>
        `;
      
      case 'selectorDistribucion':
        return `
          <div class="space-y-2">
            <label class="block text-gray-700 dark:text-gray-300">Seleccionar Distribución</label>
            <select class="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700
                          focus:ring-2 focus:ring-teal-500"
                    onchange="${safeElemento.configuracion.evento}(this.value)">
              ${safeElemento.configuracion.opciones.map(opt => `
                <option value="${opt}" ${opt === safeElemento.configuracion.default ? 'selected' : ''}>
                  ${opt}
                </option>
              `).join('')}
            </select>
          </div>
        `;
      
      default:
        return '';
    }
  }
  

  renderCasoEstudio(data) {
    const safeData = {
      metodologia: {
        variablesEntrada: data.metodologia?.variablesEntrada || [],
        parametros: data.metodologia?.parametros || [],
        ecuaciones: data.metodologia?.ecuaciones || [],
      },
      simulacion: {
        configuracion: data.simulacion?.configuracion || [],
        resultados: {
          metricas: data.simulacion?.resultados?.metricas || [],
          sensibilidad: data.simulacion?.resultados?.sensibilidad || [],
        },
        visualizacion: data.simulacion?.visualizacion || [],
      },
      ...data
    };
  
    return `
      <section class="space-y-8 bg-indigo-50 p-6 rounded-xl">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">${safeData.titulo}</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-indigo-600">Contexto del Estudio</h3>
            <p class="text-gray-600">${safeData.contexto}</p>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold mb-3">Metodología</h4>
              ${safeData.metodologia.variablesEntrada.map(item => `
                <div class="flex items-start gap-2 mb-2">
                  <span class="text-indigo-500">•</span>
                  <p class="text-gray-600">${item}</p>
                </div>
              `).join('')}
            </div>
          </div>
  
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold mb-3">Parámetros Clave</h4>
              ${safeData.metodologia.parametros.map(param => `
                <p class="text-gray-600 mb-2">${param}</p>
              `).join('')}
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold mb-3">Ecuaciones Fundamentales</h4>
              ${safeData.metodologia.ecuaciones.map(ecuacion => `
                <code class="block bg-gray-100 p-2 rounded mb-2">${ecuacion}</code>
              `).join('')}
            </div>
          </div>
        </div>
  
        <div class="mt-8 space-y-6">
          <h3 class="text-xl font-semibold text-indigo-600">Resultados de Simulación</h3>
          <div class="grid md:grid-cols-3 gap-4">
            ${safeData.simulacion.resultados.metricas.map(metrica => `
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <p class="text-gray-600">${metrica}</p>
              </div>
            `).join('')}
          </div>
          
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h4 class="font-semibold mb-3">Análisis de Sensibilidad</h4>
            ${safeData.simulacion.resultados.sensibilidad.map(item => `
              <p class="text-gray-600 mb-2">${item}</p>
            `).join('')}
          </div>
        </div>
        
        ${safeData.imagen ? `
          <img src="${safeData.imagen}" alt="${safeData.titulo}" 
               class="w-full rounded-xl shadow-lg mt-6">
        ` : ''}
      </section>
    `;
  }
  
  renderValidacionEstadistica(data) {
    const safeData = {
      metodos: data.metodos || [],
      casoEjemplo: {
        pruebas: data.casoEjemplo?.pruebas || [],
        resultados: data.casoEjemplo?.resultados || [],
        ...data.casoEjemplo
      },
      ...data
    };
  
    return `
      <section class="space-y-8 bg-green-50 p-6 rounded-xl">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">${safeData.titulo}</h2>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-green-600">Métodos de Validación</h3>
            ${safeData.metodos.map(metodo => `
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <h4 class="font-semibold mb-2">${metodo.nombre}</h4>
                <p class="text-gray-600 mb-3">${metodo.aplicacion}</p>
                ${metodo.procedimiento.map(paso => `
                  <div class="flex items-start gap-2 mb-2">
                    <span class="text-green-500">▸</span>
                    <p class="text-gray-600">${paso}</p>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
  
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold text-green-600 mb-4">Caso Práctico</h3>
              <p class="text-gray-600 mb-4">${safeData.casoEjemplo.contexto}</p>
              
              <h4 class="font-semibold mb-2">Pruebas Aplicadas</h4>
              ${safeData.casoEjemplo.pruebas.map(prueba => `
                <p class="text-gray-600 mb-2">• ${prueba}</p>
              `).join('')}
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h4 class="font-semibold mb-2">Resultados Obtenidos</h4>
              ${safeData.casoEjemplo.resultados.map(resultado => `
                <p class="text-gray-600 mb-2">${resultado}</p>
              `).join('')}
            </div>
          </div>
        </div>
        
        ${safeData.imagen ? `
          <img src="${safeData.imagen}" alt="${safeData.titulo}" 
               class="w-full rounded-xl shadow-lg mt-6">
        ` : ''}
      </section>
    `;
  }
  
  renderAplicacionesAvanzadas(data) {
    const safeData = {
      sectores: data.sectores || [],
      tendencias: data.tendencias || [],
      ...data
    };
  
    return `
      <section class="space-y-8 bg-purple-50 p-6 rounded-xl">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">${safeData.titulo}</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          ${safeData.sectores.map(sector => `
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold text-purple-600 mb-3">${sector.nombre}</h3>
              <div class="space-y-4">
                <div class="bg-gray-50 p-3 rounded">
                  <h4 class="font-semibold mb-2">Modelos Utilizados</h4>
                  ${sector.modelos.map(modelo => `
                    <p class="text-gray-600 mb-2">• ${modelo}</p>
                  `).join('')}
                </div>
                
                <div class="bg-gray-50 p-3 rounded">
                  <h4 class="font-semibold mb-2">Resultados Clave</h4>
                  ${sector.datos.map(dato => `
                    <p class="text-gray-600 mb-2">▸ ${dato}</p>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
  
        <div class="mt-8 bg-white p-4 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold text-purple-600 mb-4">Tendencias Emergentes</h3>
          ${safeData.tendencias.map(tendencia => `
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
              <p class="text-gray-600">${tendencia}</p>
            </div>
          `).join('')}
        </div>
        
        ${safeData.imagen ? `
          <img src="${safeData.imagen}" alt="${safeData.titulo}" 
               class="w-full rounded-xl shadow-lg mt-6">
        ` : ''}
      </section>
    `;
  }
  
  renderHerramientasAvanzadas(data) {
    const safeData = {
      plataformas: data.plataformas || [],
      flujoTrabajo: data.flujoTrabajo || [],
      ...data
    };
  
    return `
      <section class="space-y-8 bg-orange-50 p-6 rounded-xl">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">${safeData.titulo}</h2>
        
        <div class="space-y-8">
          ${safeData.plataformas.map(plataforma => `
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold text-orange-600 mb-3">${plataforma.nombre}</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold mb-2">Componentes Principales</h4>
                  ${plataforma.librerias?.map(lib => `
                    <p class="text-gray-600 mb-2">• ${lib}</p>
                  `).join('') || ''}
                </div>
                
                <div>
                  <h4 class="font-semibold mb-2">Casos de Uso</h4>
                  ${plataforma.casosUso?.map(caso => `
                    <p class="text-gray-600 mb-2">▸ ${caso}</p>
                  `).join('') || ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
  
        <div class="mt-8 bg-white p-4 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold text-orange-600 mb-4">Flujo de Trabajo Estándar</h3>
          <div class="grid md:grid-cols-5 gap-4">
            ${safeData.flujoTrabajo.map((paso, index) => `
              <div class="text-center">
                <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mb-2 mx-auto">
                  ${index + 1}
                </div>
                <p class="text-sm text-gray-600">${paso}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        ${safeData.imagen ? `
          <img src="${safeData.imagen}" alt="${safeData.titulo}" 
               class="w-full rounded-xl shadow-lg mt-6">
        ` : ''}
      </section>
    `;
  }
  
  renderRetosInvestigacion(data) {
    const safeData = {
      desafios: data.desafios || [],
      solucionesEmergentes: data.solucionesEmergentes || [],
      roadmap: data.roadmap || [],
      ...data
    };
  
    return `
      <section class="space-y-8 bg-red-50 p-6 rounded-xl">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">${safeData.titulo}</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          ${safeData.desafios.map(desafio => `
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold text-red-600 mb-3">${desafio.categoria}</h3>
              ${desafio.problemas.map(problema => `
                <div class="flex items-start gap-2 mb-2">
                  <span class="text-red-500">•</span>
                  <p class="text-gray-600">${problema}</p>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
  
        <div class="mt-8 grid md:grid-cols-2 gap-8">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-red-600 mb-4">Soluciones Emergentes</h3>
            ${safeData.solucionesEmergentes.map(solucion => `
              <p class="text-gray-600 mb-2">▸ ${solucion}</p>
            `).join('')}
          </div>
          
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-red-600 mb-4">Roadmap Tecnológico</h3>
            ${safeData.roadmap.map(item => `
              <div class="flex items-center gap-2 mb-3">
                <span class="text-red-500">→</span>
                <p class="text-gray-600">${item}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        ${safeData.imagen ? `
          <img src="${safeData.imagen}" alt="${safeData.titulo}" 
               class="w-full rounded-xl shadow-lg mt-6">
        ` : ''}
      </section>
    `;
  }
}




































document.addEventListener('DOMContentLoaded', () => new RenderManager());