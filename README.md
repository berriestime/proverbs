# proverbs

1. Для компиляции scss используется плагин VSCode Live Sass Compiler (glenn2223.live-sass)
2. В settings.json добавить правила:

```
"liveSassCompile.settings.generateMap": false,
"liveSassCompile.settings.formats": [
{
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "~/css"
}
],
"liveSassCompile.settings.excludeList": [
    "/**/node_modules/**",
    "/.vscode/**"
]
```

3. Для компиляции css нажать в VSCode внизу "Watch Sass" после чего скомпилится файл index.css
