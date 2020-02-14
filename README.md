# devextreme-react-template

The DevExtreme React Template allows you to create an application with several views and a hierarchical menu (see the [live preview](https://devexpress.github.io/devextreme-react-template)).

![DevExtreme-React-Template](https://user-images.githubusercontent.com/2280467/74529812-a8af1c80-4f39-11ea-96fb-efd94d19dbab.png)

You can use [DevExtreme CLI](https://github.com/DevExpress/devextreme-cli) commands to modify, add, and delete views, configure the menu, and change themes.

The DevExtreme React Template is based on [DevExtreme React components](https://github.com/devexpress/devextreme-react) and generated with [Create React App](https://github.com/facebook/create-react-app).

* [Getting started](#getting-started)
* [Switch the Layout](#switch-layout)
* [Add a View](#add-view)
* [Configure Navigation Items](#configure-nav-items)
* [Customize Application Appearance](#customize-application-appearance)
  * [Change Theme](#change-theme)
  * [Create a Custom Theme](#create-custom-theme)
  * [Apply the Additional Theme to a Custom Element](#apply-additional-theme-to-custom-element)
  * [Apply Theme Variables to Custom Elements](#apply-theme-variables)
* [License](#license)

## <a name="getting-started"></a>Getting Started

Use the DevExtreme CLI's `new react-app` command to create a DevExtreme React application that includes several sample views and a navigation menu:

```bash
npx devextreme-cli new react-app app-name
cd app-name
npm run start
```

The application includes a side navigation menu and an outer toolbar.

![Outer Toolbar Layout](https://user-images.githubusercontent.com/2280467/55953873-f564ff80-5c65-11e9-9529-df0b0459a6f1.png)

You can set the `--layout` option to `side-nav-inner-toolbar` to use the layout with an inner toolbar.

```bash
npx devextreme-cli new react-app app-name --layout=side-nav-inner-toolbar
```

![Inner Toolbar Layout](https://user-images.githubusercontent.com/2280467/55953912-09106600-5c66-11e9-96fa-9ea68a9c031e.png)

Use the `--empty` flag to generate an application without views and navigation items.

```bash
npx devextreme-cli new react-app app-name --empty
```

You can also clone the current repository to configure the DevExtreme React Template.

```bash
git clone https://github.com/DevExpress/devextreme-react-template/
cd devextreme-react-template
npm install
npm run start
```

## <a name="switch-layout"></a>Switch the Layout

You can change the layout in an existing application. For this, substitute the `SideNavOuterToolbar` import with `SideNavInnerToolbar` in the *src/App.js* file.

```javascript
import {
  SideNavInnerToolbar as SideNavBarLayout,
  SingleCard
} from './layouts';
```

## <a name="add-view"></a>Add a View

Use the following command to add a view to a DevExtreme React application based on the current template:

```bash
npx devextreme add view view-name [--icon=IconName]
```

You can choose the icon name from the [icon library](https://js.devexpress.com/Documentation/Guide/Themes/Icon_Library/).

The `add view` command also creates a root navigation item for the view.

Refer to the [Widget Gallery](https://js.devexpress.com/Demos/WidgetsGallery/) for examples of using DevExtreme widgets in React.

## <a name="configure-nav-items"></a>Configure Navigation Items

Use the *src\app-navigation.js* file to configure navigation items. Each configuration item can have the following fields:

- **text** - an item text
- **icon** - an item icon
- **path** - a navigation path associated with an item
- **items** - child items

```javascript
{
    text: 'Category',
    icon: 'folder',
    items: [{
        text: 'About',
        path: '/about'
    }]
}
```

## <a name="customize-application-appearance"></a>Customize Application Appearance

### <a name="change-theme"></a>Change Theme

The DevExtreme React Template uses different themes for its content and menu. Pass the theme's name to the base-theme option in the *metadata.base.json* and *metadata.additional.json* files in the *src\themes* folder to modify the content and menu themes. See [Predefined Themes](https://js.devexpress.com/Documentation/Guide/Themes/Predefined_Themes/) for more information.

```javascript
{
    // ...,
    "baseTheme": "material.blue.light",
    // ...
}
```

Run `npm run build-themes` to rebuild themes.

### <a name="create-custom-theme"></a>Create a Custom Theme

You can use the DevExtreme ThemeBuilder to create a custom theme based on predefined themes. For this, import *src\themes\metadata.base.json* or *src\themes\metadata.additional.json* into the [ThemeBuilder](https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/ThemeBuilder/), modify the theme, and export the result to the initial file.

Run `npm run build` to rebuild themes.

### <a name="apply-additional-theme-to-custom-element"></a>Apply the Additional Theme to a Custom Element

Add the `dx-swatch-additional` class to a DOM node to apply the additional (menu) theme to this node.

```html
<div className={'dx-swatch-additional'}>
    <!-- Your content here -->
</div>
```

### <a name="apply-theme-variables"></a>Apply Theme Variables to Custom Elements

You can apply the SCSS variables defined in *variables.base.scss* and *variables.additional.scss* to custom elements.

```scss
// Your scss file
@import "../../../themes/generated/variables.base.scss";

.my-element {
    background-color: $base-accent;
}
```

## <a name="license"></a>License

Familiarize yourself with the
[DevExtreme License](https://js.devexpress.com/Licensing/).
[Free trial is available!](http://js.devexpress.com/Buy/)

**DevExtreme React Template is released as a MIT-licensed (free and open-source) add-on to DevExtreme.**
