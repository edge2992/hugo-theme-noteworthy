# Noteworthy

Noteworthy is a minimalist Hugo theme for writers and bloggers.

![Noteworthy desktop screenshot](https://github.com/kimcc/hugo-theme-noteworthy/blob/master/images/screenshot.png)


## Features

* Fully responsive
* Google Analytics and Disqus integration
* Ko-fi donation button
* Syntax highlighting
* Mathematical notations with KaTex
* Mermaid diagrams
* Light and dark mode
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


## Custom styles

The theme styles are plain CSS that use custom properties (`--color-*`, `--font-*`).
To override them, create `assets/css/custom.css` in your site. It is bundled after the theme styles.

```css
:root {
  --font-sans-serif: "Kinto Sans", "Noto Sans", sans-serif;
}
```


## License

Released under the [MIT License](https://github.com/kimcc/hugo-theme-noteworthy/blob/master/LICENSE.md).
