
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
 * Model users_surveys_responses_aux
 * 
 */
export type users_surveys_responses_aux = $Result.DefaultSelection<Prisma.$users_surveys_responses_auxPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users_surveys_responses_auxes
 * const users_surveys_responses_auxes = await prisma.users_surveys_responses_aux.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users_surveys_responses_auxes
   * const users_surveys_responses_auxes = await prisma.users_surveys_responses_aux.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.users_surveys_responses_aux`: Exposes CRUD operations for the **users_surveys_responses_aux** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_surveys_responses_auxes
    * const users_surveys_responses_auxes = await prisma.users_surveys_responses_aux.findMany()
    * ```
    */
  get users_surveys_responses_aux(): Prisma.users_surveys_responses_auxDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    users_surveys_responses_aux: 'users_surveys_responses_aux'
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
      modelProps: "users_surveys_responses_aux"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users_surveys_responses_aux: {
        payload: Prisma.$users_surveys_responses_auxPayload<ExtArgs>
        fields: Prisma.users_surveys_responses_auxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_surveys_responses_auxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_surveys_responses_auxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload>
          }
          findFirst: {
            args: Prisma.users_surveys_responses_auxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_surveys_responses_auxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload>
          }
          findMany: {
            args: Prisma.users_surveys_responses_auxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload>[]
          }
          create: {
            args: Prisma.users_surveys_responses_auxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload>
          }
          createMany: {
            args: Prisma.users_surveys_responses_auxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.users_surveys_responses_auxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload>
          }
          update: {
            args: Prisma.users_surveys_responses_auxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload>
          }
          deleteMany: {
            args: Prisma.users_surveys_responses_auxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_surveys_responses_auxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.users_surveys_responses_auxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_surveys_responses_auxPayload>
          }
          aggregate: {
            args: Prisma.Users_surveys_responses_auxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_surveys_responses_aux>
          }
          groupBy: {
            args: Prisma.users_surveys_responses_auxGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_surveys_responses_auxGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_surveys_responses_auxCountArgs<ExtArgs>
            result: $Utils.Optional<Users_surveys_responses_auxCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    users_surveys_responses_aux?: users_surveys_responses_auxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Model users_surveys_responses_aux
   */

  export type AggregateUsers_surveys_responses_aux = {
    _count: Users_surveys_responses_auxCountAggregateOutputType | null
    _avg: Users_surveys_responses_auxAvgAggregateOutputType | null
    _sum: Users_surveys_responses_auxSumAggregateOutputType | null
    _min: Users_surveys_responses_auxMinAggregateOutputType | null
    _max: Users_surveys_responses_auxMaxAggregateOutputType | null
  }

  export type Users_surveys_responses_auxAvgAggregateOutputType = {
    id: number | null
    response_status_id: number | null
  }

  export type Users_surveys_responses_auxSumAggregateOutputType = {
    id: number | null
    response_status_id: number | null
  }

  export type Users_surveys_responses_auxMinAggregateOutputType = {
    id: number | null
    origin: string | null
    response_status_id: number | null
    created_at: Date | null
  }

  export type Users_surveys_responses_auxMaxAggregateOutputType = {
    id: number | null
    origin: string | null
    response_status_id: number | null
    created_at: Date | null
  }

  export type Users_surveys_responses_auxCountAggregateOutputType = {
    id: number
    origin: number
    response_status_id: number
    created_at: number
    _all: number
  }


  export type Users_surveys_responses_auxAvgAggregateInputType = {
    id?: true
    response_status_id?: true
  }

  export type Users_surveys_responses_auxSumAggregateInputType = {
    id?: true
    response_status_id?: true
  }

  export type Users_surveys_responses_auxMinAggregateInputType = {
    id?: true
    origin?: true
    response_status_id?: true
    created_at?: true
  }

  export type Users_surveys_responses_auxMaxAggregateInputType = {
    id?: true
    origin?: true
    response_status_id?: true
    created_at?: true
  }

  export type Users_surveys_responses_auxCountAggregateInputType = {
    id?: true
    origin?: true
    response_status_id?: true
    created_at?: true
    _all?: true
  }

  export type Users_surveys_responses_auxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_surveys_responses_aux to aggregate.
     */
    where?: users_surveys_responses_auxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_surveys_responses_auxes to fetch.
     */
    orderBy?: users_surveys_responses_auxOrderByWithRelationInput | users_surveys_responses_auxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_surveys_responses_auxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_surveys_responses_auxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_surveys_responses_auxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_surveys_responses_auxes
    **/
    _count?: true | Users_surveys_responses_auxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_surveys_responses_auxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_surveys_responses_auxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_surveys_responses_auxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_surveys_responses_auxMaxAggregateInputType
  }

  export type GetUsers_surveys_responses_auxAggregateType<T extends Users_surveys_responses_auxAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_surveys_responses_aux]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_surveys_responses_aux[P]>
      : GetScalarType<T[P], AggregateUsers_surveys_responses_aux[P]>
  }




  export type users_surveys_responses_auxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_surveys_responses_auxWhereInput
    orderBy?: users_surveys_responses_auxOrderByWithAggregationInput | users_surveys_responses_auxOrderByWithAggregationInput[]
    by: Users_surveys_responses_auxScalarFieldEnum[] | Users_surveys_responses_auxScalarFieldEnum
    having?: users_surveys_responses_auxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_surveys_responses_auxCountAggregateInputType | true
    _avg?: Users_surveys_responses_auxAvgAggregateInputType
    _sum?: Users_surveys_responses_auxSumAggregateInputType
    _min?: Users_surveys_responses_auxMinAggregateInputType
    _max?: Users_surveys_responses_auxMaxAggregateInputType
  }

  export type Users_surveys_responses_auxGroupByOutputType = {
    id: number
    origin: string
    response_status_id: number
    created_at: Date
    _count: Users_surveys_responses_auxCountAggregateOutputType | null
    _avg: Users_surveys_responses_auxAvgAggregateOutputType | null
    _sum: Users_surveys_responses_auxSumAggregateOutputType | null
    _min: Users_surveys_responses_auxMinAggregateOutputType | null
    _max: Users_surveys_responses_auxMaxAggregateOutputType | null
  }

  type GetUsers_surveys_responses_auxGroupByPayload<T extends users_surveys_responses_auxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_surveys_responses_auxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_surveys_responses_auxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_surveys_responses_auxGroupByOutputType[P]>
            : GetScalarType<T[P], Users_surveys_responses_auxGroupByOutputType[P]>
        }
      >
    >


  export type users_surveys_responses_auxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    origin?: boolean
    response_status_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users_surveys_responses_aux"]>



  export type users_surveys_responses_auxSelectScalar = {
    id?: boolean
    origin?: boolean
    response_status_id?: boolean
    created_at?: boolean
  }

  export type users_surveys_responses_auxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "origin" | "response_status_id" | "created_at", ExtArgs["result"]["users_surveys_responses_aux"]>

  export type $users_surveys_responses_auxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_surveys_responses_aux"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      origin: string
      response_status_id: number
      created_at: Date
    }, ExtArgs["result"]["users_surveys_responses_aux"]>
    composites: {}
  }

  type users_surveys_responses_auxGetPayload<S extends boolean | null | undefined | users_surveys_responses_auxDefaultArgs> = $Result.GetResult<Prisma.$users_surveys_responses_auxPayload, S>

  type users_surveys_responses_auxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_surveys_responses_auxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_surveys_responses_auxCountAggregateInputType | true
    }

  export interface users_surveys_responses_auxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_surveys_responses_aux'], meta: { name: 'users_surveys_responses_aux' } }
    /**
     * Find zero or one Users_surveys_responses_aux that matches the filter.
     * @param {users_surveys_responses_auxFindUniqueArgs} args - Arguments to find a Users_surveys_responses_aux
     * @example
     * // Get one Users_surveys_responses_aux
     * const users_surveys_responses_aux = await prisma.users_surveys_responses_aux.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_surveys_responses_auxFindUniqueArgs>(args: SelectSubset<T, users_surveys_responses_auxFindUniqueArgs<ExtArgs>>): Prisma__users_surveys_responses_auxClient<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_surveys_responses_aux that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_surveys_responses_auxFindUniqueOrThrowArgs} args - Arguments to find a Users_surveys_responses_aux
     * @example
     * // Get one Users_surveys_responses_aux
     * const users_surveys_responses_aux = await prisma.users_surveys_responses_aux.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_surveys_responses_auxFindUniqueOrThrowArgs>(args: SelectSubset<T, users_surveys_responses_auxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_surveys_responses_auxClient<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_surveys_responses_aux that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_surveys_responses_auxFindFirstArgs} args - Arguments to find a Users_surveys_responses_aux
     * @example
     * // Get one Users_surveys_responses_aux
     * const users_surveys_responses_aux = await prisma.users_surveys_responses_aux.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_surveys_responses_auxFindFirstArgs>(args?: SelectSubset<T, users_surveys_responses_auxFindFirstArgs<ExtArgs>>): Prisma__users_surveys_responses_auxClient<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_surveys_responses_aux that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_surveys_responses_auxFindFirstOrThrowArgs} args - Arguments to find a Users_surveys_responses_aux
     * @example
     * // Get one Users_surveys_responses_aux
     * const users_surveys_responses_aux = await prisma.users_surveys_responses_aux.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_surveys_responses_auxFindFirstOrThrowArgs>(args?: SelectSubset<T, users_surveys_responses_auxFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_surveys_responses_auxClient<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_surveys_responses_auxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_surveys_responses_auxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_surveys_responses_auxes
     * const users_surveys_responses_auxes = await prisma.users_surveys_responses_aux.findMany()
     * 
     * // Get first 10 Users_surveys_responses_auxes
     * const users_surveys_responses_auxes = await prisma.users_surveys_responses_aux.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const users_surveys_responses_auxWithIdOnly = await prisma.users_surveys_responses_aux.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends users_surveys_responses_auxFindManyArgs>(args?: SelectSubset<T, users_surveys_responses_auxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_surveys_responses_aux.
     * @param {users_surveys_responses_auxCreateArgs} args - Arguments to create a Users_surveys_responses_aux.
     * @example
     * // Create one Users_surveys_responses_aux
     * const Users_surveys_responses_aux = await prisma.users_surveys_responses_aux.create({
     *   data: {
     *     // ... data to create a Users_surveys_responses_aux
     *   }
     * })
     * 
     */
    create<T extends users_surveys_responses_auxCreateArgs>(args: SelectSubset<T, users_surveys_responses_auxCreateArgs<ExtArgs>>): Prisma__users_surveys_responses_auxClient<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_surveys_responses_auxes.
     * @param {users_surveys_responses_auxCreateManyArgs} args - Arguments to create many Users_surveys_responses_auxes.
     * @example
     * // Create many Users_surveys_responses_auxes
     * const users_surveys_responses_aux = await prisma.users_surveys_responses_aux.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_surveys_responses_auxCreateManyArgs>(args?: SelectSubset<T, users_surveys_responses_auxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users_surveys_responses_aux.
     * @param {users_surveys_responses_auxDeleteArgs} args - Arguments to delete one Users_surveys_responses_aux.
     * @example
     * // Delete one Users_surveys_responses_aux
     * const Users_surveys_responses_aux = await prisma.users_surveys_responses_aux.delete({
     *   where: {
     *     // ... filter to delete one Users_surveys_responses_aux
     *   }
     * })
     * 
     */
    delete<T extends users_surveys_responses_auxDeleteArgs>(args: SelectSubset<T, users_surveys_responses_auxDeleteArgs<ExtArgs>>): Prisma__users_surveys_responses_auxClient<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_surveys_responses_aux.
     * @param {users_surveys_responses_auxUpdateArgs} args - Arguments to update one Users_surveys_responses_aux.
     * @example
     * // Update one Users_surveys_responses_aux
     * const users_surveys_responses_aux = await prisma.users_surveys_responses_aux.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_surveys_responses_auxUpdateArgs>(args: SelectSubset<T, users_surveys_responses_auxUpdateArgs<ExtArgs>>): Prisma__users_surveys_responses_auxClient<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_surveys_responses_auxes.
     * @param {users_surveys_responses_auxDeleteManyArgs} args - Arguments to filter Users_surveys_responses_auxes to delete.
     * @example
     * // Delete a few Users_surveys_responses_auxes
     * const { count } = await prisma.users_surveys_responses_aux.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_surveys_responses_auxDeleteManyArgs>(args?: SelectSubset<T, users_surveys_responses_auxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_surveys_responses_auxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_surveys_responses_auxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_surveys_responses_auxes
     * const users_surveys_responses_aux = await prisma.users_surveys_responses_aux.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_surveys_responses_auxUpdateManyArgs>(args: SelectSubset<T, users_surveys_responses_auxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users_surveys_responses_aux.
     * @param {users_surveys_responses_auxUpsertArgs} args - Arguments to update or create a Users_surveys_responses_aux.
     * @example
     * // Update or create a Users_surveys_responses_aux
     * const users_surveys_responses_aux = await prisma.users_surveys_responses_aux.upsert({
     *   create: {
     *     // ... data to create a Users_surveys_responses_aux
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_surveys_responses_aux we want to update
     *   }
     * })
     */
    upsert<T extends users_surveys_responses_auxUpsertArgs>(args: SelectSubset<T, users_surveys_responses_auxUpsertArgs<ExtArgs>>): Prisma__users_surveys_responses_auxClient<$Result.GetResult<Prisma.$users_surveys_responses_auxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_surveys_responses_auxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_surveys_responses_auxCountArgs} args - Arguments to filter Users_surveys_responses_auxes to count.
     * @example
     * // Count the number of Users_surveys_responses_auxes
     * const count = await prisma.users_surveys_responses_aux.count({
     *   where: {
     *     // ... the filter for the Users_surveys_responses_auxes we want to count
     *   }
     * })
    **/
    count<T extends users_surveys_responses_auxCountArgs>(
      args?: Subset<T, users_surveys_responses_auxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_surveys_responses_auxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_surveys_responses_aux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_surveys_responses_auxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Users_surveys_responses_auxAggregateArgs>(args: Subset<T, Users_surveys_responses_auxAggregateArgs>): Prisma.PrismaPromise<GetUsers_surveys_responses_auxAggregateType<T>>

    /**
     * Group by Users_surveys_responses_aux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_surveys_responses_auxGroupByArgs} args - Group by arguments.
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
      T extends users_surveys_responses_auxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_surveys_responses_auxGroupByArgs['orderBy'] }
        : { orderBy?: users_surveys_responses_auxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, users_surveys_responses_auxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_surveys_responses_auxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_surveys_responses_aux model
   */
  readonly fields: users_surveys_responses_auxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_surveys_responses_aux.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_surveys_responses_auxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users_surveys_responses_aux model
   */ 
  interface users_surveys_responses_auxFieldRefs {
    readonly id: FieldRef<"users_surveys_responses_aux", 'Int'>
    readonly origin: FieldRef<"users_surveys_responses_aux", 'String'>
    readonly response_status_id: FieldRef<"users_surveys_responses_aux", 'Int'>
    readonly created_at: FieldRef<"users_surveys_responses_aux", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users_surveys_responses_aux findUnique
   */
  export type users_surveys_responses_auxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * Filter, which users_surveys_responses_aux to fetch.
     */
    where: users_surveys_responses_auxWhereUniqueInput
  }

  /**
   * users_surveys_responses_aux findUniqueOrThrow
   */
  export type users_surveys_responses_auxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * Filter, which users_surveys_responses_aux to fetch.
     */
    where: users_surveys_responses_auxWhereUniqueInput
  }

  /**
   * users_surveys_responses_aux findFirst
   */
  export type users_surveys_responses_auxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * Filter, which users_surveys_responses_aux to fetch.
     */
    where?: users_surveys_responses_auxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_surveys_responses_auxes to fetch.
     */
    orderBy?: users_surveys_responses_auxOrderByWithRelationInput | users_surveys_responses_auxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_surveys_responses_auxes.
     */
    cursor?: users_surveys_responses_auxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_surveys_responses_auxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_surveys_responses_auxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_surveys_responses_auxes.
     */
    distinct?: Users_surveys_responses_auxScalarFieldEnum | Users_surveys_responses_auxScalarFieldEnum[]
  }

  /**
   * users_surveys_responses_aux findFirstOrThrow
   */
  export type users_surveys_responses_auxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * Filter, which users_surveys_responses_aux to fetch.
     */
    where?: users_surveys_responses_auxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_surveys_responses_auxes to fetch.
     */
    orderBy?: users_surveys_responses_auxOrderByWithRelationInput | users_surveys_responses_auxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_surveys_responses_auxes.
     */
    cursor?: users_surveys_responses_auxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_surveys_responses_auxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_surveys_responses_auxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_surveys_responses_auxes.
     */
    distinct?: Users_surveys_responses_auxScalarFieldEnum | Users_surveys_responses_auxScalarFieldEnum[]
  }

  /**
   * users_surveys_responses_aux findMany
   */
  export type users_surveys_responses_auxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * Filter, which users_surveys_responses_auxes to fetch.
     */
    where?: users_surveys_responses_auxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_surveys_responses_auxes to fetch.
     */
    orderBy?: users_surveys_responses_auxOrderByWithRelationInput | users_surveys_responses_auxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_surveys_responses_auxes.
     */
    cursor?: users_surveys_responses_auxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_surveys_responses_auxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_surveys_responses_auxes.
     */
    skip?: number
    distinct?: Users_surveys_responses_auxScalarFieldEnum | Users_surveys_responses_auxScalarFieldEnum[]
  }

  /**
   * users_surveys_responses_aux create
   */
  export type users_surveys_responses_auxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * The data needed to create a users_surveys_responses_aux.
     */
    data: XOR<users_surveys_responses_auxCreateInput, users_surveys_responses_auxUncheckedCreateInput>
  }

  /**
   * users_surveys_responses_aux createMany
   */
  export type users_surveys_responses_auxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_surveys_responses_auxes.
     */
    data: users_surveys_responses_auxCreateManyInput | users_surveys_responses_auxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_surveys_responses_aux update
   */
  export type users_surveys_responses_auxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * The data needed to update a users_surveys_responses_aux.
     */
    data: XOR<users_surveys_responses_auxUpdateInput, users_surveys_responses_auxUncheckedUpdateInput>
    /**
     * Choose, which users_surveys_responses_aux to update.
     */
    where: users_surveys_responses_auxWhereUniqueInput
  }

  /**
   * users_surveys_responses_aux updateMany
   */
  export type users_surveys_responses_auxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_surveys_responses_auxes.
     */
    data: XOR<users_surveys_responses_auxUpdateManyMutationInput, users_surveys_responses_auxUncheckedUpdateManyInput>
    /**
     * Filter which users_surveys_responses_auxes to update
     */
    where?: users_surveys_responses_auxWhereInput
    /**
     * Limit how many users_surveys_responses_auxes to update.
     */
    limit?: number
  }

  /**
   * users_surveys_responses_aux upsert
   */
  export type users_surveys_responses_auxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * The filter to search for the users_surveys_responses_aux to update in case it exists.
     */
    where: users_surveys_responses_auxWhereUniqueInput
    /**
     * In case the users_surveys_responses_aux found by the `where` argument doesn't exist, create a new users_surveys_responses_aux with this data.
     */
    create: XOR<users_surveys_responses_auxCreateInput, users_surveys_responses_auxUncheckedCreateInput>
    /**
     * In case the users_surveys_responses_aux was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_surveys_responses_auxUpdateInput, users_surveys_responses_auxUncheckedUpdateInput>
  }

  /**
   * users_surveys_responses_aux delete
   */
  export type users_surveys_responses_auxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
    /**
     * Filter which users_surveys_responses_aux to delete.
     */
    where: users_surveys_responses_auxWhereUniqueInput
  }

  /**
   * users_surveys_responses_aux deleteMany
   */
  export type users_surveys_responses_auxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_surveys_responses_auxes to delete
     */
    where?: users_surveys_responses_auxWhereInput
    /**
     * Limit how many users_surveys_responses_auxes to delete.
     */
    limit?: number
  }

  /**
   * users_surveys_responses_aux without action
   */
  export type users_surveys_responses_auxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_surveys_responses_aux
     */
    select?: users_surveys_responses_auxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_surveys_responses_aux
     */
    omit?: users_surveys_responses_auxOmit<ExtArgs> | null
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


  export const Users_surveys_responses_auxScalarFieldEnum: {
    id: 'id',
    origin: 'origin',
    response_status_id: 'response_status_id',
    created_at: 'created_at'
  };

  export type Users_surveys_responses_auxScalarFieldEnum = (typeof Users_surveys_responses_auxScalarFieldEnum)[keyof typeof Users_surveys_responses_auxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const users_surveys_responses_auxOrderByRelevanceFieldEnum: {
    origin: 'origin'
  };

  export type users_surveys_responses_auxOrderByRelevanceFieldEnum = (typeof users_surveys_responses_auxOrderByRelevanceFieldEnum)[keyof typeof users_surveys_responses_auxOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type users_surveys_responses_auxWhereInput = {
    AND?: users_surveys_responses_auxWhereInput | users_surveys_responses_auxWhereInput[]
    OR?: users_surveys_responses_auxWhereInput[]
    NOT?: users_surveys_responses_auxWhereInput | users_surveys_responses_auxWhereInput[]
    id?: IntFilter<"users_surveys_responses_aux"> | number
    origin?: StringFilter<"users_surveys_responses_aux"> | string
    response_status_id?: IntFilter<"users_surveys_responses_aux"> | number
    created_at?: DateTimeFilter<"users_surveys_responses_aux"> | Date | string
  }

  export type users_surveys_responses_auxOrderByWithRelationInput = {
    id?: SortOrder
    origin?: SortOrder
    response_status_id?: SortOrder
    created_at?: SortOrder
    _relevance?: users_surveys_responses_auxOrderByRelevanceInput
  }

  export type users_surveys_responses_auxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: users_surveys_responses_auxWhereInput | users_surveys_responses_auxWhereInput[]
    OR?: users_surveys_responses_auxWhereInput[]
    NOT?: users_surveys_responses_auxWhereInput | users_surveys_responses_auxWhereInput[]
    origin?: StringFilter<"users_surveys_responses_aux"> | string
    response_status_id?: IntFilter<"users_surveys_responses_aux"> | number
    created_at?: DateTimeFilter<"users_surveys_responses_aux"> | Date | string
  }, "id">

  export type users_surveys_responses_auxOrderByWithAggregationInput = {
    id?: SortOrder
    origin?: SortOrder
    response_status_id?: SortOrder
    created_at?: SortOrder
    _count?: users_surveys_responses_auxCountOrderByAggregateInput
    _avg?: users_surveys_responses_auxAvgOrderByAggregateInput
    _max?: users_surveys_responses_auxMaxOrderByAggregateInput
    _min?: users_surveys_responses_auxMinOrderByAggregateInput
    _sum?: users_surveys_responses_auxSumOrderByAggregateInput
  }

  export type users_surveys_responses_auxScalarWhereWithAggregatesInput = {
    AND?: users_surveys_responses_auxScalarWhereWithAggregatesInput | users_surveys_responses_auxScalarWhereWithAggregatesInput[]
    OR?: users_surveys_responses_auxScalarWhereWithAggregatesInput[]
    NOT?: users_surveys_responses_auxScalarWhereWithAggregatesInput | users_surveys_responses_auxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users_surveys_responses_aux"> | number
    origin?: StringWithAggregatesFilter<"users_surveys_responses_aux"> | string
    response_status_id?: IntWithAggregatesFilter<"users_surveys_responses_aux"> | number
    created_at?: DateTimeWithAggregatesFilter<"users_surveys_responses_aux"> | Date | string
  }

  export type users_surveys_responses_auxCreateInput = {
    origin: string
    response_status_id: number
    created_at?: Date | string
  }

  export type users_surveys_responses_auxUncheckedCreateInput = {
    id?: number
    origin: string
    response_status_id: number
    created_at?: Date | string
  }

  export type users_surveys_responses_auxUpdateInput = {
    origin?: StringFieldUpdateOperationsInput | string
    response_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type users_surveys_responses_auxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    response_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type users_surveys_responses_auxCreateManyInput = {
    id?: number
    origin: string
    response_status_id: number
    created_at?: Date | string
  }

  export type users_surveys_responses_auxUpdateManyMutationInput = {
    origin?: StringFieldUpdateOperationsInput | string
    response_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type users_surveys_responses_auxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    response_status_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type users_surveys_responses_auxOrderByRelevanceInput = {
    fields: users_surveys_responses_auxOrderByRelevanceFieldEnum | users_surveys_responses_auxOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type users_surveys_responses_auxCountOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    response_status_id?: SortOrder
    created_at?: SortOrder
  }

  export type users_surveys_responses_auxAvgOrderByAggregateInput = {
    id?: SortOrder
    response_status_id?: SortOrder
  }

  export type users_surveys_responses_auxMaxOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    response_status_id?: SortOrder
    created_at?: SortOrder
  }

  export type users_surveys_responses_auxMinOrderByAggregateInput = {
    id?: SortOrder
    origin?: SortOrder
    response_status_id?: SortOrder
    created_at?: SortOrder
  }

  export type users_surveys_responses_auxSumOrderByAggregateInput = {
    id?: SortOrder
    response_status_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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