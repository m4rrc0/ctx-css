# CUBE CSS Methodology

## Overview

CUBE CSS is a CSS methodology created by Andy Bell that focuses on simplicity, pragmatism, and consistency. Unlike other methodologies that might work against CSS's natural behavior, CUBE CSS embraces and extends the cascade and inheritance features of CSS. The name CUBE stands for **Composition Utility Block Exception**, representing the key components of this approach.

CUBE CSS has been used successfully in projects of all sizes, from tiny blogs to massive websites serving millions of users. Its flexibility allows it to work in both very old and very new codebases.

## Core Principles

### Progressive Enhancement

CUBE CSS embraces progressive enhancement as a core principle. By creating a minimum viable experience first, it accounts for older browsers by default. Then, using CSS's forgiving features, it extends that experience with modern capabilities like flexbox and grid without fear of compatibility issues.

### Abstraction Only When Necessary

The methodology calls for a reduction in abstraction. By using CSS for what it's good at, most style rules are assigned at a higher level, supported by composition styles, utilities, and finally blocks and exceptions. This creates a flat, inclusive structure that's predictable and easy to learn.

### Technology Agnostic

CUBE CSS works with any CSS authoring approach, whether you use Sass, Less, PostCSS, or CSS-in-JS. It's a thinking and organizational methodology rather than a tooling methodology.

## Components of CUBE CSS

### C - Composition

The composition layer provides high-level, flexible layouts that determine how elements interact with each other and create consistent flow and rhythm. It takes a macro-level view, even in smaller component contexts.

Key responsibilities:
- Provide flexible layout systems supporting many content variants
- Determine element interactions
- Create consistent flow and rhythm

Composition should not:
- Provide visual treatments like color or font style
- Add decorative styles like shadows
- Force pixel-perfect layouts instead of flexible ones

Example: A "flow" utility that creates consistent spacing between elements:

```css
.flow > * + * {
  margin-top: var(--flow-space, 1em);
}
```

### U - Utility

Utilities are CSS classes that do one job and do it well. They typically have only one CSS property defined, or a few related properties in a concise group.

Utilities work well with design tokens in design systems. Design tokens can be transformed into utility classes, allowing you to define things once and apply them everywhere.

Utilities should:
- Apply a single CSS property or concise group of related properties
- Extend design tokens to maintain a single source of truth
- Abstract repeatability away from CSS and apply it in HTML

Utilities should not:
- Define large groups of unrelated CSS properties
- Be used as specificity hacks (e.g., using !important)

Example:

```css
.wrapper {
  margin-inline: auto;
  padding-inline: 1rem;
  max-width: 60rem;
}
```

### B - Block

A block is a skeletal component or organizational structure, similar to a card or button element. By the time you reach the block level in CUBE CSS, most styling work has already been done by the global CSS, composition, and utility layers.

Blocks provide a mechanism to override the global CSS, composition, and utility layers when necessary. They create a light but specific group of rules that only apply in that context.

Unlike BEM, CUBE CSS doesn't require formal element declaration within blocks (though you can use it if you prefer). Inside a block, you have flexibility because the parent block class adds one extra specificity point.

Blocks should:
- Extend work done by global CSS, composition, and utility layers
- Apply collections of design tokens within concise groups
- Create namespaces or specificity boosts to control specific contexts

Blocks should not:
- Grow beyond 80-100 lines of CSS
- Solve more than one contextual problem

### E - Exception

Exceptions are deviations from the rules outlined in a block, usually related to state changes. They use data attributes rather than classes to provide hooks for both CSS and JavaScript.

Exceptions should:
- Provide concise variations to blocks
- Use data attributes

Exceptions should not:
- Vary a block to the point where it's unrecognizable (create a new block instead)
- Use CSS classes

Example:

```html
<article class="card" data-state="reversed"></article>
```

```css
.card[data-state='reversed'] {
  display: flex;
  flex-direction: column-reverse;
}
```

## Comparison to Other Methodologies

CUBE CSS takes inspiration from BEM but can be thought of as a step back from BEM's principles. While the core of BEM is blocks, the core of CUBE CSS is CSS itself. The cascade and inheritance are embraced rather than avoided, making blocks much less significant in CUBE CSS.

## Benefits of CUBE CSS

1. **Simplicity**: Works with CSS's natural behavior rather than against it
2. **Scalability**: Successfully powers projects of all sizes
3. **Flexibility**: Works in both old and new codebases
4. **Progressive**: Embraces modern CSS features while maintaining backward compatibility
5. **Reduced CSS**: Produces less CSS by leveraging the cascade effectively

## Resources

For more information about CUBE CSS, visit [cube.fyi](https://cube.fyi/) or read the introductory post ["CUBE CSS"](https://piccalil.li/blog/cube-css) for a high-level overview of how it works with simplified examples.