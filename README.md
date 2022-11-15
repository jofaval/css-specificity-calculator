# Specificity Calculator

Simplify your CSS debugging

## Contents

1. [Description](#description)
1. [What is specificity?](#what-is-specificity)
   1. [Points system](#points-system)
1. [Usage](#usage)
   1. [Javascript](#javascript)
   1. [Python](#python)
1. [License](#license)

## Description

[Back to the top](#contents)

It's main idea is to provide an easy-to-use calculator for specificity. Why? Because it happened be something "problematic" while debugging a CSS rule between thousands of lines.

## What is specificity?

[Back to the top](#contents)

It's the good fix to avoid using **`!important`**, and to understand why, at times, it seems like the only option available.

CSS are Cascading Style-Sheets, cascading means that there's inheritance, and that inheritance can overwrite your styles. You could change the order in which you import your styles, but that won't always fix the solution, you'd be fixing the surface, but not the root.

Specificity are the points given to a CSS selector that determine it's priority, when two selects have the same specificity, the latter will apply.

### Points system

[Back to the top](#contents)

- **`html-tag`**, _1 point per element_, the lowest of them all, a simple html tag.
- **`.my-class`**, _10 points per class_, a CSS class given to an HTML element.
- **`#uniqueId`**, _100 points per identifier_, a unique id given to an HTML element.
- **`!important`**, _1000 points_, whenever a rule has **`!important`** as a suffix, only one per rule, and it can be overwritten.
- **`inline`**, _1000 points_, when styles are applied to the `style=""` attribute of an element, only one per HTML element and rule, and it can be overwritten.

## Usage

[Back to the top](#contents)

User interface should and will be added later on, at the moment, only scripts are avaible.

### Javascript

[Back to the top](#contents)

Implement user interaction, at this point in time, requires javascript. It's also a widely used and understand language.

On a Linux/Unix system:

```bash
node ./src/utils/specificity.utils.js
```

On a Windows system

```bash
node ./src/utils/specificity.utils.js
```

### Python

[Back to the top](#contents)

At first, I intended to only use python, and to add it to my [utilities' repository](https://github.com/jofaval/utilities), but it'd be damn useful to use it with javascript aswell.

On a Linux/Unix system:

```bash
python3 ./src/utils/specificity.utils.py
```

On a Windows system

```bash
python ./src/utils/specificity.utils.py
```

## License

[Back to the top](#contents)

MIT
