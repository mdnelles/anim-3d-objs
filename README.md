
# React Typescript Cuboid Builder

This project allows a user to create Cuboids of any size simply by entering a set of parameters.  
The program does the leg work with regard to calculating translationZ depth and config on the fly.



## Deployment

Install sequence

```
git clone <thisrepo>
npm i
npm run start
```

Create  webpack.config.js

## Authors

- [@mdnelles](https://github.com/mdnelles)


## Demo

The following code

```
const indivStyles: object = {
      // // face individual styles (over rides global)
      bottom: {
         bfv: "visible",
         fontFamily: "Helvetica",
      },
      front: {
         border: "1px solid #f00",
         bgc: "#f00",
         bfv: "visible",
         fontFamily: "Arial, Sans",
      },
      left: {
         bgc: "yellow",
      },
      top: {
         bgc: "pink",
      },
      right: {
         bgc: "purple",
      },
      back: {
         border: "1px solid #f00",
         bgc: "#0f0",
         bfv: "visible",
         fontFamily: "Arial, Sans",
      },
   };
```

and 
```
         <Cuboid
            width={260}
            depth={260}
            height={92}
            perspectiveOrigin='50% 50%'
            zIndex={10}
            animSpecs={animSpecs}
            indivStyles={indivStyles}
            faces={faceprops}
            globalStyles={globalStyles}
         >
            {}
         </Cuboid>
```

will produce the following

![Logo](https://raw.githubusercontent.com/mdnelles/objs-local/main/img.png?token=GHSAT0AAAAAABQVNJ4VATWQM4SI3LXSTDZWYVDOL7Q)

