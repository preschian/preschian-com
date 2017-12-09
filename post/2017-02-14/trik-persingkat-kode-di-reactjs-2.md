---
title: "Trik Persingkat kode di ReactjS #2"
date: "2017-02-14"
image: "./featured.jpg"
---

Di postingan [sebelumnya](https://preschian.com/trik-persingkat-kode-di-reactjs) ada contoh pemakaian Property Initializers dan Fat Arrow atau Autobinding, berarti yang kurang adalah Stateless Function di ReactJS. Selama buat komponen di React pasti pernah buat komponen yang gak punya State atau Lifecycle, sebelumnya gue biasanya nulis komponen di React kurang lebih seperti contoh ini :

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const menu = ['home', 'about', 'contact', 'portfolio']

class Items extends React.Component {
  render = () => <li>{this.props.children}</li>
}

class App extends React.Component {
  render = () => (
    <ul>
      {menu.map((val) => <Items key={val}>{val}</Items>)}
    </ul>
  )
}

ReactDOM.render(<App />, document.getElementById('content'))
```

Ternyata, dari contoh kode di atas bisa lebih dipersimpel lagi. Jadi seperti ini :

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const menu = ['home', 'about', 'contact', 'portfolio']

const Items = ({children}) => <li>{children}</li>

const App = () => <ul>
  {menu.map((val) => <Items key={val}>{val}</Items>)}
</ul>

ReactDOM.render(<App />, document.getElementById('content'))
```

Gue sendiri baru belakangan ini taunya, padahal udah bisa dari [React v0.14](https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components). Penggunaan seperti ini sangat disarankan, lebih lagi di blognya ditulis _“In the future, we’ll also be able to make performance optimizations specific to these components by avoiding unnecessary checks and memory allocations.”_. Nah, kapan sih harus memakai Stateless Function seperti ini? Selama di komponen tersebut ga ada **State** dan **Lifecycle Method** (seperti **ComponentDidMount**) sebisa mungkin ditulis seperti itu aja. Ga cuma jadi terlihat lebih simpel, penggunaan variable juga jadi lebih pendek.

Biar lebih gampang gue biasanya pake [Eslint](https://eslint.org/) untuk pengecekan kode, jadi pake rules [prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md) ini bisa dikasih tau klo ada komponen yang possible untuk dijadikan stateless.

Dari contoh kode diatas, ada penggunaan Destructuring Object. Kurang lebih penjabaran Destructuring Object seperti ini :

```javascript
// tanpa destructuring
const Items = (props) => {
  const children = props.children

  return <li>{children}</li>
}

// destructuring object ES6
const Items = (props) => {
  const { children } = props

  return <li>{children}</li>
}

// destructuring object ES6
const Items = ({children}) => <li>{children}</li>
```

Untuk lebih detail tentang Object Destructuring bisa ke [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring). Ini mempersimpel penggunaan variable juga.

Bacaan lebih lanjut :

*   [React v0.14 Release Candidate](https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components)
*   [Stateless Functional Component](https://buildwithreact.com/article/stateless-functional-components)
*   [React Stateless Functional Component](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.7hy8zg8mm)
*   [Functional Components with React](https://medium.com/@mirkomariani/functional-components-with-react-stateless-functions-and-ramda-e83e54fcd86b#.8hakomsd2)
