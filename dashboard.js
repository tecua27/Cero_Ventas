/* ExpertCell · Dashboard AT&T · dashboard.js */

/* IMAGENES: actualiza logo.png y expertin.png en tu repo */
const LOGO_SRC = "Imagenes/Expertcell_logo.png";
const MASCOT_SRCS = ["Imagenes/Expertin_bandera.png", "Imagenes/Expertin_sombrero.png"];
const MASCOT_SRC  = MASCOT_SRCS[0];

/* ACCESOS embebidos */
const ACCESOS = [
  {
    "usuario": "jon",
    "nombre":  "JULIAN OLVERA NUÑEZ",
    "tipo":    "TODAS",
    "valores": []
  },
  {
    "usuario": "az",
    "tipo":    "TODAS",
    "valores": []
  },
  {
    "usuario": "yara",
    "tipo":    "TODAS",
    "valores": []
  },
  {
    "usuario": "blanca",
    "tipo":    "TODAS",
    "valores": []
  },
  {
    "usuario": "german.g",
    "nombre":  "GERMAN PELAYO GONZALEZ",
    "tipo":    "region",
    "valores": ["4.-PACIFICO - BAJIO"]
  },
  {
    "usuario": "jorge.l",
    "nombre":  "JORGE LUIS SOLIS ALEJANDRI",
    "tipo":    "region",
    "valores": ["3.-NORTE"]
  },
  {
    "usuario": "juan.va",
    "nombre":  "JUAN ANTONIO LUNA VARA",
    "tipo":    "region",
    "valores": ["5.-SUR - VER"]
  },
  {
    "usuario": "moi.cha",
    "nombre":  "MOISES CHAVEZ SUAREZ",
    "tipo":    "region",
    "valores": ["1.-CENTRO-CDMX"]
  },
  {
    "usuario": "mariana.pe",
    "nombre":  "MARIANA PEÑA",
    "tipo":    "region",
    "valores": ["1.-CENTRO-CDMX"]
  },
  {
    "usuario": "sar.se",
    "nombre":  "SILVIA SARYALI SEGURA RODRIGUEZ",
    "tipo":    "region",
    "valores": ["5.-SUR - PUE"]
  },
  {
    "usuario": "yes.ga",
    "nombre":  "YESENIA IBARRA GARRIDO",
    "tipo":    "region",
    "valores": ["2.-BAJA-NOR MXI / SLRC", "2.-BAJA-NOR TIJ / ENS"]
  },
  {
    "usuario": "lili.sa",
    "nombre":  "LILIANA SAAVEDRA",
    "tipo":    "region",
    "valores": ["5.-SUR - PUE", "5.-SUR - VER"]
  },
  {
    "usuario": "jor.mu",
    "nombre":  "JORGE BONILLA MUNIVE",
    "tipo":    "region",
    "valores": ["5.-SUR - PUE"]
  },
  {
    "usuario": "rafa.za",
    "nombre": "JOSE RAFAEL TORRES ZAMUDIO",
    "tipo": "tienda",
    "valores":["EXP CHEDRAUI CRUZ DEL SUR","EXPERTCELL-GRANPLAZASURPUE","EXP REFORMA LA PAZ PUE","EXP ANTEQUERA PUE","EXP PLAZA ASESORES PUE","EXP PLAZA MAGESTIC PUE","EXP 5 DE MAYO PUE","EXP LA MARGARITA PUE"]
  },
  {
    "usuario":"nes.tun",
    "nombre": "NESTOR MANUEL TUNALES TELLO",
    "tipo": "tienda",
    "valores": ["EXP SENDERO APODACA","EXP PASEO TEC","EXP MOL CONCORDIA","EXP SENDERO APODACA 2","EXP PLAZA CONCORDIA","EXP SORIANA COUNTRY","EXP VALLE SOLEADO NL","EXP HEB GUADALUPE NL"]
  },
  {
    "usuario": "ana.ca",
    "nombre":  "ANA LILIA CANGAS HERNANDEZ",
    "tipo":    "tienda",
    "valores": ["EXP ATLACOMULCO TOL", "EXP CHEDRAUI METEPEC", "EXP GALERIAS TOLUCA", "EXP PLAZA TOLLOCAN", "EXP SENDERO TOLUCA II"]
  },
  {
    "usuario": "angel.le",
    "nombre":  "ANGEL DANIEL LEAL LARA",
    "tipo":    "tienda",
    "valores": ["EXP CHOLULA II PUE", "EXP GRAN CENTRAL PUE", "EXP PLAZA SAN DIEGO PUE", "EXP PLAZA SANTA JULIA APIZACO TLAXCALA PUE", "EXP SAN MARTIN CENTRO", "EXP SORIANA HIPER TLAXCALA", "EXPERTCELL-PLAZASANDIEGOPUE", "SORIANA HIPER"]
  },
  {
    "usuario": "jorge.al",
    "nombre":  "JORGE IVAN ALVARADO CRUZ",
    "tipo":    "tienda",
    "valores": ["EXP CENTRO MTY", "EXP CUMBRES MONTERREY", "EXP GALERIAS MONTERREY", "EXP KSK GALERIAS MONTERREY", "EXP MALL PLAZA LINCOLN", "EXP SENDERO ESCOBEDO 2", "EXP SENDERO ESCOBEDO NL", "EXP SORIANA DOMINGO NL"]
  },
  {
    "usuario": "jose.ar",
    "nombre":  "JOSE ALFREDO ARMENTA BELTRAN",
    "tipo":    "tienda",
    "valores": ["EXP JAUJA TIJUANA", "EXP KSK SENDERO MEXICALI", "EXP PLAZA SAN PEDRO BC", "EXP PUNTO SUR TIJUANA", "EXP TIJUANA PLAZA SENDERO"]
  },
  {
    "usuario": "jose.az",
    "nombre":  "JOSE DANIEL ARZATE MARTINEZ",
    "tipo":    "tienda",
    "valores": ["EXP CHEDRAUI ANFORA", "EXP COSMOPOL 2", "EXP MACROPLAZA TECAMAC MEX", "EXP NAUCALPAN", "EXP TDA CDMX MULTIPLAZA ARAGON", "EXP TOWN CENTER NICOLAS ROMERO DFN"]
  },
  {
    "usuario": "naila.he",
    "nombre":  "NAILA ZULEM HERRERA MARTINEZ",
    "tipo":    "tienda",
    "valores": ["EXP KSK GALERIAS SALTILLO", "EXP LA NOGALERA SALTILLO COA", "EXP PZA REAL SALTILLO COA", "EXP SENDERO SALTILLO COA"]
  },
  {
    "usuario": "ricardo.ba",
    "nombre":  "RICARDO BAILON VELAZQUEZ",
    "tipo":    "tienda",
    "valores": ["CHEDRAUI EDUARDO MOLINA", "EXP CENTRO TEPOZAN", "EXP IZTAPALAPA 2", "EXP KSK PATIO TEXCOCO", "EXP KSK SENDERO IXTAPALUCA", "EXP PATIO TLALPAN"]
  }
];

/* DATOS: cargados desde archivos externos */
let EXEC_DATA   = [];
let TIENDA_DATA = [];

/* LOOKUP tienda -> categoria */
const CAT_MAP = {};

let currentUser=null, allowedRegions=[], baseData=[], filtered=[];
let rankMode='top', tSortKey='ventas', tSortDir=-1;
let zeroOpen=false, activeCat='';

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[data-src="logo"]').forEach(el => el.src = LOGO_SRC);
  document.querySelectorAll('img[data-src="mascot"]').forEach(el => el.src = MASCOT_SRC);
  document.getElementById('srch').addEventListener('input', renderAll);
  document.getElementById('selReg').onchange = () => {
    fillTiendas(document.getElementById('selReg').value);
    document.getElementById('selTienda').value = '';
    applyFilter();
  };
  document.getElementById('selTienda').onchange = applyFilter;
  document.getElementById('th-ventas').classList.add('sd');
  document.getElementById('catAll').classList.add('active-all');

  // Alternar mascota cada 5 segundos
  let _mascotIdx = 0;
  setInterval(() => {
    _mascotIdx = (_mascotIdx + 1) % MASCOT_SRCS.length;
    document.querySelectorAll('img[data-src="mascot"]').forEach(el => {
      el.style.transition = 'opacity 0.4s';
      el.style.opacity = '0';
      setTimeout(() => {
        el.src = MASCOT_SRCS[_mascotIdx];
        el.style.opacity = '1';
      }, 400);
    });
  }, 5000);

  // Cargar datos externos desde GitHub
  Promise.all([
    fetch('datos.json').then(r => r.json()),
    fetch('tiendas.json').then(r => r.json())
  ]).then(([exec, tienda]) => {
    EXEC_DATA   = exec;
    TIENDA_DATA = tienda;
    TIENDA_DATA.forEach(t => { CAT_MAP[t.tienda] = t.categoria; });
    // Rebuild _baseTienda if already logged in
    if (currentUser && window._baseTienda !== undefined) {
      const ac = ACCESOS.find(a => a.usuario === currentUser);
      if (ac) {
        if (ac.tipo === 'TODAS') window._baseTienda = [...TIENDA_DATA];
        else if (ac.tipo === 'tienda') window._baseTienda = TIENDA_DATA.filter(t => (ac.valores||[]).includes(t.tienda));
        else window._baseTienda = TIENDA_DATA.filter(t => (ac.valores||[]).includes(t.reg));
        window._filteredT = [...window._baseTienda];
        renderAll();
      }
    }
    console.log('Datos cargados:', EXEC_DATA.length, 'ejecutivos,', TIENDA_DATA.length, 'tiendas');
  }).catch(err => {
    console.error('Error cargando datos:', err);
    alert('No se pudieron cargar los datos. Verifica que datos.json y tiendas.json esten en tu repositorio.');
  });
});

/* ── LOGIN ── */
function doLogin() {
  const pass = document.getElementById('inPass').value.trim().toLowerCase();
  const err  = document.getElementById('loginErr');
  const acceso = ACCESOS.find(a => a.usuario === pass);
  if (!acceso) {
    err.style.display = 'block';
    document.getElementById('inPass').value = '';
    setTimeout(() => err.style.display = 'none', 3000);
    return;
  }
  currentUser    = pass;
  allowedTipo    = acceso.tipo;
  allowedValores = acceso.valores || [];
  allowedRegions = acceso.valores || [];
  err.style.display = 'none';
  baseData = (acceso.tipo === 'TODAS') ? [...EXEC_DATA]
    : acceso.tipo === 'tienda' ? EXEC_DATA.filter(d => (acceso.valores||[]).includes(d.tienda)) : EXEC_DATA.filter(d => (acceso.valores||[]).includes(d.reg));
  document.getElementById('hUserName').textContent = currentUser;
  document.getElementById('hUserRegions').textContent =
    acceso.tipo === 'TODAS' ? 'Acceso total' : acceso.tipo === 'tienda' ? (acceso.valores.length + ' tiendas') : acceso.valores.join(' · ');
  const selReg = document.getElementById('selReg');
  selReg.innerHTML = '<option value="">Todas las regiones</option>';
  [...new Set(baseData.map(d => d.reg))].sort().forEach(r =>
    selReg.appendChild(Object.assign(document.createElement('option'),{value:r,textContent:r})));
  fillTiendas('');
  filtered = [...baseData];
  // Build tienda base for this user
  if (acceso.tipo === 'TODAS') {
    window._baseTienda = [...TIENDA_DATA];
  } else if (acceso.tipo === 'tienda') {
    window._baseTienda = TIENDA_DATA.filter(t => (acceso.valores||[]).includes(t.tienda));
  } else {
    window._baseTienda = TIENDA_DATA.filter(t => (acceso.valores||[]).includes(t.reg));
  }
  window._filteredT = [...window._baseTienda];

  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('dashScreen').style.display  = 'block';
  renderAll();
}

function logout() {
  currentUser=null; allowedRegions=[]; baseData=[]; filtered=[]; activeCat='';
  document.getElementById('inPass').value = '';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('dashScreen').style.display  = 'none';
}

/* ── ZERO TOGGLE ── */
function toggleZero() {
  zeroOpen = !zeroOpen;
  document.getElementById('zeroBody').classList.toggle('open', zeroOpen);
  document.getElementById('zeroToggle').classList.toggle('open', zeroOpen);
}

/* ── CATEGORY FILTER ── */
function setCat(cat) {
  activeCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.className = 'cat-btn');
  if (cat === '')  document.getElementById('catAll').classList.add('active-all');
  if (cat === 'A') document.getElementById('catA').classList.add('active-A');
  if (cat === 'B') document.getElementById('catB').classList.add('active-B');
  if (cat === 'C') document.getElementById('catC').classList.add('active-C');
  // Refresh tiendas dropdown respecting both region AND category
  const reg = document.getElementById('selReg').value;
  fillTiendas(reg);
  // If current selected tienda is no longer valid, reset it
  const selT = document.getElementById('selTienda');
  const validOptions = [...selT.options].map(o => o.value);
  if (selT.value && !validOptions.includes(selT.value)) selT.value = '';
  applyFilter();
}

/* ── FILTERS ── */
function fillTiendas(reg) {
  const base = baseData.filter(d =>
    (!reg || d.reg === reg) &&
    (!activeCat || CAT_MAP[d.tienda] === activeCat)
  );
  const stores = [...new Set(base.map(d => d.tienda))].sort();
  const selT   = document.getElementById('selTienda');
  selT.innerHTML = '<option value="">Todas las tiendas</option>';
  stores.forEach(s => selT.appendChild(Object.assign(document.createElement('option'),{value:s,textContent:s})));
}

function applyFilter() {
  const r = document.getElementById('selReg').value;
  const t = document.getElementById('selTienda').value;
  filtered = baseData.filter(d =>
    (!r || d.reg===r) &&
    (!t || d.tienda===t) &&
    (!activeCat || CAT_MAP[d.tienda] === activeCat)
  );
  // Sync tienda chart data
  let ft = [...(window._baseTienda || TIENDA_DATA)];
  if (r) ft = ft.filter(s => s.reg    === r);
  if (t) ft = ft.filter(s => s.tienda === t);
  if (activeCat) ft = ft.filter(s => s.categoria === activeCat);
  window._filteredT = ft;
  renderAll();
}

function resetFilters() {
  document.getElementById('selReg').value = '';
  fillTiendas('');
  document.getElementById('selTienda').value = '';
  document.getElementById('srch').value = '';
  activeCat = '';
  document.querySelectorAll('.cat-btn').forEach(b => b.className = 'cat-btn');
  document.getElementById('catAll').classList.add('active-all');
  filtered = [...baseData];
  window._filteredT = [...(window._baseTienda || TIENDA_DATA)];
  renderAll();
}

/* ── HELPERS ── */
const fmt  = n => n.toLocaleString('es-MX');
const fmtP = n => n.toFixed(1) + '%';
const avg  = a => a.length ? a.reduce((x,y)=>x+y,0)/a.length : 0;
const sum  = a => a.reduce((x,y)=>x+y,0);
const lp   = v => v>=100?'pg':v>=70?'py':'pr';
const getQ = () => document.getElementById('srch').value.toLowerCase().trim();
const match = (d,q) => !q ||
  d.nombre.toLowerCase().includes(q) ||
  d.tienda.toLowerCase().includes(q) ||
  d.reg.toLowerCase().includes(q);

/* ── KPIs + ZERO ── */
function renderKPIs() {
  const act   = filtered.filter(d => !d.esNuevo);
  const zeros = filtered.filter(d => d.ventas === 0);
  document.getElementById('kV').textContent  = fmt(sum((window._filteredT||TIENDA_DATA).map(t=>t.logroTienda)));
  document.getElementById('kL').textContent  = fmtP(avg(act.map(d=>d.logro)));
  document.getElementById('kR').textContent  = fmt(sum(filtered.map(d=>d.renovaciones)));
  document.getElementById('kZ').textContent  = zeros.length;
  document.getElementById('cnt').textContent = filtered.length;
  document.getElementById('zeroBadge').textContent = zeros.length;
  const zeroSec = document.getElementById('zeroSection');
  zeroSec.style.display = zeros.length===0 ? 'none' : 'block';
  const zeroList = document.getElementById('zeroList');
  zeroList.innerHTML = '';
  zeros.forEach(d => {
    zeroList.innerHTML += `
      <div class="zero-row">
        <div class="zero-nombre">${d.nombre}</div>
        <div class="zero-tienda">${d.tienda}</div>
        <div>
          <span class="zero-fecha-label">Ingreso</span>
          <span class="zero-fecha-val">${d.fechaStr}</span>
        </div>
        <div>${d.esNuevo ? '<span class="znew-tag">NUEVO</span>' : ''}</div>
      </div>`;
  });
}

/* ── RANKING ── */
function setRankMode(m) {
  rankMode = m;
  ['Top','Bot','Todos'].forEach(x => {
    document.getElementById('btn'+x).style.opacity = m===x.toLowerCase() ? '1' : '0.45';
  });
  renderRankings();
}

function renderRankings() {
  const q    = getQ();
  const pool = filtered.filter(d => match(d,q));
  const N    = Math.min(parseInt(document.getElementById('rankN').value)||10, pool.length);
  const s    = [...pool].sort((a,b) => b.ventas - a.ventas);
  let arr, titleTxt, barColor;
  if (rankMode==='top')      { arr=s.slice(0,N);        titleTxt=`🏆 Top ${N} · Mayor Venta`;       barColor='var(--blue)';   }
  else if (rankMode==='bot') { arr=s.slice(-N).reverse(); titleTxt=`📉 Bottom ${N} · Menor Venta`; barColor='var(--red)';    }
  else                       { arr=s;                titleTxt=`≡ Todos (${s.length} ejecutivos)`;   barColor='var(--accent)'; }
  document.getElementById('rankTitle').textContent = titleTxt;
  const mx = arr.find(d => d.ventas>0)?.ventas || 1;
  const el = document.getElementById('rList');
  el.innerHTML = '';
  arr.forEach((d,i) => {
    const isZero = d.ventas===0;
    const pc = isZero ? 0 : (d.ventas/mx)*100;
    const pc3 = (!isZero&&i===0)?'gld':(!isZero&&i===1)?'slv':(!isZero&&i===2)?'brz':'';
    const bc  = isZero ? 'var(--red)' : barColor;
    const posLabel = rankMode==='bot' ? '↓' : (isZero ? '—' : (i+1));
    el.innerHTML += `<div class="ritem${isZero?' zero':''}">
      <div class="rpos ${pc3}">${posLabel}</div>
      <div class="rinfo">
        <div class="rname">${d.nombre}</div>
        <div class="rstore">${d.tienda} · <span style="color:var(--accent);font-size:9px">${d.categoria}</span></div>
      </div>
      ${isZero ? '<span class="bzero">SIN VENTAS</span>' : (d.esNuevo ? '<span class="bnew">NUEVO</span>' : '')}
      <div class="rbarw"><div class="rbar" style="width:${pc}%;background:${bc}"></div></div>
      <div class="rval ${isZero?'zero-val':''}" style="color:${bc}">${d.ventas}</div>
    </div>`;
  });
}

/* ── STORE CHART (logro de tienda) ── */
function renderStoreChart() {
  // Use TIENDA_DATA (tiendas.json) — NOT exec data
  // Filter by allowed regions/tiendas and active category filter
  let pool = [...(window._filteredT || window._baseTienda || TIENDA_DATA)];

  // Apply search on top of already-filtered pool
  const q = getQ();
  if (q) pool = pool.filter(t =>
    t.tienda.toLowerCase().includes(q) ||
    t.reg.toLowerCase().includes(q)
  );

  // Sort by total (act + ren) desc, top 12
  pool.sort((a,b) => (b.logroTienda + b.logroTiendaRenov) - (a.logroTienda + a.logroTiendaRenov));
  const entries = pool.slice(0, 12);

  const mx = Math.max(...entries.map(e => e.logroTienda + e.logroTiendaRenov), 1);
  const el = document.getElementById('stChart');
  el.innerHTML = '';

  if (entries.length === 0) {
    el.innerHTML = '<div style="color:var(--sub);font-size:12px;text-align:center;padding:20px;">Sin datos de tienda disponibles</div>';
    return;
  }

  entries.forEach(e => {
    const short  = e.tienda.length > 21 ? e.tienda.slice(0,21)+'…' : e.tienda;
    const pcAct  = Math.min((e.logroTienda         / mx) * 100, 100);
    const pcRen  = Math.min((e.logroTiendaRenov    / mx) * 100, 100);
    const total  = e.logroTienda + e.logroTiendaRenov;

    el.innerHTML += `
      <div class="brow2">
        <div class="blbl" title="${e.tienda}">${short}</div>
        <div class="bstack-single">
          <div class="btrack-stacked">
            <div class="bseg act" style="width:${pcAct}%" title="Activaciones: ${e.logroTienda}">
              ${e.logroTienda > 6 ? e.logroTienda : ''}
            </div><div class="bseg ren" style="width:${pcRen}%" title="Renovaciones: ${e.logroTiendaRenov}">
              ${e.logroTiendaRenov > 6 ? e.logroTiendaRenov : ''}
            </div>
          </div>
          <div class="bval-total">${total}</div>
        </div>
      </div>`;
  });
}


/* ── TABLE ── */
function srt(key) {
  if (tSortKey===key) tSortDir*=-1; else { tSortKey=key; tSortDir=-1; }
  document.querySelectorAll('thead th').forEach(t => t.classList.remove('sa','sd'));
  const th = document.getElementById('th-'+key);
  if (th) th.classList.add(tSortDir===1?'sa':'sd');
  renderTable();
}

function renderTable() {
  const q = getQ();
  let rows = filtered.filter(d => match(d,q));
  rows = [...rows].sort((a,b) => {
    const av=a[tSortKey], bv=b[tSortKey];
    return typeof av==='string' ? av.localeCompare(bv)*tSortDir : (bv-av)*-tSortDir;
  });
  const body = document.getElementById('tBody');
  body.innerHTML = '';
  rows.forEach(d => {
    const isZero = d.ventas === 0;
    const cat = CAT_MAP[d.tienda] || '–';
    const cl  = lp(d.logro);
    const cr  = d.logroRenov > 0 ? lp(d.logroRenov) : 'pr';
    body.innerHTML += `<tr class="${isZero?'row-zero':''}">
      <td style="font-weight:600">${d.nombre}${d.esNuevo?' <span class="bnew">NUEVO</span>':""}</td>
      <td style="color:var(--sub);font-size:11px">${d.reg}</td>
      <td style="color:var(--sub);font-size:11px">${d.tienda}</td>
      <td><span class="cat-${cat}">${cat}</span></td>
      <td><span class="td-ventas ${isZero?'zero':'ok'}">${d.ventas}</span>${isZero?' <span class="bzero">!</span>':""}</td>
      <td>
        <div style="display:flex;align-items:center;gap:5px;">
          <div style="width:44px;height:5px;background:rgba(0,60,100,.1);border-radius:3px;overflow:hidden;flex-shrink:0;">
            <div style="width:${Math.min(d.logro,100)}%;height:100%;border-radius:3px;background:${d.logro>=100?'var(--green)':d.logro>=70?'var(--orange)':'var(--red)'}"></div>
          </div>
          <span class="pill ${cl}">${fmtP(d.logro)}</span>
        </div>
      </td>
      <td style="color:var(--orange)">${d.renovaciones}</td>
      <td><span class="pill ${cr}">${fmtP(d.logroRenov)}</span></td>
      <td style="color:var(--sub);font-size:11px">${d.fechaStr}</td>
      <td>${d.esNuevo?'<span class="pill py">Nuevo</span>':'<span class="pill pg">Activo</span>'}</td>
    </tr>`;
  });
  document.getElementById('tmeta').textContent = `${rows.length} de ${filtered.length} ejecutivos`;
}

/* ── RENDER ALL ── */
function renderAll() {
  renderKPIs();
  setRankMode(rankMode);
  renderStoreChart();
  renderTable();
}

