<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dlacpy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Copy all or part of a matrix `A` to another matrix `B`.



<section class="usage">

## Usage

To use in Observable,

```javascript
dlacpy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlacpy@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dlacpy = require( 'path/to/vendor/umd/lapack-base-dlacpy/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlacpy@v0.2.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dlacpy;
})();
</script>
```

#### dlacpy( order, uplo, M, N, A, LDA, B, LDB )

Copies all or part of a matrix `A` to another matrix `B`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float64Array( 4 );

dlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
// B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: output [`Float64Array`][mdn-float64array].
-   **LDB**: stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var A0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var B0 = new Float64Array( 5 );

// Create offset views...
var A1 = new Float64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var B1 = new Float64Array( B0.buffer, B0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dlacpy( 'row-major', 'all', 2, 2, A1, 2, B1, 2 );
// B0 => <Float64Array>[ 0.0, 2.0, 3.0, 4.0, 5.0 ]
```

#### dlacpy.ndarray( uplo, M, N, A, sa1, sa2, oa, B, sb1, sb2, ob )

Copies all or part of a matrix `A` to another matrix `B` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
// B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
```

The function has the following parameters:

-   **uplo**: specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **B**: output [`Float64Array`][mdn-float64array].
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
// B => <Float64Array>[ 0.0, 0.0, 2.0, 3.0, 4.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlacpy()` corresponds to the [LAPACK][lapack] routine [`dlacpy`][lapack-dlacpy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlacpy@v0.2.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var A = uniform( N, -10, 10, {
    'dtype': 'float64'
});
console.log( ndarray2array( A, shape, strides, 0, order ) );

var B = uniform( N, -10, 10, {
    'dtype': 'float64'
});
console.log( ndarray2array( B, shape, strides, 0, order ) );

dlacpy( order, 'all', shape[ 0 ], shape[ 1 ], A, strides[ 0 ], B, strides[ 0 ] );
console.log( ndarray2array( B, shape, strides, 0, order ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-dlacpy.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-dlacpy

[test-image]: https://github.com/stdlib-js/lapack-base-dlacpy/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/lapack-base-dlacpy/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-dlacpy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-dlacpy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-dlacpy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-dlacpy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-dlacpy/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-dlacpy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-dlacpy/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-dlacpy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-dlacpy/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-dlacpy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-dlacpy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-dlacpy/main/LICENSE

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-dlacpy]: https://www.netlib.org/lapack/explore-html/d0/d9e/group__lacpy_gaba7ee02955a93bf8af4a432c98734e65.html#gaba7ee02955a93bf8af4a432c98734e65

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
