## Composition

- Whenever possible, **components composition** aka "using components inside components" is the best way to go
- Two other patterns for managing complex and/or common code are **reactive controllers** and **mixins**
- Both become part of the component using them and both can hook into the component's variables, methods and Lit lifecycles in order to extend it
- **BUT** reactive controllers are just encapsulated objects providing some common feature, while mixins are part of the inheritance chain of the component, since the component *extends* the mixin
- **Reactive controllers** are encapsulated objects hooking into a Lit component, similar to React Hooks
- Reactive controllers have 4 unique lifecycle methods that are run before the component's equivalent lifecycles
  - `hostConnected` is equivalent to `connectedCallback`
  - `hostDisconnected` is equivalent to `disconnectedCallback`
  - `hostUpdate` is equivalent to `update`
  - `hostUpdated` is equivalent to `firstUpdated` and `updated`
- **Mixins** are base classes from which Lit components extend in order to gain the mixin's features
- Mixins should only be used on rare occasions when their API should be public or you need control over lifecycles
- Reactive controllers are the default *best solution* for reusable code, after component composition

## Resources
https://lit.dev/docs/composition/overview/
