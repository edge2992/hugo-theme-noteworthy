# Noteworthy

Noteworthy is a minimalist Hugo theme for writers and bloggers.

[![Build exampleSite](https://github.com/edge2992/hugo-theme-noteworthy/actions/workflows/build.yml/badge.svg)](https://github.com/edge2992/hugo-theme-noteworthy/actions/workflows/build.yml)

![Noteworthy desktop screenshot](https://github.com/kimcc/hugo-theme-noteworthy/blob/master/images/screenshot.png)


## Features

* Fully responsive
* Google Analytics and Disqus integration
* Ko-fi donation button
* Syntax highlighting
* Mathematical notations with KaTeX, rendered at build time (no client-side JS)
* Mermaid diagrams
* Light and dark mode (optionally following the OS setting)
* Alerts (`> [!NOTE]`), heading anchors, and lazy-loaded images
* About, Tags, and Archives pages
* RSS feeds
* Social media links
* Plain CSS with custom properties (no Sass or Hugo extended required)


## Requirements

* Hugo 0.158.0 or later


## Installation

Navigate to the root directory of your Hugo site and clone this repository.

```
git clone https://github.com/edge2992/hugo-theme-noteworthy.git themes/noteworthy
```

Refer to the [Hugo docs](https://gohugo.io/getting-started/quick-start/) for more information.

## Image shortcode for large images

To add images using the resize-image shortcode included with this theme, you will need to create a [Post Bundle](https://gohugo.io/content-management/organization/#page-bundles). Create a folder for your post, put your Markdown file and images inside, and rename your Markdown file `index.md`. For example:

```
my-new-post
- index.md
- image1.jpg
- image2.png
```

Then, you can add an image within your Markdown file by using the shortcode like this:

```
{{< resize-image src="image1.jpg" alt="My first image" >}}
```

Add captions like this:

```
{{< resize-image src="image2.png" alt="My second image" caption="My caption" >}}
```

## Read more link for posts

Set `showReadMore = false` to `true` in the config file to have a "read more" link show up when posts are truncated.

## Social media accounts

In the `params` section of the `hugo.toml` file, you can add links to your social media accounts. Simply remove the ones that you don't want to include, and their icons will disappear from the site.

```
# Main
email = "#"
facebook = "#"
twitter = "#"
instagram = "#"
tumblr = "#"
reddit = "#"
pinterest = "#"
youtube = "#"
vimeo = "#"
weibo = "#"
vk = "#"
linkedin = "#"

# Writing
medium = "#"
blogger = "#"
wordpress = "#"

# Creative & Visual
dribbble = "#"
behance = "#"
deviantart = "#"
flickr = "#"

# Audio & Music
soundcloud = "#"

# Programming
github = "#"
stackoverflow = "#"
gitlab = "#"
codepen = "#"

# Academic
googlescholar = "#"
impactstory = "#"
orcid = "#"

# Travel
googlemaps = "#"
tripadvisor = "#"
```


## Disqus and Google Analytics

Add your Disqus shortname and Google Analytics identifier in the `hugo.toml` file.
Use the [privacy settings](https://gohugo.io/configuration/privacy/) to control how they behave.

```
[services]
  [services.disqus]
    shortname = ""
  # Google Analytics identifier (GA4): G-XXXXXXXXXX
  [services.googleAnalytics]
    id = ""
```

## Ko-fi donation button

If you'd like to enable a Ko-fi button on your posts, enable it in the config file and add your identifier.

```
# Set enableKofi to true to enable the Ko-fi support button. Add your Ko-fi ID to link to your account.
enableKofi = true
kofi = ""
```


## Dark mode

The visitor can switch between light and dark with the toggle in the sidebar, and the choice is remembered.
Set the scheme used until they choose:

```
[params]
  # "light" (default), "dark", or "auto" (follow the OS setting)
  defaultTheme = "auto"
```


## Math

Math is rendered with KaTeX while the site is built, using Hugo's [`transform.ToMath`](https://gohugo.io/functions/transform/tomath/). Enable the Goldmark passthrough extension in your `hugo.toml`:

```
[markup.goldmark.extensions.passthrough]
  enable = true
  [markup.goldmark.extensions.passthrough.delimiters]
    block = [['\[', '\]'], ['$$', '$$']]
    inline = [['\(', '\)']]
```

The KaTeX styles are loaded only on pages that contain math. Set `math = true` under `[params]` to load them on list pages too, for math that appears in summaries.


## Mermaid diagrams

Fence a code block with `mermaid`. Mermaid is bundled with the theme and loaded only on pages that contain a diagram.


## Alerts

GitHub-style alerts are rendered as styled blockquotes:

```
> [!NOTE]
> Useful information that users should know, even when skimming content.
```

The types are `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, and `CAUTION`.


## Adding tags to `<head>`

Create `layouts/_partials/head-extra.html` in your site. The theme includes it at the end of `<head>`.


## Custom styles

The theme styles are plain CSS that use custom properties (`--color-*`, `--font-*`).
To override them, create `assets/css/custom.css` in your site. It is bundled after the theme styles.

```css
:root {
  --font-sans-serif: "Kinto Sans", "Noto Sans", sans-serif;
}
```


## Maintenance

### CI

[`.github/workflows/build.yml`](.github/workflows/build.yml) builds the exampleSite with the `min_version` in `theme.toml` and with the latest Hugo release:

* on every pull request and push to `master`
* on the 1st of every month, to catch new deprecations early (a failure opens an issue)

The build fails on any `WARN` or `ERROR`. The list of unused templates is uploaded as an artifact.
When you raise `min_version`, update the matrix in the workflow as well.

To run the same build locally:

```
hugo build -s exampleSite --themesDir ../.. -t hugo-theme-noteworthy \
  -d /tmp/noteworthy-public --logLevel warn --printPathWarnings --printUnusedTemplates
```

### Quarterly review

Once a quarter (January, April, July, October):

1. Read the [Hugo release notes](https://github.com/gohugoio/hugo/releases) since the last review and note deprecations that affect the theme.
2. Check the [Hugo security advisories](https://github.com/gohugoio/hugo/security/advisories):

   ```
   gh api repos/gohugoio/hugo/security-advisories --jq '.[] | [.published_at[:10], .severity, .summary] | @tsv'
   ```

3. Update the Hugo version used to deploy the site (for example `HUGO_VERSION` in `netlify.toml`) to the latest stable release.
4. Check for updates to the vendored libraries and update them if needed:
   * Mermaid: `assets/js/vendor/mermaid/` (`npm view mermaid@11 version`)
   * KaTeX styles and fonts: `assets/css/vendor/katex/`. Keep them on the KaTeX version that Hugo embeds (see `internal/warpc/js/package.json` in the Hugo repository for the release you deploy with).


## License

Released under the [MIT License](https://github.com/kimcc/hugo-theme-noteworthy/blob/master/LICENSE.md).
