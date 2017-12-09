---
title: "Dari Shared Hosting ke Firebase Hosting"
date: "2017-04-01"
image: "./featured.jpg"
---

Awal bulan kemarin gue mindahin file-file preschian.com ini dari shared hosting ke firebase hosting. Karena pada
dasarnya semenjak [integrasi blog pakai ReactJS](https://preschian.com/integrasi-blog-pakai-reactjs) isi-nya cuma static
files seperti HTML, CSS, dan JS aja ga ada file khusus yang mesti di-render dari sisi server semacam PHP atau NodeJS.
Untuk penyedia layanan static file hosting sebenernya ga cuma
[Firebase Hosting](https://firebase.google.com/docs/hosting/) aja, ada [Netlify](https://www.netlify.com/),
[Now](https://zeit.co/now), ataupun [Surge](https://surge.sh/). Karena penggunaan static files ini biasanya cuma untuk
keperluan pribadi, gue nyarinya layanan yang gratisan. Sampai saat ini yang paling asik dipake adalah **Netlify** dan
**Firebase Hosting**.

Awalnya gue pakai Firebase ini sebagai Database aja, tulisan-tulisan gue taro di sana semua. Untuk komentar gue pake
[Disqus](https://disqus.com/) supaya ga ribet. Biar sekalian aja hosting-nya juga sekarang pakai Firebase. Seperti yang
udah gue sebut sebelumnya, hosting di Firebase ini gratis. Karena bukan seleb, jadi traffic di blog ini sedikit cukup
untuk [di-tier free-nya](https://firebase.google.com/pricing/) firebase.

Menurut gue fitur yang ada di Firebase cukup komplit, ada Authentication, Database, Storage, Hosting, dan yang masih
beta ini ada Functions. Saran gue, untuk kalian yang punya jiwa Entrepreneur dan lagi membuat MVP Product bisa mulai
dari Firebase ini. Karena dari fitur-fitur yang tersedia udah cukup banget untuk membuat aplikasi. Jadi, cuma beli
domain aja sekitar 100rb-an. Start small, ketika produk udah ada nama, traffic dah mulai kenceng, atau bahkan udah bisa
menghasilkan, baru deh bisa upgrade Firebase-nya.

Pengeluaran biaya cuma dari domain gini, klo produknya gagal jadi ga rugi-rugi banget. Beda klo misalnya dari awal udah
beli cloud hosting atau semacamnya, pasti biayanya jauh lebih mahal.

Banyak yang bilang dan berpendapat bahwa alasan mereka milih cloud hosting untuk render website di sisi server karena
urusan SEO. Padahal, search engine sekarang udah makin pinter mereka bisa ngenalin website yang render-nya dari sisi
client. Untuk lebih jelasnya bisa lihat di artikel ini
[Web Crawlers are Smarther Than You Think](https://medium.freecodecamp.com/seo-vs-react-is-it-neccessary-to-render-react-pages-in-the-backend-74ce5015c0c9).

Buat produk udah makin mudah dan murah, balik lagi tinggal ke eksekusinya gimana. Good luck! 👍
