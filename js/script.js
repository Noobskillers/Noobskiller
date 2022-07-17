function hapus() {
  return alert('Data Berhasil Dihapus');
}

function success() {
  return alert('Data Berhasil Di-Edit!');
}

function create() {
  alert('Data Berhasil Di-tambah!');
}

const article = document.querySelectorAll("article");
    for (var i = 0; i < article.length; i++) {
      article[i].className = "card";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

sorta(document.getElementById("demoA"));

function validateRegister() {
  var nama = document.getElementById("nama").value;
  var alamat = document.getElementById("alamat").value;
  var tanggal_lahir = document.getElementById("tanggal_lahir").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var nomor_telepon = document.getElementById("nomor_telepon").value;

  if (nama == "" || alamat == "" || tanggal_lahir == "" || email == "" || password == "" || nomor_telepon == "") {
        alert("Lengkapi Inputan Yang Kosong!");
        return false;
  } 
  else {
        alert('Pendaftaran Akun Berhasil');    
        return true; 
  }
  
}

function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var containsNum = /[0-9]/.test(password)
  var containsUpper = /[A-Z]/.test(password)
  var containsLower = /[a-z]/.test(password)

  if (containsNum && containsUpper && containsLower) {}
  else {
      alert ('Password Wajib Kombinasi Antara Huruf Besar, Kecil dan Angka');
      return false;
  }

  if (email == "" || password == "") {
        alert("Lengkapi Inputan Yang Kosong!");
        return false;
  } 
  else if (password.length < 8 || password.length > 10) {
        alert("Password Minimal 8 dan Maksimal 10 Karakter");
        return false;
  }
  
  else {
        alert('Login Berhasil');    
        return true; 
  }
  
}

//  instance : target html table
//  data : optional, generate table with this data
function sorta (instance, data) {
  // (A) ATTACH FLAGS TO TABLE
  instance.sBy = null; // sort by this field
  instance.sDirection = true; // ascending/descending
  instance.sOrder = []; // calculated sort order

  // (B) ATTACH SORT FUNCTION TO TABLE
  instance.sort = (selected) => {
    // (B1) UPDATE SORT FLAGS
    if (instance.sBy == selected.innerHTML) {
      instance.sDirection = !instance.sDirection;
    } else {
      instance.sBy = selected.innerHTML;
      instance.sDirection = true;
    }

    // (B2) UPDATE CSS OF HEADER CELLS
    for (let c of instance.head.rows[0].cells) {
      c.classList.remove("sortup");
      c.classList.remove("sortdown");
      if (c == selected) {
        c.classList.add((instance.sDirection ? "sortup" : "sortdown"));
      }
    }

    // (B3) MAP OUT DATA OF THE SELECTED COLUMN
    // I.E. WE NEED TO RETAIN THE INDEX POSITIONS WHILE SORTING
    let map = data[selected.innerHTML].map((v, i) => { return { i: i, v: v }; });

    // (B4) SORT ARRAY
    if (instance.sDirection) {
      map.sort((a, b) => {
        if (a.v > b.v) { return 1; }
        if (a.v < b.v) { return -1; }
        return 0;
      });
    } else {
      map.sort((a, b) => {
        if (a.v < b.v) { return 1; }
        if (a.v > b.v) { return -1; }
        return 0;
      });
    }

    // (B5) REDRAW TABLE WITH NEW SORT ORDER
    instance.sOrder = [];
    for (let idx in map) { instance.sOrder.push(map[idx].i); }
    delete(map); instance.draw();
  };

  // (C) FUNCTION TO REDRAW TABLE DATA
  instance.draw = () => {
    // (C1) REMOVE OLD SORT ORDER
    instance.body.innerHTML = "";

    // (C2) DRAW NEW SORT ORDER
    let r, c;
    for (let i of instance.sOrder) {
      r = instance.body.insertRow();
      for (let key in data) {
        c = r.insertCell();
        c.innerHTML = data[key][i];
      }
    }
  };

  // (D) ADAPT EXISTING TABLE TO SORTABLE TABLE
  if (data==undefined) {
    // (D1) GET TABLE SECTIONS
    instance.head = instance.querySelector("thead");
    instance.body = instance.querySelector("tbody");

    // (D2) GET DATA FROM HEADER
    data = {}; keys = [];
    for (let c of instance.head.rows[0].cells) {
      data[c.innerHTML] = [];
      keys.push(c.innerHTML);
    }

    // (D3) GET DATA FROM BODY
    for (let r of instance.body.rows) { for (let i=0; i<r.cells.length; i++) {
      data[keys[i]].push(r.cells[i].innerHTML);
    }}
    delete(keys);
  }

  // (E) DRAW SORTABLE TABLE FROM OBJECT
  else {
    // (E1) CREATE TABLE SECTIONS
    instance.head = instance.createTHead();
    instance.body = instance.createTBody();

    // (E2) HEADER CELLS
    let r = instance.head.insertRow();
    r = instance.head.rows[0];
    for (let key in data) {
      let c = r.insertCell();
      c.innerHTML = key;
    }

    // (E3) DEFAULT SORT ORDER & DRAW BODY
    for (let i=0; i<data[Object.keys(data)[0]].length; i++) { instance.sOrder.push(i); }
    instance.draw();
  }

  // (F) ADD CSS CLASS + ATTACH CLICK TO SORT
  instance.classList.add("sorta");
  for (let r of instance.head.rows) { for (let c of r.cells) {
    c.onclick = () => { instance.sort(c); };
  }}
}

function searchFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("demoA");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}