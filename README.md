# Ember-text-mask-addons

This Ember-cli addon provides a set of ready-to-use pipes and masks that can be used with Ember-text-mask.


## Getting started

First, install it.

```bash
ember install ember-text-mask-addons
```

Then, use it as follows:

Add the following markup to your template to render a masked input component.

```hbs
{{masked-input mask=mask}}
```

In the template's controller, specify a `mask`.

```js
import Ember from 'ember';

export default Ember.Controller.extend({

  mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

});
```

## Documentation

See [Text Mask Addons](https://github.com/text-mask/text-mask/blob/master/addons/README.md#text-mask-addons) for more information and usage instructions.

For more information about the attributes that the `masked-input` component accepts, see the [documentation here](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme).

## Example

To see an example of the code running, follow these steps:

* Clone the repo, `git clone git@github.com:text-mask/ember-text-mask-addons.git`
* `cd ember-text-mask-addons`
* `npm install`
* `bower install`
* `ember server`
* Open [http://localhost:4200](http://localhost:4200)

## License

Public domain - [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
