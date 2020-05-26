# series-replace

![CI](https://github.com/rossjrw/series-replace/workflows/CI/badge.svg)

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
them to be a little unwieldy. So this should be fun.

## Usage

Head along to [the tool](https://rossjrw.github.io/series-replace).