# 🌟 ExpandifyCSS 🌟

![Version](https://img.shields.io/badge/version-1.0.0-blue)

> ExpandifyCSS is a simple yet powerful CSS-only library for creating expandable and collapsible sections. 🚀

## 📸 Demo

![Demo](https://gcdnb.pbrd.co/images/yxtl1Ih3vC2n.gif?o=1)


## 🎉 Features

- **Pure CSS**: No need for JavaScript.
- **Lightweight**: Extremely minimal footprint.
- **Customizable**: Easy to modify to suit your design.

## 🚀 Quick Start

### Download

1. Download the `expandify.css` file from the [GitHub Repository](https://github.com/armennersisyan/ExpandifyCSS/blob/main/expandify.css).
2. Include it in your HTML file like this:

```html
<link rel="stylesheet" href="path/to/expandify.css">
```

### HTML

```html
<div class="expandableSection">
  <div class="expandableSection-inner">
    <!-- Your content -->
  </div>
</div>

<button id="btn">Toggle</button>
```

### JavaScript

```javascript
document.getElementById('btn').addEventListener('click', function() {
  document.querySelector('.expandableSection').classList.toggle('expanded');
});
```

## ✨ Customization

Customize it easily with your own CSS.

## 👨‍💻 Contributing

Pull requests are welcome. For major changes, please open an issue first.

## 💌 Contact

- GitHub: [@armennersisyan](https://github.com/armennersisyan)
- Email: [armenersisyan@gmail.com](mailto:armenersisyan@gmail.com)