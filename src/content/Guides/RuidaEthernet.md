---
title: Connecting to Ruida Controllers via Ethernet
layout: walkthroughlayout.njk

tags: [setup, hardware, ruida, dsp, ethernet]
difficulty: beginner
contentType: guide
compatibility: [dsp, ruida]
---

## Overview

Connecting to a Ruida-controlled laser can help you avoid long USB cables. This guide will walk you through the process.

## What You'll Need

- A laser with a Ruida controller
- An ethernet cable

*Note: I'd want to include pictures, skipping that for now*

## Steps

### 1: Choose an IP address

Ruida controllers need a static IP address to define their location in the network. If your network is managed by someone else (as with many schools and workplaces), we recommend working with that person to select an unused IP address. Home networks are simpler

*Insert actual process here, probably as a tabbed step depending on whether or not user has access to router admin page*

### 2: Set IP address on controller

1. Turn on your laser and navigate through the menu to the **IP Config+** entry. You'll see the IP address and gateway fields on the right
2. Use the left/right arrows to move through the IP address and the up/down arrows to change the value.
3. Press the enter button

![placeholder pic](https://via.placeholder.com/400x200?text=picture+of+ruida+interface)

### 3: Add machine in LightBurn

Ethernet connected lasers have to be added manually, and are separate from a USB connection for the same machine.

Go to **Devices** and choose **Create Manually**. Make sure you choose **Ethernet/UDP** as your connection type, and enter the IP address you selected on the laser controller.

For more help, see [our guide on manually adding a laser](#)

## What's Next

## Help and Troubleshooting

- You can check whether LightBurn is connected to your laser in the status bar at the bottom of the screen

![placeholder pic](https://via.placeholder.com/800x30?text=pic+of+status+bar)