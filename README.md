# `babel-plugin-styled-wind`

This plugin is a highly recommended supplement to the base styled-wind library, offering some useful features:

- Use tailwind classnames in styled-components without using any additional dependencies
- Supports all features of styled-wind, but with no additional bundle size
- It works independently and doesnt require installing `styled-wind`

Please note: For testing/playing around the tool, use the actual library. Use the `babel-pligin-styled-wind` only for production to avoid unnecssary configurations. 

## Quick start

Install the plugin first:

```
npm install --save-dev babel-plugin-styled-wind

or 

yarn add -D babel-plugin-styled-wind
```

Then add it to your babel configuration:

```JSON
{
  "plugins": ["babel-plugin-styled-wind"]
}
```

## Custom themeing

> The configurations works very similar to tailwindcss with few exceptions. Details about configuring or extending the default theme object can be found [here](https://tailwindcss.com/docs/configuration)

* Create a file `styled-wind.js` in the root of your project and add custom styles in it. A sample implementation: 

```js
// styled-wind.js
module.exports = {
    theme: {
        extend: {
            colors: {
                cyan: '#9cdbff'
            },
        }
    }
}
```

## Documentation

**More detailed documentation for styled-wind lives on [the styled-wind website](https://styled-wind.netlify.app)!**

## License

Licensed under the MIT License, Copyright © 2020-present Vilva Athiban and Ameer Jhan.

See [LICENSE.md](./LICENSE.md) for more information.
