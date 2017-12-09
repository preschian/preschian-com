---
title: "Buka blokir reddit"
date: "2017-04-30"
image: "./featured.jpg"
---

Udah lebih dari 1 tahun gue pake [Biznet Home](https://preschian.com/aloha-biznet-home), kesan di tahun pertama sih
cukup puas speed download:upload juga 1:1 dan akses reddit pun ga di blokir. Nah tapi, pas setelah belakangan ini reddit
malah di blokir. Ga cuma itu, dari kuartal pertama jaringannya cukup sering down, malah pernah waktu itu down sampe
beberapa hari. Untungnya sih lagi di luar jadi ga ngerasain down-nya. Intinya, di kuartal pertama ini menurun sih
kualitasnya menurut gue.

So far klo untuk speed download/upload masih aman, yang cukup kecewa sih masalah pemblokiran reddit. Soalnya gue lumayan
sering buka reddit walaupun cuma [/r/dota2/](https://www.reddit.com/r/DotA2/) aja. Sebenernya gampang, tinggal pake vpn
bisa deh akses reddit. Cuma menurut gue pake tools tambahan gitu masih agak ribet dan kadang ga stabil juga, mungkin klo
berlangganan vpn yang berbayar baru stabil. Kemarin nyari-nyari akhirnya nemu yang lebih simpel.

1. Cari ip reddit lewat [DNS Lookup](https://mxtoolbox.com/DNSLookup.aspx)
2. Setelah dapet IP-nya, tambahin deh di /etc/hosts/
3. Setelah flushdns/restart kedepannya ga bakal ke blokir lagi deh buka reddit

Seperti ini yang gue tambahin di /etc/hosts/

```markup
151.101.41.140 reddit.com
151.101.41.140 www.reddit.com

151.101.0.217 vimeo.com
151.101.0.217 www.vimeo.com
151.101.0.217 player.vimeo.com
```

Klo hapenya android bisa juga dengan cara yang sama, cuma harus di root dulu. Sementara klo akses dari hape pake tools
vpn dulu deh.
