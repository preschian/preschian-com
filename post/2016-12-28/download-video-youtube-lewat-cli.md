---
title: "download video Youtube lewat cli"
date: "2016-12-28"
image: "./featured.jpg"
---

waktu dulu pake Windows dan install IDM (Internet Download Manager) gampang banget klo mau download video di Youtube,
sekarang semenjak ga pake OS Windows sempet bingung mau download-nya gimana. karena ga tau ekstension apa yang bagus
untuk download video, akhirnya gue pake youtube-dl ini:
[https://rg3.github.io/youtube-dl/download.html](https://rg3.github.io/youtube-dl/download.html). klo yang pake macOS
gampang sih install-nya tinggal:

<pre>brew install youtube-dl</pre>

katanya sih bisa untuk Windows dan Linux, untuk lengkapnya bisa dilihat di link barusan. ternyata ga cuma bisa untuk
download youtube, bisa website lain juga. tapi gue ga nyoba website lain nyobanya video di Youtube aja.

caranya gampang, buka terminal ketik deh command-nya. contoh command-nya:

<pre>youtube-dl -v -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' link-video</pre>

![](youtube-dl.gif)

supaya lebih gampang ga usah ingetin command-nya tinggal dimasukkin script bash aja, gue save kode berikut lalu kasih
nama download

<pre>#!/bin/sh
youtube-dl -v -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' $1
</pre>

jadi, kedepannya klo mau download video tinggal

<pre>./download link-video</pre>

fiturnya masih banyak, tapi klo gue cukup segitu aja command-nya ngambil video dengan kualitas paling tinggi. klo mau
liat fitur-fitur lainnya bisa baca dokumentasinya
[https://github.com/rg3/youtube-dl/blob/master/README.md#readme](https://github.com/rg3/youtube-dl/blob/master/README.md#readme)
