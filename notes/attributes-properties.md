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

## Reactive properties
- Lit has **reactive properties** which are properties initialized by matching attributes
- Converters are functions Lit uses to set a property from an attribute
- Built-in converters take the `type` property of the `@property()` Lit decorator and cast the attribute value to the given type (`Number`, `Boolean`, etc.)
- Custom converters are needed for converting specific attributes into properties

## Resources
- [Custom attribute converters - Lit Tutorial](https://lit.dev/tutorials/custom-attribute-converter/)
- [Attribute (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/attribute)
- [Property (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript)
