---
title: Connect a Laser
layout: base.njk

tags: []

eleventyNavigation:
    key: ConnectIndex
    title: Connect a Laser
    parent: Tutorials
---

Link to tutorials for connecting a laser. Make it look more appealing with pictures and descriptions.

{{ collections.all | eleventyNavigation("ConnectIndex") | eleventyNavigationToMarkdown | safe }}

<hr>
Notes:
Create *separate* tutorials for each laser type. There's enough differences that I don't think tabs are going to be clear enough for the users, and will be a nuisance for updates. It means that sometimes we'll be updating the same thing in three places, but otherwise we run into issues of where to place content that is shared with only some types of lasers.