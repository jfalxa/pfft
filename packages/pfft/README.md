# PFFT

That's how you pronounce it: https://www.youtube.com/watch?v=BhLL8C3OC5M&t=44


## Installation

1. Install [yarn](https://yarnpkg.com/)
2. `yarn global add pfft`

`yarn` is your friend, `npm` not really.


# Usage

1. Find the preset you need (right now only `react-app` is available)
2. Run `pfft react-app myproject/`

`pfft` will create the folder `myproject` and add the preset `pfft-preset-react-app` as a dev dependency. Then it will copy the contents of the `template` folder of the preset to your project and add the scripts listed under the `scripts` folder as `npm` scripts in your package.json. Finally it'll initialize the project as a git repo and commit what's inside the folder as initial commit. `pfft` does not do more than this downloading and copying, all the actual boilerplate logic is stored inside presets.


## Why

tl;dr Keep your config and tools in one place to share tech updates between projects.

The JS ecosystem is changing all the time so having your own boilerplate on github to bootstrap your projects with the latest techs is always nice. However, once you clone your boilerplate and start coding something on top of it, you have no way to easily update your build config so you'll have to go through the pain of adding new stuff manually.

When you don't have that many projects, it's not that bad. But when you're trying new experiments all the time, you will eventually add new features to one project and this update will only live there. Then you may add those new parts to your boilerplate and you'll end up starting this whole process all over again.

That's where `pfft` comes in.

Its main goal is to centralize generic boilerplate code in npm packages so it becomes easier to share and update. It hides away most of the complexity of build config and other helpful tools so you can focus on actually coding. In the meantime, it gives you the ability to update your configs in only one place and share it between many projects so you won't end up maintaining five thousand parallel configs that are actually doing pretty much the same thing.


## Building a preset

To build a preset, you'll have to respect a few rules (or else it won't work). I don't like making things mandatory so all of this will probably become optional in a near future.

### Naming
Right now, you'll have to prefix your package name with `pfft-preset-`.

### Template
If you want to start your app with some code already available, create a `template` folder at the root of your project and put your base code inside.

### Scripts
A preset needs a `scripts` folder in its root. You also have to put and `init.sh` script that contains any commands you want to run when initializing your app. Right now, you can only use `.sh` scripts there, anything else will be ignored.

### Scripts bin
The `pfft-utils` package has a tool called `proxy-script` that creates a cli tool that executes sh scripts from the preset module. You'll have to create a js file that uses this function (first arg is the preset name, the other one is always `process.argv`) and make this file a binary in your package.json. It makes your final app's package.json scripts prettier as you'll only see something like `"build": "react-app build"` instead of `"build": "sh ./node_modules/pfft-preset-react-app/scripts/build.sh"`. Please look at `pfft-preset-react-app/index.js` and its package.json for a working example.

### Partials
Partials are not mandatory and can have any name you want, they're just npm packages. They can help you share config and scripts between a few presets so you don't have to repeat yourself too much.

### The rest
Now you can put anything you want in your preset. The scripts you define inside the script folder should abstract all the features of your preset so the end user doesn't have to know the details. You can eventually make those scripts open to options to give more flexibilty. For example the react-app preset allows you to pass custom webpack config to the build script so you can make configs specific to one project. As the react-app preset is also an npm package, you can require its basic webpack config and extend it as you wish, then pass it to the build script.
