# Zero Config JavaScript App Prototyping with Webpack

To run:

```bash
npm install
```

```bash
npm run start
```

Sometimes you don't need a framework like Angular or React to demonstrate an idea or concept in JavaScript. You just want a framework-agnostic, plain JavaScript development environment to play around with things like [web workers](https://auth0.com/blog/speedy-introduction-to-web-workers/), [service workers](https://auth0.com/blog/creating-offline-first-web-apps-with-service-workers/), new JavaScript constructs, or IndexedDB, for example. In this blog post, you are going to learn how to quickly prototype plain JavaScript apps using webpack 4 to create such environment with zero config and low development overhead.

[Webpack](https://webpack.js.org/) is a leading static module bundler for frontend apps. It is used by tools such as `create-react-app` to quickly scaffold frontend projects. According to the [webpack documentation](https://webpack.js.org/concepts/), since version `4.0.0`, webpack doesn't require a configuration file to bundle your projects; however, the module bundler remains highly configurable to meet the increasing complexity of your projects down the line.

You can find the final version of this exercise on the [`webpack-prototype` repo on GitHub](https://github.com/auth0-blog/webpack-prototype). However, I encourage you to read on and build the webpack app prototype gradually to better understand the heavy lifting that webpack is doing for you.