# blender-css

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

These are the CSS files used by Blender CMS.

## Installation

This package is custom built for [Spatie](https://spatie.be) projects and is therefore not registered on npm.
In order to install it via *Yarn* you have to go through our registry in your `.yarnrc` file

```txt
registry https://npm.spatie.be
```
Add it to the project via

```cli
yarn add blender-css
```

## Usage

Include one or more files in your `back.scss`, and build with *Webpack* afterwards.

``` SCSS
@charset 'UTF-8';

@import 'blender-css/dist/blender';
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email willem@spatie.be instead of using the issue tracker.

## Credits

- [Willem Van Bockstal](https://github.com/willemvb)
- [All Contributors](../../contributors)

## About Spatie
Spatie is webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
