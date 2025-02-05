# React + Vite

In this Project i made use of linea icons and Iconmonstr for the icons i also snipped some because converting some essential icons from png or jpeg to svg didnt provide clear enough vector icons.,

I also snipped the Circle HQ logo from the login form provided on the official Circle HQ Website,

I have tried a number of ways to make use of the svg icons in this project i tried inline svg icons (it proved to be disorganized),
i tried placing them all in a single component to import them from that export of said component (ran into some issues with type validation),mainly with trying to make use of vite-plugin-svgr (the primary issue was that react wasn't viewing the svg as a component ), i finally decided to place each svg icon in their individual components and import the exports from those components
that seemed to be the solution for now,




- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
