/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/base64-js@1.3.1/index.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict"; for (var lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i)lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i; function getLens(o) { var r = o.length; if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var e = o.indexOf("="); return -1 === e && (e = r), [e, e === r ? 0 : 4 - e % 4] } function byteLength(o) { var r = getLens(o), e = r[0], t = r[1]; return 3 * (e + t) / 4 - t } function _byteLength(o, r, e) { return 3 * (r + e) / 4 - e } function toByteArray(o) { var r, e, t = getLens(o), n = t[0], u = t[1], p = new Arr(_byteLength(o, n, u)), a = 0, h = u > 0 ? n - 4 : n; for (e = 0; e < h; e += 4)r = revLookup[o.charCodeAt(e)] << 18 | revLookup[o.charCodeAt(e + 1)] << 12 | revLookup[o.charCodeAt(e + 2)] << 6 | revLookup[o.charCodeAt(e + 3)], p[a++] = r >> 16 & 255, p[a++] = r >> 8 & 255, p[a++] = 255 & r; return 2 === u && (r = revLookup[o.charCodeAt(e)] << 2 | revLookup[o.charCodeAt(e + 1)] >> 4, p[a++] = 255 & r), 1 === u && (r = revLookup[o.charCodeAt(e)] << 10 | revLookup[o.charCodeAt(e + 1)] << 4 | revLookup[o.charCodeAt(e + 2)] >> 2, p[a++] = r >> 8 & 255, p[a++] = 255 & r), p } function tripletToBase64(o) { return lookup[o >> 18 & 63] + lookup[o >> 12 & 63] + lookup[o >> 6 & 63] + lookup[63 & o] } function encodeChunk(o, r, e) { for (var t, n = [], u = r; u < e; u += 3)t = (o[u] << 16 & 16711680) + (o[u + 1] << 8 & 65280) + (255 & o[u + 2]), n.push(tripletToBase64(t)); return n.join("") } function fromByteArray(o) { for (var r, e = o.length, t = e % 3, n = [], u = 0, p = e - t; u < p; u += 16383)n.push(encodeChunk(o, u, u + 16383 > p ? p : u + 16383)); return 1 === t ? (r = o[e - 1], n.push(lookup[r >> 2] + lookup[r << 4 & 63] + "==")) : 2 === t && (r = (o[e - 2] << 8) + o[e - 1], n.push(lookup[r >> 10] + lookup[r >> 4 & 63] + lookup[r << 2 & 63] + "=")), n.join("") } revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;


let sekce = [];

document.querySelector("#pridejUkol").onclick = () => {
  const obsahukolu = document.querySelector("#ukol").value;
  pridatUkol(obsahukolu);
  // ukolcounter();
  document.querySelector("#ukol").value = "";
};

function pridatUkol(ukoltext) {
  const nazevSekce = document.querySelector("#vyberSekce").value;

  const uid = "ukol-" + Math.floor(Math.random() * 1000000000);

  const id = "control-" + uid;
  document.querySelector("#" + nazevSekce).innerHTML += `  <tr  id="${uid}">
    <th scope="row">
      <button class="btn btn-primary text-white" id="${id + "-done"}">
        <i class="fa fa-check" id="${id + "-done"}"></i>
      </button>
    </th>
    <td>${ukoltext}</td>
    <td>
    <button class="btn btn-secondary text-white" id="${id + "-edit"}">
       <i class="far fa-edit" id="${id + "-edit"}"></i>
    </button>

      <button class="btn btn-danger text-white" id="${id + "-delete"}">
       
        <i class="fa fa-times-circle" id="${id + "-delete"}"></i>
      </button>
    </td>
  </tr>`;
  ukolcounter(nazevSekce);
  uloz();
}

function ukolcounterdone(nazevSekce) {
  document.querySelector("#todocounter-done-" + nazevSekce).innerHTML = document.querySelectorAll(`#${nazevSekce} tr[style]`).length;
}

function ukolcounterAll(nazevSekce) {
  document.querySelector("#todocounter-" + nazevSekce).innerHTML = document.querySelectorAll(`#${nazevSekce} tr`).length;
}

function ukolcounter(nazevSekce) {
  ukolcounterAll(nazevSekce);
  ukolcounterdone(nazevSekce);
}

function vytvorSekci(nazevSekce = document.querySelector("#novaSekce").value) {
  document.querySelector("#novaSekce").value = "";

  document.querySelector(".todos").innerHTML += `
  <table class="table">
  <h2 class="pl-3 mt-2">${nazevSekce}</h2>
  <caption>Celkem úkolů:
    <span id="todocounter-${nazevSekce}"></span>
    <br>
    Celkem splněných:
    <span id="todocounter-done-${nazevSekce}"></span>

  </caption>
  <thead>
    <tr>
      <th scope="col">
        Splněn
      </th>
      <th scope="col">Úkol</th>
      <th scope="col">Ovládaci Tlačítka</th>
    </tr>
  </thead>
  <tbody id="${nazevSekce}">
    

  </tbody>
</table>`;

  detekujZmeny(nazevSekce);
  pridejSekci(nazevSekce);
  ukolcounter(nazevSekce);
}

function pridejSekci(nazevSekce) {
  sekce.push(nazevSekce);
  const moznost = document.createElement("option");
  moznost.innerText = nazevSekce;
  moznost.value = nazevSekce;

  document.querySelector("#vyberSekce").appendChild(moznost);
  uloz();

}

function detekujZmeny(nazevSekce) {
  nazevSekce = "#" + nazevSekce;
  document.querySelector(nazevSekce).onclick = ({ target }) => {
    if (target.id.indexOf("control-ukol-") === 0) {
      if (target.id.endsWith("-delete")) {
        document.querySelector(nazevSekce + " #" + target.id.slice(8, target.id.indexOf("-delete"))).remove();
      } else if (target.id.endsWith("-done")) {

        if (!document.querySelector(nazevSekce + " #" + target.id.slice(8, target.id.indexOf("-done"))).style.background) {
          document.querySelector(nazevSekce + " #" + target.id.slice(8, target.id.indexOf("-done"))).style.background = "lightgreen";
        } else {
          document.querySelector(nazevSekce + " #" + target.id.slice(8, target.id.indexOf("-done"))).removeAttribute('style');
        }
      } else if (target.id.endsWith("-edit")) {
        const editing = document.querySelector(nazevSekce + " #" + target.id.slice(8, target.id.indexOf("-edit")));
        const content = editing.querySelector("td");

        if (!editing.querySelector("input")) {
          content.innerHTML = `<input type="text" value="${
            content.innerHTML}">`;
          console.log(editing);
          if (target.querySelector("i")) {
            target.querySelector("i").className = "fa fa-check";
          } else {
            target.className = "fa fa-check";
          }
        } else {
          if (target.querySelector("i")) {
            target.querySelector("i").className = "far fa-edit";
          } else {
            target.className = "far fa-edit";
          }
          content.innerHTML = content.querySelector("input").value;
        }
      }
    }
    ukolcounter(nazevSekce.slice(1));
    // localStorage.setItem("todohtml", rozdelaneDOM.innerHTML);
    // ukolcounter();
    uloz();

  };
}


function uloz() {
  console.log(document.querySelector(".todos").innerHTML);
  localStorage.setItem("ukoly", document.querySelector(".todos").innerHTML);

  const dataToSave = btoa(unescape(encodeURIComponent(localStorage.ukoly)));
  db.collection("todos").doc('userID').set({
    data: dataToSave
  })
    .then(function (docRef) {
      console.log("Document edited: ", docRef);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}

function nacti() {
  document.querySelector(".todos").innerHTML = localStorage.getItem("ukoly");
  document.querySelectorAll('.todos table tbody').forEach(e => {
    detekujZmeny(e.id);
    pridejSekci(e.id);
  });

}

window.onload = function () {
  // ukolcounter();
};
// nacti();
nactiFirebase()


function nactiFirebase() {
  db.collection("todos").doc("userID").get().then(todos => {
    const { data } = todos.data();
    document.querySelector(".todos").innerHTML = decodeURIComponent(escape(window.atob(data)));

    document.querySelectorAll('.todos table tbody').forEach(e => {
      detekujZmeny(e.id);
      pridejSekci(e.id);
    });
  })


}

//if (!localStorage['ukoly'])
//  vytvorSekci("hlavni");



// Your web app's Firebase configuration
