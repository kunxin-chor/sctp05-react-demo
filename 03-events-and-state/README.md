# Three main pillars of React

1. JSX - look like HTML but is not HTML. But when we
transpile a React project -- it becomes JavaScript object
```
  React/JSX --> Transpiliation --> Browser-based JS
```

The transpiliation happens automatically during development (because of NodeJS) but if we are deploying
to a live server, we need to do a `npm run build` -- this is akin to compliation in Java.

1b. JSX can be in components, which are functions that return JSX -- reusable JSX

2. When the state changes -- via the setter function -- the component is redrawn (or re-rendered)

3. Events