import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

function structurize(paths) {
  let sf = {};


  const toStructure = (path, ref = sf) => {
    let p = path.match(/\/[a-zA-Z0-9\.\-\_]+/)
    let head;
    let tail;

    if (p) {
      head = p[0].slice(1);
      tail = path.slice(p[0].length);

      ref[head] = { ...ref[head] };
    }
    // console.log(head,tail)
    if (tail) {
      toStructure(tail, ref[head]);
    } else {
      console.log('finalFile: ' + head);
    }
    // return [...[],head];
  }

  for (let p of paths) {
    toStructure(p)
  }
  return sf;
}

const StructuredComponent = (sf) => html`<li><ul> ${sf.map(sf => {
  for (let v in a) { console.log(v) }
  console.log()
})}</ul> </li> `

class App extends Component {
  constructor() {
    super();
    this.state = {
      files: []
    }
  }


  componentDidMount() {
    fetch('https://api.github.com/repos/sirluky/MujProgramovaciWeb/git/trees/master?recursive=1').then(data => data.json()).then(data => {
      console.log(data)
      let filteredFiles = data.tree.filter(({ path, size }) => {
        if (path.match(/^static\/skola/) && path.match(/\..*$/)) {
          return true;
        } else {
          return false
        }
      })

      filteredFiles = filteredFiles.map((f) => {
        f.path = f.path.replace('static/skola', '');
        return f.path;
      })


      console.log(structurize(filteredFiles));

      this.setState({
        files: filteredFiles
      })
    })
  }
  // addTodo() {
  //   const { todos = [] } = this.state;
  //   this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  // }
  render({ page }, { todos = [] }) {
    return html`
      <div class="app">
        <ul>
        ${
      this.state.files.length ? html`${this.state.files.map(f => html`
          <li><a href=${'/skola/' + f.path}>${f}</a></li>
        `)
        }` : html`Loading...`
      }
          
        </ul>
      </div >
  `;
  }
}

// const Header = ({ name }) => html`< h1 > ${name} List</h1 > `

// const Footer = props => html`< footer ...${props} />`

render(html`<${App}  />`, document.querySelector('#app'));