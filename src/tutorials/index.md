---
title: Tutorials
layout: base.njk

tags: [categoryIndex]

eleventyNavigation:
    key: Tutorials
---

Display all tutorials here. In reality it should look more appealing

{{ collections.all | eleventyNavigation("Tutorials") | eleventyNavigationToMarkdown | safe }}