// ... (El resto de tu lógica JavaScript se mantiene igual)
const ACCESS_MAP = {
    "julian": ["TODAS"], 
    "az":["TODAS"],
    "yara": ["TODAS"],
    "moises": ["1.-CENTRO-CDMX"], 
    "juan": ["5.-SUR - VER"],
    "yesenia": ["2.-BAJA-NOR TIJ / ENS", "2.-BAJA-NOR MXI / SLRC"],
    "jorge": ["3.-NORTE"], 
    "saryali": ["5.-SUR - PUE"],
    "lyairgc": ["5.-SUR - PUE"], 
    "german": ["4.-PACIFICO - BAJIO"],
    "blanca": ["TODAS"], // T.H.
    "antonio.her":["1.-CENTRO-CDMX","3.-NORTE","2.-BAJA-NOR TIJ / ENS","4.-PACIFICO - BAJIO"],
    "liliana.sa":["5.-SUR - VER","5.-SUR - PUE"],
    "jorge.bo":["5.-SUR - PUE"],
    "arturo.gs":["5.-SUR - VER"],
    "damarys.su": ["2.-BAJA-NOR TIJ / ENS"],
    "perla.lu": ["3.-NORTE"],
    "keyla.qu":["3.-NORTE"],
    "mariana.pe": ["1.-CENTRO-CDMX"]

};

let rawData = [];
let myChart = null;
let userRegionsPermitted = [];

async function validateAccess() {
    const pass = document.getElementById('passInput').value.toLowerCase();
    if (ACCESS_MAP[pass]) {
        userRegionsPermitted = ACCESS_MAP[pass];
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard-view').style.display = 'block';
        document.getElementById('userRole').innerText = userRegionsPermitted.includes("TODAS") ? "ACCESO TOTAL" : "MULTI-REGIÓN";
        fetchData();
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}

async function fetchData() {
    try {
        const response = await fetch('datos.json');
        const fullData = await response.json();
        rawData = userRegionsPermitted.includes("TODAS") ? fullData : fullData.filter(d => userRegionsPermitted.includes(d.reg));
        initFilters();
    } catch (error) { console.error("Error", error); }
}

function initFilters() {
    const regs = userRegionsPermitted.includes("TODAS") ? ['TODAS', ...new Set(rawData.map(d => d.reg))] : (userRegionsPermitted.length > 1 ? ['TODAS', ...userRegionsPermitted] : userRegionsPermitted);
    const selReg = document.getElementById('selRegion');
    selReg.innerHTML = regs.map(r => `<option value="${r}">${r}</option>`).join('');
    if (userRegionsPermitted.length === 1 && !userRegionsPermitted.includes("TODAS")) selReg.disabled = true;
    actualizarTiendas();
}

function actualizarTiendas() {
    const r = document.getElementById('selRegion').value;
    const filtered = r === 'TODAS' ? rawData : rawData.filter(d => d.reg === r);
    const tiendas = ['TODAS', ...new Set(filtered.map(d => d.tienda))];
    document.getElementById('selTienda').innerHTML = tiendas.map(t => `<option value="${t}">${t}</option>`).join('');
    renderizar();
}

function renderizar() {
    const r = document.getElementById('selRegion').value;
    const t = document.getElementById('selTienda').value;
    const metrica = document.getElementById('selMetrica').value;
    
    // 1. Filtrado de datos
    let data = rawData.filter(d => (r === 'TODAS' || d.reg === r) && (t === 'TODAS' || d.tienda === t));

    // 2. Mapeo dinámico según la métrica seleccionada
    const displayData = data.map(d => {
        let v, l;
        if (metrica === 'activaciones') {
            v = d.ventas || 0;
            l = d.logro || 0;
        } else if (metrica === 'renovaciones') {
            v = d.renovaciones || 0;
            l = d.logroRenov || 0;
        } else {
            v = (d.ventas || 0) + (d.renovaciones || 0);
            l = ((d.logro || 0) + (d.logroRenov || 0)) / 2; // Promedio de logro
        }
        return { ...d, val_v: v, val_l: l };
    });

    displayData.sort((a, b) => a.val_l - b.val_l);

    // 3. Actualización de KPIs
    document.getElementById('kpiTotal').innerText = displayData.length;
    document.getElementById('kpiCeros').innerText = displayData.filter(d => d.val_v === 0).length;
    document.getElementById('kpiBajos').innerText = displayData.filter(d => d.val_l < 60 && d.val_v > 0).length;
    document.getElementById('kpiNuevos').innerText = displayData.filter(d => d.esNuevo).length;

    // 4. Tablas
    document.getElementById('listaCeros').innerHTML = displayData.filter(d => d.val_v === 0).map(d => 
        `<tr class="table-danger"><td>${d.nombre}</td><td>${d.tienda}</td><td>${d.fechaStr}</td></tr>`).join('') 
        || '<tr><td colspan="3" class="text-center py-3 text-muted">Sin incidencias</td></tr>';

    document.getElementById('listaGeneral').innerHTML = displayData.map(d => 
        `<tr><td><b>${d.nombre}</b><br><small>${d.tienda}</small></td>
        <td class="text-center fw-bold">${d.val_v}</td>
        <td class="text-center ${d.val_l < 60 ? 'text-danger fw-bold' : ''}">${d.val_l.toFixed(1)}%</td>
        <td class="text-center">${d.esNuevo ? '<span class="badge-new">NUEVO</span>' : ''}</td></tr>`).join('');

    // 5. Gráfico Chart.js
    const ctx = document.getElementById('mainChart').getContext('2d');
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, {
        data: {
            labels: displayData.map(d => d.nombre),
            datasets: [
                { 
                    type: 'bar', 
                    label: `Ventas (${metrica.toUpperCase()})`, 
                    data: displayData.map(d => d.val_v), 
                    backgroundColor: displayData.map(d => d.val_v === 0 ? '#ef4444' : (d.esNuevo ? '#7CB342' : '#50E094')), 
                    yAxisID: 'y', 
                    borderRadius: 5 
                },
                { 
                    type: 'line', 
                    label: '% Logro', 
                    data: displayData.map(d => d.val_l), 
                    borderColor: '#0f172a', 
                    borderWidth: 2, 
                    yAxisID: 'y1', 
                    tension: 0.3,
                    pointBackgroundColor: '#0f172a',
                    pointRadius: 4
                }
            ]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            scales: { 
                y: { position: 'left', grid: { color: '#eef2f1' }, title: { display: true, text: 'Unidades' } }, 
                y1: { position: 'right', min: 0, max: 150, grid: { display: false }, title: { display: true, text: '%' } },
                x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 10 } } }
            },
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
    // --- LÓGICA TOP 10 SIDEBAR ---
    // Ordenamos de mayor a menor según la métrica actual
    const top10 = [...displayData]
        .sort((a, b) => b.val_v - a.val_v)
        .slice(0, 10); // --- Cambiar top ---

    const top10HTML = top10.map((d, index) => {
        let medal = "";
        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";
        else medal = `<span>${index + 1}.</span>`;

        return `
            <div class="d-flex justify-content-between align-items-center mb-2 pb-1 border-bottom border-secondary" style="--bs-border-opacity: .1;">
                <div class="text-truncate" style="max-width: 140px;">
                    ${medal} <span class="${index < 3 ? 'fw-bold text-white' : 'text-light'}">${d.nombre.split(' ')[0]}</span>
                </div>
                    <div class="fw-bold" style="color: var(--accent-green);">${d.val_v}</div>
                </div>`;
    }).join('');

    document.getElementById('top10List').innerHTML = top10HTML || '<div class="text-muted text-center py-2">Sin datos</div>';
}