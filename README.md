# series-replace

![build](https://github.com/rossjrw/series-replace/workflows/build/badge.svg)

Make a series of regex find-and-replacements.

## Context

I often use [regexr](https://regexr.com/) for quick find-and-replace operations
and just generally as a temporary text editor, honestly. Sometimes, though, I
come across a problem where the only solution is to make a series of
find-and-replacements. regexr can't do that. What it can do is set up a single
find-and replace operation that is saved to a given URL. You can go to that
URL, paste your text into the top box, take it from the bottom box, then head
along to the next regexr URL and perform the second replacement.

When you have to do this multiple times, it's not fun! I thought to myself,
"Why can't there just be a tool that lets you make a series of find-and-replace
operations"; and shortly thereafter I thought "Oh no."

The goal of this tool is to allow anyone to set up a series of find-and-replace
rules that can be accessed by URL. They can share that link to anyone (but
let's face it, it's only going to be themselves) and then that person can take
those rules and quickly perform a series of find-and-replacements.

regexr uses some sort of fancy system where the ruleset is saved to a short,
internal URL. I don't want to fuck with any backend database nonsense, so for
now, rulesets are probably going to made purely with URL query parameters.

I'm also going to using this project as an experiment into Typescript, Vue.js
and Webpack; which hopefully explains why the whole thing is so unnecessarily
complex. I've previously used Coffeescript, AngularJS and Gulp.js and found
them to be a little unwieldy. So this should be fun. This is also my first
foray into GitHub Projects, CI and GitHub Actions.

## Usage

Head along to [the tool](https://rossjrw.github.io/series-replace).

Or see a usage example ([1](https://rossjrw.github.io/series-replace?i=Paste%20the%20text%20you%20want%20replaced%20here.&f=%5E.%28.%29%5Ba-z%5D%2A%5Cs.%28he%29%5Cs%28%5Cw%2A%29.%2A%3F%28%5Ber%5D%7B2%7D%28.%29%5Ba-z%5D%2Bd%29&r=T%242%20%244%20%243%20will%20%241p%245e%241r)) ([2](https://rossjrw.com/series-replace/?f=%5BA-z%5D&f=%28%3F%21%5Cs%29%28%5B%E2%96%88%5Cs%5D%2B%29%28%3F%3C%21%5Cs%29&i=Sam%2C%20I%20don%27t%20have%20much%20time.%20You%20need%20to%20tell%20Kseniya%20to%20stop%20research%20and%20to%20lock%20the%20file.%20Please%20do%20that%20for%20me.&r=%E2%96%88&r=%5B%5Bspan%20class%3D%22no%22%5D%5D%241%5B%5B%2Fspan%5D%5D)).

## Development

```shell
npm install
npm run build
xdg-open dist/index.html
```
