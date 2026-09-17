---
layout: base.njk
title: "Tech bloat"
date: 2026-09-17
tags: post
---

The modern web is bloated. Simple landing pages regularly pull down megabytes of JavaScript, endless analytics scripts, and heavy framework runtimes just to render static text. Software that should feel instantaneous now lags on powerful machines.

I have a genuine distaste for this trend. We’ve traded performance, simplicity, and efficiency for layers of unnecessary abstraction.

### The Problem with Modern Software

* **Bloated Frameworks:** Using massive, full-stack JavaScript setups for basic content sites adds fragile dependency chains and slow initial loads.
* **Over-Engineering:** Simple problems are routinely met with overly complex infrastructure, microservices, and build steps that slow down actual product delivery.
* **Loss of Ownership:** When a stack relies on dozens of abstraction layers, debugging turns into digging through vendor code rather than understanding your own software.

<br>

### Lean Inspiration: Herman Martinus

Indie hackers like Herman Martinus (creator of Bear Blog) prove there is a better way. Bear Blog runs on a minimalist philosophy: zero tracking scripts, ultra-fast load times, pure HTML/CSS, and a strict focus on content over feature creep.

Seeing builders successfully ship profitable, highly functional products using tiny, hyper-focused tech stacks shows that you don't need complex enterprise architecture to build great software. 

<br>

### My Approach

I want the software I build to be fast, light, and durable. Choosing plain CSS3, minimal static generators, and focused backend services isn't just an aesthetic choice—it's a commitment to building software that respects the user's bandwidth, device, and time.

Building lean keeps maintenance overhead low and keeps the focus where it actually belongs: on the product.