
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Baseline
 * 
 */
export type Baseline = $Result.DefaultSelection<Prisma.$BaselinePayload>
/**
 * Model Lifestyle
 * 
 */
export type Lifestyle = $Result.DefaultSelection<Prisma.$LifestylePayload>
/**
 * Model Medical
 * 
 */
export type Medical = $Result.DefaultSelection<Prisma.$MedicalPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Baselines
 * const baselines = await prisma.baseline.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Baselines
   * const baselines = await prisma.baseline.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.baseline`: Exposes CRUD operations for the **Baseline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Baselines
    * const baselines = await prisma.baseline.findMany()
    * ```
    */
  get baseline(): Prisma.BaselineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lifestyle`: Exposes CRUD operations for the **Lifestyle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lifestyles
    * const lifestyles = await prisma.lifestyle.findMany()
    * ```
    */
  get lifestyle(): Prisma.LifestyleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medical`: Exposes CRUD operations for the **Medical** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicals
    * const medicals = await prisma.medical.findMany()
    * ```
    */
  get medical(): Prisma.MedicalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Baseline: 'Baseline',
    Lifestyle: 'Lifestyle',
    Medical: 'Medical',
    Assessment: 'Assessment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "baseline" | "lifestyle" | "medical" | "assessment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Baseline: {
        payload: Prisma.$BaselinePayload<ExtArgs>
        fields: Prisma.BaselineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaselineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaselineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>
          }
          findFirst: {
            args: Prisma.BaselineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaselineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>
          }
          findMany: {
            args: Prisma.BaselineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>[]
          }
          create: {
            args: Prisma.BaselineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>
          }
          createMany: {
            args: Prisma.BaselineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaselineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>[]
          }
          delete: {
            args: Prisma.BaselineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>
          }
          update: {
            args: Prisma.BaselineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>
          }
          deleteMany: {
            args: Prisma.BaselineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaselineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaselineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>[]
          }
          upsert: {
            args: Prisma.BaselineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaselinePayload>
          }
          aggregate: {
            args: Prisma.BaselineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaseline>
          }
          groupBy: {
            args: Prisma.BaselineGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaselineGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaselineCountArgs<ExtArgs>
            result: $Utils.Optional<BaselineCountAggregateOutputType> | number
          }
        }
      }
      Lifestyle: {
        payload: Prisma.$LifestylePayload<ExtArgs>
        fields: Prisma.LifestyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LifestyleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LifestyleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          findFirst: {
            args: Prisma.LifestyleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LifestyleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          findMany: {
            args: Prisma.LifestyleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>[]
          }
          create: {
            args: Prisma.LifestyleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          createMany: {
            args: Prisma.LifestyleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LifestyleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>[]
          }
          delete: {
            args: Prisma.LifestyleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          update: {
            args: Prisma.LifestyleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          deleteMany: {
            args: Prisma.LifestyleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LifestyleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LifestyleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>[]
          }
          upsert: {
            args: Prisma.LifestyleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LifestylePayload>
          }
          aggregate: {
            args: Prisma.LifestyleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLifestyle>
          }
          groupBy: {
            args: Prisma.LifestyleGroupByArgs<ExtArgs>
            result: $Utils.Optional<LifestyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.LifestyleCountArgs<ExtArgs>
            result: $Utils.Optional<LifestyleCountAggregateOutputType> | number
          }
        }
      }
      Medical: {
        payload: Prisma.$MedicalPayload<ExtArgs>
        fields: Prisma.MedicalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          findFirst: {
            args: Prisma.MedicalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          findMany: {
            args: Prisma.MedicalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>[]
          }
          create: {
            args: Prisma.MedicalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          createMany: {
            args: Prisma.MedicalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>[]
          }
          delete: {
            args: Prisma.MedicalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          update: {
            args: Prisma.MedicalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          deleteMany: {
            args: Prisma.MedicalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>[]
          }
          upsert: {
            args: Prisma.MedicalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          aggregate: {
            args: Prisma.MedicalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedical>
          }
          groupBy: {
            args: Prisma.MedicalGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    baseline?: BaselineOmit
    lifestyle?: LifestyleOmit
    medical?: MedicalOmit
    assessment?: AssessmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Baseline
   */

  export type AggregateBaseline = {
    _count: BaselineCountAggregateOutputType | null
    _avg: BaselineAvgAggregateOutputType | null
    _sum: BaselineSumAggregateOutputType | null
    _min: BaselineMinAggregateOutputType | null
    _max: BaselineMaxAggregateOutputType | null
  }

  export type BaselineAvgAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type BaselineSumAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type BaselineMinAggregateOutputType = {
    id: string | null
    userId: string | null
    birthdate: Date | null
    height: number | null
    weight: number | null
    smoker: boolean | null
    diabetes: boolean | null
  }

  export type BaselineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    birthdate: Date | null
    height: number | null
    weight: number | null
    smoker: boolean | null
    diabetes: boolean | null
  }

  export type BaselineCountAggregateOutputType = {
    id: number
    userId: number
    birthdate: number
    height: number
    weight: number
    smoker: number
    diabetes: number
    _all: number
  }


  export type BaselineAvgAggregateInputType = {
    height?: true
    weight?: true
  }

  export type BaselineSumAggregateInputType = {
    height?: true
    weight?: true
  }

  export type BaselineMinAggregateInputType = {
    id?: true
    userId?: true
    birthdate?: true
    height?: true
    weight?: true
    smoker?: true
    diabetes?: true
  }

  export type BaselineMaxAggregateInputType = {
    id?: true
    userId?: true
    birthdate?: true
    height?: true
    weight?: true
    smoker?: true
    diabetes?: true
  }

  export type BaselineCountAggregateInputType = {
    id?: true
    userId?: true
    birthdate?: true
    height?: true
    weight?: true
    smoker?: true
    diabetes?: true
    _all?: true
  }

  export type BaselineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Baseline to aggregate.
     */
    where?: BaselineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Baselines to fetch.
     */
    orderBy?: BaselineOrderByWithRelationInput | BaselineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaselineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Baselines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Baselines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Baselines
    **/
    _count?: true | BaselineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BaselineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BaselineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaselineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaselineMaxAggregateInputType
  }

  export type GetBaselineAggregateType<T extends BaselineAggregateArgs> = {
        [P in keyof T & keyof AggregateBaseline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaseline[P]>
      : GetScalarType<T[P], AggregateBaseline[P]>
  }




  export type BaselineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaselineWhereInput
    orderBy?: BaselineOrderByWithAggregationInput | BaselineOrderByWithAggregationInput[]
    by: BaselineScalarFieldEnum[] | BaselineScalarFieldEnum
    having?: BaselineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaselineCountAggregateInputType | true
    _avg?: BaselineAvgAggregateInputType
    _sum?: BaselineSumAggregateInputType
    _min?: BaselineMinAggregateInputType
    _max?: BaselineMaxAggregateInputType
  }

  export type BaselineGroupByOutputType = {
    id: string
    userId: string
    birthdate: Date
    height: number
    weight: number
    smoker: boolean
    diabetes: boolean
    _count: BaselineCountAggregateOutputType | null
    _avg: BaselineAvgAggregateOutputType | null
    _sum: BaselineSumAggregateOutputType | null
    _min: BaselineMinAggregateOutputType | null
    _max: BaselineMaxAggregateOutputType | null
  }

  type GetBaselineGroupByPayload<T extends BaselineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaselineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaselineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaselineGroupByOutputType[P]>
            : GetScalarType<T[P], BaselineGroupByOutputType[P]>
        }
      >
    >


  export type BaselineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birthdate?: boolean
    height?: boolean
    weight?: boolean
    smoker?: boolean
    diabetes?: boolean
  }, ExtArgs["result"]["baseline"]>

  export type BaselineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birthdate?: boolean
    height?: boolean
    weight?: boolean
    smoker?: boolean
    diabetes?: boolean
  }, ExtArgs["result"]["baseline"]>

  export type BaselineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    birthdate?: boolean
    height?: boolean
    weight?: boolean
    smoker?: boolean
    diabetes?: boolean
  }, ExtArgs["result"]["baseline"]>

  export type BaselineSelectScalar = {
    id?: boolean
    userId?: boolean
    birthdate?: boolean
    height?: boolean
    weight?: boolean
    smoker?: boolean
    diabetes?: boolean
  }

  export type BaselineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "birthdate" | "height" | "weight" | "smoker" | "diabetes", ExtArgs["result"]["baseline"]>

  export type $BaselinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Baseline"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      birthdate: Date
      height: number
      weight: number
      smoker: boolean
      diabetes: boolean
    }, ExtArgs["result"]["baseline"]>
    composites: {}
  }

  type BaselineGetPayload<S extends boolean | null | undefined | BaselineDefaultArgs> = $Result.GetResult<Prisma.$BaselinePayload, S>

  type BaselineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaselineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaselineCountAggregateInputType | true
    }

  export interface BaselineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Baseline'], meta: { name: 'Baseline' } }
    /**
     * Find zero or one Baseline that matches the filter.
     * @param {BaselineFindUniqueArgs} args - Arguments to find a Baseline
     * @example
     * // Get one Baseline
     * const baseline = await prisma.baseline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaselineFindUniqueArgs>(args: SelectSubset<T, BaselineFindUniqueArgs<ExtArgs>>): Prisma__BaselineClient<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Baseline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaselineFindUniqueOrThrowArgs} args - Arguments to find a Baseline
     * @example
     * // Get one Baseline
     * const baseline = await prisma.baseline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaselineFindUniqueOrThrowArgs>(args: SelectSubset<T, BaselineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaselineClient<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baseline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaselineFindFirstArgs} args - Arguments to find a Baseline
     * @example
     * // Get one Baseline
     * const baseline = await prisma.baseline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaselineFindFirstArgs>(args?: SelectSubset<T, BaselineFindFirstArgs<ExtArgs>>): Prisma__BaselineClient<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baseline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaselineFindFirstOrThrowArgs} args - Arguments to find a Baseline
     * @example
     * // Get one Baseline
     * const baseline = await prisma.baseline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaselineFindFirstOrThrowArgs>(args?: SelectSubset<T, BaselineFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaselineClient<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Baselines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaselineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Baselines
     * const baselines = await prisma.baseline.findMany()
     * 
     * // Get first 10 Baselines
     * const baselines = await prisma.baseline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baselineWithIdOnly = await prisma.baseline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaselineFindManyArgs>(args?: SelectSubset<T, BaselineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Baseline.
     * @param {BaselineCreateArgs} args - Arguments to create a Baseline.
     * @example
     * // Create one Baseline
     * const Baseline = await prisma.baseline.create({
     *   data: {
     *     // ... data to create a Baseline
     *   }
     * })
     * 
     */
    create<T extends BaselineCreateArgs>(args: SelectSubset<T, BaselineCreateArgs<ExtArgs>>): Prisma__BaselineClient<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Baselines.
     * @param {BaselineCreateManyArgs} args - Arguments to create many Baselines.
     * @example
     * // Create many Baselines
     * const baseline = await prisma.baseline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaselineCreateManyArgs>(args?: SelectSubset<T, BaselineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Baselines and returns the data saved in the database.
     * @param {BaselineCreateManyAndReturnArgs} args - Arguments to create many Baselines.
     * @example
     * // Create many Baselines
     * const baseline = await prisma.baseline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Baselines and only return the `id`
     * const baselineWithIdOnly = await prisma.baseline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaselineCreateManyAndReturnArgs>(args?: SelectSubset<T, BaselineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Baseline.
     * @param {BaselineDeleteArgs} args - Arguments to delete one Baseline.
     * @example
     * // Delete one Baseline
     * const Baseline = await prisma.baseline.delete({
     *   where: {
     *     // ... filter to delete one Baseline
     *   }
     * })
     * 
     */
    delete<T extends BaselineDeleteArgs>(args: SelectSubset<T, BaselineDeleteArgs<ExtArgs>>): Prisma__BaselineClient<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Baseline.
     * @param {BaselineUpdateArgs} args - Arguments to update one Baseline.
     * @example
     * // Update one Baseline
     * const baseline = await prisma.baseline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaselineUpdateArgs>(args: SelectSubset<T, BaselineUpdateArgs<ExtArgs>>): Prisma__BaselineClient<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Baselines.
     * @param {BaselineDeleteManyArgs} args - Arguments to filter Baselines to delete.
     * @example
     * // Delete a few Baselines
     * const { count } = await prisma.baseline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaselineDeleteManyArgs>(args?: SelectSubset<T, BaselineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Baselines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaselineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Baselines
     * const baseline = await prisma.baseline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaselineUpdateManyArgs>(args: SelectSubset<T, BaselineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Baselines and returns the data updated in the database.
     * @param {BaselineUpdateManyAndReturnArgs} args - Arguments to update many Baselines.
     * @example
     * // Update many Baselines
     * const baseline = await prisma.baseline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Baselines and only return the `id`
     * const baselineWithIdOnly = await prisma.baseline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BaselineUpdateManyAndReturnArgs>(args: SelectSubset<T, BaselineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Baseline.
     * @param {BaselineUpsertArgs} args - Arguments to update or create a Baseline.
     * @example
     * // Update or create a Baseline
     * const baseline = await prisma.baseline.upsert({
     *   create: {
     *     // ... data to create a Baseline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Baseline we want to update
     *   }
     * })
     */
    upsert<T extends BaselineUpsertArgs>(args: SelectSubset<T, BaselineUpsertArgs<ExtArgs>>): Prisma__BaselineClient<$Result.GetResult<Prisma.$BaselinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Baselines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaselineCountArgs} args - Arguments to filter Baselines to count.
     * @example
     * // Count the number of Baselines
     * const count = await prisma.baseline.count({
     *   where: {
     *     // ... the filter for the Baselines we want to count
     *   }
     * })
    **/
    count<T extends BaselineCountArgs>(
      args?: Subset<T, BaselineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaselineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Baseline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaselineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaselineAggregateArgs>(args: Subset<T, BaselineAggregateArgs>): Prisma.PrismaPromise<GetBaselineAggregateType<T>>

    /**
     * Group by Baseline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaselineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaselineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaselineGroupByArgs['orderBy'] }
        : { orderBy?: BaselineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaselineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaselineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Baseline model
   */
  readonly fields: BaselineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Baseline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaselineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Baseline model
   */
  interface BaselineFieldRefs {
    readonly id: FieldRef<"Baseline", 'String'>
    readonly userId: FieldRef<"Baseline", 'String'>
    readonly birthdate: FieldRef<"Baseline", 'DateTime'>
    readonly height: FieldRef<"Baseline", 'Float'>
    readonly weight: FieldRef<"Baseline", 'Float'>
    readonly smoker: FieldRef<"Baseline", 'Boolean'>
    readonly diabetes: FieldRef<"Baseline", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Baseline findUnique
   */
  export type BaselineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * Filter, which Baseline to fetch.
     */
    where: BaselineWhereUniqueInput
  }

  /**
   * Baseline findUniqueOrThrow
   */
  export type BaselineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * Filter, which Baseline to fetch.
     */
    where: BaselineWhereUniqueInput
  }

  /**
   * Baseline findFirst
   */
  export type BaselineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * Filter, which Baseline to fetch.
     */
    where?: BaselineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Baselines to fetch.
     */
    orderBy?: BaselineOrderByWithRelationInput | BaselineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Baselines.
     */
    cursor?: BaselineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Baselines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Baselines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Baselines.
     */
    distinct?: BaselineScalarFieldEnum | BaselineScalarFieldEnum[]
  }

  /**
   * Baseline findFirstOrThrow
   */
  export type BaselineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * Filter, which Baseline to fetch.
     */
    where?: BaselineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Baselines to fetch.
     */
    orderBy?: BaselineOrderByWithRelationInput | BaselineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Baselines.
     */
    cursor?: BaselineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Baselines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Baselines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Baselines.
     */
    distinct?: BaselineScalarFieldEnum | BaselineScalarFieldEnum[]
  }

  /**
   * Baseline findMany
   */
  export type BaselineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * Filter, which Baselines to fetch.
     */
    where?: BaselineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Baselines to fetch.
     */
    orderBy?: BaselineOrderByWithRelationInput | BaselineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Baselines.
     */
    cursor?: BaselineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Baselines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Baselines.
     */
    skip?: number
    distinct?: BaselineScalarFieldEnum | BaselineScalarFieldEnum[]
  }

  /**
   * Baseline create
   */
  export type BaselineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * The data needed to create a Baseline.
     */
    data: XOR<BaselineCreateInput, BaselineUncheckedCreateInput>
  }

  /**
   * Baseline createMany
   */
  export type BaselineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Baselines.
     */
    data: BaselineCreateManyInput | BaselineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Baseline createManyAndReturn
   */
  export type BaselineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * The data used to create many Baselines.
     */
    data: BaselineCreateManyInput | BaselineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Baseline update
   */
  export type BaselineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * The data needed to update a Baseline.
     */
    data: XOR<BaselineUpdateInput, BaselineUncheckedUpdateInput>
    /**
     * Choose, which Baseline to update.
     */
    where: BaselineWhereUniqueInput
  }

  /**
   * Baseline updateMany
   */
  export type BaselineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Baselines.
     */
    data: XOR<BaselineUpdateManyMutationInput, BaselineUncheckedUpdateManyInput>
    /**
     * Filter which Baselines to update
     */
    where?: BaselineWhereInput
    /**
     * Limit how many Baselines to update.
     */
    limit?: number
  }

  /**
   * Baseline updateManyAndReturn
   */
  export type BaselineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * The data used to update Baselines.
     */
    data: XOR<BaselineUpdateManyMutationInput, BaselineUncheckedUpdateManyInput>
    /**
     * Filter which Baselines to update
     */
    where?: BaselineWhereInput
    /**
     * Limit how many Baselines to update.
     */
    limit?: number
  }

  /**
   * Baseline upsert
   */
  export type BaselineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * The filter to search for the Baseline to update in case it exists.
     */
    where: BaselineWhereUniqueInput
    /**
     * In case the Baseline found by the `where` argument doesn't exist, create a new Baseline with this data.
     */
    create: XOR<BaselineCreateInput, BaselineUncheckedCreateInput>
    /**
     * In case the Baseline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaselineUpdateInput, BaselineUncheckedUpdateInput>
  }

  /**
   * Baseline delete
   */
  export type BaselineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
    /**
     * Filter which Baseline to delete.
     */
    where: BaselineWhereUniqueInput
  }

  /**
   * Baseline deleteMany
   */
  export type BaselineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Baselines to delete
     */
    where?: BaselineWhereInput
    /**
     * Limit how many Baselines to delete.
     */
    limit?: number
  }

  /**
   * Baseline without action
   */
  export type BaselineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baseline
     */
    select?: BaselineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baseline
     */
    omit?: BaselineOmit<ExtArgs> | null
  }


  /**
   * Model Lifestyle
   */

  export type AggregateLifestyle = {
    _count: LifestyleCountAggregateOutputType | null
    _min: LifestyleMinAggregateOutputType | null
    _max: LifestyleMaxAggregateOutputType | null
  }

  export type LifestyleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    recordedAt: Date | null
  }

  export type LifestyleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    recordedAt: Date | null
  }

  export type LifestyleCountAggregateOutputType = {
    id: number
    userId: number
    recordedAt: number
    data: number
    _all: number
  }


  export type LifestyleMinAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
  }

  export type LifestyleMaxAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
  }

  export type LifestyleCountAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
    data?: true
    _all?: true
  }

  export type LifestyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lifestyle to aggregate.
     */
    where?: LifestyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifestyles to fetch.
     */
    orderBy?: LifestyleOrderByWithRelationInput | LifestyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LifestyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifestyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifestyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lifestyles
    **/
    _count?: true | LifestyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LifestyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LifestyleMaxAggregateInputType
  }

  export type GetLifestyleAggregateType<T extends LifestyleAggregateArgs> = {
        [P in keyof T & keyof AggregateLifestyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLifestyle[P]>
      : GetScalarType<T[P], AggregateLifestyle[P]>
  }




  export type LifestyleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LifestyleWhereInput
    orderBy?: LifestyleOrderByWithAggregationInput | LifestyleOrderByWithAggregationInput[]
    by: LifestyleScalarFieldEnum[] | LifestyleScalarFieldEnum
    having?: LifestyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LifestyleCountAggregateInputType | true
    _min?: LifestyleMinAggregateInputType
    _max?: LifestyleMaxAggregateInputType
  }

  export type LifestyleGroupByOutputType = {
    id: string
    userId: string
    recordedAt: Date
    data: JsonValue
    _count: LifestyleCountAggregateOutputType | null
    _min: LifestyleMinAggregateOutputType | null
    _max: LifestyleMaxAggregateOutputType | null
  }

  type GetLifestyleGroupByPayload<T extends LifestyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LifestyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LifestyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LifestyleGroupByOutputType[P]>
            : GetScalarType<T[P], LifestyleGroupByOutputType[P]>
        }
      >
    >


  export type LifestyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    data?: boolean
  }, ExtArgs["result"]["lifestyle"]>

  export type LifestyleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    data?: boolean
  }, ExtArgs["result"]["lifestyle"]>

  export type LifestyleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    data?: boolean
  }, ExtArgs["result"]["lifestyle"]>

  export type LifestyleSelectScalar = {
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    data?: boolean
  }

  export type LifestyleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "recordedAt" | "data", ExtArgs["result"]["lifestyle"]>

  export type $LifestylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lifestyle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      recordedAt: Date
      data: Prisma.JsonValue
    }, ExtArgs["result"]["lifestyle"]>
    composites: {}
  }

  type LifestyleGetPayload<S extends boolean | null | undefined | LifestyleDefaultArgs> = $Result.GetResult<Prisma.$LifestylePayload, S>

  type LifestyleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LifestyleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LifestyleCountAggregateInputType | true
    }

  export interface LifestyleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lifestyle'], meta: { name: 'Lifestyle' } }
    /**
     * Find zero or one Lifestyle that matches the filter.
     * @param {LifestyleFindUniqueArgs} args - Arguments to find a Lifestyle
     * @example
     * // Get one Lifestyle
     * const lifestyle = await prisma.lifestyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LifestyleFindUniqueArgs>(args: SelectSubset<T, LifestyleFindUniqueArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lifestyle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LifestyleFindUniqueOrThrowArgs} args - Arguments to find a Lifestyle
     * @example
     * // Get one Lifestyle
     * const lifestyle = await prisma.lifestyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LifestyleFindUniqueOrThrowArgs>(args: SelectSubset<T, LifestyleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lifestyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleFindFirstArgs} args - Arguments to find a Lifestyle
     * @example
     * // Get one Lifestyle
     * const lifestyle = await prisma.lifestyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LifestyleFindFirstArgs>(args?: SelectSubset<T, LifestyleFindFirstArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lifestyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleFindFirstOrThrowArgs} args - Arguments to find a Lifestyle
     * @example
     * // Get one Lifestyle
     * const lifestyle = await prisma.lifestyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LifestyleFindFirstOrThrowArgs>(args?: SelectSubset<T, LifestyleFindFirstOrThrowArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lifestyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lifestyles
     * const lifestyles = await prisma.lifestyle.findMany()
     * 
     * // Get first 10 Lifestyles
     * const lifestyles = await prisma.lifestyle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lifestyleWithIdOnly = await prisma.lifestyle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LifestyleFindManyArgs>(args?: SelectSubset<T, LifestyleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lifestyle.
     * @param {LifestyleCreateArgs} args - Arguments to create a Lifestyle.
     * @example
     * // Create one Lifestyle
     * const Lifestyle = await prisma.lifestyle.create({
     *   data: {
     *     // ... data to create a Lifestyle
     *   }
     * })
     * 
     */
    create<T extends LifestyleCreateArgs>(args: SelectSubset<T, LifestyleCreateArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lifestyles.
     * @param {LifestyleCreateManyArgs} args - Arguments to create many Lifestyles.
     * @example
     * // Create many Lifestyles
     * const lifestyle = await prisma.lifestyle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LifestyleCreateManyArgs>(args?: SelectSubset<T, LifestyleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lifestyles and returns the data saved in the database.
     * @param {LifestyleCreateManyAndReturnArgs} args - Arguments to create many Lifestyles.
     * @example
     * // Create many Lifestyles
     * const lifestyle = await prisma.lifestyle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lifestyles and only return the `id`
     * const lifestyleWithIdOnly = await prisma.lifestyle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LifestyleCreateManyAndReturnArgs>(args?: SelectSubset<T, LifestyleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lifestyle.
     * @param {LifestyleDeleteArgs} args - Arguments to delete one Lifestyle.
     * @example
     * // Delete one Lifestyle
     * const Lifestyle = await prisma.lifestyle.delete({
     *   where: {
     *     // ... filter to delete one Lifestyle
     *   }
     * })
     * 
     */
    delete<T extends LifestyleDeleteArgs>(args: SelectSubset<T, LifestyleDeleteArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lifestyle.
     * @param {LifestyleUpdateArgs} args - Arguments to update one Lifestyle.
     * @example
     * // Update one Lifestyle
     * const lifestyle = await prisma.lifestyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LifestyleUpdateArgs>(args: SelectSubset<T, LifestyleUpdateArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lifestyles.
     * @param {LifestyleDeleteManyArgs} args - Arguments to filter Lifestyles to delete.
     * @example
     * // Delete a few Lifestyles
     * const { count } = await prisma.lifestyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LifestyleDeleteManyArgs>(args?: SelectSubset<T, LifestyleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lifestyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lifestyles
     * const lifestyle = await prisma.lifestyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LifestyleUpdateManyArgs>(args: SelectSubset<T, LifestyleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lifestyles and returns the data updated in the database.
     * @param {LifestyleUpdateManyAndReturnArgs} args - Arguments to update many Lifestyles.
     * @example
     * // Update many Lifestyles
     * const lifestyle = await prisma.lifestyle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lifestyles and only return the `id`
     * const lifestyleWithIdOnly = await prisma.lifestyle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LifestyleUpdateManyAndReturnArgs>(args: SelectSubset<T, LifestyleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lifestyle.
     * @param {LifestyleUpsertArgs} args - Arguments to update or create a Lifestyle.
     * @example
     * // Update or create a Lifestyle
     * const lifestyle = await prisma.lifestyle.upsert({
     *   create: {
     *     // ... data to create a Lifestyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lifestyle we want to update
     *   }
     * })
     */
    upsert<T extends LifestyleUpsertArgs>(args: SelectSubset<T, LifestyleUpsertArgs<ExtArgs>>): Prisma__LifestyleClient<$Result.GetResult<Prisma.$LifestylePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lifestyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleCountArgs} args - Arguments to filter Lifestyles to count.
     * @example
     * // Count the number of Lifestyles
     * const count = await prisma.lifestyle.count({
     *   where: {
     *     // ... the filter for the Lifestyles we want to count
     *   }
     * })
    **/
    count<T extends LifestyleCountArgs>(
      args?: Subset<T, LifestyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LifestyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lifestyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LifestyleAggregateArgs>(args: Subset<T, LifestyleAggregateArgs>): Prisma.PrismaPromise<GetLifestyleAggregateType<T>>

    /**
     * Group by Lifestyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LifestyleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LifestyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LifestyleGroupByArgs['orderBy'] }
        : { orderBy?: LifestyleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LifestyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLifestyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lifestyle model
   */
  readonly fields: LifestyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lifestyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LifestyleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lifestyle model
   */
  interface LifestyleFieldRefs {
    readonly id: FieldRef<"Lifestyle", 'String'>
    readonly userId: FieldRef<"Lifestyle", 'String'>
    readonly recordedAt: FieldRef<"Lifestyle", 'DateTime'>
    readonly data: FieldRef<"Lifestyle", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Lifestyle findUnique
   */
  export type LifestyleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Filter, which Lifestyle to fetch.
     */
    where: LifestyleWhereUniqueInput
  }

  /**
   * Lifestyle findUniqueOrThrow
   */
  export type LifestyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Filter, which Lifestyle to fetch.
     */
    where: LifestyleWhereUniqueInput
  }

  /**
   * Lifestyle findFirst
   */
  export type LifestyleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Filter, which Lifestyle to fetch.
     */
    where?: LifestyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifestyles to fetch.
     */
    orderBy?: LifestyleOrderByWithRelationInput | LifestyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lifestyles.
     */
    cursor?: LifestyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifestyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifestyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lifestyles.
     */
    distinct?: LifestyleScalarFieldEnum | LifestyleScalarFieldEnum[]
  }

  /**
   * Lifestyle findFirstOrThrow
   */
  export type LifestyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Filter, which Lifestyle to fetch.
     */
    where?: LifestyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifestyles to fetch.
     */
    orderBy?: LifestyleOrderByWithRelationInput | LifestyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lifestyles.
     */
    cursor?: LifestyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifestyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifestyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lifestyles.
     */
    distinct?: LifestyleScalarFieldEnum | LifestyleScalarFieldEnum[]
  }

  /**
   * Lifestyle findMany
   */
  export type LifestyleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Filter, which Lifestyles to fetch.
     */
    where?: LifestyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifestyles to fetch.
     */
    orderBy?: LifestyleOrderByWithRelationInput | LifestyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lifestyles.
     */
    cursor?: LifestyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifestyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifestyles.
     */
    skip?: number
    distinct?: LifestyleScalarFieldEnum | LifestyleScalarFieldEnum[]
  }

  /**
   * Lifestyle create
   */
  export type LifestyleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * The data needed to create a Lifestyle.
     */
    data: XOR<LifestyleCreateInput, LifestyleUncheckedCreateInput>
  }

  /**
   * Lifestyle createMany
   */
  export type LifestyleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lifestyles.
     */
    data: LifestyleCreateManyInput | LifestyleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lifestyle createManyAndReturn
   */
  export type LifestyleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * The data used to create many Lifestyles.
     */
    data: LifestyleCreateManyInput | LifestyleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lifestyle update
   */
  export type LifestyleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * The data needed to update a Lifestyle.
     */
    data: XOR<LifestyleUpdateInput, LifestyleUncheckedUpdateInput>
    /**
     * Choose, which Lifestyle to update.
     */
    where: LifestyleWhereUniqueInput
  }

  /**
   * Lifestyle updateMany
   */
  export type LifestyleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lifestyles.
     */
    data: XOR<LifestyleUpdateManyMutationInput, LifestyleUncheckedUpdateManyInput>
    /**
     * Filter which Lifestyles to update
     */
    where?: LifestyleWhereInput
    /**
     * Limit how many Lifestyles to update.
     */
    limit?: number
  }

  /**
   * Lifestyle updateManyAndReturn
   */
  export type LifestyleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * The data used to update Lifestyles.
     */
    data: XOR<LifestyleUpdateManyMutationInput, LifestyleUncheckedUpdateManyInput>
    /**
     * Filter which Lifestyles to update
     */
    where?: LifestyleWhereInput
    /**
     * Limit how many Lifestyles to update.
     */
    limit?: number
  }

  /**
   * Lifestyle upsert
   */
  export type LifestyleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * The filter to search for the Lifestyle to update in case it exists.
     */
    where: LifestyleWhereUniqueInput
    /**
     * In case the Lifestyle found by the `where` argument doesn't exist, create a new Lifestyle with this data.
     */
    create: XOR<LifestyleCreateInput, LifestyleUncheckedCreateInput>
    /**
     * In case the Lifestyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LifestyleUpdateInput, LifestyleUncheckedUpdateInput>
  }

  /**
   * Lifestyle delete
   */
  export type LifestyleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
    /**
     * Filter which Lifestyle to delete.
     */
    where: LifestyleWhereUniqueInput
  }

  /**
   * Lifestyle deleteMany
   */
  export type LifestyleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lifestyles to delete
     */
    where?: LifestyleWhereInput
    /**
     * Limit how many Lifestyles to delete.
     */
    limit?: number
  }

  /**
   * Lifestyle without action
   */
  export type LifestyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifestyle
     */
    select?: LifestyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lifestyle
     */
    omit?: LifestyleOmit<ExtArgs> | null
  }


  /**
   * Model Medical
   */

  export type AggregateMedical = {
    _count: MedicalCountAggregateOutputType | null
    _min: MedicalMinAggregateOutputType | null
    _max: MedicalMaxAggregateOutputType | null
  }

  export type MedicalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    recordedAt: Date | null
  }

  export type MedicalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    recordedAt: Date | null
  }

  export type MedicalCountAggregateOutputType = {
    id: number
    userId: number
    recordedAt: number
    data: number
    _all: number
  }


  export type MedicalMinAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
  }

  export type MedicalMaxAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
  }

  export type MedicalCountAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
    data?: true
    _all?: true
  }

  export type MedicalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medical to aggregate.
     */
    where?: MedicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicals to fetch.
     */
    orderBy?: MedicalOrderByWithRelationInput | MedicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicals
    **/
    _count?: true | MedicalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalMaxAggregateInputType
  }

  export type GetMedicalAggregateType<T extends MedicalAggregateArgs> = {
        [P in keyof T & keyof AggregateMedical]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedical[P]>
      : GetScalarType<T[P], AggregateMedical[P]>
  }




  export type MedicalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalWhereInput
    orderBy?: MedicalOrderByWithAggregationInput | MedicalOrderByWithAggregationInput[]
    by: MedicalScalarFieldEnum[] | MedicalScalarFieldEnum
    having?: MedicalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalCountAggregateInputType | true
    _min?: MedicalMinAggregateInputType
    _max?: MedicalMaxAggregateInputType
  }

  export type MedicalGroupByOutputType = {
    id: string
    userId: string
    recordedAt: Date
    data: JsonValue
    _count: MedicalCountAggregateOutputType | null
    _min: MedicalMinAggregateOutputType | null
    _max: MedicalMaxAggregateOutputType | null
  }

  type GetMedicalGroupByPayload<T extends MedicalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalGroupByOutputType[P]>
        }
      >
    >


  export type MedicalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    data?: boolean
  }, ExtArgs["result"]["medical"]>

  export type MedicalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    data?: boolean
  }, ExtArgs["result"]["medical"]>

  export type MedicalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    data?: boolean
  }, ExtArgs["result"]["medical"]>

  export type MedicalSelectScalar = {
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    data?: boolean
  }

  export type MedicalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "recordedAt" | "data", ExtArgs["result"]["medical"]>

  export type $MedicalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medical"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      recordedAt: Date
      data: Prisma.JsonValue
    }, ExtArgs["result"]["medical"]>
    composites: {}
  }

  type MedicalGetPayload<S extends boolean | null | undefined | MedicalDefaultArgs> = $Result.GetResult<Prisma.$MedicalPayload, S>

  type MedicalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalCountAggregateInputType | true
    }

  export interface MedicalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medical'], meta: { name: 'Medical' } }
    /**
     * Find zero or one Medical that matches the filter.
     * @param {MedicalFindUniqueArgs} args - Arguments to find a Medical
     * @example
     * // Get one Medical
     * const medical = await prisma.medical.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalFindUniqueArgs>(args: SelectSubset<T, MedicalFindUniqueArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medical that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalFindUniqueOrThrowArgs} args - Arguments to find a Medical
     * @example
     * // Get one Medical
     * const medical = await prisma.medical.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medical that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalFindFirstArgs} args - Arguments to find a Medical
     * @example
     * // Get one Medical
     * const medical = await prisma.medical.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalFindFirstArgs>(args?: SelectSubset<T, MedicalFindFirstArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medical that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalFindFirstOrThrowArgs} args - Arguments to find a Medical
     * @example
     * // Get one Medical
     * const medical = await prisma.medical.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicals
     * const medicals = await prisma.medical.findMany()
     * 
     * // Get first 10 Medicals
     * const medicals = await prisma.medical.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalWithIdOnly = await prisma.medical.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalFindManyArgs>(args?: SelectSubset<T, MedicalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medical.
     * @param {MedicalCreateArgs} args - Arguments to create a Medical.
     * @example
     * // Create one Medical
     * const Medical = await prisma.medical.create({
     *   data: {
     *     // ... data to create a Medical
     *   }
     * })
     * 
     */
    create<T extends MedicalCreateArgs>(args: SelectSubset<T, MedicalCreateArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicals.
     * @param {MedicalCreateManyArgs} args - Arguments to create many Medicals.
     * @example
     * // Create many Medicals
     * const medical = await prisma.medical.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalCreateManyArgs>(args?: SelectSubset<T, MedicalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicals and returns the data saved in the database.
     * @param {MedicalCreateManyAndReturnArgs} args - Arguments to create many Medicals.
     * @example
     * // Create many Medicals
     * const medical = await prisma.medical.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicals and only return the `id`
     * const medicalWithIdOnly = await prisma.medical.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medical.
     * @param {MedicalDeleteArgs} args - Arguments to delete one Medical.
     * @example
     * // Delete one Medical
     * const Medical = await prisma.medical.delete({
     *   where: {
     *     // ... filter to delete one Medical
     *   }
     * })
     * 
     */
    delete<T extends MedicalDeleteArgs>(args: SelectSubset<T, MedicalDeleteArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medical.
     * @param {MedicalUpdateArgs} args - Arguments to update one Medical.
     * @example
     * // Update one Medical
     * const medical = await prisma.medical.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalUpdateArgs>(args: SelectSubset<T, MedicalUpdateArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicals.
     * @param {MedicalDeleteManyArgs} args - Arguments to filter Medicals to delete.
     * @example
     * // Delete a few Medicals
     * const { count } = await prisma.medical.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalDeleteManyArgs>(args?: SelectSubset<T, MedicalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicals
     * const medical = await prisma.medical.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalUpdateManyArgs>(args: SelectSubset<T, MedicalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicals and returns the data updated in the database.
     * @param {MedicalUpdateManyAndReturnArgs} args - Arguments to update many Medicals.
     * @example
     * // Update many Medicals
     * const medical = await prisma.medical.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicals and only return the `id`
     * const medicalWithIdOnly = await prisma.medical.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medical.
     * @param {MedicalUpsertArgs} args - Arguments to update or create a Medical.
     * @example
     * // Update or create a Medical
     * const medical = await prisma.medical.upsert({
     *   create: {
     *     // ... data to create a Medical
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medical we want to update
     *   }
     * })
     */
    upsert<T extends MedicalUpsertArgs>(args: SelectSubset<T, MedicalUpsertArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCountArgs} args - Arguments to filter Medicals to count.
     * @example
     * // Count the number of Medicals
     * const count = await prisma.medical.count({
     *   where: {
     *     // ... the filter for the Medicals we want to count
     *   }
     * })
    **/
    count<T extends MedicalCountArgs>(
      args?: Subset<T, MedicalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalAggregateArgs>(args: Subset<T, MedicalAggregateArgs>): Prisma.PrismaPromise<GetMedicalAggregateType<T>>

    /**
     * Group by Medical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalGroupByArgs['orderBy'] }
        : { orderBy?: MedicalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medical model
   */
  readonly fields: MedicalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medical.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medical model
   */
  interface MedicalFieldRefs {
    readonly id: FieldRef<"Medical", 'String'>
    readonly userId: FieldRef<"Medical", 'String'>
    readonly recordedAt: FieldRef<"Medical", 'DateTime'>
    readonly data: FieldRef<"Medical", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Medical findUnique
   */
  export type MedicalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Filter, which Medical to fetch.
     */
    where: MedicalWhereUniqueInput
  }

  /**
   * Medical findUniqueOrThrow
   */
  export type MedicalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Filter, which Medical to fetch.
     */
    where: MedicalWhereUniqueInput
  }

  /**
   * Medical findFirst
   */
  export type MedicalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Filter, which Medical to fetch.
     */
    where?: MedicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicals to fetch.
     */
    orderBy?: MedicalOrderByWithRelationInput | MedicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicals.
     */
    cursor?: MedicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicals.
     */
    distinct?: MedicalScalarFieldEnum | MedicalScalarFieldEnum[]
  }

  /**
   * Medical findFirstOrThrow
   */
  export type MedicalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Filter, which Medical to fetch.
     */
    where?: MedicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicals to fetch.
     */
    orderBy?: MedicalOrderByWithRelationInput | MedicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicals.
     */
    cursor?: MedicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicals.
     */
    distinct?: MedicalScalarFieldEnum | MedicalScalarFieldEnum[]
  }

  /**
   * Medical findMany
   */
  export type MedicalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Filter, which Medicals to fetch.
     */
    where?: MedicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicals to fetch.
     */
    orderBy?: MedicalOrderByWithRelationInput | MedicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicals.
     */
    cursor?: MedicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicals.
     */
    skip?: number
    distinct?: MedicalScalarFieldEnum | MedicalScalarFieldEnum[]
  }

  /**
   * Medical create
   */
  export type MedicalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * The data needed to create a Medical.
     */
    data: XOR<MedicalCreateInput, MedicalUncheckedCreateInput>
  }

  /**
   * Medical createMany
   */
  export type MedicalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicals.
     */
    data: MedicalCreateManyInput | MedicalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medical createManyAndReturn
   */
  export type MedicalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * The data used to create many Medicals.
     */
    data: MedicalCreateManyInput | MedicalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medical update
   */
  export type MedicalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * The data needed to update a Medical.
     */
    data: XOR<MedicalUpdateInput, MedicalUncheckedUpdateInput>
    /**
     * Choose, which Medical to update.
     */
    where: MedicalWhereUniqueInput
  }

  /**
   * Medical updateMany
   */
  export type MedicalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicals.
     */
    data: XOR<MedicalUpdateManyMutationInput, MedicalUncheckedUpdateManyInput>
    /**
     * Filter which Medicals to update
     */
    where?: MedicalWhereInput
    /**
     * Limit how many Medicals to update.
     */
    limit?: number
  }

  /**
   * Medical updateManyAndReturn
   */
  export type MedicalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * The data used to update Medicals.
     */
    data: XOR<MedicalUpdateManyMutationInput, MedicalUncheckedUpdateManyInput>
    /**
     * Filter which Medicals to update
     */
    where?: MedicalWhereInput
    /**
     * Limit how many Medicals to update.
     */
    limit?: number
  }

  /**
   * Medical upsert
   */
  export type MedicalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * The filter to search for the Medical to update in case it exists.
     */
    where: MedicalWhereUniqueInput
    /**
     * In case the Medical found by the `where` argument doesn't exist, create a new Medical with this data.
     */
    create: XOR<MedicalCreateInput, MedicalUncheckedCreateInput>
    /**
     * In case the Medical was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalUpdateInput, MedicalUncheckedUpdateInput>
  }

  /**
   * Medical delete
   */
  export type MedicalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Filter which Medical to delete.
     */
    where: MedicalWhereUniqueInput
  }

  /**
   * Medical deleteMany
   */
  export type MedicalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicals to delete
     */
    where?: MedicalWhereInput
    /**
     * Limit how many Medicals to delete.
     */
    limit?: number
  }

  /**
   * Medical without action
   */
  export type MedicalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    miScore: number | null
    strokeScore: number | null
    hfScore: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    miScore: number | null
    strokeScore: number | null
    hfScore: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    lifestyleId: string | null
    medicalId: string | null
    miScore: number | null
    strokeScore: number | null
    hfScore: number | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    lifestyleId: string | null
    medicalId: string | null
    miScore: number | null
    strokeScore: number | null
    hfScore: number | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    lifestyleId: number
    medicalId: number
    miScore: number
    strokeScore: number
    hfScore: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    miScore?: true
    strokeScore?: true
    hfScore?: true
  }

  export type AssessmentSumAggregateInputType = {
    miScore?: true
    strokeScore?: true
    hfScore?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    lifestyleId?: true
    medicalId?: true
    miScore?: true
    strokeScore?: true
    hfScore?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    lifestyleId?: true
    medicalId?: true
    miScore?: true
    strokeScore?: true
    hfScore?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    lifestyleId?: true
    medicalId?: true
    miScore?: true
    strokeScore?: true
    hfScore?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    lifestyleId: string | null
    medicalId: string | null
    miScore: number
    strokeScore: number
    hfScore: number
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    lifestyleId?: boolean
    medicalId?: boolean
    miScore?: boolean
    strokeScore?: boolean
    hfScore?: boolean
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    lifestyleId?: boolean
    medicalId?: boolean
    miScore?: boolean
    strokeScore?: boolean
    hfScore?: boolean
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    lifestyleId?: boolean
    medicalId?: boolean
    miScore?: boolean
    strokeScore?: boolean
    hfScore?: boolean
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    lifestyleId?: boolean
    medicalId?: boolean
    miScore?: boolean
    strokeScore?: boolean
    hfScore?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "lifestyleId" | "medicalId" | "miScore" | "strokeScore" | "hfScore", ExtArgs["result"]["assessment"]>

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      lifestyleId: string | null
      medicalId: string | null
      miScore: number
      strokeScore: number
      hfScore: number
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'String'>
    readonly userId: FieldRef<"Assessment", 'String'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
    readonly lifestyleId: FieldRef<"Assessment", 'String'>
    readonly medicalId: FieldRef<"Assessment", 'String'>
    readonly miScore: FieldRef<"Assessment", 'Int'>
    readonly strokeScore: FieldRef<"Assessment", 'Int'>
    readonly hfScore: FieldRef<"Assessment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment updateManyAndReturn
   */
  export type AssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BaselineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    birthdate: 'birthdate',
    height: 'height',
    weight: 'weight',
    smoker: 'smoker',
    diabetes: 'diabetes'
  };

  export type BaselineScalarFieldEnum = (typeof BaselineScalarFieldEnum)[keyof typeof BaselineScalarFieldEnum]


  export const LifestyleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recordedAt: 'recordedAt',
    data: 'data'
  };

  export type LifestyleScalarFieldEnum = (typeof LifestyleScalarFieldEnum)[keyof typeof LifestyleScalarFieldEnum]


  export const MedicalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recordedAt: 'recordedAt',
    data: 'data'
  };

  export type MedicalScalarFieldEnum = (typeof MedicalScalarFieldEnum)[keyof typeof MedicalScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    lifestyleId: 'lifestyleId',
    medicalId: 'medicalId',
    miScore: 'miScore',
    strokeScore: 'strokeScore',
    hfScore: 'hfScore'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BaselineWhereInput = {
    AND?: BaselineWhereInput | BaselineWhereInput[]
    OR?: BaselineWhereInput[]
    NOT?: BaselineWhereInput | BaselineWhereInput[]
    id?: StringFilter<"Baseline"> | string
    userId?: StringFilter<"Baseline"> | string
    birthdate?: DateTimeFilter<"Baseline"> | Date | string
    height?: FloatFilter<"Baseline"> | number
    weight?: FloatFilter<"Baseline"> | number
    smoker?: BoolFilter<"Baseline"> | boolean
    diabetes?: BoolFilter<"Baseline"> | boolean
  }

  export type BaselineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    birthdate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smoker?: SortOrder
    diabetes?: SortOrder
  }

  export type BaselineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BaselineWhereInput | BaselineWhereInput[]
    OR?: BaselineWhereInput[]
    NOT?: BaselineWhereInput | BaselineWhereInput[]
    birthdate?: DateTimeFilter<"Baseline"> | Date | string
    height?: FloatFilter<"Baseline"> | number
    weight?: FloatFilter<"Baseline"> | number
    smoker?: BoolFilter<"Baseline"> | boolean
    diabetes?: BoolFilter<"Baseline"> | boolean
  }, "id" | "userId">

  export type BaselineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    birthdate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smoker?: SortOrder
    diabetes?: SortOrder
    _count?: BaselineCountOrderByAggregateInput
    _avg?: BaselineAvgOrderByAggregateInput
    _max?: BaselineMaxOrderByAggregateInput
    _min?: BaselineMinOrderByAggregateInput
    _sum?: BaselineSumOrderByAggregateInput
  }

  export type BaselineScalarWhereWithAggregatesInput = {
    AND?: BaselineScalarWhereWithAggregatesInput | BaselineScalarWhereWithAggregatesInput[]
    OR?: BaselineScalarWhereWithAggregatesInput[]
    NOT?: BaselineScalarWhereWithAggregatesInput | BaselineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Baseline"> | string
    userId?: StringWithAggregatesFilter<"Baseline"> | string
    birthdate?: DateTimeWithAggregatesFilter<"Baseline"> | Date | string
    height?: FloatWithAggregatesFilter<"Baseline"> | number
    weight?: FloatWithAggregatesFilter<"Baseline"> | number
    smoker?: BoolWithAggregatesFilter<"Baseline"> | boolean
    diabetes?: BoolWithAggregatesFilter<"Baseline"> | boolean
  }

  export type LifestyleWhereInput = {
    AND?: LifestyleWhereInput | LifestyleWhereInput[]
    OR?: LifestyleWhereInput[]
    NOT?: LifestyleWhereInput | LifestyleWhereInput[]
    id?: StringFilter<"Lifestyle"> | string
    userId?: StringFilter<"Lifestyle"> | string
    recordedAt?: DateTimeFilter<"Lifestyle"> | Date | string
    data?: JsonFilter<"Lifestyle">
  }

  export type LifestyleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    data?: SortOrder
  }

  export type LifestyleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LifestyleWhereInput | LifestyleWhereInput[]
    OR?: LifestyleWhereInput[]
    NOT?: LifestyleWhereInput | LifestyleWhereInput[]
    userId?: StringFilter<"Lifestyle"> | string
    recordedAt?: DateTimeFilter<"Lifestyle"> | Date | string
    data?: JsonFilter<"Lifestyle">
  }, "id">

  export type LifestyleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    data?: SortOrder
    _count?: LifestyleCountOrderByAggregateInput
    _max?: LifestyleMaxOrderByAggregateInput
    _min?: LifestyleMinOrderByAggregateInput
  }

  export type LifestyleScalarWhereWithAggregatesInput = {
    AND?: LifestyleScalarWhereWithAggregatesInput | LifestyleScalarWhereWithAggregatesInput[]
    OR?: LifestyleScalarWhereWithAggregatesInput[]
    NOT?: LifestyleScalarWhereWithAggregatesInput | LifestyleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lifestyle"> | string
    userId?: StringWithAggregatesFilter<"Lifestyle"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"Lifestyle"> | Date | string
    data?: JsonWithAggregatesFilter<"Lifestyle">
  }

  export type MedicalWhereInput = {
    AND?: MedicalWhereInput | MedicalWhereInput[]
    OR?: MedicalWhereInput[]
    NOT?: MedicalWhereInput | MedicalWhereInput[]
    id?: StringFilter<"Medical"> | string
    userId?: StringFilter<"Medical"> | string
    recordedAt?: DateTimeFilter<"Medical"> | Date | string
    data?: JsonFilter<"Medical">
  }

  export type MedicalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    data?: SortOrder
  }

  export type MedicalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalWhereInput | MedicalWhereInput[]
    OR?: MedicalWhereInput[]
    NOT?: MedicalWhereInput | MedicalWhereInput[]
    userId?: StringFilter<"Medical"> | string
    recordedAt?: DateTimeFilter<"Medical"> | Date | string
    data?: JsonFilter<"Medical">
  }, "id">

  export type MedicalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    data?: SortOrder
    _count?: MedicalCountOrderByAggregateInput
    _max?: MedicalMaxOrderByAggregateInput
    _min?: MedicalMinOrderByAggregateInput
  }

  export type MedicalScalarWhereWithAggregatesInput = {
    AND?: MedicalScalarWhereWithAggregatesInput | MedicalScalarWhereWithAggregatesInput[]
    OR?: MedicalScalarWhereWithAggregatesInput[]
    NOT?: MedicalScalarWhereWithAggregatesInput | MedicalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medical"> | string
    userId?: StringWithAggregatesFilter<"Medical"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"Medical"> | Date | string
    data?: JsonWithAggregatesFilter<"Medical">
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: StringFilter<"Assessment"> | string
    userId?: StringFilter<"Assessment"> | string
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    lifestyleId?: StringNullableFilter<"Assessment"> | string | null
    medicalId?: StringNullableFilter<"Assessment"> | string | null
    miScore?: IntFilter<"Assessment"> | number
    strokeScore?: IntFilter<"Assessment"> | number
    hfScore?: IntFilter<"Assessment"> | number
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    lifestyleId?: SortOrderInput | SortOrder
    medicalId?: SortOrderInput | SortOrder
    miScore?: SortOrder
    strokeScore?: SortOrder
    hfScore?: SortOrder
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    userId?: StringFilter<"Assessment"> | string
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    lifestyleId?: StringNullableFilter<"Assessment"> | string | null
    medicalId?: StringNullableFilter<"Assessment"> | string | null
    miScore?: IntFilter<"Assessment"> | number
    strokeScore?: IntFilter<"Assessment"> | number
    hfScore?: IntFilter<"Assessment"> | number
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    lifestyleId?: SortOrderInput | SortOrder
    medicalId?: SortOrderInput | SortOrder
    miScore?: SortOrder
    strokeScore?: SortOrder
    hfScore?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessment"> | string
    userId?: StringWithAggregatesFilter<"Assessment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    lifestyleId?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    medicalId?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    miScore?: IntWithAggregatesFilter<"Assessment"> | number
    strokeScore?: IntWithAggregatesFilter<"Assessment"> | number
    hfScore?: IntWithAggregatesFilter<"Assessment"> | number
  }

  export type BaselineCreateInput = {
    id?: string
    userId: string
    birthdate: Date | string
    height: number
    weight: number
    smoker: boolean
    diabetes: boolean
  }

  export type BaselineUncheckedCreateInput = {
    id?: string
    userId: string
    birthdate: Date | string
    height: number
    weight: number
    smoker: boolean
    diabetes: boolean
  }

  export type BaselineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    smoker?: BoolFieldUpdateOperationsInput | boolean
    diabetes?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BaselineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    smoker?: BoolFieldUpdateOperationsInput | boolean
    diabetes?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BaselineCreateManyInput = {
    id?: string
    userId: string
    birthdate: Date | string
    height: number
    weight: number
    smoker: boolean
    diabetes: boolean
  }

  export type BaselineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    smoker?: BoolFieldUpdateOperationsInput | boolean
    diabetes?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BaselineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    smoker?: BoolFieldUpdateOperationsInput | boolean
    diabetes?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LifestyleCreateInput = {
    id?: string
    userId: string
    recordedAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type LifestyleUncheckedCreateInput = {
    id?: string
    userId: string
    recordedAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type LifestyleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type LifestyleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type LifestyleCreateManyInput = {
    id?: string
    userId: string
    recordedAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type LifestyleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type LifestyleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type MedicalCreateInput = {
    id?: string
    userId: string
    recordedAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type MedicalUncheckedCreateInput = {
    id?: string
    userId: string
    recordedAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type MedicalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type MedicalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type MedicalCreateManyInput = {
    id?: string
    userId: string
    recordedAt?: Date | string
    data: JsonNullValueInput | InputJsonValue
  }

  export type MedicalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type MedicalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type AssessmentCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    lifestyleId?: string | null
    medicalId?: string | null
    miScore: number
    strokeScore: number
    hfScore: number
  }

  export type AssessmentUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    lifestyleId?: string | null
    medicalId?: string | null
    miScore: number
    strokeScore: number
    hfScore: number
  }

  export type AssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifestyleId?: NullableStringFieldUpdateOperationsInput | string | null
    medicalId?: NullableStringFieldUpdateOperationsInput | string | null
    miScore?: IntFieldUpdateOperationsInput | number
    strokeScore?: IntFieldUpdateOperationsInput | number
    hfScore?: IntFieldUpdateOperationsInput | number
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifestyleId?: NullableStringFieldUpdateOperationsInput | string | null
    medicalId?: NullableStringFieldUpdateOperationsInput | string | null
    miScore?: IntFieldUpdateOperationsInput | number
    strokeScore?: IntFieldUpdateOperationsInput | number
    hfScore?: IntFieldUpdateOperationsInput | number
  }

  export type AssessmentCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    lifestyleId?: string | null
    medicalId?: string | null
    miScore: number
    strokeScore: number
    hfScore: number
  }

  export type AssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifestyleId?: NullableStringFieldUpdateOperationsInput | string | null
    medicalId?: NullableStringFieldUpdateOperationsInput | string | null
    miScore?: IntFieldUpdateOperationsInput | number
    strokeScore?: IntFieldUpdateOperationsInput | number
    hfScore?: IntFieldUpdateOperationsInput | number
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifestyleId?: NullableStringFieldUpdateOperationsInput | string | null
    medicalId?: NullableStringFieldUpdateOperationsInput | string | null
    miScore?: IntFieldUpdateOperationsInput | number
    strokeScore?: IntFieldUpdateOperationsInput | number
    hfScore?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BaselineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birthdate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smoker?: SortOrder
    diabetes?: SortOrder
  }

  export type BaselineAvgOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type BaselineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birthdate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smoker?: SortOrder
    diabetes?: SortOrder
  }

  export type BaselineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    birthdate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smoker?: SortOrder
    diabetes?: SortOrder
  }

  export type BaselineSumOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LifestyleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    data?: SortOrder
  }

  export type LifestyleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
  }

  export type LifestyleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type MedicalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    data?: SortOrder
  }

  export type MedicalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
  }

  export type MedicalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    lifestyleId?: SortOrder
    medicalId?: SortOrder
    miScore?: SortOrder
    strokeScore?: SortOrder
    hfScore?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    miScore?: SortOrder
    strokeScore?: SortOrder
    hfScore?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    lifestyleId?: SortOrder
    medicalId?: SortOrder
    miScore?: SortOrder
    strokeScore?: SortOrder
    hfScore?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    lifestyleId?: SortOrder
    medicalId?: SortOrder
    miScore?: SortOrder
    strokeScore?: SortOrder
    hfScore?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    miScore?: SortOrder
    strokeScore?: SortOrder
    hfScore?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}