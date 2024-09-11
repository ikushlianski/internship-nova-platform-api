
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model DeckTest
 * 
 */
export type DeckTest = $Result.DefaultSelection<Prisma.$DeckTestPayload>
/**
 * Model UserCardTest
 * 
 */
export type UserCardTest = $Result.DefaultSelection<Prisma.$UserCardTestPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.deckTest`: Exposes CRUD operations for the **DeckTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeckTests
    * const deckTests = await prisma.deckTest.findMany()
    * ```
    */
  get deckTest(): Prisma.DeckTestDelegate<ExtArgs>;

  /**
   * `prisma.userCardTest`: Exposes CRUD operations for the **UserCardTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCardTests
    * const userCardTests = await prisma.userCardTest.findMany()
    * ```
    */
  get userCardTest(): Prisma.UserCardTestDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Users: 'Users',
    DeckTest: 'DeckTest',
    UserCardTest: 'UserCardTest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "deckTest" | "userCardTest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      DeckTest: {
        payload: Prisma.$DeckTestPayload<ExtArgs>
        fields: Prisma.DeckTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload>
          }
          findFirst: {
            args: Prisma.DeckTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload>
          }
          findMany: {
            args: Prisma.DeckTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload>[]
          }
          create: {
            args: Prisma.DeckTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload>
          }
          createMany: {
            args: Prisma.DeckTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload>[]
          }
          delete: {
            args: Prisma.DeckTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload>
          }
          update: {
            args: Prisma.DeckTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload>
          }
          deleteMany: {
            args: Prisma.DeckTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeckTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckTestPayload>
          }
          aggregate: {
            args: Prisma.DeckTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeckTest>
          }
          groupBy: {
            args: Prisma.DeckTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckTestCountArgs<ExtArgs>
            result: $Utils.Optional<DeckTestCountAggregateOutputType> | number
          }
        }
      }
      UserCardTest: {
        payload: Prisma.$UserCardTestPayload<ExtArgs>
        fields: Prisma.UserCardTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCardTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCardTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload>
          }
          findFirst: {
            args: Prisma.UserCardTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCardTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload>
          }
          findMany: {
            args: Prisma.UserCardTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload>[]
          }
          create: {
            args: Prisma.UserCardTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload>
          }
          createMany: {
            args: Prisma.UserCardTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCardTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload>[]
          }
          delete: {
            args: Prisma.UserCardTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload>
          }
          update: {
            args: Prisma.UserCardTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload>
          }
          deleteMany: {
            args: Prisma.UserCardTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCardTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCardTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardTestPayload>
          }
          aggregate: {
            args: Prisma.UserCardTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCardTest>
          }
          groupBy: {
            args: Prisma.UserCardTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCardTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCardTestCountArgs<ExtArgs>
            result: $Utils.Optional<UserCardTestCountAggregateOutputType> | number
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    DeckTest: number
    UserCardTest: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DeckTest?: boolean | UsersCountOutputTypeCountDeckTestArgs
    UserCardTest?: boolean | UsersCountOutputTypeCountUserCardTestArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDeckTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckTestWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserCardTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCardTestWhereInput
  }


  /**
   * Count Type DeckTestCountOutputType
   */

  export type DeckTestCountOutputType = {
    UserCardTest: number
  }

  export type DeckTestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserCardTest?: boolean | DeckTestCountOutputTypeCountUserCardTestArgs
  }

  // Custom InputTypes
  /**
   * DeckTestCountOutputType without action
   */
  export type DeckTestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTestCountOutputType
     */
    select?: DeckTestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeckTestCountOutputType without action
   */
  export type DeckTestCountOutputTypeCountUserCardTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCardTestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_email: string | null
    created_at: Date | null
    updated_at: Date | null
    first_name: string | null
    last_name: string | null
    nickname: string | null
    deleted: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    user_email: string | null
    created_at: Date | null
    updated_at: Date | null
    first_name: string | null
    last_name: string | null
    nickname: string | null
    deleted: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    user_email: number
    created_at: number
    updated_at: number
    first_name: number
    last_name: number
    nickname: number
    deleted: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_email?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    nickname?: true
    deleted?: true
  }

  export type UsersMaxAggregateInputType = {
    user_email?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    nickname?: true
    deleted?: true
  }

  export type UsersCountAggregateInputType = {
    user_email?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    nickname?: true
    deleted?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_email: string
    created_at: Date
    updated_at: Date | null
    first_name: string
    last_name: string
    nickname: string | null
    deleted: boolean
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_email?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    nickname?: boolean
    deleted?: boolean
    DeckTest?: boolean | Users$DeckTestArgs<ExtArgs>
    UserCardTest?: boolean | Users$UserCardTestArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_email?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    nickname?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_email?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    nickname?: boolean
    deleted?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DeckTest?: boolean | Users$DeckTestArgs<ExtArgs>
    UserCardTest?: boolean | Users$UserCardTestArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      DeckTest: Prisma.$DeckTestPayload<ExtArgs>[]
      UserCardTest: Prisma.$UserCardTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_email: string
      created_at: Date
      updated_at: Date | null
      first_name: string
      last_name: string
      nickname: string | null
      deleted: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_email`
     * const usersWithUser_emailOnly = await prisma.users.findMany({ select: { user_email: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_email`
     * const usersWithUser_emailOnly = await prisma.users.createManyAndReturn({ 
     *   select: { user_email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DeckTest<T extends Users$DeckTestArgs<ExtArgs> = {}>(args?: Subset<T, Users$DeckTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "findMany"> | Null>
    UserCardTest<T extends Users$UserCardTestArgs<ExtArgs> = {}>(args?: Subset<T, Users$UserCardTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly user_email: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly nickname: FieldRef<"Users", 'String'>
    readonly deleted: FieldRef<"Users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.DeckTest
   */
  export type Users$DeckTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    where?: DeckTestWhereInput
    orderBy?: DeckTestOrderByWithRelationInput | DeckTestOrderByWithRelationInput[]
    cursor?: DeckTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckTestScalarFieldEnum | DeckTestScalarFieldEnum[]
  }

  /**
   * Users.UserCardTest
   */
  export type Users$UserCardTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    where?: UserCardTestWhereInput
    orderBy?: UserCardTestOrderByWithRelationInput | UserCardTestOrderByWithRelationInput[]
    cursor?: UserCardTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCardTestScalarFieldEnum | UserCardTestScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model DeckTest
   */

  export type AggregateDeckTest = {
    _count: DeckTestCountAggregateOutputType | null
    _min: DeckTestMinAggregateOutputType | null
    _max: DeckTestMaxAggregateOutputType | null
  }

  export type DeckTestMinAggregateOutputType = {
    deck_id: string | null
    user_id: string | null
    deck_description: string | null
  }

  export type DeckTestMaxAggregateOutputType = {
    deck_id: string | null
    user_id: string | null
    deck_description: string | null
  }

  export type DeckTestCountAggregateOutputType = {
    deck_id: number
    user_id: number
    deck_description: number
    _all: number
  }


  export type DeckTestMinAggregateInputType = {
    deck_id?: true
    user_id?: true
    deck_description?: true
  }

  export type DeckTestMaxAggregateInputType = {
    deck_id?: true
    user_id?: true
    deck_description?: true
  }

  export type DeckTestCountAggregateInputType = {
    deck_id?: true
    user_id?: true
    deck_description?: true
    _all?: true
  }

  export type DeckTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckTest to aggregate.
     */
    where?: DeckTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckTests to fetch.
     */
    orderBy?: DeckTestOrderByWithRelationInput | DeckTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeckTests
    **/
    _count?: true | DeckTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckTestMaxAggregateInputType
  }

  export type GetDeckTestAggregateType<T extends DeckTestAggregateArgs> = {
        [P in keyof T & keyof AggregateDeckTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeckTest[P]>
      : GetScalarType<T[P], AggregateDeckTest[P]>
  }




  export type DeckTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckTestWhereInput
    orderBy?: DeckTestOrderByWithAggregationInput | DeckTestOrderByWithAggregationInput[]
    by: DeckTestScalarFieldEnum[] | DeckTestScalarFieldEnum
    having?: DeckTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckTestCountAggregateInputType | true
    _min?: DeckTestMinAggregateInputType
    _max?: DeckTestMaxAggregateInputType
  }

  export type DeckTestGroupByOutputType = {
    deck_id: string
    user_id: string
    deck_description: string | null
    _count: DeckTestCountAggregateOutputType | null
    _min: DeckTestMinAggregateOutputType | null
    _max: DeckTestMaxAggregateOutputType | null
  }

  type GetDeckTestGroupByPayload<T extends DeckTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckTestGroupByOutputType[P]>
            : GetScalarType<T[P], DeckTestGroupByOutputType[P]>
        }
      >
    >


  export type DeckTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deck_id?: boolean
    user_id?: boolean
    deck_description?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    UserCardTest?: boolean | DeckTest$UserCardTestArgs<ExtArgs>
    _count?: boolean | DeckTestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckTest"]>

  export type DeckTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deck_id?: boolean
    user_id?: boolean
    deck_description?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckTest"]>

  export type DeckTestSelectScalar = {
    deck_id?: boolean
    user_id?: boolean
    deck_description?: boolean
  }

  export type DeckTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    UserCardTest?: boolean | DeckTest$UserCardTestArgs<ExtArgs>
    _count?: boolean | DeckTestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeckTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $DeckTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeckTest"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      UserCardTest: Prisma.$UserCardTestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      deck_id: string
      user_id: string
      deck_description: string | null
    }, ExtArgs["result"]["deckTest"]>
    composites: {}
  }

  type DeckTestGetPayload<S extends boolean | null | undefined | DeckTestDefaultArgs> = $Result.GetResult<Prisma.$DeckTestPayload, S>

  type DeckTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeckTestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeckTestCountAggregateInputType | true
    }

  export interface DeckTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeckTest'], meta: { name: 'DeckTest' } }
    /**
     * Find zero or one DeckTest that matches the filter.
     * @param {DeckTestFindUniqueArgs} args - Arguments to find a DeckTest
     * @example
     * // Get one DeckTest
     * const deckTest = await prisma.deckTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckTestFindUniqueArgs>(args: SelectSubset<T, DeckTestFindUniqueArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeckTest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeckTestFindUniqueOrThrowArgs} args - Arguments to find a DeckTest
     * @example
     * // Get one DeckTest
     * const deckTest = await prisma.deckTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckTestFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeckTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckTestFindFirstArgs} args - Arguments to find a DeckTest
     * @example
     * // Get one DeckTest
     * const deckTest = await prisma.deckTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckTestFindFirstArgs>(args?: SelectSubset<T, DeckTestFindFirstArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeckTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckTestFindFirstOrThrowArgs} args - Arguments to find a DeckTest
     * @example
     * // Get one DeckTest
     * const deckTest = await prisma.deckTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckTestFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeckTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeckTests
     * const deckTests = await prisma.deckTest.findMany()
     * 
     * // Get first 10 DeckTests
     * const deckTests = await prisma.deckTest.findMany({ take: 10 })
     * 
     * // Only select the `deck_id`
     * const deckTestWithDeck_idOnly = await prisma.deckTest.findMany({ select: { deck_id: true } })
     * 
     */
    findMany<T extends DeckTestFindManyArgs>(args?: SelectSubset<T, DeckTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeckTest.
     * @param {DeckTestCreateArgs} args - Arguments to create a DeckTest.
     * @example
     * // Create one DeckTest
     * const DeckTest = await prisma.deckTest.create({
     *   data: {
     *     // ... data to create a DeckTest
     *   }
     * })
     * 
     */
    create<T extends DeckTestCreateArgs>(args: SelectSubset<T, DeckTestCreateArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeckTests.
     * @param {DeckTestCreateManyArgs} args - Arguments to create many DeckTests.
     * @example
     * // Create many DeckTests
     * const deckTest = await prisma.deckTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckTestCreateManyArgs>(args?: SelectSubset<T, DeckTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeckTests and returns the data saved in the database.
     * @param {DeckTestCreateManyAndReturnArgs} args - Arguments to create many DeckTests.
     * @example
     * // Create many DeckTests
     * const deckTest = await prisma.deckTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeckTests and only return the `deck_id`
     * const deckTestWithDeck_idOnly = await prisma.deckTest.createManyAndReturn({ 
     *   select: { deck_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckTestCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeckTest.
     * @param {DeckTestDeleteArgs} args - Arguments to delete one DeckTest.
     * @example
     * // Delete one DeckTest
     * const DeckTest = await prisma.deckTest.delete({
     *   where: {
     *     // ... filter to delete one DeckTest
     *   }
     * })
     * 
     */
    delete<T extends DeckTestDeleteArgs>(args: SelectSubset<T, DeckTestDeleteArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeckTest.
     * @param {DeckTestUpdateArgs} args - Arguments to update one DeckTest.
     * @example
     * // Update one DeckTest
     * const deckTest = await prisma.deckTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckTestUpdateArgs>(args: SelectSubset<T, DeckTestUpdateArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeckTests.
     * @param {DeckTestDeleteManyArgs} args - Arguments to filter DeckTests to delete.
     * @example
     * // Delete a few DeckTests
     * const { count } = await prisma.deckTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckTestDeleteManyArgs>(args?: SelectSubset<T, DeckTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeckTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeckTests
     * const deckTest = await prisma.deckTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckTestUpdateManyArgs>(args: SelectSubset<T, DeckTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeckTest.
     * @param {DeckTestUpsertArgs} args - Arguments to update or create a DeckTest.
     * @example
     * // Update or create a DeckTest
     * const deckTest = await prisma.deckTest.upsert({
     *   create: {
     *     // ... data to create a DeckTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeckTest we want to update
     *   }
     * })
     */
    upsert<T extends DeckTestUpsertArgs>(args: SelectSubset<T, DeckTestUpsertArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeckTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckTestCountArgs} args - Arguments to filter DeckTests to count.
     * @example
     * // Count the number of DeckTests
     * const count = await prisma.deckTest.count({
     *   where: {
     *     // ... the filter for the DeckTests we want to count
     *   }
     * })
    **/
    count<T extends DeckTestCountArgs>(
      args?: Subset<T, DeckTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeckTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeckTestAggregateArgs>(args: Subset<T, DeckTestAggregateArgs>): Prisma.PrismaPromise<GetDeckTestAggregateType<T>>

    /**
     * Group by DeckTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckTestGroupByArgs} args - Group by arguments.
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
      T extends DeckTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckTestGroupByArgs['orderBy'] }
        : { orderBy?: DeckTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeckTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeckTest model
   */
  readonly fields: DeckTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeckTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    UserCardTest<T extends DeckTest$UserCardTestArgs<ExtArgs> = {}>(args?: Subset<T, DeckTest$UserCardTestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the DeckTest model
   */ 
  interface DeckTestFieldRefs {
    readonly deck_id: FieldRef<"DeckTest", 'String'>
    readonly user_id: FieldRef<"DeckTest", 'String'>
    readonly deck_description: FieldRef<"DeckTest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeckTest findUnique
   */
  export type DeckTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * Filter, which DeckTest to fetch.
     */
    where: DeckTestWhereUniqueInput
  }

  /**
   * DeckTest findUniqueOrThrow
   */
  export type DeckTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * Filter, which DeckTest to fetch.
     */
    where: DeckTestWhereUniqueInput
  }

  /**
   * DeckTest findFirst
   */
  export type DeckTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * Filter, which DeckTest to fetch.
     */
    where?: DeckTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckTests to fetch.
     */
    orderBy?: DeckTestOrderByWithRelationInput | DeckTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckTests.
     */
    cursor?: DeckTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckTests.
     */
    distinct?: DeckTestScalarFieldEnum | DeckTestScalarFieldEnum[]
  }

  /**
   * DeckTest findFirstOrThrow
   */
  export type DeckTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * Filter, which DeckTest to fetch.
     */
    where?: DeckTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckTests to fetch.
     */
    orderBy?: DeckTestOrderByWithRelationInput | DeckTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckTests.
     */
    cursor?: DeckTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckTests.
     */
    distinct?: DeckTestScalarFieldEnum | DeckTestScalarFieldEnum[]
  }

  /**
   * DeckTest findMany
   */
  export type DeckTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * Filter, which DeckTests to fetch.
     */
    where?: DeckTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckTests to fetch.
     */
    orderBy?: DeckTestOrderByWithRelationInput | DeckTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeckTests.
     */
    cursor?: DeckTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckTests.
     */
    skip?: number
    distinct?: DeckTestScalarFieldEnum | DeckTestScalarFieldEnum[]
  }

  /**
   * DeckTest create
   */
  export type DeckTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * The data needed to create a DeckTest.
     */
    data: XOR<DeckTestCreateInput, DeckTestUncheckedCreateInput>
  }

  /**
   * DeckTest createMany
   */
  export type DeckTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeckTests.
     */
    data: DeckTestCreateManyInput | DeckTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeckTest createManyAndReturn
   */
  export type DeckTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeckTests.
     */
    data: DeckTestCreateManyInput | DeckTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeckTest update
   */
  export type DeckTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * The data needed to update a DeckTest.
     */
    data: XOR<DeckTestUpdateInput, DeckTestUncheckedUpdateInput>
    /**
     * Choose, which DeckTest to update.
     */
    where: DeckTestWhereUniqueInput
  }

  /**
   * DeckTest updateMany
   */
  export type DeckTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeckTests.
     */
    data: XOR<DeckTestUpdateManyMutationInput, DeckTestUncheckedUpdateManyInput>
    /**
     * Filter which DeckTests to update
     */
    where?: DeckTestWhereInput
  }

  /**
   * DeckTest upsert
   */
  export type DeckTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * The filter to search for the DeckTest to update in case it exists.
     */
    where: DeckTestWhereUniqueInput
    /**
     * In case the DeckTest found by the `where` argument doesn't exist, create a new DeckTest with this data.
     */
    create: XOR<DeckTestCreateInput, DeckTestUncheckedCreateInput>
    /**
     * In case the DeckTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckTestUpdateInput, DeckTestUncheckedUpdateInput>
  }

  /**
   * DeckTest delete
   */
  export type DeckTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
    /**
     * Filter which DeckTest to delete.
     */
    where: DeckTestWhereUniqueInput
  }

  /**
   * DeckTest deleteMany
   */
  export type DeckTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckTests to delete
     */
    where?: DeckTestWhereInput
  }

  /**
   * DeckTest.UserCardTest
   */
  export type DeckTest$UserCardTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    where?: UserCardTestWhereInput
    orderBy?: UserCardTestOrderByWithRelationInput | UserCardTestOrderByWithRelationInput[]
    cursor?: UserCardTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCardTestScalarFieldEnum | UserCardTestScalarFieldEnum[]
  }

  /**
   * DeckTest without action
   */
  export type DeckTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckTest
     */
    select?: DeckTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckTestInclude<ExtArgs> | null
  }


  /**
   * Model UserCardTest
   */

  export type AggregateUserCardTest = {
    _count: UserCardTestCountAggregateOutputType | null
    _min: UserCardTestMinAggregateOutputType | null
    _max: UserCardTestMaxAggregateOutputType | null
  }

  export type UserCardTestMinAggregateOutputType = {
    user_card_id: string | null
    user_id: string | null
    deck_id: string | null
    question: string | null
    answer: string | null
    example: string | null
  }

  export type UserCardTestMaxAggregateOutputType = {
    user_card_id: string | null
    user_id: string | null
    deck_id: string | null
    question: string | null
    answer: string | null
    example: string | null
  }

  export type UserCardTestCountAggregateOutputType = {
    user_card_id: number
    user_id: number
    deck_id: number
    question: number
    answer: number
    example: number
    _all: number
  }


  export type UserCardTestMinAggregateInputType = {
    user_card_id?: true
    user_id?: true
    deck_id?: true
    question?: true
    answer?: true
    example?: true
  }

  export type UserCardTestMaxAggregateInputType = {
    user_card_id?: true
    user_id?: true
    deck_id?: true
    question?: true
    answer?: true
    example?: true
  }

  export type UserCardTestCountAggregateInputType = {
    user_card_id?: true
    user_id?: true
    deck_id?: true
    question?: true
    answer?: true
    example?: true
    _all?: true
  }

  export type UserCardTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCardTest to aggregate.
     */
    where?: UserCardTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCardTests to fetch.
     */
    orderBy?: UserCardTestOrderByWithRelationInput | UserCardTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCardTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCardTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCardTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCardTests
    **/
    _count?: true | UserCardTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCardTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCardTestMaxAggregateInputType
  }

  export type GetUserCardTestAggregateType<T extends UserCardTestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCardTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCardTest[P]>
      : GetScalarType<T[P], AggregateUserCardTest[P]>
  }




  export type UserCardTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCardTestWhereInput
    orderBy?: UserCardTestOrderByWithAggregationInput | UserCardTestOrderByWithAggregationInput[]
    by: UserCardTestScalarFieldEnum[] | UserCardTestScalarFieldEnum
    having?: UserCardTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCardTestCountAggregateInputType | true
    _min?: UserCardTestMinAggregateInputType
    _max?: UserCardTestMaxAggregateInputType
  }

  export type UserCardTestGroupByOutputType = {
    user_card_id: string
    user_id: string
    deck_id: string
    question: string
    answer: string
    example: string | null
    _count: UserCardTestCountAggregateOutputType | null
    _min: UserCardTestMinAggregateOutputType | null
    _max: UserCardTestMaxAggregateOutputType | null
  }

  type GetUserCardTestGroupByPayload<T extends UserCardTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCardTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCardTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCardTestGroupByOutputType[P]>
            : GetScalarType<T[P], UserCardTestGroupByOutputType[P]>
        }
      >
    >


  export type UserCardTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_card_id?: boolean
    user_id?: boolean
    deck_id?: boolean
    question?: boolean
    answer?: boolean
    example?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    deck?: boolean | DeckTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCardTest"]>

  export type UserCardTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_card_id?: boolean
    user_id?: boolean
    deck_id?: boolean
    question?: boolean
    answer?: boolean
    example?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    deck?: boolean | DeckTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCardTest"]>

  export type UserCardTestSelectScalar = {
    user_card_id?: boolean
    user_id?: boolean
    deck_id?: boolean
    question?: boolean
    answer?: boolean
    example?: boolean
  }

  export type UserCardTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    deck?: boolean | DeckTestDefaultArgs<ExtArgs>
  }
  export type UserCardTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    deck?: boolean | DeckTestDefaultArgs<ExtArgs>
  }

  export type $UserCardTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCardTest"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      deck: Prisma.$DeckTestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_card_id: string
      user_id: string
      deck_id: string
      question: string
      answer: string
      example: string | null
    }, ExtArgs["result"]["userCardTest"]>
    composites: {}
  }

  type UserCardTestGetPayload<S extends boolean | null | undefined | UserCardTestDefaultArgs> = $Result.GetResult<Prisma.$UserCardTestPayload, S>

  type UserCardTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCardTestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCardTestCountAggregateInputType | true
    }

  export interface UserCardTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCardTest'], meta: { name: 'UserCardTest' } }
    /**
     * Find zero or one UserCardTest that matches the filter.
     * @param {UserCardTestFindUniqueArgs} args - Arguments to find a UserCardTest
     * @example
     * // Get one UserCardTest
     * const userCardTest = await prisma.userCardTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCardTestFindUniqueArgs>(args: SelectSubset<T, UserCardTestFindUniqueArgs<ExtArgs>>): Prisma__UserCardTestClient<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserCardTest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserCardTestFindUniqueOrThrowArgs} args - Arguments to find a UserCardTest
     * @example
     * // Get one UserCardTest
     * const userCardTest = await prisma.userCardTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCardTestFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCardTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCardTestClient<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserCardTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardTestFindFirstArgs} args - Arguments to find a UserCardTest
     * @example
     * // Get one UserCardTest
     * const userCardTest = await prisma.userCardTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCardTestFindFirstArgs>(args?: SelectSubset<T, UserCardTestFindFirstArgs<ExtArgs>>): Prisma__UserCardTestClient<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserCardTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardTestFindFirstOrThrowArgs} args - Arguments to find a UserCardTest
     * @example
     * // Get one UserCardTest
     * const userCardTest = await prisma.userCardTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCardTestFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCardTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCardTestClient<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserCardTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCardTests
     * const userCardTests = await prisma.userCardTest.findMany()
     * 
     * // Get first 10 UserCardTests
     * const userCardTests = await prisma.userCardTest.findMany({ take: 10 })
     * 
     * // Only select the `user_card_id`
     * const userCardTestWithUser_card_idOnly = await prisma.userCardTest.findMany({ select: { user_card_id: true } })
     * 
     */
    findMany<T extends UserCardTestFindManyArgs>(args?: SelectSubset<T, UserCardTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserCardTest.
     * @param {UserCardTestCreateArgs} args - Arguments to create a UserCardTest.
     * @example
     * // Create one UserCardTest
     * const UserCardTest = await prisma.userCardTest.create({
     *   data: {
     *     // ... data to create a UserCardTest
     *   }
     * })
     * 
     */
    create<T extends UserCardTestCreateArgs>(args: SelectSubset<T, UserCardTestCreateArgs<ExtArgs>>): Prisma__UserCardTestClient<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserCardTests.
     * @param {UserCardTestCreateManyArgs} args - Arguments to create many UserCardTests.
     * @example
     * // Create many UserCardTests
     * const userCardTest = await prisma.userCardTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCardTestCreateManyArgs>(args?: SelectSubset<T, UserCardTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCardTests and returns the data saved in the database.
     * @param {UserCardTestCreateManyAndReturnArgs} args - Arguments to create many UserCardTests.
     * @example
     * // Create many UserCardTests
     * const userCardTest = await prisma.userCardTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCardTests and only return the `user_card_id`
     * const userCardTestWithUser_card_idOnly = await prisma.userCardTest.createManyAndReturn({ 
     *   select: { user_card_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCardTestCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCardTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserCardTest.
     * @param {UserCardTestDeleteArgs} args - Arguments to delete one UserCardTest.
     * @example
     * // Delete one UserCardTest
     * const UserCardTest = await prisma.userCardTest.delete({
     *   where: {
     *     // ... filter to delete one UserCardTest
     *   }
     * })
     * 
     */
    delete<T extends UserCardTestDeleteArgs>(args: SelectSubset<T, UserCardTestDeleteArgs<ExtArgs>>): Prisma__UserCardTestClient<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserCardTest.
     * @param {UserCardTestUpdateArgs} args - Arguments to update one UserCardTest.
     * @example
     * // Update one UserCardTest
     * const userCardTest = await prisma.userCardTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCardTestUpdateArgs>(args: SelectSubset<T, UserCardTestUpdateArgs<ExtArgs>>): Prisma__UserCardTestClient<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserCardTests.
     * @param {UserCardTestDeleteManyArgs} args - Arguments to filter UserCardTests to delete.
     * @example
     * // Delete a few UserCardTests
     * const { count } = await prisma.userCardTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCardTestDeleteManyArgs>(args?: SelectSubset<T, UserCardTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCardTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCardTests
     * const userCardTest = await prisma.userCardTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCardTestUpdateManyArgs>(args: SelectSubset<T, UserCardTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCardTest.
     * @param {UserCardTestUpsertArgs} args - Arguments to update or create a UserCardTest.
     * @example
     * // Update or create a UserCardTest
     * const userCardTest = await prisma.userCardTest.upsert({
     *   create: {
     *     // ... data to create a UserCardTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCardTest we want to update
     *   }
     * })
     */
    upsert<T extends UserCardTestUpsertArgs>(args: SelectSubset<T, UserCardTestUpsertArgs<ExtArgs>>): Prisma__UserCardTestClient<$Result.GetResult<Prisma.$UserCardTestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserCardTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardTestCountArgs} args - Arguments to filter UserCardTests to count.
     * @example
     * // Count the number of UserCardTests
     * const count = await prisma.userCardTest.count({
     *   where: {
     *     // ... the filter for the UserCardTests we want to count
     *   }
     * })
    **/
    count<T extends UserCardTestCountArgs>(
      args?: Subset<T, UserCardTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCardTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCardTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCardTestAggregateArgs>(args: Subset<T, UserCardTestAggregateArgs>): Prisma.PrismaPromise<GetUserCardTestAggregateType<T>>

    /**
     * Group by UserCardTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardTestGroupByArgs} args - Group by arguments.
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
      T extends UserCardTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCardTestGroupByArgs['orderBy'] }
        : { orderBy?: UserCardTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCardTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCardTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCardTest model
   */
  readonly fields: UserCardTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCardTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCardTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    deck<T extends DeckTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckTestDefaultArgs<ExtArgs>>): Prisma__DeckTestClient<$Result.GetResult<Prisma.$DeckTestPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserCardTest model
   */ 
  interface UserCardTestFieldRefs {
    readonly user_card_id: FieldRef<"UserCardTest", 'String'>
    readonly user_id: FieldRef<"UserCardTest", 'String'>
    readonly deck_id: FieldRef<"UserCardTest", 'String'>
    readonly question: FieldRef<"UserCardTest", 'String'>
    readonly answer: FieldRef<"UserCardTest", 'String'>
    readonly example: FieldRef<"UserCardTest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserCardTest findUnique
   */
  export type UserCardTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * Filter, which UserCardTest to fetch.
     */
    where: UserCardTestWhereUniqueInput
  }

  /**
   * UserCardTest findUniqueOrThrow
   */
  export type UserCardTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * Filter, which UserCardTest to fetch.
     */
    where: UserCardTestWhereUniqueInput
  }

  /**
   * UserCardTest findFirst
   */
  export type UserCardTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * Filter, which UserCardTest to fetch.
     */
    where?: UserCardTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCardTests to fetch.
     */
    orderBy?: UserCardTestOrderByWithRelationInput | UserCardTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCardTests.
     */
    cursor?: UserCardTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCardTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCardTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCardTests.
     */
    distinct?: UserCardTestScalarFieldEnum | UserCardTestScalarFieldEnum[]
  }

  /**
   * UserCardTest findFirstOrThrow
   */
  export type UserCardTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * Filter, which UserCardTest to fetch.
     */
    where?: UserCardTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCardTests to fetch.
     */
    orderBy?: UserCardTestOrderByWithRelationInput | UserCardTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCardTests.
     */
    cursor?: UserCardTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCardTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCardTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCardTests.
     */
    distinct?: UserCardTestScalarFieldEnum | UserCardTestScalarFieldEnum[]
  }

  /**
   * UserCardTest findMany
   */
  export type UserCardTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * Filter, which UserCardTests to fetch.
     */
    where?: UserCardTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCardTests to fetch.
     */
    orderBy?: UserCardTestOrderByWithRelationInput | UserCardTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCardTests.
     */
    cursor?: UserCardTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCardTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCardTests.
     */
    skip?: number
    distinct?: UserCardTestScalarFieldEnum | UserCardTestScalarFieldEnum[]
  }

  /**
   * UserCardTest create
   */
  export type UserCardTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCardTest.
     */
    data: XOR<UserCardTestCreateInput, UserCardTestUncheckedCreateInput>
  }

  /**
   * UserCardTest createMany
   */
  export type UserCardTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCardTests.
     */
    data: UserCardTestCreateManyInput | UserCardTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCardTest createManyAndReturn
   */
  export type UserCardTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserCardTests.
     */
    data: UserCardTestCreateManyInput | UserCardTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCardTest update
   */
  export type UserCardTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCardTest.
     */
    data: XOR<UserCardTestUpdateInput, UserCardTestUncheckedUpdateInput>
    /**
     * Choose, which UserCardTest to update.
     */
    where: UserCardTestWhereUniqueInput
  }

  /**
   * UserCardTest updateMany
   */
  export type UserCardTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCardTests.
     */
    data: XOR<UserCardTestUpdateManyMutationInput, UserCardTestUncheckedUpdateManyInput>
    /**
     * Filter which UserCardTests to update
     */
    where?: UserCardTestWhereInput
  }

  /**
   * UserCardTest upsert
   */
  export type UserCardTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCardTest to update in case it exists.
     */
    where: UserCardTestWhereUniqueInput
    /**
     * In case the UserCardTest found by the `where` argument doesn't exist, create a new UserCardTest with this data.
     */
    create: XOR<UserCardTestCreateInput, UserCardTestUncheckedCreateInput>
    /**
     * In case the UserCardTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCardTestUpdateInput, UserCardTestUncheckedUpdateInput>
  }

  /**
   * UserCardTest delete
   */
  export type UserCardTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
    /**
     * Filter which UserCardTest to delete.
     */
    where: UserCardTestWhereUniqueInput
  }

  /**
   * UserCardTest deleteMany
   */
  export type UserCardTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCardTests to delete
     */
    where?: UserCardTestWhereInput
  }

  /**
   * UserCardTest without action
   */
  export type UserCardTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardTest
     */
    select?: UserCardTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardTestInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_email: 'user_email',
    created_at: 'created_at',
    updated_at: 'updated_at',
    first_name: 'first_name',
    last_name: 'last_name',
    nickname: 'nickname',
    deleted: 'deleted'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const DeckTestScalarFieldEnum: {
    deck_id: 'deck_id',
    user_id: 'user_id',
    deck_description: 'deck_description'
  };

  export type DeckTestScalarFieldEnum = (typeof DeckTestScalarFieldEnum)[keyof typeof DeckTestScalarFieldEnum]


  export const UserCardTestScalarFieldEnum: {
    user_card_id: 'user_card_id',
    user_id: 'user_id',
    deck_id: 'deck_id',
    question: 'question',
    answer: 'answer',
    example: 'example'
  };

  export type UserCardTestScalarFieldEnum = (typeof UserCardTestScalarFieldEnum)[keyof typeof UserCardTestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_email?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    nickname?: StringNullableFilter<"Users"> | string | null
    deleted?: BoolFilter<"Users"> | boolean
    DeckTest?: DeckTestListRelationFilter
    UserCardTest?: UserCardTestListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    deleted?: SortOrder
    DeckTest?: DeckTestOrderByRelationAggregateInput
    UserCardTest?: UserCardTestOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    nickname?: StringNullableFilter<"Users"> | string | null
    deleted?: BoolFilter<"Users"> | boolean
    DeckTest?: DeckTestListRelationFilter
    UserCardTest?: UserCardTestListRelationFilter
  }, "user_email">

  export type UsersOrderByWithAggregationInput = {
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_email?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    first_name?: StringWithAggregatesFilter<"Users"> | string
    last_name?: StringWithAggregatesFilter<"Users"> | string
    nickname?: StringNullableWithAggregatesFilter<"Users"> | string | null
    deleted?: BoolWithAggregatesFilter<"Users"> | boolean
  }

  export type DeckTestWhereInput = {
    AND?: DeckTestWhereInput | DeckTestWhereInput[]
    OR?: DeckTestWhereInput[]
    NOT?: DeckTestWhereInput | DeckTestWhereInput[]
    deck_id?: StringFilter<"DeckTest"> | string
    user_id?: StringFilter<"DeckTest"> | string
    deck_description?: StringNullableFilter<"DeckTest"> | string | null
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    UserCardTest?: UserCardTestListRelationFilter
  }

  export type DeckTestOrderByWithRelationInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_description?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    UserCardTest?: UserCardTestOrderByRelationAggregateInput
  }

  export type DeckTestWhereUniqueInput = Prisma.AtLeast<{
    deck_id?: string
    AND?: DeckTestWhereInput | DeckTestWhereInput[]
    OR?: DeckTestWhereInput[]
    NOT?: DeckTestWhereInput | DeckTestWhereInput[]
    user_id?: StringFilter<"DeckTest"> | string
    deck_description?: StringNullableFilter<"DeckTest"> | string | null
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    UserCardTest?: UserCardTestListRelationFilter
  }, "deck_id">

  export type DeckTestOrderByWithAggregationInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_description?: SortOrderInput | SortOrder
    _count?: DeckTestCountOrderByAggregateInput
    _max?: DeckTestMaxOrderByAggregateInput
    _min?: DeckTestMinOrderByAggregateInput
  }

  export type DeckTestScalarWhereWithAggregatesInput = {
    AND?: DeckTestScalarWhereWithAggregatesInput | DeckTestScalarWhereWithAggregatesInput[]
    OR?: DeckTestScalarWhereWithAggregatesInput[]
    NOT?: DeckTestScalarWhereWithAggregatesInput | DeckTestScalarWhereWithAggregatesInput[]
    deck_id?: StringWithAggregatesFilter<"DeckTest"> | string
    user_id?: StringWithAggregatesFilter<"DeckTest"> | string
    deck_description?: StringNullableWithAggregatesFilter<"DeckTest"> | string | null
  }

  export type UserCardTestWhereInput = {
    AND?: UserCardTestWhereInput | UserCardTestWhereInput[]
    OR?: UserCardTestWhereInput[]
    NOT?: UserCardTestWhereInput | UserCardTestWhereInput[]
    user_card_id?: StringFilter<"UserCardTest"> | string
    user_id?: StringFilter<"UserCardTest"> | string
    deck_id?: StringFilter<"UserCardTest"> | string
    question?: StringFilter<"UserCardTest"> | string
    answer?: StringFilter<"UserCardTest"> | string
    example?: StringNullableFilter<"UserCardTest"> | string | null
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    deck?: XOR<DeckTestRelationFilter, DeckTestWhereInput>
  }

  export type UserCardTestOrderByWithRelationInput = {
    user_card_id?: SortOrder
    user_id?: SortOrder
    deck_id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    example?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    deck?: DeckTestOrderByWithRelationInput
  }

  export type UserCardTestWhereUniqueInput = Prisma.AtLeast<{
    user_card_id?: string
    AND?: UserCardTestWhereInput | UserCardTestWhereInput[]
    OR?: UserCardTestWhereInput[]
    NOT?: UserCardTestWhereInput | UserCardTestWhereInput[]
    user_id?: StringFilter<"UserCardTest"> | string
    deck_id?: StringFilter<"UserCardTest"> | string
    question?: StringFilter<"UserCardTest"> | string
    answer?: StringFilter<"UserCardTest"> | string
    example?: StringNullableFilter<"UserCardTest"> | string | null
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    deck?: XOR<DeckTestRelationFilter, DeckTestWhereInput>
  }, "user_card_id">

  export type UserCardTestOrderByWithAggregationInput = {
    user_card_id?: SortOrder
    user_id?: SortOrder
    deck_id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    example?: SortOrderInput | SortOrder
    _count?: UserCardTestCountOrderByAggregateInput
    _max?: UserCardTestMaxOrderByAggregateInput
    _min?: UserCardTestMinOrderByAggregateInput
  }

  export type UserCardTestScalarWhereWithAggregatesInput = {
    AND?: UserCardTestScalarWhereWithAggregatesInput | UserCardTestScalarWhereWithAggregatesInput[]
    OR?: UserCardTestScalarWhereWithAggregatesInput[]
    NOT?: UserCardTestScalarWhereWithAggregatesInput | UserCardTestScalarWhereWithAggregatesInput[]
    user_card_id?: StringWithAggregatesFilter<"UserCardTest"> | string
    user_id?: StringWithAggregatesFilter<"UserCardTest"> | string
    deck_id?: StringWithAggregatesFilter<"UserCardTest"> | string
    question?: StringWithAggregatesFilter<"UserCardTest"> | string
    answer?: StringWithAggregatesFilter<"UserCardTest"> | string
    example?: StringNullableWithAggregatesFilter<"UserCardTest"> | string | null
  }

  export type UsersCreateInput = {
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    nickname?: string | null
    deleted?: boolean
    DeckTest?: DeckTestCreateNestedManyWithoutUserInput
    UserCardTest?: UserCardTestCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    nickname?: string | null
    deleted?: boolean
    DeckTest?: DeckTestUncheckedCreateNestedManyWithoutUserInput
    UserCardTest?: UserCardTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    DeckTest?: DeckTestUpdateManyWithoutUserNestedInput
    UserCardTest?: UserCardTestUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    DeckTest?: DeckTestUncheckedUpdateManyWithoutUserNestedInput
    UserCardTest?: UserCardTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    nickname?: string | null
    deleted?: boolean
  }

  export type UsersUpdateManyMutationInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersUncheckedUpdateManyInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeckTestCreateInput = {
    deck_id: string
    deck_description?: string | null
    user: UsersCreateNestedOneWithoutDeckTestInput
    UserCardTest?: UserCardTestCreateNestedManyWithoutDeckInput
  }

  export type DeckTestUncheckedCreateInput = {
    deck_id: string
    user_id: string
    deck_description?: string | null
    UserCardTest?: UserCardTestUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckTestUpdateInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutDeckTestNestedInput
    UserCardTest?: UserCardTestUpdateManyWithoutDeckNestedInput
  }

  export type DeckTestUncheckedUpdateInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
    UserCardTest?: UserCardTestUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckTestCreateManyInput = {
    deck_id: string
    user_id: string
    deck_description?: string | null
  }

  export type DeckTestUpdateManyMutationInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeckTestUncheckedUpdateManyInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCardTestCreateInput = {
    user_card_id: string
    question: string
    answer: string
    example?: string | null
    user: UsersCreateNestedOneWithoutUserCardTestInput
    deck: DeckTestCreateNestedOneWithoutUserCardTestInput
  }

  export type UserCardTestUncheckedCreateInput = {
    user_card_id: string
    user_id: string
    deck_id: string
    question: string
    answer: string
    example?: string | null
  }

  export type UserCardTestUpdateInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutUserCardTestNestedInput
    deck?: DeckTestUpdateOneRequiredWithoutUserCardTestNestedInput
  }

  export type UserCardTestUncheckedUpdateInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    deck_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCardTestCreateManyInput = {
    user_card_id: string
    user_id: string
    deck_id: string
    question: string
    answer: string
    example?: string | null
  }

  export type UserCardTestUpdateManyMutationInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCardTestUncheckedUpdateManyInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    deck_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DeckTestListRelationFilter = {
    every?: DeckTestWhereInput
    some?: DeckTestWhereInput
    none?: DeckTestWhereInput
  }

  export type UserCardTestListRelationFilter = {
    every?: UserCardTestWhereInput
    some?: UserCardTestWhereInput
    none?: UserCardTestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeckTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCardTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    nickname?: SortOrder
    deleted?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    nickname?: SortOrder
    deleted?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    nickname?: SortOrder
    deleted?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type DeckTestCountOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_description?: SortOrder
  }

  export type DeckTestMaxOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_description?: SortOrder
  }

  export type DeckTestMinOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_description?: SortOrder
  }

  export type DeckTestRelationFilter = {
    is?: DeckTestWhereInput
    isNot?: DeckTestWhereInput
  }

  export type UserCardTestCountOrderByAggregateInput = {
    user_card_id?: SortOrder
    user_id?: SortOrder
    deck_id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    example?: SortOrder
  }

  export type UserCardTestMaxOrderByAggregateInput = {
    user_card_id?: SortOrder
    user_id?: SortOrder
    deck_id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    example?: SortOrder
  }

  export type UserCardTestMinOrderByAggregateInput = {
    user_card_id?: SortOrder
    user_id?: SortOrder
    deck_id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    example?: SortOrder
  }

  export type DeckTestCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckTestCreateWithoutUserInput, DeckTestUncheckedCreateWithoutUserInput> | DeckTestCreateWithoutUserInput[] | DeckTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckTestCreateOrConnectWithoutUserInput | DeckTestCreateOrConnectWithoutUserInput[]
    createMany?: DeckTestCreateManyUserInputEnvelope
    connect?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
  }

  export type UserCardTestCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCardTestCreateWithoutUserInput, UserCardTestUncheckedCreateWithoutUserInput> | UserCardTestCreateWithoutUserInput[] | UserCardTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCardTestCreateOrConnectWithoutUserInput | UserCardTestCreateOrConnectWithoutUserInput[]
    createMany?: UserCardTestCreateManyUserInputEnvelope
    connect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
  }

  export type DeckTestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckTestCreateWithoutUserInput, DeckTestUncheckedCreateWithoutUserInput> | DeckTestCreateWithoutUserInput[] | DeckTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckTestCreateOrConnectWithoutUserInput | DeckTestCreateOrConnectWithoutUserInput[]
    createMany?: DeckTestCreateManyUserInputEnvelope
    connect?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
  }

  export type UserCardTestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCardTestCreateWithoutUserInput, UserCardTestUncheckedCreateWithoutUserInput> | UserCardTestCreateWithoutUserInput[] | UserCardTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCardTestCreateOrConnectWithoutUserInput | UserCardTestCreateOrConnectWithoutUserInput[]
    createMany?: UserCardTestCreateManyUserInputEnvelope
    connect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeckTestUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckTestCreateWithoutUserInput, DeckTestUncheckedCreateWithoutUserInput> | DeckTestCreateWithoutUserInput[] | DeckTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckTestCreateOrConnectWithoutUserInput | DeckTestCreateOrConnectWithoutUserInput[]
    upsert?: DeckTestUpsertWithWhereUniqueWithoutUserInput | DeckTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckTestCreateManyUserInputEnvelope
    set?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
    disconnect?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
    delete?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
    connect?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
    update?: DeckTestUpdateWithWhereUniqueWithoutUserInput | DeckTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckTestUpdateManyWithWhereWithoutUserInput | DeckTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckTestScalarWhereInput | DeckTestScalarWhereInput[]
  }

  export type UserCardTestUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCardTestCreateWithoutUserInput, UserCardTestUncheckedCreateWithoutUserInput> | UserCardTestCreateWithoutUserInput[] | UserCardTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCardTestCreateOrConnectWithoutUserInput | UserCardTestCreateOrConnectWithoutUserInput[]
    upsert?: UserCardTestUpsertWithWhereUniqueWithoutUserInput | UserCardTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCardTestCreateManyUserInputEnvelope
    set?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    disconnect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    delete?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    connect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    update?: UserCardTestUpdateWithWhereUniqueWithoutUserInput | UserCardTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCardTestUpdateManyWithWhereWithoutUserInput | UserCardTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCardTestScalarWhereInput | UserCardTestScalarWhereInput[]
  }

  export type DeckTestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckTestCreateWithoutUserInput, DeckTestUncheckedCreateWithoutUserInput> | DeckTestCreateWithoutUserInput[] | DeckTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckTestCreateOrConnectWithoutUserInput | DeckTestCreateOrConnectWithoutUserInput[]
    upsert?: DeckTestUpsertWithWhereUniqueWithoutUserInput | DeckTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckTestCreateManyUserInputEnvelope
    set?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
    disconnect?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
    delete?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
    connect?: DeckTestWhereUniqueInput | DeckTestWhereUniqueInput[]
    update?: DeckTestUpdateWithWhereUniqueWithoutUserInput | DeckTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckTestUpdateManyWithWhereWithoutUserInput | DeckTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckTestScalarWhereInput | DeckTestScalarWhereInput[]
  }

  export type UserCardTestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCardTestCreateWithoutUserInput, UserCardTestUncheckedCreateWithoutUserInput> | UserCardTestCreateWithoutUserInput[] | UserCardTestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCardTestCreateOrConnectWithoutUserInput | UserCardTestCreateOrConnectWithoutUserInput[]
    upsert?: UserCardTestUpsertWithWhereUniqueWithoutUserInput | UserCardTestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCardTestCreateManyUserInputEnvelope
    set?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    disconnect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    delete?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    connect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    update?: UserCardTestUpdateWithWhereUniqueWithoutUserInput | UserCardTestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCardTestUpdateManyWithWhereWithoutUserInput | UserCardTestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCardTestScalarWhereInput | UserCardTestScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutDeckTestInput = {
    create?: XOR<UsersCreateWithoutDeckTestInput, UsersUncheckedCreateWithoutDeckTestInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDeckTestInput
    connect?: UsersWhereUniqueInput
  }

  export type UserCardTestCreateNestedManyWithoutDeckInput = {
    create?: XOR<UserCardTestCreateWithoutDeckInput, UserCardTestUncheckedCreateWithoutDeckInput> | UserCardTestCreateWithoutDeckInput[] | UserCardTestUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: UserCardTestCreateOrConnectWithoutDeckInput | UserCardTestCreateOrConnectWithoutDeckInput[]
    createMany?: UserCardTestCreateManyDeckInputEnvelope
    connect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
  }

  export type UserCardTestUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<UserCardTestCreateWithoutDeckInput, UserCardTestUncheckedCreateWithoutDeckInput> | UserCardTestCreateWithoutDeckInput[] | UserCardTestUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: UserCardTestCreateOrConnectWithoutDeckInput | UserCardTestCreateOrConnectWithoutDeckInput[]
    createMany?: UserCardTestCreateManyDeckInputEnvelope
    connect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutDeckTestNestedInput = {
    create?: XOR<UsersCreateWithoutDeckTestInput, UsersUncheckedCreateWithoutDeckTestInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDeckTestInput
    upsert?: UsersUpsertWithoutDeckTestInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDeckTestInput, UsersUpdateWithoutDeckTestInput>, UsersUncheckedUpdateWithoutDeckTestInput>
  }

  export type UserCardTestUpdateManyWithoutDeckNestedInput = {
    create?: XOR<UserCardTestCreateWithoutDeckInput, UserCardTestUncheckedCreateWithoutDeckInput> | UserCardTestCreateWithoutDeckInput[] | UserCardTestUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: UserCardTestCreateOrConnectWithoutDeckInput | UserCardTestCreateOrConnectWithoutDeckInput[]
    upsert?: UserCardTestUpsertWithWhereUniqueWithoutDeckInput | UserCardTestUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: UserCardTestCreateManyDeckInputEnvelope
    set?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    disconnect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    delete?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    connect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    update?: UserCardTestUpdateWithWhereUniqueWithoutDeckInput | UserCardTestUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: UserCardTestUpdateManyWithWhereWithoutDeckInput | UserCardTestUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: UserCardTestScalarWhereInput | UserCardTestScalarWhereInput[]
  }

  export type UserCardTestUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<UserCardTestCreateWithoutDeckInput, UserCardTestUncheckedCreateWithoutDeckInput> | UserCardTestCreateWithoutDeckInput[] | UserCardTestUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: UserCardTestCreateOrConnectWithoutDeckInput | UserCardTestCreateOrConnectWithoutDeckInput[]
    upsert?: UserCardTestUpsertWithWhereUniqueWithoutDeckInput | UserCardTestUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: UserCardTestCreateManyDeckInputEnvelope
    set?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    disconnect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    delete?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    connect?: UserCardTestWhereUniqueInput | UserCardTestWhereUniqueInput[]
    update?: UserCardTestUpdateWithWhereUniqueWithoutDeckInput | UserCardTestUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: UserCardTestUpdateManyWithWhereWithoutDeckInput | UserCardTestUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: UserCardTestScalarWhereInput | UserCardTestScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUserCardTestInput = {
    create?: XOR<UsersCreateWithoutUserCardTestInput, UsersUncheckedCreateWithoutUserCardTestInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserCardTestInput
    connect?: UsersWhereUniqueInput
  }

  export type DeckTestCreateNestedOneWithoutUserCardTestInput = {
    create?: XOR<DeckTestCreateWithoutUserCardTestInput, DeckTestUncheckedCreateWithoutUserCardTestInput>
    connectOrCreate?: DeckTestCreateOrConnectWithoutUserCardTestInput
    connect?: DeckTestWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserCardTestNestedInput = {
    create?: XOR<UsersCreateWithoutUserCardTestInput, UsersUncheckedCreateWithoutUserCardTestInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserCardTestInput
    upsert?: UsersUpsertWithoutUserCardTestInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserCardTestInput, UsersUpdateWithoutUserCardTestInput>, UsersUncheckedUpdateWithoutUserCardTestInput>
  }

  export type DeckTestUpdateOneRequiredWithoutUserCardTestNestedInput = {
    create?: XOR<DeckTestCreateWithoutUserCardTestInput, DeckTestUncheckedCreateWithoutUserCardTestInput>
    connectOrCreate?: DeckTestCreateOrConnectWithoutUserCardTestInput
    upsert?: DeckTestUpsertWithoutUserCardTestInput
    connect?: DeckTestWhereUniqueInput
    update?: XOR<XOR<DeckTestUpdateToOneWithWhereWithoutUserCardTestInput, DeckTestUpdateWithoutUserCardTestInput>, DeckTestUncheckedUpdateWithoutUserCardTestInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DeckTestCreateWithoutUserInput = {
    deck_id: string
    deck_description?: string | null
    UserCardTest?: UserCardTestCreateNestedManyWithoutDeckInput
  }

  export type DeckTestUncheckedCreateWithoutUserInput = {
    deck_id: string
    deck_description?: string | null
    UserCardTest?: UserCardTestUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckTestCreateOrConnectWithoutUserInput = {
    where: DeckTestWhereUniqueInput
    create: XOR<DeckTestCreateWithoutUserInput, DeckTestUncheckedCreateWithoutUserInput>
  }

  export type DeckTestCreateManyUserInputEnvelope = {
    data: DeckTestCreateManyUserInput | DeckTestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCardTestCreateWithoutUserInput = {
    user_card_id: string
    question: string
    answer: string
    example?: string | null
    deck: DeckTestCreateNestedOneWithoutUserCardTestInput
  }

  export type UserCardTestUncheckedCreateWithoutUserInput = {
    user_card_id: string
    deck_id: string
    question: string
    answer: string
    example?: string | null
  }

  export type UserCardTestCreateOrConnectWithoutUserInput = {
    where: UserCardTestWhereUniqueInput
    create: XOR<UserCardTestCreateWithoutUserInput, UserCardTestUncheckedCreateWithoutUserInput>
  }

  export type UserCardTestCreateManyUserInputEnvelope = {
    data: UserCardTestCreateManyUserInput | UserCardTestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeckTestUpsertWithWhereUniqueWithoutUserInput = {
    where: DeckTestWhereUniqueInput
    update: XOR<DeckTestUpdateWithoutUserInput, DeckTestUncheckedUpdateWithoutUserInput>
    create: XOR<DeckTestCreateWithoutUserInput, DeckTestUncheckedCreateWithoutUserInput>
  }

  export type DeckTestUpdateWithWhereUniqueWithoutUserInput = {
    where: DeckTestWhereUniqueInput
    data: XOR<DeckTestUpdateWithoutUserInput, DeckTestUncheckedUpdateWithoutUserInput>
  }

  export type DeckTestUpdateManyWithWhereWithoutUserInput = {
    where: DeckTestScalarWhereInput
    data: XOR<DeckTestUpdateManyMutationInput, DeckTestUncheckedUpdateManyWithoutUserInput>
  }

  export type DeckTestScalarWhereInput = {
    AND?: DeckTestScalarWhereInput | DeckTestScalarWhereInput[]
    OR?: DeckTestScalarWhereInput[]
    NOT?: DeckTestScalarWhereInput | DeckTestScalarWhereInput[]
    deck_id?: StringFilter<"DeckTest"> | string
    user_id?: StringFilter<"DeckTest"> | string
    deck_description?: StringNullableFilter<"DeckTest"> | string | null
  }

  export type UserCardTestUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCardTestWhereUniqueInput
    update: XOR<UserCardTestUpdateWithoutUserInput, UserCardTestUncheckedUpdateWithoutUserInput>
    create: XOR<UserCardTestCreateWithoutUserInput, UserCardTestUncheckedCreateWithoutUserInput>
  }

  export type UserCardTestUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCardTestWhereUniqueInput
    data: XOR<UserCardTestUpdateWithoutUserInput, UserCardTestUncheckedUpdateWithoutUserInput>
  }

  export type UserCardTestUpdateManyWithWhereWithoutUserInput = {
    where: UserCardTestScalarWhereInput
    data: XOR<UserCardTestUpdateManyMutationInput, UserCardTestUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCardTestScalarWhereInput = {
    AND?: UserCardTestScalarWhereInput | UserCardTestScalarWhereInput[]
    OR?: UserCardTestScalarWhereInput[]
    NOT?: UserCardTestScalarWhereInput | UserCardTestScalarWhereInput[]
    user_card_id?: StringFilter<"UserCardTest"> | string
    user_id?: StringFilter<"UserCardTest"> | string
    deck_id?: StringFilter<"UserCardTest"> | string
    question?: StringFilter<"UserCardTest"> | string
    answer?: StringFilter<"UserCardTest"> | string
    example?: StringNullableFilter<"UserCardTest"> | string | null
  }

  export type UsersCreateWithoutDeckTestInput = {
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    nickname?: string | null
    deleted?: boolean
    UserCardTest?: UserCardTestCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutDeckTestInput = {
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    nickname?: string | null
    deleted?: boolean
    UserCardTest?: UserCardTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutDeckTestInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDeckTestInput, UsersUncheckedCreateWithoutDeckTestInput>
  }

  export type UserCardTestCreateWithoutDeckInput = {
    user_card_id: string
    question: string
    answer: string
    example?: string | null
    user: UsersCreateNestedOneWithoutUserCardTestInput
  }

  export type UserCardTestUncheckedCreateWithoutDeckInput = {
    user_card_id: string
    user_id: string
    question: string
    answer: string
    example?: string | null
  }

  export type UserCardTestCreateOrConnectWithoutDeckInput = {
    where: UserCardTestWhereUniqueInput
    create: XOR<UserCardTestCreateWithoutDeckInput, UserCardTestUncheckedCreateWithoutDeckInput>
  }

  export type UserCardTestCreateManyDeckInputEnvelope = {
    data: UserCardTestCreateManyDeckInput | UserCardTestCreateManyDeckInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutDeckTestInput = {
    update: XOR<UsersUpdateWithoutDeckTestInput, UsersUncheckedUpdateWithoutDeckTestInput>
    create: XOR<UsersCreateWithoutDeckTestInput, UsersUncheckedCreateWithoutDeckTestInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDeckTestInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDeckTestInput, UsersUncheckedUpdateWithoutDeckTestInput>
  }

  export type UsersUpdateWithoutDeckTestInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    UserCardTest?: UserCardTestUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutDeckTestInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    UserCardTest?: UserCardTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCardTestUpsertWithWhereUniqueWithoutDeckInput = {
    where: UserCardTestWhereUniqueInput
    update: XOR<UserCardTestUpdateWithoutDeckInput, UserCardTestUncheckedUpdateWithoutDeckInput>
    create: XOR<UserCardTestCreateWithoutDeckInput, UserCardTestUncheckedCreateWithoutDeckInput>
  }

  export type UserCardTestUpdateWithWhereUniqueWithoutDeckInput = {
    where: UserCardTestWhereUniqueInput
    data: XOR<UserCardTestUpdateWithoutDeckInput, UserCardTestUncheckedUpdateWithoutDeckInput>
  }

  export type UserCardTestUpdateManyWithWhereWithoutDeckInput = {
    where: UserCardTestScalarWhereInput
    data: XOR<UserCardTestUpdateManyMutationInput, UserCardTestUncheckedUpdateManyWithoutDeckInput>
  }

  export type UsersCreateWithoutUserCardTestInput = {
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    nickname?: string | null
    deleted?: boolean
    DeckTest?: DeckTestCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserCardTestInput = {
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string | null
    first_name: string
    last_name: string
    nickname?: string | null
    deleted?: boolean
    DeckTest?: DeckTestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserCardTestInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserCardTestInput, UsersUncheckedCreateWithoutUserCardTestInput>
  }

  export type DeckTestCreateWithoutUserCardTestInput = {
    deck_id: string
    deck_description?: string | null
    user: UsersCreateNestedOneWithoutDeckTestInput
  }

  export type DeckTestUncheckedCreateWithoutUserCardTestInput = {
    deck_id: string
    user_id: string
    deck_description?: string | null
  }

  export type DeckTestCreateOrConnectWithoutUserCardTestInput = {
    where: DeckTestWhereUniqueInput
    create: XOR<DeckTestCreateWithoutUserCardTestInput, DeckTestUncheckedCreateWithoutUserCardTestInput>
  }

  export type UsersUpsertWithoutUserCardTestInput = {
    update: XOR<UsersUpdateWithoutUserCardTestInput, UsersUncheckedUpdateWithoutUserCardTestInput>
    create: XOR<UsersCreateWithoutUserCardTestInput, UsersUncheckedCreateWithoutUserCardTestInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserCardTestInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserCardTestInput, UsersUncheckedUpdateWithoutUserCardTestInput>
  }

  export type UsersUpdateWithoutUserCardTestInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    DeckTest?: DeckTestUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserCardTestInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    DeckTest?: DeckTestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeckTestUpsertWithoutUserCardTestInput = {
    update: XOR<DeckTestUpdateWithoutUserCardTestInput, DeckTestUncheckedUpdateWithoutUserCardTestInput>
    create: XOR<DeckTestCreateWithoutUserCardTestInput, DeckTestUncheckedCreateWithoutUserCardTestInput>
    where?: DeckTestWhereInput
  }

  export type DeckTestUpdateToOneWithWhereWithoutUserCardTestInput = {
    where?: DeckTestWhereInput
    data: XOR<DeckTestUpdateWithoutUserCardTestInput, DeckTestUncheckedUpdateWithoutUserCardTestInput>
  }

  export type DeckTestUpdateWithoutUserCardTestInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutDeckTestNestedInput
  }

  export type DeckTestUncheckedUpdateWithoutUserCardTestInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeckTestCreateManyUserInput = {
    deck_id: string
    deck_description?: string | null
  }

  export type UserCardTestCreateManyUserInput = {
    user_card_id: string
    deck_id: string
    question: string
    answer: string
    example?: string | null
  }

  export type DeckTestUpdateWithoutUserInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
    UserCardTest?: UserCardTestUpdateManyWithoutDeckNestedInput
  }

  export type DeckTestUncheckedUpdateWithoutUserInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
    UserCardTest?: UserCardTestUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckTestUncheckedUpdateManyWithoutUserInput = {
    deck_id?: StringFieldUpdateOperationsInput | string
    deck_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCardTestUpdateWithoutUserInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    deck?: DeckTestUpdateOneRequiredWithoutUserCardTestNestedInput
  }

  export type UserCardTestUncheckedUpdateWithoutUserInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    deck_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCardTestUncheckedUpdateManyWithoutUserInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    deck_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCardTestCreateManyDeckInput = {
    user_card_id: string
    user_id: string
    question: string
    answer: string
    example?: string | null
  }

  export type UserCardTestUpdateWithoutDeckInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutUserCardTestNestedInput
  }

  export type UserCardTestUncheckedUpdateWithoutDeckInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCardTestUncheckedUpdateManyWithoutDeckInput = {
    user_card_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeckTestCountOutputTypeDefaultArgs instead
     */
    export type DeckTestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeckTestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeckTestDefaultArgs instead
     */
    export type DeckTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeckTestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCardTestDefaultArgs instead
     */
    export type UserCardTestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCardTestDefaultArgs<ExtArgs>

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