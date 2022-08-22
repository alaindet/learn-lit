# Attributes and Properties

## Attribute
- An attribute is some static HTML data attached to an element via the `name="value"` syntax
- An attribute is always considered a string
- It's static
- It can be targeted via CSS selectors

## Property
- A property is intended as a JavaScript instance property (not static) of an Element in the DOM
- Being JavaScript, a property can be of any type
- Most DOM API matches an attribute with a property with exact or almost equal names
- Attributes are lowercase, properties are camelCase
  - Ex.: `value` attribute of &lt;input&gt; has matching `value` property
  - Ex.: `tabindex` attribute has matching `tabIndex` property (note the camel-case)

## Reactive properties and converters
- A **reactive property** of a custom element built with Lit is a property that, when updated, triggers the change detection
- A reactive property can be bound to an attribute via the `@property()` decorator
- Bound attribute can initialize the property value via converters
- Lit has built-in converters based on the `type` field of `@property()` for numbers and booleans, but it needs custom code to convert attribute custom types, like `Date`
- Built-int converters are
  - `String` (default)
  - `Number`
  - `Boolean`
  - `Array`
  - `Object`
- If `@property()` has `reflect: true` set, changes in the property are also shown in the HTML attribute
- A reverse property => attribute converter is used for that

## Resources
- [Custom attribute converters - Lit Tutorial](https://lit.dev/tutorials/custom-attribute-converter/)
- [Attribute (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/attribute)
- [Property (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript)
