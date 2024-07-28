

# cst-unique-id (Generate Customizable Unique IDs)

> Create unique IDs for slugs, passwords, and more with ease. Our package allows you to customize string length, include numbers, and special characters to fit your needs.

## Prerequisites

This project requires NodeJS (version 8 or later), file-type Module and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/sauraverse/npm-package.git
$ cd npm-package
```

To install and set up the library, run:

```sh
$ npm install -S cst-unique-id
```


#### Options

`url`

| Type | Default value(40characters unique str) |
| --- | --- |
| string | 'E!wcDV%@Sh4Dd@KQm_5!?vNoQ@CjJUO@i3IuwB_%' |

If present, the request will be performed as soon as the function is called

Example:

```tsx
import genId from "cst-unique-id"

console.log(genId());         // Generates a 40-character password with numbers and special characters
console.log(genId(15));       // Generates a 15-character password with numbers and special characters
console.log(genId(15, false)); // Generates a 15-character password without numbers, but with special characters
console.log(genId(15, false, false)); // Generates a 15-character password without numbers and without special characters
```

## Contributing


1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:


## Authors

* **Saurav K.** - *Portfolio* - [sauraverse](https://sauraverse.com)
