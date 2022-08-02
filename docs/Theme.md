# Theme

## Mask Colors

Mask overwrites part of [Mui](https://mui.com/) design. Our designer have provided some colors as a base color scheme. [Here](https://www.figma.com/file/hu471h4qPHMGElU6XQ1TYd/Mask-UI-kit-3?node-id=2344%3A27811) is our color schema.

When using mui's style component, you can access it via `theme.palette.maskColor`. 

### How to use

As mentioned above, you can use `theme.palette.maskColor` to get the color you want.

When you get the figma design from the designer, just click on the layer and in the properties area of the figma you can see the color values and aliases of the layer. 

For example:

![img.png](/img/color-example.png)

As shown in the image above, I have selected a button layer whose background color is `bottom`, so the color we need is `theme.palette.maskColor.bottom`.

If during development you find a color that doesn't exist in `maskColor` but has an alias in the figma design, please contact us.


### Utils

Sometimes we may need to do some manipulation of colors. Fortunately, mui provides some color manipulator. But unfortunately they don't provide [documentation](https://github.com/mui/material-ui/issues/13039).

But there are some common api that we can use, such as `alpha`.

For example: 

``` tsx
import { alpha }  from '@mui/material'

...
backgroundColor: alpha(theme.palette.maskColor.bottom, 0.1) // This background color will be the bottom of a transparency of 0.1
```

If the colorManipulation provided by mui doesn't meet your needs, we also have [tinyColor2](https://github.com/bgrins/TinyColor) built into our `@masknet/theme` package.



## Components

We have overwritten some mui component styles.  You can preview them via [storybook](https://storybook.mask.io/storybook-static/theme/) and [figma](https://www.figma.com/file/hu471h4qPHMGElU6XQ1TYd/Mask-UI-kit-3?node-id=0%3A1).

So when you want to use `Button`, `InputBase`, `CheckBox` etc. you can refer to the storybook to use these components directly. Avoid writing duplicate style code.


## About Compose Class

Mask is currently using [tss-react](https://www.tss-react.dev/). So in addition to classes, [useStyles](https://docs.tss-react.dev/page-1/makestyles-usestyles#usestyles) also exports `css`, `cx`, `theme`.  

We have used `cx` instead of `classnames`. Although they appear to do the same thing, `classnames` just join className string. But the `cx` will generate new className. It can effectively prevent you from having incorrect styles due to [css specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

For example: 

```tsx
const { classes, cx } = useStyles()

// ...

//  `cx` will generate a new className based on the condition
return <div className={cx(classes.a, condition ? classes.b : null )}></div> 
```

Alternatively, you can easily implement class overrides with `useStyles`.

For example:

```tsx

interface YourComponentProps extends withClasses<'root'> {}
    
// ...

const useStyles = makeStyles<{ something: any }>()((theme, { something }) => {
    // ...
})

const YourComponent = ({ props: YourComponentProps }) => {
    const { classes } = useStyles({ something }, { props: { classes: props.classes }})
}

```

As in the example above, if the `classes` in the props contains the root class, it will override the root class defined by the component.

More details on how to use it can be found in the [documentation](https://docs.tss-react.dev/page-1/usemergedclasses)

