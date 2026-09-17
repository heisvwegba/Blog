---
layout: base.njk
title: "Behind this blog"
date: 2026-09-17
tags: post
---

After considering complex options, I decided to build a fast, minimal static blog from scratch using standard Web technologies and **Eleventy (11ty)**.

### Why Eleventy?

I wanted a setup that gives me full control over my CSS while allowing me to write posts in plain Markdown. Eleventy fits this perfectly:

* **Flexible templating:** I can reuse my existing HTML structures with Nunjucks templates.
* **Zero extra JavaScript overhead:** It outputs clean, static HTML files.
* **Fast local preview:** Changes compile almost instantly as I write.

<br>

### Key Technical Decisions

* **Custom CSS:** Built using native Flexbox layouts, CSS variables, and clean font stacks (Iosevka Charon and Tinos).
* **Minimal Dependencies:** Uses minimal build configuration with plain Markdown parsing.
* **Date Parsing:** Custom Node.js filters format publication dates smoothly across timezones.

<br>

### What's Next?

Now that the foundation is live, I'll be sharing notes on software projects, tattoo art, and continuous learning.