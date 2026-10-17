---
author: Hugo Authors
title: Images and Diagrams
date: 2020-01-10
description: Images in page bundles and Mermaid diagrams
tags: ["images", "mermaid"]
---

Put images next to your post in a [page bundle](https://gohugo.io/content-management/page-bundles/) and reference them with Markdown or the `resize-image` shortcode.
<!--more-->

## Markdown image

Images that are page resources get `loading="lazy"` and their intrinsic width and height.

![Sample image](sample.png "A sample image")

## resize-image shortcode

{{< resize-image src="sample.png" alt="Sample image" caption="Rendered with the resize-image shortcode" >}}

## Mermaid diagram

Fence a code block with `mermaid` to draw a diagram. The theme loads Mermaid only on pages that contain one.

```mermaid
graph LR
  A[Write Markdown] --> B{Has a diagram?}
  B -->|Yes| C[Load Mermaid]
  B -->|No| D[Plain page]
```
