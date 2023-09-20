This is a test to determine what the code would be dynamically download files from a specific GitHub repo.

- I was trying to determine whether I could build of this to create something similar to [ShadCN UI Components CLI](https://ui.shadcn.com/docs/cli)

## Usage

```bash
node index.js
```

## Troubleshooting

You have to have a Personal Access token set up within GitHub. Under Settings > Developer Settings > Personal Access Tokens. You can then use this token to authenticate with GitHub.

For now, I just have it hard coded in on line 8 of index.js:

```js
const response = await octokit.request('GET /repos/ahaywood/broken-comb/contents/src/components', {
```
