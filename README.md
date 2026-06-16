# @sixfold/iso-container-validation

Validates ISO 6346 ocean container numbers (owner code, equipment category, serial number, check digit).

Used by `integrations-service` and `sixfold-tour-status-service` as a single source of truth for container validation.

### Installation

```bash
yarn add @sixfold/iso-container-validation
```

### Usage

```ts
import { isValidContainerNumber } from '@sixfold/iso-container-validation';

isValidContainerNumber('CSQU3054383'); // true
isValidContainerNumber('TRHU6818219'); // false (invalid check digit)
```
