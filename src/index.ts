/**
 * Type that represents a floating point number with double precision. It can be assigned to a number, but it cannot be assigned from a number.
 */
export type double = number & {
    ___double___: never
}

/**
 * Returns `true` if the value is a `double` number, otherwise returns `false`
 * 
 * @param value Value to verify if it is a `double`
 */
export function isDouble(value: any): value is double {
    return typeof value === 'number'
}

/**
 * Cast the number provided by argument as `double`
 * 
 * @param value Number to be casted to `double`
 */
export function asDouble(value: number): double {
    return value as any
}

/**
 * Type that represents a floating point number with double precision; it can be so long that can be represented using a string instead of a number
 */
export type stringDouble = double | (string & {
    ___stringDouble___: never
})


/**
 * Returns `true` if the value is a `stringDouble` number, otherwise returns `false`
 * 
 * @param value Value to verify if it is a `stringDouble`
 */
export function isStringDouble(value: any): value is stringDouble {
    return typeof value === 'number' || (typeof value === 'string' && /^-?\d+(\.\d+)?$/g.test(value))
}

/**
 * Cast the number provided by argument as `stringDouble`, throws an error if the provided number is not a double
 * 
 * @param value Number to be casted to `stringDouble`
 */
export function asStringDouble(value: number | string): stringDouble {
    if (isStringDouble(value)) {
        return value
    } else {
        throw new Error('Invalid stringDouble number: ' + value)
    }
}

/**
 * Type that represents a integer number. It can be assigned to a number, but it cannot be assigned from a number.
 */
export type int = number & {
    ___int___: never,
}

/**
 * Returns `true` if the value is a `int` number, otherwise returns `false`
 * 
 * @param value Value to verify if it is a `int`
 */
export function isInt(value: any): value is int {
    return Number.isInteger(value)
}

/**
 * Cast the number provided by argument as `int`, throws an error if the provided number is not an integer
 * 
 * @param value Number to be casted to `int`
 */
export function asInt(value: number): int {
    if (Number.isInteger(value)) {
        return value as any
    } else {
        throw new Error('Invalid int number: ' + value)
    }
}

/**
 * Round the provided number to an integer and then cast it to `int`
 * 
 * @param value Number to be rounded and casted to `int`
 */
export function roundToInt(value: number): int {
    return Math.round(value) as int
}

/**
 * Truncate the provided number to an integer and then cast it to `int`
 * 
 * @param value Number to be truncated and casted to `int`
 */
export function truncateToInt(value: number): int {
    return Math.trunc(value) as int
}

/**
 * Floor the provided number to an integer and then cast it to `int`
 * 
 * @param value Number to be floored and casted to `int`
 */
export function floorToInt(value: number): int {
    return Math.floor(value) as int
}

/**
 * Ceil the provided number to an integer and then cast it to `int`
 * 
 * @param value Number to be ceiled and casted to `int`
 */
export function ceilToInt(value: number): int {
    return Math.ceil(value) as int
}

/**
 * Yype that represents a integer number. It can be assigned to a number, but it cannot be assigned from a number: it can be so long that can be represented using a string instead of a number
 */
export type stringInt = int | (string & {
    ___stringInt___: never,
})

/**
 * Returns `true` if the value is a `stringInt` number, otherwise returns `false`
 * 
 * @param value Value to verify if it is a `stringInt`
 */
export function isStringInt(value: any): value is stringInt {
    return Number.isInteger(value) || (typeof value === 'string' && /^-?\d+$/g.test(value))
}

/**
 * Cast the number provided by argument as `stringInt`, throws an error if the provided number is not an integer
 * 
 * @param value Number to be casted to `stringInt`
 */
export function asStringInt(value: number|string): stringInt {
    if (isStringInt(value)) {
        return value
    } else {
        throw new Error('Invalid stringInt number: ' + value)
    }
}

/**
 * Round the provided number to an integer and then cast it to `stringInt`
 * 
 * @param value Number to be rounded and casted to `stringInt`
 */
export function roundToStringInt(value: number): stringInt {
    return Math.round(value) as stringInt
}

/**
 * Truncate the provided number to an integer and then cast it to `stringInt`
 * 
 * @param value Number to be truncated and casted to `stringInt`
 */
export function truncateToStringInt(value: number): stringInt {
    return Math.trunc(value) as stringInt
}

/**
 * Floor the provided number to an integer and then cast it to `stringInt`
 * 
 * @param value Number to be floored and casted to `stringInt`
 */
export function floorToStringInt(value: number): stringInt {
    return Math.floor(value) as stringInt
}

/**
 * Ceil the provided number to an integer and then cast it to `stringInt`
 * 
 * @param value Number to be ceiled and casted to `stringInt`
 */
export function ceilToStringInt(value: number): stringInt {
    return Math.ceil(value) as stringInt
}

/**
 * type that represents a local date with time (without timezone)
 */
export interface LocalDateTime {
    ___type___: 'LocalDateTime'
    /** Gets the year */
    getFullYear(): int
    /** Gets the month (value between 0 to 11) */
    getMonth(): int
    /** Gets the day-of-the-month */
    getDate(): int
    /** Gets the day of the week (0 represents Sunday) */
    getDay(): int
    /** Gets the hours */
    getHours(): int
    /** Gets the minutes */
    getMinutes(): int
    /** Gets the seconds */
    getSeconds(): int
    /** Gets the milliseconds */
    getMilliseconds(): int
    /** Gets the time value in milliseconds */
    getTime(): int
}

/**
 * Create a new `LocalDateTime`
 */
export function createLocalDateTime(): LocalDateTime
export function createLocalDateTime(date: Date): LocalDateTime
export function createLocalDateTime(year: number, month: number, date: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): LocalDateTime 
export function createLocalDateTime(year?: number | Date, month: number = 0, date: number = 1, hours: number = 0, minutes: number = 0, seconds: number = 0, milliseconds: number = 0): LocalDateTime {
    let result: Date
    if (year === null || year === undefined) {
        result = new Date()
    } else if (year instanceof Date) {
        if ((year as any).___type___ === 'LocalDateTime') {
            result = year
        } else {
            result = new Date(year.getTime())
        }
    } else {
        result = new Date(year, month, date, hours, minutes, seconds, milliseconds)
    }
    if (isNaN(result.getTime())) {
        throw new Error('Ivalid LocalDateTime')
    }
    (result as any).___type___ = 'LocalDateTime'
    return result as any
}

/**
 * Returns `true` if the value is a `LocalDateTime`, otherwise returns `false`
 * 
 * @param value Value to verify if it is a `LocalDateTime`
 */
export function isLocalDateTime(value: any): value is LocalDateTime {
    return value instanceof Date && (value as any).___type___ === 'LocalDateTime'
}

/**
 * Type that represents a local date without time (without timezone)
 */
export interface LocalDate {
    ___type___: 'LocalDate'
    /** Gets the year */
    getFullYear(): int
    /** Gets the month (value between 0 to 11) */
    getMonth(): int
    /** Gets the day-of-the-month */
    getDate(): int
    /** Gets the day of the week (0 represents Sunday) */
    getDay(): int
}

/**
 * Create a new `LocalDate`
 */
export function createLocalDate(): LocalDate
export function createLocalDate(date: Date): LocalDate
export function createLocalDate(year: number, month: number, date: number): LocalDate 
export function createLocalDate(year?: number | Date, month: number = 0, date: number = 1): LocalDate {
    let result: Date
    if (year === null || year === undefined) {
        result = new Date()
        // This time fix works in almost every timezone (from -10 to +13, but not +14, -11, -12, almost uninhabited)
        result = new Date(Date.UTC(result.getFullYear(), result.getMonth(), result.getDate()))
        result.setUTCMinutes(600)
    } else if (year instanceof Date) {
        if ((year as any).___type___ === 'LocalDate') {
            result = year
        } else {
            // This time fix works in almost every timezone (from -10 to +13, but not +14, -11, -12, almost uninhabited)
            result = new Date(Date.UTC(year.getFullYear(), year.getMonth(), year.getDate()))
            result.setUTCMinutes(600)
        }
    } else {
        // This solution can create problems with diferents timezones
        //result = new Date(year, month, day, 0, 0, 0, 0)

        // This time fix works in almost every timezone (from -10 to +13, but not +14, -11, -12, almost uninhabited)
        result = new Date(Date.UTC(year, month, date))
        result.setUTCMinutes(600)
    }
    if (isNaN(result.getTime())) {
        throw new Error('Ivalid LocalDate')
    }
    (result as any).___type___ = 'LocalDate'
    return result as any
}


/**
 * Returns `true` if the value is a `LocalDate`, otherwise returns `false`
 * 
 * @param value Value to verify if it is a `LocalDate`
 */
export function isLocalDate(value: any): value is LocalDate {
    return value instanceof Date && (value as any).___type___ === 'LocalDate'
}

/**
 * Type that represents a local time without date (without timezone)
 */
export interface LocalTime {
    ___type___: 'LocalTime'
    /** Gets the hours */
    getHours(): int
    /** Gets the minutes */
    getMinutes(): int
    /** Gets the seconds */
    getSeconds(): int
    /** Gets the milliseconds */
    getMilliseconds(): int
}

/**
 * Create a new `LocalTime`
 */
export function createLocalTime(): LocalTime
export function createLocalTime(date: Date): LocalTime
export function createLocalTime(hours: number, minutes?: number, seconds?: number, milliseconds?: number): LocalTime
export function createLocalTime(hours?: number | Date, minutes: number = 0, seconds: number = 0, milliseconds: number = 0): LocalTime {
    let result: Date
    if (hours === null || hours === undefined) {
        result = new Date()
    } else if (hours instanceof Date) {
        if ((hours as any).___type___ === 'LocalTime') {
            result = hours
        } else {
            result = new Date(1970, 0, 1, hours.getHours(), hours.getMinutes(), hours.getSeconds(), hours.getMilliseconds())
        }
    } else {
        result = new Date(1970, 0, 1, hours, minutes, seconds, milliseconds)
    }
    if (isNaN(result.getTime())) {
        throw new Error('Ivalid LocalTime')
    }
    (result as any).___type___ = 'LocalTime'
    return result as any
}

/**
 * Returns `true` if the value is a `LocalTime`, otherwise returns `false`
 * 
 * @param value Value to verify if it is a `LocalTime`
 */
export function isLocalTime(value: any): value is LocalTime {
    return value instanceof Date && (value as any).___type___ === 'LocalTime'
}

/**
 * Type that represents an uuid string. It can be assigned to a string, but it cannot be assigned from a string.
 */
export type uuid = string & {
    ___uuid___: never
}

const uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;

/**
 * Returns `true` if the value is a `uuid` string, otherwise returns `false`
 * 
 * @param value Value to verify if it is a `uuid`
 */
export function isUuid(value: any): value is uuid {
    return typeof value === 'string' && uuidRegex.test(value)
}

/**
 * Cast the string provided by argument as `uuid`, throws an error if the provided string is not a uuid
 * 
 * @param value String to be casted to `uuid`
 */
export function asUuid(value: string): uuid {
    if (isUuid(value)) {
        return value
    } else {
        throw new Error('Invalid uuid: ' + value)
    }
}
