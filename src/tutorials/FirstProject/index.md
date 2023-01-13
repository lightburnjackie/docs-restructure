---
title: Creating Your First Project
layout: base.njk

tags: []

eleventyNavigation:
    key: FirstProjectIndex
    title: First LightBurn Project
    parent: Tutorials
---

Link to first project tutorials. Make it look more appealing with pictures and descriptions.

{{ collections.all | eleventyNavigation("FirstProjectIndex") | eleventyNavigationToMarkdown | safe }}

<hr>
Notes:
Create *separate* tutorials for each laser type. In this case, I think it makes more sense to split between CO2/Diode than between GCode/DSP. The GCode/DSP split makes sense for connecting the laser, but at the level we're dealing with for this first project, I think the laser type is going to matter more than the controller type.

I think a rewrite of the WiFi QR Code guide is a good candidate for the tutorial, at least for diode & CO2. We *might* want something different for galvo.

These should handhold the user so much it's annoying for anybody who already knows how to use LightBurn (there can be a related, and much shorter, guide for users who have the fundamental knowledge and just need to know how to use the QR code tool). We should include a list of what's needed right at the top. We also should be providing cut setting recommendations. I know we've hesitated to do this because results may vary, but users who don't know what a reasonable starting point would be can get very frustrated without at least "This won't be optimal, but somewhere in this range should be an acceptable starting point" types of recommendations