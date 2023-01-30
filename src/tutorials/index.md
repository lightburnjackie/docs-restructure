---
title: Tutorials
layout: default.njk

tags: [category-index]
---

# Tutorial Index

If you're new to LightBurn or to lasers in general, our tutorials are intended to get you started quickly. We can't cover everything here, but after you've gone through the tutorials, our [Guides](#) and [Projects](#) are great ways to learn more.

{% for tutorial in collections.tutorial %}
- [{{ tutorial.data.title }}]({{ tutorial.url }})
{% endfor %}
