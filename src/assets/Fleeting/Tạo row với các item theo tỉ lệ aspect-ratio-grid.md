
```css
.row {
  display: flex;
  gap: 1rem;
}

.item {
  flex-basis: 0;
  aspect-ratio: var(--ratio);
  flex-grow: calc(var(--ratio));
}
```

```html
<div class="row">
  <div style="--ratio: 3 / 2;" class="item">3:2</div>
  <div style="--ratio: 16 / 9;" class="item">16:9</div>
  <div style="--ratio: 1 / 1;" class="item">1:1</div>
</div>
```

## References

1. [Building a combined CSS-aspect-ratio-grid](https://9elements.com/blog/combined-aspect-ratio-grid/)