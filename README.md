[![Build Status](https://travis-ci.org/nino/camelsnake.svg?branch=master)](https://travis-ci.org/nino/camelsnake)

# camelsnake

Convert object keys between camel-case and snake-case.

## Usage

```
import { camelize, snakify } from "camelsnake";

camelize({ key_with_underscores: { nested_object: 123 } });
// => { keyWithUnderscores: { nestedObject: 123 } }

snakify({ camelCaseKey: { nestedObject: 456 } });
// => { camel_case_key: { nested_object: 456 } }
```
