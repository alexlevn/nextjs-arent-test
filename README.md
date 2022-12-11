# REAME

## how to run

```bash
yarn && yarn dev
```

## STEPS

```bash
npx create-next-app@latest --typescript
```

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- \_app.tsx

- index.tsx

```tsx
// ...
return <h1 className="text-3xl font-bold underline">Hello world!</h1>
// ...
```
