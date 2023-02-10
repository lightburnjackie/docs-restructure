---
title: Grouping
layout: functionpagelayout.njk

tags: [design, workflow, vector, raster, select, move, transform, rotate]
difficulty: beginner
contentType: function
compatibility: [dsp, ruida, gcode]
---

## Why are groups used?
Are you trying to node-edit an imported design but it's not showing you the nodes? Are you trying to lay out many objects each with cutouts and engravings and getting sick of manually selecting all the parts of each one every time you want to move them? Are you trying to align objects without their little components being scattered? 

A good understanding of grouping, ungrouping and auto-grouping will speed up your workflow, help you with these tasks and more. 

## What does grouping do?
*Groups* collect independant objects (lines, shapes, images, text, etc.) together so that they can be edited (moved, scaled, rotated, docked, aligned, distrubuted etc.), while maintaining their relative positions and sizes. It also makes related objects easier to quickly select; for example you might be making a many earrings each with an image engraved and a hole. You could group each earring's parts together to make them easier to select and lay out on your workplane. 

Grouping is sometimes confused with the  [Boolean Modifier tools](#), the difference being that Boolean Modifiers change the underlying node structure of the objects, whereas groups do not. 

*Ungrouping* simply turns a group of objects back into individual ones. Nodes cannot be edited directly in grouped objects, so to change the nodes in a grouped object you must first ungroup it. Some designs made in other software may import as a group, and thus require ungrouping before they can be edited. 

Auto-Grouping allows you to 


## Troubleshooting
If you are still not able to use the node edit tool on an object you have ungrouped, the object may need to be [converted to a path](#), [traced](#), or it may be a [live array](#). 

Some tools treat object as groups when you use them on more than one object at a time (e.g. [offset shapes](#), [kerf offset](#)) in order to provide the most intuitive result.

## Related
Groups are sometimes confused with boolean operators. 