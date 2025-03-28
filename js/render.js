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
    return contenido.map(item => {
      const [key, data] = Object.entries(item)[0];
      
      switch(key) {
        case 'introduccion': return this.renderIntroduccion(data);
        case 'modeloDestacado': return this.renderModeloDestacado(data);
        case 'diagramaInteractivo': return this.renderDiagramaInteractivo(data);
        case 'iterativo': return this.renderIterativo(data);
        case 'espiral': return this.renderEspiral(data);
        case 'continuo': return this.renderContinuo(data);
        case 'comparativa': return this.renderComparativa(data);
        case 'seleccion': return this.renderSeleccion(data);
        case 'agil': return this.renderAgil(data);
        case 'extremo': return this.renderExtremo(data);
        case 'hibrido': return this.renderHibrido(data);
        case 'scrumEmpresas': return this.renderScrumEmpresas(data);
        case 'kanbanPequeñas': return this.renderKanbanPequeñas(data);
        case 'hibridacion': return this.renderHibridacion(data);
        case 'rolesScrum': return this.renderRolesScrum(data);
        case 'sprints': return this.renderSprints(data);
        case 'kanbanDetalle': return this.renderKanbanDetalle(data);
        case 'otrasMetodologias': return this.renderOtrasMetodologias(data);
        default: return this.renderComponenteNoReconocido(item);
      }
    }).join('');
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
}

document.addEventListener('DOMContentLoaded', () => new RenderManager());