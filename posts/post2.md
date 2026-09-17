---
layout: base.njk
title: "Indie hacking and my tech stack"
date: 2026-09-17
tags: post
---

I’m starting this journey with a clear goal: build the product ideas living inside my head and ship them as an indie hacker. 

To do that without getting buried under endless configuration files and framework churn, I had to choose a stack early. I wanted setup choices that respect my time, run fast, and stay out of the way.


### The Stack

* **CSS3:** Plain, modern styling with native variables and flexbox/grid layout. No utility classes cluttering the markup, no compile steps for styles, and complete design control.
* **SvelteKit & Supabase:** The engine for dynamic ideas and SaaS apps. SvelteKit keeps the front-end lean with minimal boilerplate, while Supabase handles database, auth, and backend logic without managing servers.
* **11ty:** The static generator behind this blog. It compiles Markdown straight to static HTML with zero client-side JavaScript required.


### Core Philosophy

Building as a solo creator means every added dependency is a potential future break point. My rules for choosing tech are simple:

* **Zero Bloat:** Skip heavy frameworks when simple tools do the job faster.
* **Minimal Dependencies:** Fewer packages in `package.json` means fewer security audits and fewer breaking updates down the road.
* **Ownership Over Abstractions:** Understand what the code is doing under the hood instead of hiding behind layers of magic.
* **Project Maintainability:** Write code today that I can open in two years and still understand instantly.


### Fundamentals First

It’s tempting to lean entirely on AI generation right out of the gate. While LLMs are incredible tools for speed, relying on them before understanding the underlying mechanics creates fragile projects and that doesn't work for me. If I don't know how the code works, I can't debug it when it breaks.

My strategy is to master the core web fundamentals first — HTML5, CSS3, JavaScript, and core database design. Once those foundations are rock solid, I'll bring AI into the workflow as a force multiplier rather than a crutch.

The goal for me isn't just to ship fast; it's to build things that last.