function cal() {
let l = document.querySelector('input[name="left"]');
let r = document.querySelector('input[name="right"]');

let n1 = Number(l.value); 
let n2 = Number(r.value);

  let a = document.querySelector('span#answer');
  a.textContent = n1 + n2;
}

let b = document.querySelector('button#calc');
b.addEventListener('click',cal);