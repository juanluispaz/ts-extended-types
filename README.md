
# ts-extended-types

[![npm](https://img.shields.io/npm/v/ts-extended-types.svg)](http://npm.im/ts-extended-types)
[![minified size](https://badgen.net/bundlephobia/min/ts-extended-types)](https://bundlephobia.com/result?p=ts-extended-types)
[![minified & gziped size](https://badgen.net/bundlephobia/minzip/ts-extended-types)](https://bundlephobia.com/result?p=ts-extended-types)

Set of complementary basic types related to the ones provided by TypeScript to make your application even more type-safe

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save ts-extended-types
```

## Basic usage

```ts
import {int, stringInt, double, stringDouble, LocalDate, LocalTime, LocalDateTime } from 'ts-extended-types';

var intNumber: int;
var veryBigInt: stringInt
var doubleNumber: double;
var veryBigDoubleNumber: stringDouble
var localDate: LocalDate;
var localTime: LocalTime;
var localDateTime: LocalDateTime;
```

## Type definitions

- **`int`**: type that represents a integer number. It can be assigned to a number, but it cannot be assigned from a number.
- **`stringInt`**: type that represents a integer number. It can be assigned to a number, but it cannot be assigned from a number: it can be so long that can be represented using a string instead of a number.
- **`double`**: type that represents a floating point number with double precision. It can be assigned to a number, but it cannot be assigned from a number.
- **`stringDouble`**: type that represents a floating point number with double precision; it can be so long that can be represented using a string instead of a number.
- **`LocalDate`**: type that represents a local date without time (without timezone). **Provided methods**:
	- **`getFullYear(): int`**: Gets the year
	- **`getMonth(): int`**: Gets the month (value between 0 to 11)
	- **`getDate(): int`**: Gets the day-of-the-month
	- **`getDay(): int`**: Gets the day of the week (0 represents Sunday)
- **`LocalTime`**: type that represents a local time without date (without timezone). **Provided methods**:
	- **`getHours(): int`**: Gets the hours
	- **`getMinutes(): int`**: Gets the minutes
	- **`getSeconds(): int`**: Gets the seconds
	- **`getMilliseconds(): int`**: Gets the milliseconds
- **`LocalDateTime`**: type that represents a local date with time (without timezone). **Provided methods**: all methods provided by `LocalDate` and `LocalTime` plus:
	- **`getTime(): int`**: Gets the time value in milliseconds

**Note**: 
- In JavaScript `int`or `double` don't exists, all of these values as represented using a `number`.
- In JavaScript `stringInt`or `stringDouble` don't exists, all of these values as represented using a `number` or a `string`.
- In JavaScript `LocalDate`, `LocalTime` or `LocalDateTime` don't exists, all of these values are represented using the `Date` object.

## Provided functions

### Provided int functions

- **`isInt(value: any) => value is int`**: Returns `true` if the value is a `int` number, otherwise returns `false`.
- **`asInt(value: number) => int`**:  Cast the number provided by argument as `int`, throws an error if the provided number is not an integer.
- **`roundToInt(value:  number) =>  int`**: Round the provided number to an integer and then cast it to `int`.
- **`truncateToInt(value: number) => int`**: Truncate the provided number to an integer and then cast it to `int`.
- **`floorToInt(value: number) => int`**: Floor the provided number to an integer and then cast it to `int`.
- **`ceilToInt(value: number) => int`**: Ceil the provided number to an integer and then cast it to `int`.

### Provided stringInt functions

- **`isStringInt(value: any) => value is stringInt`**: Returns `true` if the value is a `stringInt` number, otherwise returns `false`.
- **`asStringInt(value: number|string) => stringInt`**:  Cast the number provided by argument as `stringInt`, throws an error if the provided number is not an integer.
- **`roundToStringInt(value:  number) =>  stringInt`**: Round the provided number to an integer and then cast it to `stringInt`.
- **`truncateToStringInt(value: number) => stringInt`**: Truncate the provided number to an integer and then cast it to `stringInt`.
- **`floorToStringInt(value: number) => stringInt`**: Floor the provided number to an integer and then cast it to `stringInt`.
- **`ceilToStringInt(value: number) => stringInt`**: Ceil the provided number to an integer and then cast it to `stringInt`.

### Provided double functions

- **`isDouble(value: any) => value is double`**: Returns `true` if the value is a `double` precision number, otherwise returns `false`.
- **`asDouble(value: number) => double`**:  Cast the number provided by argument as `double`.

### Provided stringDouble functions

- **`isStringDouble(value: any) => value is stringDouble`**: Returns `true` if the value is a `stringDouble` precision number, otherwise returns `false`.
- **`asStringDouble(value: number|string) => double`**:  Cast the number provided by argument as `stringDouble`, throws an error if the provided number is not a double.

### Provided LocalDate functions

- **`createLocalDate() => LocalDate`**: create a new `LocalDate` with the current date.
- **`createLocalDate(date: Date) => LocalDate`**: create a new `LocalDate` with the same date provided by argument.
- **`createLocalDate(year: number, month: number, date: number) => LocalDate`**:  create a new `LocalDate` with the year, month and date (day of the month) provided by arguments.
- **`isLocalDate(value: any) => value is LocalDate`**: Returns `true` if the value is a `LocalDate`, otherwise returns `false`

### Provided LocalTime functions

- **`createLocalTime() => LocalTime`**: create a new `LocalTime` with the current time.
- **`createLocalTime(date: Date) => LocalTime`**: create a new `LocalTime` with the same time provided by argument.
- **`createLocalTime(hours: number, minutes?: number, seconds?: number, milliseconds?: number) => LocalTime`**:  create a new `LocalTime` with the hours, minutes, seconds and milliseconds provided by arguments.
- **`isLocalTime(value: any) => value is LocalTime`**: Returns `true` if the value is a `LocalTime`, otherwise returns `false`

### Provided LocalDateTime functions

- **`createLocalDateTime() => LocalDateTime`**: create a new `LocalDate` with the current date and time.
- **`createLocalDateTime(date: Date) => LocalDateTime`**: create a new `LocalDateTime` with the same date and time provided by argument.
- **`createLocalDateTime(year: number, month: number, date: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number) => LocalDateTime`**:  create a new `LocalDateTime` with the year, month, date (day of the month), hours, minutes, seconds and milliseconds provided by arguments.
- **`isLocalDate(value: any) => value is LocalDate`**: Returns `true` if the value is a `LocalDate`, otherwise returns `false`

## License

MIT

<!--
Edited with: https://stackedit.io/app
-->