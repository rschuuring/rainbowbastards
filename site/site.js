/*
  Deze code bouwt de pagina's op met de gegevens uit inhoud.js.
  Elke HTML-pagina heeft op de <body> een attribuut data-pagina="...",
  en op basis daarvan kiest deze code welke inhoud er getoond wordt.
  Teksten aanpassen doe je dus niet hier, maar in inhoud.js.
*/

(function () {
  const D = INHOUD;
  const FOTOMAP = "fotos/";

  // Een foto in inhoud.js mag een bestandsnaam zijn of { bestand, tekst }.
  // Hier maken we er overal { bestand, tekst } van, zodat de rest van de code één vorm kent.
  D.projecten.forEach((p) => {
    p.fotos = p.fotos.map((f) => (typeof f === "string" ? { bestand: f, tekst: "" } : { bestand: f.bestand, tekst: f.tekst || "" }));
  });

  // Zet tekens als < en & om, zodat tekst uit inhoud.js altijd als tekst wordt getoond.
  function esc(tekst) {
    return String(tekst)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function alineas(lijst) {
    return lijst.map((t) => `<p>${esc(t)}</p>`).join("");
  }

  // Een foto met een nette vervanging als het bestand (nog) niet bestaat.
  function foto(naam, alt, klasse) {
    return `<div class="foto ${klasse || ""}" data-naam="${esc(naam)}">
      <img src="${FOTOMAP}${esc(naam)}" alt="${esc(alt || "")}" loading="lazy">
    </div>`;
  }

  function logo() {
    return `<a class="logo" href="index.html" aria-label="${esc(D.bedrijf.naam)}, naar de homepage">
      <span class="logo-naam">${esc(D.bedrijf.naam)}</span>
      <span class="logo-regenboog" aria-hidden="true"></span>
      <span class="logo-onder">${esc(D.bedrijf.ondertitel)}</span>
    </a>`;
  }

  // ---------- Kop en voet (op elke pagina hetzelfde) ----------

  function kop(huidig) {
    const links = D.menu
      .map((m) => {
        const actief = m.pagina === huidig ? ' aria-current="page"' : "";
        return `<li><a href="${esc(m.pagina)}"${actief}>${esc(m.titel)}</a></li>`;
      })
      .join("");
    return `<header class="kop">
      <div class="breed kop-binnen">
        ${logo()}
        <button class="menu-knop" aria-expanded="false" aria-controls="hoofdmenu">
          <span></span><span></span><span></span><span class="verborgen">Menu</span>
        </button>
        <nav id="hoofdmenu" class="menu"><ul>${links}</ul></nav>
      </div>
    </header>`;
  }

  function voet() {
    const b = D.bedrijf;
    return `<footer class="voet">
      <div class="breed voet-binnen">
        <div>${logo()}</div>
        <div>
          <p>${esc(b.adres.straat)}<br>${esc(b.adres.postcode)} ${esc(b.adres.plaats)}</p>
          <p><a href="tel:${esc(b.telefoon.replace(/[^0-9+]/g, ""))}">${esc(b.telefoon)}</a><br>
          <a href="mailto:${esc(b.email)}">${esc(b.email)}</a></p>
        </div>
        <div><p>KvK ${esc(b.kvk)}</p><p>${esc(D.voet.tekst)}</p></div>
      </div>
    </footer>`;
  }

  // ---------- Losse onderdelen ----------

  function paginaKop(titel, intro) {
    return `<section class="pagina-kop"><div class="breed">
      <h1>${esc(titel)}</h1>
      ${intro ? `<p class="intro">${esc(intro)}</p>` : ""}
    </div></section>`;
  }

  function projectKaart(p) {
    return `<a class="kaart project-kaart" href="project.html#${encodeURIComponent(p.id)}">
      ${foto(p.fotos[0].bestand, p.titel, "kaart-foto")}
      <div class="kaart-tekst">
        <p class="label">${esc(p.plaats)} · ${esc(p.jaar)}</p>
        <h3>${esc(p.titel)}</h3>
        <p>${esc(p.samenvatting)}</p>
        <span class="lees-meer">Bekijk project</span>
      </div>
    </a>`;
  }

  // ---------- Pagina's ----------

  const paginas = {
    home() {
      const h = D.home;
      return `
        <section class="held">
          ${foto(h.foto, "", "held-foto")}
          <div class="breed held-tekst">
            <p class="label licht">${esc(D.bedrijf.slogan)}</p>
            <h1>${esc(h.kop)}</h1>
            <p class="intro">${esc(h.intro)}</p>
            <a class="knop" href="projecten.html">${esc(h.knopTekst)}</a>
          </div>
        </section>
        <section class="kenmerken"><div class="breed kenmerken-rij">
          ${h.kenmerken.map((k) => `<div><strong>${esc(k.getal)}</strong><span>${esc(k.tekst)}</span></div>`).join("")}
        </div></section>
        <section class="blok"><div class="breed">
          <h2>${esc(h.uitgelichtKop)}</h2>
          <div class="raster">${D.projecten.slice(0, 3).map(projectKaart).join("")}</div>
        </div></section>
        <section class="blok zacht"><div class="breed eigenaar-blok">
          ${foto(D.overOns.foto, D.overOns.naam, "portret")}
          <div>
            <p class="label">${esc(h.eigenaarLabel)}</p>
            <h2>${esc(h.eigenaarKop)}</h2>
            <blockquote>“${esc(h.eigenaarCitaat)}”</blockquote>
            <p class="ondertekening"><strong>${esc(D.overOns.naam)}</strong>, ${esc(D.overOns.functie.toLowerCase())}</p>
            <a class="knop" href="over-ons.html">${esc(h.eigenaarKnop)}</a>
          </div>
        </div></section>
        <section class="blok"><div class="breed smal oproep">
          <h2>${esc(h.afsluitingKop)}</h2>
          <p>${esc(h.afsluitingTekst)}</p>
          <a class="knop" href="contact.html">Neem contact op</a>
        </div></section>`;
    },

    projecten() {
      const p = D.projectenPagina;
      return `${paginaKop(p.kop, p.intro)}
        <section class="blok"><div class="breed">
          <div class="raster">${D.projecten.map(projectKaart).join("")}</div>
        </div></section>`;
    },

    project() {
      // Welk project? Dat staat achter het #-teken in het adres, bijvoorbeeld project.html#villa-scheefzicht
      const id = decodeURIComponent(location.hash.slice(1)) || new URLSearchParams(location.search).get("id");
      const p = D.projecten.find((x) => x.id === id);
      if (!p) {
        return `${paginaKop("Project niet gevonden")}
          <section class="blok"><div class="breed"><a class="knop" href="projecten.html">Naar alle projecten</a></div></section>`;
      }
      document.title = `${p.titel} · ${D.bedrijf.naam}`;
      const hoofd = p.fotos[0];
      const galerij = p.fotos
        .map((f, i) => `<figure class="galerij-figuur">
          <button class="galerij-item" data-index="${i}" aria-label="Foto ${i + 1} vergroten">${foto(f.bestand, f.tekst || `${p.titel}, foto ${i + 1}`)}</button>
          ${f.tekst ? `<figcaption>${esc(f.tekst)}</figcaption>` : ""}
        </figure>`)
        .join("");
      return `
        <section class="pagina-kop"><div class="breed">
          <p class="label"><a href="projecten.html">Projecten</a> · ${esc(p.plaats)} · ${esc(p.jaar)}</p>
          <h1>${esc(p.titel)}</h1>
        </div></section>
        <section class="blok"><div class="breed project-opbouw">
          <figure class="project-figuur">
            ${foto(hoofd.bestand, hoofd.tekst || p.titel, "project-hoofdfoto")}
            ${hoofd.tekst ? `<figcaption>${esc(hoofd.tekst)}</figcaption>` : ""}
          </figure>
          <div class="tekst">${alineas(p.beschrijving)}</div>
        </div></section>
        ${p.fotos.length > 1 ? `<section class="blok zacht"><div class="breed">
          <h2>Fotogalerij</h2>
          <div class="galerij" data-fotos='${esc(JSON.stringify(p.fotos))}' data-titel="${esc(p.titel)}">${galerij}</div>
        </div></section>` : ""}`;
    },

    diensten() {
      const p = D.dienstenPagina;
      return `${paginaKop(p.kop, p.intro)}
        <section class="blok"><div class="breed">
          <div class="raster diensten">
            ${D.diensten.map((d, i) => `<div class="kaart dienst">
              <span class="nummer">${String(i + 1).padStart(2, "0")}</span>
              <h3>${esc(d.titel)}</h3><p>${esc(d.tekst)}</p>
            </div>`).join("")}
          </div>
        </div></section>
        ${D.ook && D.ook.length ? `<section class="blok zacht"><div class="breed">
          <h2>${esc(D.ookKop)}</h2>
          <p class="intro">${esc(D.ookIntro)}</p>
          ${D.ook.map((o) => `<div class="ook-item">
            ${foto(o.foto, o.titel, "ook-foto")}
            <div class="tekst"><h3>${esc(o.titel)}</h3>${alineas(o.tekst)}</div>
          </div>`).join("")}
        </div></section>` : ""}`;
    },

    overons() {
      const o = D.overOns;
      return `${paginaKop(o.kop)}
        <section class="blok"><div class="breed over-opbouw">
          <figure>
            ${foto(o.foto, o.naam, "portret")}
            <figcaption><strong>${esc(o.naam)}</strong><span>${esc(o.functie)}</span></figcaption>
          </figure>
          <div class="tekst">${alineas(o.tekst)}</div>
        </div></section>
        <section class="blok zacht"><div class="breed">
          <h2>${esc(o.waardenKop)}</h2>
          <div class="raster">${o.waarden.map((w) => `<div class="kaart dienst"><h3>${esc(w.titel)}</h3><p>${esc(w.tekst)}</p></div>`).join("")}</div>
        </div></section>`;
    },

    contact() {
      const c = D.contact;
      const b = D.bedrijf;
      return `${paginaKop(c.kop, c.intro)}
        <section class="blok"><div class="breed contact-raster">
          <div class="kaart">
            <h3>Telefoon</h3>
            <p><a href="tel:${esc(b.telefoon.replace(/[^0-9+]/g, ""))}">${esc(b.telefoon)}</a></p>
            <h3>E-mail</h3>
            <p><a href="mailto:${esc(b.email)}">${esc(b.email)}</a></p>
            <h3>Adres</h3>
            <p>${esc(b.naam)}<br>${esc(b.adres.straat)}<br>${esc(b.adres.postcode)} ${esc(b.adres.plaats)}</p>
          </div>
          <div class="kaart">
            <h3>${esc(c.openingstijdenKop)}</h3>
            <ul class="tijden">${b.openingstijden.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            <p class="opmerking">${esc(c.binnenkortTekst)}</p>
          </div>
        </div></section>`;
    }
  };

  // ---------- Fotogalerij met vergroot-venster ----------

  function galerijActiveren() {
    const galerij = document.querySelector(".galerij");
    if (!galerij) return;
    const fotos = JSON.parse(galerij.dataset.fotos);
    const titel = galerij.dataset.titel;
    let huidig = 0;

    const venster = document.createElement("dialog");
    venster.className = "lichtbak";
    venster.innerHTML = `
      <img alt="">
      <p class="lichtbak-teller"></p>
      <button class="lichtbak-knop vorige" aria-label="Vorige foto">‹</button>
      <button class="lichtbak-knop volgende" aria-label="Volgende foto">›</button>
      <button class="lichtbak-knop sluit" aria-label="Sluiten">×</button>`;
    document.body.appendChild(venster);
    const img = venster.querySelector("img");
    const teller = venster.querySelector(".lichtbak-teller");

    function toon(i) {
      huidig = (i + fotos.length) % fotos.length;
      const f = fotos[huidig];
      img.src = FOTOMAP + f.bestand;
      img.alt = f.tekst || `${titel}, foto ${huidig + 1}`;
      teller.textContent = `${huidig + 1} / ${fotos.length}${f.tekst ? " · " + f.tekst : ""}`;
    }

    galerij.addEventListener("click", (e) => {
      const knop = e.target.closest(".galerij-item");
      if (!knop) return;
      toon(Number(knop.dataset.index));
      venster.showModal();
    });
    venster.querySelector(".vorige").onclick = () => toon(huidig - 1);
    venster.querySelector(".volgende").onclick = () => toon(huidig + 1);
    venster.querySelector(".sluit").onclick = () => venster.close();
    // Klik naast de foto sluit het venster.
    venster.addEventListener("click", (e) => { if (e.target === venster) venster.close(); });
    venster.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") toon(huidig - 1);
      if (e.key === "ArrowRight") toon(huidig + 1);
    });
    // Vegen op de telefoon.
    let startX = null;
    venster.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    venster.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const verschil = e.changedTouches[0].clientX - startX;
      if (Math.abs(verschil) > 50) toon(huidig + (verschil < 0 ? 1 : -1));
      startX = null;
    });
  }

  // ---------- Alles samenvoegen ----------

  const pagina = document.body.dataset.pagina;
  const bestand = location.pathname.split("/").pop() || "index.html";
  const huidig = pagina === "project" ? "projecten.html" : bestand;

  document.getElementById("kop").outerHTML = kop(huidig);
  document.getElementById("inhoud").innerHTML = (paginas[pagina] || paginas.home)();
  document.getElementById("voet").outerHTML = voet();

  if (pagina !== "home" && pagina !== "project") {
    const menuItem = D.menu.find((m) => m.pagina === bestand);
    if (menuItem) document.title = `${menuItem.titel} · ${D.bedrijf.naam}`;
  } else if (pagina === "home") {
    document.title = `${D.bedrijf.naam} · ${D.bedrijf.ondertitel}`;
  }

  // Ontbrekende foto: toon een nette lege vlak met de bestandsnaam.
  document.querySelectorAll(".foto img").forEach((img) => {
    const markeer = () => img.parentElement.classList.add("ontbreekt");
    img.addEventListener("error", markeer);
    if (img.complete && img.naturalWidth === 0) markeer();
  });

  // Menuknop op de telefoon.
  const knop = document.querySelector(".menu-knop");
  knop.addEventListener("click", () => {
    const open = knop.getAttribute("aria-expanded") === "true";
    knop.setAttribute("aria-expanded", String(!open));
    document.querySelector(".menu").classList.toggle("open", !open);
  });

  galerijActiveren();
})();

// Als alleen het #-deel van het adres verandert (ander project), laadt de browser de pagina niet opnieuw. Dat doen we dan zelf.
window.addEventListener("hashchange", () => location.reload());
