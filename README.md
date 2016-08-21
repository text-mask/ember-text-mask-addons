# Ember-text-mask-addons

This Ember-cli addon provides a set of ready-to-use pipes and masks that can be used with [Ember-text-mask](https://github.com/text-mask/text-mask/tree/master/ember#ember-input-mask).


## Installation

```bash
ember install ember-text-mask-addons
```

* Masks
  * `createNumberMask`
  * `emailMask`

* Pipes
  * `autoCorrectedMmddyyyyPipe`

## Usage

### Components

The addon provides Ember components that can be used directly in templates.

```hbs
{{create-number-mask}}
{{email-mask}}
{{auto-corrected-mmddyyyy-pipe}}
```
### Importing the masks and pipes

You can also import the masks or pipes and use them with the `{{masked-input}}` component provided by [Ember-text-mask](https://github.com/text-mask/text-mask/tree/master/ember#ember-input-mask).

For example, to import the `emailMask`:

```js
import { emailMask } from 'ember-text-mask-addons';

// ... do something with the emailMask
```

If you wanted to use the `emailMask` with the `{{masked-input}}` component, you would do this:

```js
import Ember from 'ember';
import { emailMask } from 'ember-text-mask-addons';

export default Ember.Controller.extend({
  emailMask: emailMask
});
```

```hbs
{{masked-input mask=emailMask}}
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
