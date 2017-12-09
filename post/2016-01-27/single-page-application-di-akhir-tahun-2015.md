---
title: "Single Page Application di akhir tahun 2015"
date: "2016-01-27"
image: "./featured.jpg"
---

Aloha~ gak berasa ternyata udah lebih dari 3 bulan gue sok-ide utak-atik ReactJS. Untuk gue, ini pertama kalinya gue nyobain javascript framework. Sebelumnya belum pernah icip-icip framework javascript yang lebih dulu terkenal macem Angular, Meteor, maupun Ember. Dan akhirnya, gue makin ketagihan sama yang namanya Javascript.

React itu cuma library kecil sih sebenernya, jadi bisa di gabung sama jQuery ataupun sama javascript plugin lainnya. Beberapa syntax jQuery yang gue pake didalam aplikasi React biasanya cuma **$.ajax**, **$(‘.selector .has .child’)**, dan **$.trigger(‘click’)**.  Milestone kedepan sih gue pengen sebisa mungkin gak pake jQuery, selagi bisa diganti tanpa pake jQuery kenapa enggak. Misalnya, untuk $.selector bisa diganti pake document.querySelector(‘.class’) dan $.trigger pake element.click(). Nah, untuk $.ajax gue belum nemu alternatif simple pake javascript, yang baru gue dapet sih pake [Fetch API](https://davidwalsh.name/fetch), tapi belum gue coba.

Awalnya gue kesulitan nyari file config untuk compile. Karena kebanyakan pada pake Webpack. Gue udah nyoba sedikit, tapi agak sulit menurut gue. Jadi gue tetep pake Gulp. Ini file config gue untuk build html, scss, jsx, dan live reload ([gulpfile.js](https://gist.github.com/preschian/d73b4e305227d523f5f6)).  Struktur folder gue biasanya kaya gini :

Karena di ReactJS nulis html di dalam javascript, gue masih tetep build file html yang nantinya bakalan di compile ke folder mockup. Untuk build html gue pake [gulp-processhtml](https://www.npmjs.com/package/gulp-processhtml), mempermudah untuk membuat prototipe. Nah klo pake webpack, gue kesulitan dalam tahap ini. Sulit klo mau compile file selain javascript, karena webpack cuma ngerti javascript. Malahan, banyak banget yang kasih contoh nulis css di javascript nanti hasilnya jadi inline. Wah enggak banget deh klo ini.

Sedikit demo aplikasi yang gue buat di akhir tahun kemarin bisa liat di [Youtube](https://www.youtube.com/watch?v=uD0V4jOvnmU). Untuk komponen kalendernya gue pake [react-daterange-picker.](https://www.npmjs.com/package/react-daterange-picker) Untuk navigasi halamannya pake [react-router](https://www.npmjs.com/package/react-router) mulai dari halaman login sampe ke halaman dalemannya. Semua data pake API, jadi cepet atau enggaknya tergantung dari sisi API-nya seberapa cepet dia ngirim balik datanya.

Nah, untuk PR selanjutnya yang harus gue pelajari adalah **Redux **dan **ES6**. 2 hal ini juga harus gue implementasi ke aplikasi yang gue kerjain. Biar alur kodenya bisa lebih rapih. Walaupun ngerapihin itu sebenernya gak ada abisnya.

Lagi seneng banget sama Javascript. Gue rasa, selama setahun 2016 ini gue bakalan dalemin Javascript.