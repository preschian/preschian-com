---
title: "Trik Persingkat kode di ReactjS"
date: "2017-02-09"
image: "./featured.jpg"
---

Sebenernya untuk bahasan ini lebih ke **Property Initializers, Autobinding, dan Stateless Function** di ReactJS. Atau boleh dibilang implementasi kode ES6+ di ReactJS.

Biasanya kaya beginilah kodingan gue sebelumnya, state sama binding function di constructor

```javascript
class App extends React.Component {
  constructor() {
    super()
    this.state = { text: 'aloha' }
    this.whenType = this.whenType.bind(this)
  }

  whenType(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <input type="text" value={this.state.text} onChange={this.whenType} />
      </div>
    )
  }
}
```

Nah, ternyata nentuin state sama binding function ga mesti di constructor bisa lebih simple jadi gini

```javascript
class App extends React.Component {
  // penggunaan Property Initializers untuk set 'state'
  state = { text: 'aloha' }

  // penggunaan Arrow function untuk autobinding
  whenType = (e) => {
    this.setState({ text: e.target.value })
  }

  // klo sebelum return ga ada process, bisa langsung return pake () biar lebih sedikit
  render = () => (
    <div>
      <p>{this.state.text}</p>
      <input type="text" value={this.state.text} onChange={this.whenType} />
    </div>
  )
}
```

Gue sendiri baru tau belakangan ini, ternyata beberapa trik ini udah bisa dipake dari [React v0.13.0 Beta 1](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers). Untuk state namanya Property Initializers dan untuk Autobinding lebih jelasnya bisa dicek [Arrow functions](https://exploringjs.com/es6/ch_arrow-functions.html).

Menurut gue, setelah nulis kaya gini kodenya jadi sedikit lebih clean, karena beberapa bagian kodenya jadi lebih sedikit. Pada dasarnya, beberapa fitur kode ES6 juga mempersimpel sih. Contohnya penggunaan Template Literals, untuk penggunaan detail bisa dicek di [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals) atau [Exploringjs](https://exploringjs.com/es6/ch_template-literals.html). Nah, untuk Stateless Function gue akan nulis di postingan selanjutnya kode juga berasa jadi lebih clean.

Bacaan lebih lanjut:

*   [React v0.13.0 Beta 1](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers)
*   [React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)
