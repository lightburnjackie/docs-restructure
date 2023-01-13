---
title: Restructure Example
layout: base.njk

eleventyNavigation:
    key: Home
---
## Beginner Tutorials

Not sure where to begin? Start here!

{% set tutorials = collections.all | eleventyNavigation("Tutorials") %}

{% for tutorial in tutorials %}
[{{ tutorial.title }}]({{ tutorial.url }})
{% endfor %}

<a href="/tutorials"><button>See all tutorials</button></a>

<small>This content should involve very heavy handholding and should avoid decisions. Test extensively, make sure these are as error-resistant as possible. EVERY step should result in at least a small success. This isn't a recipe, it's teaching a five year old to cook. You really do have to start by reminding them to wash their hands.</small>

<hr>

## Guides

Learn to do new things with LightBurn.

<button>Adjust interlocking parts with slot & tab resizer</button>
<button>Optimize cut settings with the material test generator</button>
<button>Install and configure a camera</button>
<button>See more guides</button>

<small>Guides are step by step content, but with a lot less handholding than a tutorial. They should still be tested on a variety of setups, but are meant for users who have the ability to adapt to small changes and recover from errors. Think of this as equivalent to a recipe - a user who hasn't done something similar should be able to follow it exactly and get the same result, but it can also be used as a starting point to accomplish something related.</small>

<hr>

## Projects

Projects made using LightBurn. Try these projects or use them as the base for something else.

<button>Create a custom puzzle</button>
<button>Create ornaments based on drawings</buttons>
<button>Creating enameled pins</buttons>
<button>See more guide</button>

<small>This will have some overlap with guides. Some projects will be guides, but others will be more for inspiring other projects. I'd like each featured project to include a thumbnail image.</small>

<hr>

## Troubleshooting

If you're having trouble with LightBurn, we've got some guides to fixing common problems.

<button>LightBurn is cutting unexpected shapes</button>
<button>License key not received</button>
<button>Can't connect to laser</button>
<button>Laser not homing correctly</button>
<button>See more troubleshooting</button>

<small>I'd like this to be interactive eventually. For now, tags and well-chosen titles should help users find information. Some will be guides (how to fix the problem), while others will be more explanation (why you're running into the problem)</small>

<hr>

## Reference

Information about LightBurn's features, tools, and settings

<small>We're still discussing the best way to organize and display this at scale, but the primary display for individual pieces of content will be quick reference cards.</small>