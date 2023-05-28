@startuml
class Mock {
  +mock(template: any, options?: MockOptions): any
  +setup(options: MockSetupOptions): void
  +version: string
}

class Random {
  +extend(obj: object): void
  +bool(min?: number, max?: number, current?: boolean): boolean
  +natural(min?: number, max?: number): number
  +integer(min?: number, max?: number): number
  +float(min?: number, max?: number, dmin?: number, dmax?: number): number
  +character(pool?: string): string
  +string(pool?: string, min?: number, max?: number): string
  +range(start: number, stop: number, step?: number): number[]
  +date(format?: string): Date
  +time(format?: string): string
  +datetime(format?: string): Date
  +now(unit?: string, format?: string): any
  +guid(): string
  +id(): string
  +increment(step?: number): number
  +shuffle(arr: any[]): any[]
  +pick(arr: any[], min?: number, max?: number): any
  +mixins: object
}

class Handler {
  +gen(template: any, name?: string | number, context?: Partial<GenerateContext>): any
  +array(options: GenerateOptions): any[]
}

class Utils {
  +type(obj: any): string
  +each(obj: any, iterator: Function, context?: any): void
  +extend(target: object, ...sources: object[]): object
  +isArray(obj: any): boolean
  +isObject(obj: any): boolean
  +isPlainObject(obj: any): boolean
  +isString(obj: any): boolean
  +isNumber(obj: any): boolean
  +isBoolean(obj: any): boolean
  +isFunction(obj: any): boolean
  +isRegExp(obj: any): boolean
  +isDate(obj: any): boolean
  +isUndefined(obj: any): boolean
  +isNull(obj: any): boolean
  +isNaN(obj: any): boolean
  +keys(obj: any): string[]
  +values(obj: any): any[]
  +entries(obj: any): [string, any][]
  +clone(obj: any): any
  +merge(target: object, ...sources: object[]): object
  +parsePath(path: string): string[]
  +getProperty(obj: any, path: string): any
  +setProperty(obj: any, path: string, value: any): void
  +parseQueryString(queryString: string): object
  +toQueryString(obj: object): string
  +toPathString(path: string[]): string
  +toObject(keys: string[], values: any[]): object
  +toCamelCase(str: string): string
  +toUnderScoreCase(str: string): string
  +toUpperFirst(str: string): string
  +toLowerFirst(str: string): string
  +capitalize(str: string): string
  +escapeRegExp(str: string): string
  +unescapeRegExp(str: string): string
  +toUnicode(str: string): string
  +toHex(str: string): string
  +toBase64(str: string): string
  +toBase64Url(str: string): string
  +toMd5(str: string): string
  +toSha1(str: string): string
  +toSha256(str: string): string
  +toUuid(): string
  +toTemplate(str: string, data: object, options?: TemplateOptions): string
}

class Constant {
  +RE_KEY: RegExp
  +RE_RANGE: RegExp
  +RE_PLACEHOLDER: RegExp
  +GUID: number
}

class Parse {
  +parseName(name: string): string
  +parseRange(range: string): [number, number] | null
  +parseParameters(parameters: string): string[] | null
  +parseRule(rule: string): Rule | null
}

class RandomExtend {
  +extend(obj: object): void
}

class RandomBasic {
  +bool(min?: number, max?: number, current?: boolean): boolean
  +natural(min?: number, max?: number): number
  +integer(min?: number, max?: number): number
  +float(min?: number, max?: number, dmin?: number, dmax?: number): number
  +character(pool?: string): string
  +string(pool?: string, min?: number, max?: number): string
  +range(start: number, stop: number, step?: number): number[]
}

class RandomDate {
  +date(format?: string): Date
  +time(format?: string): string
  +datetime(format?: string): Date
  +now(unit?: string, format?: string): any
}

class RandomMisc {
+guid(): string
+id(): string
+increment(step?: number): number
+shuffle(arr: any[]): any[]
+pick(arr: any[], min?: number, max?: number): any
}

class GenerateContext {
+path: string[]
+templatePath: string[]
+currentContext: any
+templateCurrentContext: any
+root: any
+templateRoot: any
}

class GenerateOptions {
+template: any
+rule: Rule
+name?: string | number
+context: Partial<GenerateContext>
}

class MockOptions {
+random?: boolean
+delay?: number | string
}

class MockSetupOptions {
+timeout?: number
}

class Rule {
+parameters: string[] | null
+min: number | null
+max: number | null
+count: number | null
}

class TemplateOptions {
+escape?: boolean
+evaluate?: boolean
+interpolate?: boolean
+variable?: string
}

Mock --> Handler
Mock --> Random
Mock --> Utils
Mock --> Constant
Handler --> Utils
Handler --> Random
Handler --> GenerateContext
Handler --> GenerateOptions
Random --> RandomExtend
Random --> RandomBasic
Random --> RandomDate
Random --> RandomMisc
GenerateOptions --> Rule
GenerateContext --> GenerateContext
RandomExtend --> Random
RandomBasic --> Random
RandomDate --> Random
RandomMisc --> Random
Rule --> Parse
Parse --> Constant
TemplateOptions --> Utils
@enduml