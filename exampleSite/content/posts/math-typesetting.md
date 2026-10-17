---
author: Hugo Authors
title: Math Typesetting
date: 2019-12-12
description: A brief guide to math typesetting with KaTeX
---

This theme renders mathematical notation with [KaTeX](https://katex.org/) while the site is built, using Hugo's [`transform.ToMath`](https://gohugo.io/functions/transform/tomath/) function. No JavaScript runs in the browser.
<!--more-->

To enable it, turn on the Goldmark passthrough extension in your project configuration:

```toml
[markup.goldmark.extensions.passthrough]
enable = true
[markup.goldmark.extensions.passthrough.delimiters]
block = [['\[', '\]'], ['$$', '$$']]
inline = [['\(', '\)']]
```

The theme loads the KaTeX styles only on pages that contain math. Set `math = true` under `[params]` to load them on list pages as well, for math that appears in summaries.

**Note:** Use the online reference of [Supported TeX Functions](https://katex.org/docs/supported.html)

### Examples

Inline math: \( \varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887… \)

Block math:

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$

Another block:

\[
\begin{aligned}
KL(\hat{y} || y) &= \sum_{c=1}^{M}\hat{y}_c \log{\frac{\hat{y}_c}{y_c}} \\
JS(\hat{y} || y) &= \frac{1}{2}(KL(y||\frac{y+\hat{y}}{2}) + KL(\hat{y}||\frac{y+\hat{y}}{2}))
\end{aligned}
\]
