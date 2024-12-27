# sryd-style

## Introduction

A business-level `css-in-js` solution built on the Sry Design V5 Token System. It is based on [emotion](https://emotion.sh/) at the bottom.

- **🧩 Token System**: Default integration of Sry Design V5 Token System, making style customization easy, and token consumption flexible and easy to use;
- **🌓 One-click Dark Mode Switching**: Based on sryd v5 cssinjs dynamic theme configuration and dark theme algorithm encapsulation, it provides an easy-to-use light and dark theme switching capability for application-level scenarios, making it easier to use;
- **🎨 Flexible Custom Theme Extension**: Sry Design Style provides the functionality of custom tokens and custom styles. When the default tokens of sryd cannot meet the style requirements, you can flexibly extend your own theme system and freely consume it in CSS in JS;
- **🏂 Smooth Migration from less**: Need to migrate an old project? Using sryd-style can smoothly migrate less in the project to CSS in JS at a lower cost, and provide a better user experience and development experience;
- **☯️ Good Compatibility with Micro-Apps**: Sry Design Style is compatible with qiankun micro-apps by default (but may sacrifice some performance). At the same time, it provides performance optimization options for scenarios that do not require micro-apps;
- **📱 Easy Adaptation for Responsive Design**: Sry Design Style will provide convenient utility functions for responsive applications, helping developers quickly complete responsive theme development;
- **🪴 Stylish**: Sry Design Style provides the ability to compose complex interactive styles through the combination of multiple atomic tokens, achieving a high degree of reusability;
- **🌰 Documentation and Application Examples**: Show various examples of components and applications using Sry Design Style, helping developers get started quickly. (This document is also built using Sry Design Style for styling)

## Quick Start

### Installation

It is recommended to install using `pnpm`

```bash
pnpm i sryd-style -S
```

### Typical Use Cases

#### Create Styles

```tsx
import { createStyles } from 'sryd-style';

const useStyles = createStyles(({ token, css }) => ({
  // Supports the writing style of css object
  container: {
    backgroundColor: token.colorBgLayout,
    borderRadius: token.borderRadiusLG,
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  // Also supports obtaining the same writing experience as normal css through css string templates
  card: css`
    box-shadow: ${token.boxShadow};
    padding: ${token.padding}px;
    border-radius: ${token.borderRadius}px;
    color: ${token.colorTextTertiary};
    background: ${token.colorBgContainer};
    transition: all 100ms ${token.motionEaseInBack};

    margin-bottom: 8px;
    cursor: pointer;

    &:hover {
      color: ${token.colorTextSecondary};
      box-shadow: ${token.boxShadowSecondary};
    }
  `,
}));

export default () => {
  // The styles object in the useStyles method is cached by default, so there is no need to worry about re-rendering issues
  const { styles, cx, theme } = useStyles();

  return (
    // Use cx to organize className
    <div className={cx('a-simple-create-style-demo-classname', styles.container)}>
      <div className={styles.card}>createStyles Demo</div>
      {/* The theme object contains all token and theme information */}
      <div>Current theme mode: {theme.appearance}</div>
    </div>
  );
};
```
