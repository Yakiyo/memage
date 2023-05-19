# imitari

An image manipulation api used for creating meme-ish images. This is an attempt to recreate [`DankMemer/imgen`](https://github.com/DankMemer/imgen) with better docs and such.

The project is currently **work in progress**, thus any and all contributions are welcome. See [development](#development) section for setting up locally.

Api documentation will be available in the `/api/` endpoint, and a json and yaml representation in `/api/endpoints.json` and `/api/endpoints.yaml` endpoint respectively.

## Roadmap
- Cover all endpoints supported in `DankMemer/imgen`
- Create readable documentation

## Development
The repo is setup to work with [vercel](https://vercel.com) as it will be deployed to vercel. It uses Next.js [api routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) for endpoints and [next-rest-framework](https://github.com/blomqma/next-rest-framework) for creating strongly typed endpoints and automated documentations.
#### File structure
- pages/api: contains endpoints, every file denotes an endpoint
- src/: utility funcs and others.
- assets/: fonts and images used in endpoints

#### Notes
- A single endpoint should not access too many images. Vercel has a max size limit for serverless funcs and it deduces the file size based on fs imports and others. Dynamically trying to load files will cross file size restrictions.


## Contributing
- Clone repo
```bash
$ git clone https://github.com/Yakiyo/imitari
```
- Set it up. See [Development](#development)
- Create new branch
```bash
$ git checkout -b coolNewFeatureBranch
```
- Make ur changes and create a pull request. Please ensure ur code compiles and runs successfully and is properly linted and formatted. Check [`rome.json`](./rome.json)

## Credits
This project is a recreation of DankMemer api's imgen. Images in [`assets/`](./assets/) are directly copied from imgen's repo.

## Author

**imitari** © [Yakiyo](https://github.com/Yakiyo). Authored and maintained by Yakiyo.

Released under [MIT](https://opensource.org/licenses/MIT) License