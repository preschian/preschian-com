---
title: "Farewell Sass (Ruby) &#038; Compass. Aloha Gruntjs, Libsass, &#038; Bourbon"
date: "2014-12-29"
image: "./featured.jpg"
---

Aloha 😀 Selamat liburan semuanya! Liburan ini gue lebih asik bereksplorasi sama hal-hal yang berbau Front End. Hasilnya lumayan, dapet alat-alat baru yang ternyata super awesome. Sebenernya sih semuanya berawal dari rasa penasaran gegara judul artikel ini [“Increasing SASS Compiling Performance or _‘When Every Second Counts’_“](https://www.devbridge.com/articles/increasing-sass-compiling-performance-or-when-every-second-counts/ "Increasing SASS Compiling Performance or "When Every Second Counts”"). Sebelumnya gue biasa compile Sass pake Compass makin lama ketemu hal yang gak enaknya, setiap save kodingan pasti nunggu sekitar 2~14 detik dulu baru bisa refresh di browser. Klo lagi ngoding, gue termasuk yang sering mencet Ctrl + S. Bete nunggunya sih karena setiap save nunggu 2 detik dulu, berasa wasting time gitu.

Dari artikel itu ada 2 keyword yang penting, yaitu **Gruntjs** dan **Libsass.** Sebelumnya gue cuma sekedar tau Gruntjs, pokoknya tampilannya command line interface gitu deh. Masih belum tertarik nyoba waktu itu. Tetiba gue langsung teringat sama presentasinya **Addy Osmani** yang [_“Automating Front-end Workflow”_](https://speakerdeck.com/addyosmani/automating-front-end-workflow "Automating Front-end Workflow"). Klo dulu cuma diliat-liat doang, sekarang bener-bener gue perhatiin isi presentasinya. Ada quote keren yang gue suka **“Automation isn’t  about being lazy. It’s about being _efficient_.” **Aziik… Dan ternyata dia punya presentasi yang lebih baru _[“Front-end Tooling Workflows”](https://speakerdeck.com/addyosmani/front-end-tooling-workflows "Front-end Tooling Workflows")._ Yap, dari presentasinya dia lah gue mulai tertarik mau nyoba Gruntjs. Menyelaraskan dengan artikel yang bikin gue penasaran juga.

Sebetulnya liburan ini gue lagi nyobain [mixture.io](https://mixture.io/ "Mixture"), karena aplikasinya udah gratis gak dipakein harga lagi. Dan fitur utama yang gue incar adalah struktur view pake html. Gue jadi bisa buat template yang misalkan isinya header sama footer, jadi klo bagian elemen header ada yang berubah gue gak usah copy-paste bagian header yang berubah itu ke halaman lainnya satu persatu yang belum berubah. Dan ternyata, di Gruntjs ada plugin untuk itu! Yap, gue langsung udahan nyobain mixture-nya.

Untuk sementara ini, inilah daftar plugin [Gruntjs](https://gruntjs.com/ "Gruntjs") yang kepake banget sama gue :

1.  [grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch "grunt-contrib-watch") : setiap ada kodingan yang berubah, plugin ini ngebantu langsung menjalankan tugas-tugas plugin lainnya. Jadinya gak usah jalanin plugin secara manual.
2.  [grunt-newer](https://www.npmjs.com/package/grunt-newer "grunt-newer") : plugin ini ngebantu untuk compile file yang sedang diubah aja.
3.  [grunt-processhtml](https://www.npmjs.com/package/grunt-processhtml "grunt-processhtml") : nah ini yang bisa ngegantiin fitur yang ada di mixture. Di HTML bisa @include header sama @Include footer aja udah awesome.
4.  [grunt-sass](https://www.npmjs.com/package/grunt-sass "grunt-sass") : ini dia plugin yang paling ditunggu. Compile scss ke css.

Setelah ngerasain compile pake grunt-sass, kerasa banget bedanya. Biasanya butuh waktu 2 detik, sekarang compile cuma 0.08 detik… amazing…

Untuk pengganti Compass, ada [Bourbon](https://bourbon.io/ "Bourbon"). Gak terlalu susah sih migrasi dari Compass ke Bourbon. Syntax-nya gak jauh beda. Di Bourbon juga ada [Bourbon Neat](https://neat.bourbon.io/ "Bourbon Neat") semacam untuk semantic grid gitu deh. Ini bikin penasaran, soon bakalan gue cobain ini.