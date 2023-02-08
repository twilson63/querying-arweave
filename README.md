# Querying Arweave

Not only is Arweave permanent storage that you pay once and use forever, it is a huge permanent immutable data store, you can store data using tags, these tags can be used to query data using graphql.


Lets add arweave-js as a helper library

```html
<head>
 <script src="https://unpkg.com/arweave@1.12.6/bundles/web.bundle.min.js"><script>
</head>
```

Lets create a query and fetch some data from arweave

```js
document.getElementById('btn').addEventListener('click', async () => {
  const query = `query {
    transactions(first: 100, tags: [{name: "Type", values: ["image"] }, {name: "Topic:meme", values: ["meme"]}]) {
      edges {
        node {
          id
          owner {
            address
          }
          tags {
            name
            value
          }
        }
      }
    }
    }`

  const result = await arweave.api.post('graphql', { query })
  const nodes = extractNodes(result)
  render(nodes)

})
```