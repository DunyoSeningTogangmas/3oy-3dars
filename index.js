let ball = +prompt("to'plagan balingizni kiriting");
if (ball < 80) {
  alert("siz imtihondan yiqildingiz");
} else if (ball >= 80 && ball < 100) {
  alert(
    "siz super kontrakt asosida o'qishga kirishingiz mumkun qachonki 3000$ pul to'lasangiz"
  );
  let summa = +prompt("sizda bor pulni kiriting");
  if (summa < 3000) {
    alert("siz o'qishga kira olmadingiz");
  }
} else if (ball >= 100 && ball < 150) {
  alert(
    "siz kontrakt asosida o'qishga kirishingiz mumkun qachonki 2000$ pul to'lasangiz"
  );
  let summa2 = +prompt("sizda bor pulni kiriting");
  if (summa2 < 2000) {
    alert("siz o'qishga kira olmadingiz");
  }
} else if (ball >= 150 && ball < 180) {
  alert("siz grant asosida o'qishga qabul qilindingiz))");
} else {
  alert("siz maksimum baldan o'tib kettingiz siz xiyla ishlatayabsiz");
}
