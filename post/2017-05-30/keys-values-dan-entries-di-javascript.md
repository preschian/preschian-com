---
title: "Ambil Keys atau Values dari Javascript Object"
date: "2017-05-30"
image: "./featured.jpg"
---

Sama seperti tahun 2016 [kemarin](https://preschian.com/single-page-application-di-akhir-tahun-2015), di tahun 2017 ini
gue masih lanjut bercengkrama sama Javascript. Mestinya di tahun ini gue harus bisa publish seenggaknya 1 web app. Blog
gue full JS sih, enak buat bahan percobaan tapi berasa kurang. Buat web app kecil-kecilan klo ada user yang make kayanya
seru.

Ada beberapa function bawaan JS yang gue baru tau belakangan ini. Gara-garanya temen seorang Back End nanya ke gue,
“bisa ga langsung ngambil key/value-nya aja dari object?”. Gue agak diem dulu, gue jawab “bisa, tapi ga langsung”.
Maksud gue ga langsung itu di looping dulu object-nya, terus dimasukkin deh key/value-nya ke variable array kosong.
Kurang lebih kaya gini:

```javascript
const asObject = {
  a: 'q',
  b: 'w',
  c: 'e',
  d: 'r',
  e: 't',
  f: 'y',
}
const getKeys = []
const getValues = []

for (let key in asObject) {
  // kalo mau ambil key
  getKeys.push(key)

  // kalo mau ambil value
  getValues.push(asObject[key])
}

console.log(getKeys)
// ["a", "b", "c", "d", "e", "f"]

console.log(getValues)
// ["q", "w", "e", "r", "t", "y"]
```

Karena kata temen gue mestinya bisa langsung, dan gue juga ga tau yaudah gue gugling deh. Dan setelah gugling ternyata
bisa ngedapetin langsung key/value nya, haha. Kurang lebih jadi seperti ini:

```javascript
const asObject = {
  a: 'q',
  b: 'w',
  c: 'e',
  d: 'r',
  e: 't',
  f: 'y',
}
const getKeys = Object.keys(asObject)
const getValues = Object.values(asObject)

console.log(getKeys)
// ["a", "b", "c", "d", "e", "f"]

console.log(getValues)
// ["q", "w", "e", "r", "t", "y"]
```

Untuk Object.keys(var) bisa dipake di browser jadul, tapi untuk Object.values(var) cuma bisa di beberapa browser modern.
Ada lagi Object.entries(var) outputnya sama berupa array, yang isinya key dan value-nya sekaligus. Klo pake variable
yang diatas kurang lebih kaya gini:

```javascript
const getEntries = Object.entries(asObject)

console.log(getEntries)
// [["a","q"],["b","w"],["c","e"],["d","r"],["e","t"],["f","y"]]
```

* [Object.keys(_obj_)](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
* [Object.values(_obj_)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
  (experimental)
* [Object.entries(_obj_)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
  (experimental)
