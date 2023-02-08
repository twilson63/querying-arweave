const arweave = window.Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' })
// functional helpers
const path = nodes => o => nodes.reduce((a, v) => a[v], o)
const prop = k => o => o[k]
const pluck = k => list => list.map(prop(k))
const propEq = (k, v) => o => o[k] === v
// compose fns
const extractNodes = r => pluck('node')(path(['data', 'data', 'transactions', 'edges'])(r))

document.getElementById('btn').addEventListener('click', async () => {
  // TODO

})


function render(nodes) {
  const el = document.getElementById('results')
  nodes.forEach(n => {
    const img = document.createElement('img')
    img.src = `https://arweave.net/${n.id}`
    img.alt = n.tags.find(propEq('name', 'Title')).value
    img.style = 'width: 400px'
    el.appendChild(img)
  })
}