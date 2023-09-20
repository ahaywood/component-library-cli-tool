This is a test / proof of concept to determine what the code would be dynamically download files from a specific GitHub repo.

- I was trying to determine whether I could build something similar to [ShadCN UI Components CLI](https://ui.shadcn.com/docs/cli)

## Usage

```bash
node index.js
```

## Troubleshooting

You have to have a Personal Access token set up within GitHub. Under Settings > Developer Settings > Personal Access Tokens. You can then use this token to authenticate with GitHub.

Duplicate .env.example and rename it to .env. Then add your token to the .env file.

```
GITHUB_API=
```

Currently, it's pulling from the ahaywood/broken comb repo. For now, I just have it hard coded in on line 8 of index.js:

```js
const response = await octokit.request('GET /repos/ahaywood/broken-comb/contents/src/components', {
```

If you run `node index.js` it will download `BaseHead.astro` to the root of your project.
