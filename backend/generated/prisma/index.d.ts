
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
 * Model Contador
 * 
 */
export type Contador = $Result.DefaultSelection<Prisma.$ContadorPayload>
/**
 * Model Torneios
 * 
 */
export type Torneios = $Result.DefaultSelection<Prisma.$TorneiosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Tipo: {
  masculino: 'masculino',
  feminino: 'feminino',
  misto: 'misto'
};

export type Tipo = (typeof Tipo)[keyof typeof Tipo]


export const Categoria: {
  iniciante: 'iniciante',
  d: 'd',
  c: 'c',
  b: 'b',
  a: 'a',
  open: 'open'
};

export type Categoria = (typeof Categoria)[keyof typeof Categoria]


export const Modalidade: {
  duplas: 'duplas',
  simples: 'simples'
};

export type Modalidade = (typeof Modalidade)[keyof typeof Modalidade]

}

export type Tipo = $Enums.Tipo

export const Tipo: typeof $Enums.Tipo

export type Categoria = $Enums.Categoria

export const Categoria: typeof $Enums.Categoria

export type Modalidade = $Enums.Modalidade

export const Modalidade: typeof $Enums.Modalidade

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contadors
 * const contadors = await prisma.contador.findMany()
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
   * // Fetch zero or more Contadors
   * const contadors = await prisma.contador.findMany()
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
   * `prisma.contador`: Exposes CRUD operations for the **Contador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contadors
    * const contadors = await prisma.contador.findMany()
    * ```
    */
  get contador(): Prisma.ContadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.torneios`: Exposes CRUD operations for the **Torneios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Torneios
    * const torneios = await prisma.torneios.findMany()
    * ```
    */
  get torneios(): Prisma.TorneiosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Contador: 'Contador',
    Torneios: 'Torneios'
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
      modelProps: "contador" | "torneios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Contador: {
        payload: Prisma.$ContadorPayload<ExtArgs>
        fields: Prisma.ContadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          findFirst: {
            args: Prisma.ContadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          findMany: {
            args: Prisma.ContadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>[]
          }
          create: {
            args: Prisma.ContadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          createMany: {
            args: Prisma.ContadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>[]
          }
          delete: {
            args: Prisma.ContadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          update: {
            args: Prisma.ContadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          deleteMany: {
            args: Prisma.ContadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>[]
          }
          upsert: {
            args: Prisma.ContadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContadorPayload>
          }
          aggregate: {
            args: Prisma.ContadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContador>
          }
          groupBy: {
            args: Prisma.ContadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContadorCountArgs<ExtArgs>
            result: $Utils.Optional<ContadorCountAggregateOutputType> | number
          }
        }
      }
      Torneios: {
        payload: Prisma.$TorneiosPayload<ExtArgs>
        fields: Prisma.TorneiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TorneiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TorneiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>
          }
          findFirst: {
            args: Prisma.TorneiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TorneiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>
          }
          findMany: {
            args: Prisma.TorneiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>[]
          }
          create: {
            args: Prisma.TorneiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>
          }
          createMany: {
            args: Prisma.TorneiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TorneiosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>[]
          }
          delete: {
            args: Prisma.TorneiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>
          }
          update: {
            args: Prisma.TorneiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>
          }
          deleteMany: {
            args: Prisma.TorneiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TorneiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TorneiosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>[]
          }
          upsert: {
            args: Prisma.TorneiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneiosPayload>
          }
          aggregate: {
            args: Prisma.TorneiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTorneios>
          }
          groupBy: {
            args: Prisma.TorneiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<TorneiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.TorneiosCountArgs<ExtArgs>
            result: $Utils.Optional<TorneiosCountAggregateOutputType> | number
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
    contador?: ContadorOmit
    torneios?: TorneiosOmit
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
   * Model Contador
   */

  export type AggregateContador = {
    _count: ContadorCountAggregateOutputType | null
    _avg: ContadorAvgAggregateOutputType | null
    _sum: ContadorSumAggregateOutputType | null
    _min: ContadorMinAggregateOutputType | null
    _max: ContadorMaxAggregateOutputType | null
  }

  export type ContadorAvgAggregateOutputType = {
    id: number | null
    contador: number | null
  }

  export type ContadorSumAggregateOutputType = {
    id: number | null
    contador: number | null
  }

  export type ContadorMinAggregateOutputType = {
    id: number | null
    contador: number | null
  }

  export type ContadorMaxAggregateOutputType = {
    id: number | null
    contador: number | null
  }

  export type ContadorCountAggregateOutputType = {
    id: number
    contador: number
    _all: number
  }


  export type ContadorAvgAggregateInputType = {
    id?: true
    contador?: true
  }

  export type ContadorSumAggregateInputType = {
    id?: true
    contador?: true
  }

  export type ContadorMinAggregateInputType = {
    id?: true
    contador?: true
  }

  export type ContadorMaxAggregateInputType = {
    id?: true
    contador?: true
  }

  export type ContadorCountAggregateInputType = {
    id?: true
    contador?: true
    _all?: true
  }

  export type ContadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contador to aggregate.
     */
    where?: ContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contadors to fetch.
     */
    orderBy?: ContadorOrderByWithRelationInput | ContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contadors
    **/
    _count?: true | ContadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContadorMaxAggregateInputType
  }

  export type GetContadorAggregateType<T extends ContadorAggregateArgs> = {
        [P in keyof T & keyof AggregateContador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContador[P]>
      : GetScalarType<T[P], AggregateContador[P]>
  }




  export type ContadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContadorWhereInput
    orderBy?: ContadorOrderByWithAggregationInput | ContadorOrderByWithAggregationInput[]
    by: ContadorScalarFieldEnum[] | ContadorScalarFieldEnum
    having?: ContadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContadorCountAggregateInputType | true
    _avg?: ContadorAvgAggregateInputType
    _sum?: ContadorSumAggregateInputType
    _min?: ContadorMinAggregateInputType
    _max?: ContadorMaxAggregateInputType
  }

  export type ContadorGroupByOutputType = {
    id: number
    contador: number
    _count: ContadorCountAggregateOutputType | null
    _avg: ContadorAvgAggregateOutputType | null
    _sum: ContadorSumAggregateOutputType | null
    _min: ContadorMinAggregateOutputType | null
    _max: ContadorMaxAggregateOutputType | null
  }

  type GetContadorGroupByPayload<T extends ContadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContadorGroupByOutputType[P]>
            : GetScalarType<T[P], ContadorGroupByOutputType[P]>
        }
      >
    >


  export type ContadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contador?: boolean
  }, ExtArgs["result"]["contador"]>

  export type ContadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contador?: boolean
  }, ExtArgs["result"]["contador"]>

  export type ContadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contador?: boolean
  }, ExtArgs["result"]["contador"]>

  export type ContadorSelectScalar = {
    id?: boolean
    contador?: boolean
  }

  export type ContadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contador", ExtArgs["result"]["contador"]>

  export type $ContadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contador: number
    }, ExtArgs["result"]["contador"]>
    composites: {}
  }

  type ContadorGetPayload<S extends boolean | null | undefined | ContadorDefaultArgs> = $Result.GetResult<Prisma.$ContadorPayload, S>

  type ContadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContadorCountAggregateInputType | true
    }

  export interface ContadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contador'], meta: { name: 'Contador' } }
    /**
     * Find zero or one Contador that matches the filter.
     * @param {ContadorFindUniqueArgs} args - Arguments to find a Contador
     * @example
     * // Get one Contador
     * const contador = await prisma.contador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContadorFindUniqueArgs>(args: SelectSubset<T, ContadorFindUniqueArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContadorFindUniqueOrThrowArgs} args - Arguments to find a Contador
     * @example
     * // Get one Contador
     * const contador = await prisma.contador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContadorFindUniqueOrThrowArgs>(args: SelectSubset<T, ContadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorFindFirstArgs} args - Arguments to find a Contador
     * @example
     * // Get one Contador
     * const contador = await prisma.contador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContadorFindFirstArgs>(args?: SelectSubset<T, ContadorFindFirstArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorFindFirstOrThrowArgs} args - Arguments to find a Contador
     * @example
     * // Get one Contador
     * const contador = await prisma.contador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContadorFindFirstOrThrowArgs>(args?: SelectSubset<T, ContadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contadors
     * const contadors = await prisma.contador.findMany()
     * 
     * // Get first 10 Contadors
     * const contadors = await prisma.contador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contadorWithIdOnly = await prisma.contador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContadorFindManyArgs>(args?: SelectSubset<T, ContadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contador.
     * @param {ContadorCreateArgs} args - Arguments to create a Contador.
     * @example
     * // Create one Contador
     * const Contador = await prisma.contador.create({
     *   data: {
     *     // ... data to create a Contador
     *   }
     * })
     * 
     */
    create<T extends ContadorCreateArgs>(args: SelectSubset<T, ContadorCreateArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contadors.
     * @param {ContadorCreateManyArgs} args - Arguments to create many Contadors.
     * @example
     * // Create many Contadors
     * const contador = await prisma.contador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContadorCreateManyArgs>(args?: SelectSubset<T, ContadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contadors and returns the data saved in the database.
     * @param {ContadorCreateManyAndReturnArgs} args - Arguments to create many Contadors.
     * @example
     * // Create many Contadors
     * const contador = await prisma.contador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contadors and only return the `id`
     * const contadorWithIdOnly = await prisma.contador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContadorCreateManyAndReturnArgs>(args?: SelectSubset<T, ContadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contador.
     * @param {ContadorDeleteArgs} args - Arguments to delete one Contador.
     * @example
     * // Delete one Contador
     * const Contador = await prisma.contador.delete({
     *   where: {
     *     // ... filter to delete one Contador
     *   }
     * })
     * 
     */
    delete<T extends ContadorDeleteArgs>(args: SelectSubset<T, ContadorDeleteArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contador.
     * @param {ContadorUpdateArgs} args - Arguments to update one Contador.
     * @example
     * // Update one Contador
     * const contador = await prisma.contador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContadorUpdateArgs>(args: SelectSubset<T, ContadorUpdateArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contadors.
     * @param {ContadorDeleteManyArgs} args - Arguments to filter Contadors to delete.
     * @example
     * // Delete a few Contadors
     * const { count } = await prisma.contador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContadorDeleteManyArgs>(args?: SelectSubset<T, ContadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contadors
     * const contador = await prisma.contador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContadorUpdateManyArgs>(args: SelectSubset<T, ContadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contadors and returns the data updated in the database.
     * @param {ContadorUpdateManyAndReturnArgs} args - Arguments to update many Contadors.
     * @example
     * // Update many Contadors
     * const contador = await prisma.contador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contadors and only return the `id`
     * const contadorWithIdOnly = await prisma.contador.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContadorUpdateManyAndReturnArgs>(args: SelectSubset<T, ContadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contador.
     * @param {ContadorUpsertArgs} args - Arguments to update or create a Contador.
     * @example
     * // Update or create a Contador
     * const contador = await prisma.contador.upsert({
     *   create: {
     *     // ... data to create a Contador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contador we want to update
     *   }
     * })
     */
    upsert<T extends ContadorUpsertArgs>(args: SelectSubset<T, ContadorUpsertArgs<ExtArgs>>): Prisma__ContadorClient<$Result.GetResult<Prisma.$ContadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorCountArgs} args - Arguments to filter Contadors to count.
     * @example
     * // Count the number of Contadors
     * const count = await prisma.contador.count({
     *   where: {
     *     // ... the filter for the Contadors we want to count
     *   }
     * })
    **/
    count<T extends ContadorCountArgs>(
      args?: Subset<T, ContadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContadorAggregateArgs>(args: Subset<T, ContadorAggregateArgs>): Prisma.PrismaPromise<GetContadorAggregateType<T>>

    /**
     * Group by Contador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContadorGroupByArgs} args - Group by arguments.
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
      T extends ContadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContadorGroupByArgs['orderBy'] }
        : { orderBy?: ContadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contador model
   */
  readonly fields: ContadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contador model
   */
  interface ContadorFieldRefs {
    readonly id: FieldRef<"Contador", 'Int'>
    readonly contador: FieldRef<"Contador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Contador findUnique
   */
  export type ContadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * Filter, which Contador to fetch.
     */
    where: ContadorWhereUniqueInput
  }

  /**
   * Contador findUniqueOrThrow
   */
  export type ContadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * Filter, which Contador to fetch.
     */
    where: ContadorWhereUniqueInput
  }

  /**
   * Contador findFirst
   */
  export type ContadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * Filter, which Contador to fetch.
     */
    where?: ContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contadors to fetch.
     */
    orderBy?: ContadorOrderByWithRelationInput | ContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contadors.
     */
    cursor?: ContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contadors.
     */
    distinct?: ContadorScalarFieldEnum | ContadorScalarFieldEnum[]
  }

  /**
   * Contador findFirstOrThrow
   */
  export type ContadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * Filter, which Contador to fetch.
     */
    where?: ContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contadors to fetch.
     */
    orderBy?: ContadorOrderByWithRelationInput | ContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contadors.
     */
    cursor?: ContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contadors.
     */
    distinct?: ContadorScalarFieldEnum | ContadorScalarFieldEnum[]
  }

  /**
   * Contador findMany
   */
  export type ContadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * Filter, which Contadors to fetch.
     */
    where?: ContadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contadors to fetch.
     */
    orderBy?: ContadorOrderByWithRelationInput | ContadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contadors.
     */
    cursor?: ContadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contadors.
     */
    skip?: number
    distinct?: ContadorScalarFieldEnum | ContadorScalarFieldEnum[]
  }

  /**
   * Contador create
   */
  export type ContadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * The data needed to create a Contador.
     */
    data: XOR<ContadorCreateInput, ContadorUncheckedCreateInput>
  }

  /**
   * Contador createMany
   */
  export type ContadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contadors.
     */
    data: ContadorCreateManyInput | ContadorCreateManyInput[]
  }

  /**
   * Contador createManyAndReturn
   */
  export type ContadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * The data used to create many Contadors.
     */
    data: ContadorCreateManyInput | ContadorCreateManyInput[]
  }

  /**
   * Contador update
   */
  export type ContadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * The data needed to update a Contador.
     */
    data: XOR<ContadorUpdateInput, ContadorUncheckedUpdateInput>
    /**
     * Choose, which Contador to update.
     */
    where: ContadorWhereUniqueInput
  }

  /**
   * Contador updateMany
   */
  export type ContadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contadors.
     */
    data: XOR<ContadorUpdateManyMutationInput, ContadorUncheckedUpdateManyInput>
    /**
     * Filter which Contadors to update
     */
    where?: ContadorWhereInput
    /**
     * Limit how many Contadors to update.
     */
    limit?: number
  }

  /**
   * Contador updateManyAndReturn
   */
  export type ContadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * The data used to update Contadors.
     */
    data: XOR<ContadorUpdateManyMutationInput, ContadorUncheckedUpdateManyInput>
    /**
     * Filter which Contadors to update
     */
    where?: ContadorWhereInput
    /**
     * Limit how many Contadors to update.
     */
    limit?: number
  }

  /**
   * Contador upsert
   */
  export type ContadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * The filter to search for the Contador to update in case it exists.
     */
    where: ContadorWhereUniqueInput
    /**
     * In case the Contador found by the `where` argument doesn't exist, create a new Contador with this data.
     */
    create: XOR<ContadorCreateInput, ContadorUncheckedCreateInput>
    /**
     * In case the Contador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContadorUpdateInput, ContadorUncheckedUpdateInput>
  }

  /**
   * Contador delete
   */
  export type ContadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
    /**
     * Filter which Contador to delete.
     */
    where: ContadorWhereUniqueInput
  }

  /**
   * Contador deleteMany
   */
  export type ContadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contadors to delete
     */
    where?: ContadorWhereInput
    /**
     * Limit how many Contadors to delete.
     */
    limit?: number
  }

  /**
   * Contador without action
   */
  export type ContadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contador
     */
    select?: ContadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contador
     */
    omit?: ContadorOmit<ExtArgs> | null
  }


  /**
   * Model Torneios
   */

  export type AggregateTorneios = {
    _count: TorneiosCountAggregateOutputType | null
    _avg: TorneiosAvgAggregateOutputType | null
    _sum: TorneiosSumAggregateOutputType | null
    _min: TorneiosMinAggregateOutputType | null
    _max: TorneiosMaxAggregateOutputType | null
  }

  export type TorneiosAvgAggregateOutputType = {
    valor_inscricao: number | null
  }

  export type TorneiosSumAggregateOutputType = {
    valor_inscricao: number | null
  }

  export type TorneiosMinAggregateOutputType = {
    id: string | null
    nome: string | null
    data: Date | null
    realizado_em: Date | null
    data_limite_inscricao: Date | null
    valor_inscricao: number | null
    tipo: $Enums.Tipo | null
    categoria: $Enums.Categoria | null
    modalidade: $Enums.Modalidade | null
    federado: boolean | null
  }

  export type TorneiosMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    data: Date | null
    realizado_em: Date | null
    data_limite_inscricao: Date | null
    valor_inscricao: number | null
    tipo: $Enums.Tipo | null
    categoria: $Enums.Categoria | null
    modalidade: $Enums.Modalidade | null
    federado: boolean | null
  }

  export type TorneiosCountAggregateOutputType = {
    id: number
    nome: number
    data: number
    realizado_em: number
    data_limite_inscricao: number
    valor_inscricao: number
    tipo: number
    categoria: number
    modalidade: number
    federado: number
    _all: number
  }


  export type TorneiosAvgAggregateInputType = {
    valor_inscricao?: true
  }

  export type TorneiosSumAggregateInputType = {
    valor_inscricao?: true
  }

  export type TorneiosMinAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    realizado_em?: true
    data_limite_inscricao?: true
    valor_inscricao?: true
    tipo?: true
    categoria?: true
    modalidade?: true
    federado?: true
  }

  export type TorneiosMaxAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    realizado_em?: true
    data_limite_inscricao?: true
    valor_inscricao?: true
    tipo?: true
    categoria?: true
    modalidade?: true
    federado?: true
  }

  export type TorneiosCountAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    realizado_em?: true
    data_limite_inscricao?: true
    valor_inscricao?: true
    tipo?: true
    categoria?: true
    modalidade?: true
    federado?: true
    _all?: true
  }

  export type TorneiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torneios to aggregate.
     */
    where?: TorneiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneiosOrderByWithRelationInput | TorneiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TorneiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Torneios
    **/
    _count?: true | TorneiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TorneiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TorneiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TorneiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TorneiosMaxAggregateInputType
  }

  export type GetTorneiosAggregateType<T extends TorneiosAggregateArgs> = {
        [P in keyof T & keyof AggregateTorneios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTorneios[P]>
      : GetScalarType<T[P], AggregateTorneios[P]>
  }




  export type TorneiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorneiosWhereInput
    orderBy?: TorneiosOrderByWithAggregationInput | TorneiosOrderByWithAggregationInput[]
    by: TorneiosScalarFieldEnum[] | TorneiosScalarFieldEnum
    having?: TorneiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TorneiosCountAggregateInputType | true
    _avg?: TorneiosAvgAggregateInputType
    _sum?: TorneiosSumAggregateInputType
    _min?: TorneiosMinAggregateInputType
    _max?: TorneiosMaxAggregateInputType
  }

  export type TorneiosGroupByOutputType = {
    id: string
    nome: string | null
    data: Date
    realizado_em: Date | null
    data_limite_inscricao: Date
    valor_inscricao: number
    tipo: $Enums.Tipo
    categoria: $Enums.Categoria
    modalidade: $Enums.Modalidade
    federado: boolean
    _count: TorneiosCountAggregateOutputType | null
    _avg: TorneiosAvgAggregateOutputType | null
    _sum: TorneiosSumAggregateOutputType | null
    _min: TorneiosMinAggregateOutputType | null
    _max: TorneiosMaxAggregateOutputType | null
  }

  type GetTorneiosGroupByPayload<T extends TorneiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TorneiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TorneiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TorneiosGroupByOutputType[P]>
            : GetScalarType<T[P], TorneiosGroupByOutputType[P]>
        }
      >
    >


  export type TorneiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    realizado_em?: boolean
    data_limite_inscricao?: boolean
    valor_inscricao?: boolean
    tipo?: boolean
    categoria?: boolean
    modalidade?: boolean
    federado?: boolean
  }, ExtArgs["result"]["torneios"]>

  export type TorneiosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    realizado_em?: boolean
    data_limite_inscricao?: boolean
    valor_inscricao?: boolean
    tipo?: boolean
    categoria?: boolean
    modalidade?: boolean
    federado?: boolean
  }, ExtArgs["result"]["torneios"]>

  export type TorneiosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    realizado_em?: boolean
    data_limite_inscricao?: boolean
    valor_inscricao?: boolean
    tipo?: boolean
    categoria?: boolean
    modalidade?: boolean
    federado?: boolean
  }, ExtArgs["result"]["torneios"]>

  export type TorneiosSelectScalar = {
    id?: boolean
    nome?: boolean
    data?: boolean
    realizado_em?: boolean
    data_limite_inscricao?: boolean
    valor_inscricao?: boolean
    tipo?: boolean
    categoria?: boolean
    modalidade?: boolean
    federado?: boolean
  }

  export type TorneiosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "data" | "realizado_em" | "data_limite_inscricao" | "valor_inscricao" | "tipo" | "categoria" | "modalidade" | "federado", ExtArgs["result"]["torneios"]>

  export type $TorneiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Torneios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string | null
      data: Date
      realizado_em: Date | null
      data_limite_inscricao: Date
      valor_inscricao: number
      tipo: $Enums.Tipo
      categoria: $Enums.Categoria
      modalidade: $Enums.Modalidade
      federado: boolean
    }, ExtArgs["result"]["torneios"]>
    composites: {}
  }

  type TorneiosGetPayload<S extends boolean | null | undefined | TorneiosDefaultArgs> = $Result.GetResult<Prisma.$TorneiosPayload, S>

  type TorneiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TorneiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TorneiosCountAggregateInputType | true
    }

  export interface TorneiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Torneios'], meta: { name: 'Torneios' } }
    /**
     * Find zero or one Torneios that matches the filter.
     * @param {TorneiosFindUniqueArgs} args - Arguments to find a Torneios
     * @example
     * // Get one Torneios
     * const torneios = await prisma.torneios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TorneiosFindUniqueArgs>(args: SelectSubset<T, TorneiosFindUniqueArgs<ExtArgs>>): Prisma__TorneiosClient<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Torneios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TorneiosFindUniqueOrThrowArgs} args - Arguments to find a Torneios
     * @example
     * // Get one Torneios
     * const torneios = await prisma.torneios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TorneiosFindUniqueOrThrowArgs>(args: SelectSubset<T, TorneiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TorneiosClient<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Torneios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneiosFindFirstArgs} args - Arguments to find a Torneios
     * @example
     * // Get one Torneios
     * const torneios = await prisma.torneios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TorneiosFindFirstArgs>(args?: SelectSubset<T, TorneiosFindFirstArgs<ExtArgs>>): Prisma__TorneiosClient<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Torneios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneiosFindFirstOrThrowArgs} args - Arguments to find a Torneios
     * @example
     * // Get one Torneios
     * const torneios = await prisma.torneios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TorneiosFindFirstOrThrowArgs>(args?: SelectSubset<T, TorneiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__TorneiosClient<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Torneios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Torneios
     * const torneios = await prisma.torneios.findMany()
     * 
     * // Get first 10 Torneios
     * const torneios = await prisma.torneios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const torneiosWithIdOnly = await prisma.torneios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TorneiosFindManyArgs>(args?: SelectSubset<T, TorneiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Torneios.
     * @param {TorneiosCreateArgs} args - Arguments to create a Torneios.
     * @example
     * // Create one Torneios
     * const Torneios = await prisma.torneios.create({
     *   data: {
     *     // ... data to create a Torneios
     *   }
     * })
     * 
     */
    create<T extends TorneiosCreateArgs>(args: SelectSubset<T, TorneiosCreateArgs<ExtArgs>>): Prisma__TorneiosClient<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Torneios.
     * @param {TorneiosCreateManyArgs} args - Arguments to create many Torneios.
     * @example
     * // Create many Torneios
     * const torneios = await prisma.torneios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TorneiosCreateManyArgs>(args?: SelectSubset<T, TorneiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Torneios and returns the data saved in the database.
     * @param {TorneiosCreateManyAndReturnArgs} args - Arguments to create many Torneios.
     * @example
     * // Create many Torneios
     * const torneios = await prisma.torneios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Torneios and only return the `id`
     * const torneiosWithIdOnly = await prisma.torneios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TorneiosCreateManyAndReturnArgs>(args?: SelectSubset<T, TorneiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Torneios.
     * @param {TorneiosDeleteArgs} args - Arguments to delete one Torneios.
     * @example
     * // Delete one Torneios
     * const Torneios = await prisma.torneios.delete({
     *   where: {
     *     // ... filter to delete one Torneios
     *   }
     * })
     * 
     */
    delete<T extends TorneiosDeleteArgs>(args: SelectSubset<T, TorneiosDeleteArgs<ExtArgs>>): Prisma__TorneiosClient<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Torneios.
     * @param {TorneiosUpdateArgs} args - Arguments to update one Torneios.
     * @example
     * // Update one Torneios
     * const torneios = await prisma.torneios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TorneiosUpdateArgs>(args: SelectSubset<T, TorneiosUpdateArgs<ExtArgs>>): Prisma__TorneiosClient<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Torneios.
     * @param {TorneiosDeleteManyArgs} args - Arguments to filter Torneios to delete.
     * @example
     * // Delete a few Torneios
     * const { count } = await prisma.torneios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TorneiosDeleteManyArgs>(args?: SelectSubset<T, TorneiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Torneios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Torneios
     * const torneios = await prisma.torneios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TorneiosUpdateManyArgs>(args: SelectSubset<T, TorneiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Torneios and returns the data updated in the database.
     * @param {TorneiosUpdateManyAndReturnArgs} args - Arguments to update many Torneios.
     * @example
     * // Update many Torneios
     * const torneios = await prisma.torneios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Torneios and only return the `id`
     * const torneiosWithIdOnly = await prisma.torneios.updateManyAndReturn({
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
    updateManyAndReturn<T extends TorneiosUpdateManyAndReturnArgs>(args: SelectSubset<T, TorneiosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Torneios.
     * @param {TorneiosUpsertArgs} args - Arguments to update or create a Torneios.
     * @example
     * // Update or create a Torneios
     * const torneios = await prisma.torneios.upsert({
     *   create: {
     *     // ... data to create a Torneios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Torneios we want to update
     *   }
     * })
     */
    upsert<T extends TorneiosUpsertArgs>(args: SelectSubset<T, TorneiosUpsertArgs<ExtArgs>>): Prisma__TorneiosClient<$Result.GetResult<Prisma.$TorneiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Torneios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneiosCountArgs} args - Arguments to filter Torneios to count.
     * @example
     * // Count the number of Torneios
     * const count = await prisma.torneios.count({
     *   where: {
     *     // ... the filter for the Torneios we want to count
     *   }
     * })
    **/
    count<T extends TorneiosCountArgs>(
      args?: Subset<T, TorneiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TorneiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Torneios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TorneiosAggregateArgs>(args: Subset<T, TorneiosAggregateArgs>): Prisma.PrismaPromise<GetTorneiosAggregateType<T>>

    /**
     * Group by Torneios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneiosGroupByArgs} args - Group by arguments.
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
      T extends TorneiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TorneiosGroupByArgs['orderBy'] }
        : { orderBy?: TorneiosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TorneiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTorneiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Torneios model
   */
  readonly fields: TorneiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Torneios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TorneiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Torneios model
   */
  interface TorneiosFieldRefs {
    readonly id: FieldRef<"Torneios", 'String'>
    readonly nome: FieldRef<"Torneios", 'String'>
    readonly data: FieldRef<"Torneios", 'DateTime'>
    readonly realizado_em: FieldRef<"Torneios", 'DateTime'>
    readonly data_limite_inscricao: FieldRef<"Torneios", 'DateTime'>
    readonly valor_inscricao: FieldRef<"Torneios", 'Float'>
    readonly tipo: FieldRef<"Torneios", 'Tipo'>
    readonly categoria: FieldRef<"Torneios", 'Categoria'>
    readonly modalidade: FieldRef<"Torneios", 'Modalidade'>
    readonly federado: FieldRef<"Torneios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Torneios findUnique
   */
  export type TorneiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * Filter, which Torneios to fetch.
     */
    where: TorneiosWhereUniqueInput
  }

  /**
   * Torneios findUniqueOrThrow
   */
  export type TorneiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * Filter, which Torneios to fetch.
     */
    where: TorneiosWhereUniqueInput
  }

  /**
   * Torneios findFirst
   */
  export type TorneiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * Filter, which Torneios to fetch.
     */
    where?: TorneiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneiosOrderByWithRelationInput | TorneiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torneios.
     */
    cursor?: TorneiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torneios.
     */
    distinct?: TorneiosScalarFieldEnum | TorneiosScalarFieldEnum[]
  }

  /**
   * Torneios findFirstOrThrow
   */
  export type TorneiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * Filter, which Torneios to fetch.
     */
    where?: TorneiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneiosOrderByWithRelationInput | TorneiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torneios.
     */
    cursor?: TorneiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torneios.
     */
    distinct?: TorneiosScalarFieldEnum | TorneiosScalarFieldEnum[]
  }

  /**
   * Torneios findMany
   */
  export type TorneiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * Filter, which Torneios to fetch.
     */
    where?: TorneiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneiosOrderByWithRelationInput | TorneiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Torneios.
     */
    cursor?: TorneiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    distinct?: TorneiosScalarFieldEnum | TorneiosScalarFieldEnum[]
  }

  /**
   * Torneios create
   */
  export type TorneiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * The data needed to create a Torneios.
     */
    data: XOR<TorneiosCreateInput, TorneiosUncheckedCreateInput>
  }

  /**
   * Torneios createMany
   */
  export type TorneiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Torneios.
     */
    data: TorneiosCreateManyInput | TorneiosCreateManyInput[]
  }

  /**
   * Torneios createManyAndReturn
   */
  export type TorneiosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * The data used to create many Torneios.
     */
    data: TorneiosCreateManyInput | TorneiosCreateManyInput[]
  }

  /**
   * Torneios update
   */
  export type TorneiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * The data needed to update a Torneios.
     */
    data: XOR<TorneiosUpdateInput, TorneiosUncheckedUpdateInput>
    /**
     * Choose, which Torneios to update.
     */
    where: TorneiosWhereUniqueInput
  }

  /**
   * Torneios updateMany
   */
  export type TorneiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Torneios.
     */
    data: XOR<TorneiosUpdateManyMutationInput, TorneiosUncheckedUpdateManyInput>
    /**
     * Filter which Torneios to update
     */
    where?: TorneiosWhereInput
    /**
     * Limit how many Torneios to update.
     */
    limit?: number
  }

  /**
   * Torneios updateManyAndReturn
   */
  export type TorneiosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * The data used to update Torneios.
     */
    data: XOR<TorneiosUpdateManyMutationInput, TorneiosUncheckedUpdateManyInput>
    /**
     * Filter which Torneios to update
     */
    where?: TorneiosWhereInput
    /**
     * Limit how many Torneios to update.
     */
    limit?: number
  }

  /**
   * Torneios upsert
   */
  export type TorneiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * The filter to search for the Torneios to update in case it exists.
     */
    where: TorneiosWhereUniqueInput
    /**
     * In case the Torneios found by the `where` argument doesn't exist, create a new Torneios with this data.
     */
    create: XOR<TorneiosCreateInput, TorneiosUncheckedCreateInput>
    /**
     * In case the Torneios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TorneiosUpdateInput, TorneiosUncheckedUpdateInput>
  }

  /**
   * Torneios delete
   */
  export type TorneiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
    /**
     * Filter which Torneios to delete.
     */
    where: TorneiosWhereUniqueInput
  }

  /**
   * Torneios deleteMany
   */
  export type TorneiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torneios to delete
     */
    where?: TorneiosWhereInput
    /**
     * Limit how many Torneios to delete.
     */
    limit?: number
  }

  /**
   * Torneios without action
   */
  export type TorneiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneios
     */
    select?: TorneiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneios
     */
    omit?: TorneiosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContadorScalarFieldEnum: {
    id: 'id',
    contador: 'contador'
  };

  export type ContadorScalarFieldEnum = (typeof ContadorScalarFieldEnum)[keyof typeof ContadorScalarFieldEnum]


  export const TorneiosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data: 'data',
    realizado_em: 'realizado_em',
    data_limite_inscricao: 'data_limite_inscricao',
    valor_inscricao: 'valor_inscricao',
    tipo: 'tipo',
    categoria: 'categoria',
    modalidade: 'modalidade',
    federado: 'federado'
  };

  export type TorneiosScalarFieldEnum = (typeof TorneiosScalarFieldEnum)[keyof typeof TorneiosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Tipo'
   */
  export type EnumTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipo'>
    


  /**
   * Reference to a field of type 'Categoria'
   */
  export type EnumCategoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Categoria'>
    


  /**
   * Reference to a field of type 'Modalidade'
   */
  export type EnumModalidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Modalidade'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ContadorWhereInput = {
    AND?: ContadorWhereInput | ContadorWhereInput[]
    OR?: ContadorWhereInput[]
    NOT?: ContadorWhereInput | ContadorWhereInput[]
    id?: IntFilter<"Contador"> | number
    contador?: IntFilter<"Contador"> | number
  }

  export type ContadorOrderByWithRelationInput = {
    id?: SortOrder
    contador?: SortOrder
  }

  export type ContadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContadorWhereInput | ContadorWhereInput[]
    OR?: ContadorWhereInput[]
    NOT?: ContadorWhereInput | ContadorWhereInput[]
    contador?: IntFilter<"Contador"> | number
  }, "id">

  export type ContadorOrderByWithAggregationInput = {
    id?: SortOrder
    contador?: SortOrder
    _count?: ContadorCountOrderByAggregateInput
    _avg?: ContadorAvgOrderByAggregateInput
    _max?: ContadorMaxOrderByAggregateInput
    _min?: ContadorMinOrderByAggregateInput
    _sum?: ContadorSumOrderByAggregateInput
  }

  export type ContadorScalarWhereWithAggregatesInput = {
    AND?: ContadorScalarWhereWithAggregatesInput | ContadorScalarWhereWithAggregatesInput[]
    OR?: ContadorScalarWhereWithAggregatesInput[]
    NOT?: ContadorScalarWhereWithAggregatesInput | ContadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contador"> | number
    contador?: IntWithAggregatesFilter<"Contador"> | number
  }

  export type TorneiosWhereInput = {
    AND?: TorneiosWhereInput | TorneiosWhereInput[]
    OR?: TorneiosWhereInput[]
    NOT?: TorneiosWhereInput | TorneiosWhereInput[]
    id?: StringFilter<"Torneios"> | string
    nome?: StringNullableFilter<"Torneios"> | string | null
    data?: DateTimeFilter<"Torneios"> | Date | string
    realizado_em?: DateTimeNullableFilter<"Torneios"> | Date | string | null
    data_limite_inscricao?: DateTimeFilter<"Torneios"> | Date | string
    valor_inscricao?: FloatFilter<"Torneios"> | number
    tipo?: EnumTipoFilter<"Torneios"> | $Enums.Tipo
    categoria?: EnumCategoriaFilter<"Torneios"> | $Enums.Categoria
    modalidade?: EnumModalidadeFilter<"Torneios"> | $Enums.Modalidade
    federado?: BoolFilter<"Torneios"> | boolean
  }

  export type TorneiosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    data?: SortOrder
    realizado_em?: SortOrderInput | SortOrder
    data_limite_inscricao?: SortOrder
    valor_inscricao?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    modalidade?: SortOrder
    federado?: SortOrder
  }

  export type TorneiosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TorneiosWhereInput | TorneiosWhereInput[]
    OR?: TorneiosWhereInput[]
    NOT?: TorneiosWhereInput | TorneiosWhereInput[]
    nome?: StringNullableFilter<"Torneios"> | string | null
    data?: DateTimeFilter<"Torneios"> | Date | string
    realizado_em?: DateTimeNullableFilter<"Torneios"> | Date | string | null
    data_limite_inscricao?: DateTimeFilter<"Torneios"> | Date | string
    valor_inscricao?: FloatFilter<"Torneios"> | number
    tipo?: EnumTipoFilter<"Torneios"> | $Enums.Tipo
    categoria?: EnumCategoriaFilter<"Torneios"> | $Enums.Categoria
    modalidade?: EnumModalidadeFilter<"Torneios"> | $Enums.Modalidade
    federado?: BoolFilter<"Torneios"> | boolean
  }, "id">

  export type TorneiosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    data?: SortOrder
    realizado_em?: SortOrderInput | SortOrder
    data_limite_inscricao?: SortOrder
    valor_inscricao?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    modalidade?: SortOrder
    federado?: SortOrder
    _count?: TorneiosCountOrderByAggregateInput
    _avg?: TorneiosAvgOrderByAggregateInput
    _max?: TorneiosMaxOrderByAggregateInput
    _min?: TorneiosMinOrderByAggregateInput
    _sum?: TorneiosSumOrderByAggregateInput
  }

  export type TorneiosScalarWhereWithAggregatesInput = {
    AND?: TorneiosScalarWhereWithAggregatesInput | TorneiosScalarWhereWithAggregatesInput[]
    OR?: TorneiosScalarWhereWithAggregatesInput[]
    NOT?: TorneiosScalarWhereWithAggregatesInput | TorneiosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Torneios"> | string
    nome?: StringNullableWithAggregatesFilter<"Torneios"> | string | null
    data?: DateTimeWithAggregatesFilter<"Torneios"> | Date | string
    realizado_em?: DateTimeNullableWithAggregatesFilter<"Torneios"> | Date | string | null
    data_limite_inscricao?: DateTimeWithAggregatesFilter<"Torneios"> | Date | string
    valor_inscricao?: FloatWithAggregatesFilter<"Torneios"> | number
    tipo?: EnumTipoWithAggregatesFilter<"Torneios"> | $Enums.Tipo
    categoria?: EnumCategoriaWithAggregatesFilter<"Torneios"> | $Enums.Categoria
    modalidade?: EnumModalidadeWithAggregatesFilter<"Torneios"> | $Enums.Modalidade
    federado?: BoolWithAggregatesFilter<"Torneios"> | boolean
  }

  export type ContadorCreateInput = {
    contador: number
  }

  export type ContadorUncheckedCreateInput = {
    id?: number
    contador: number
  }

  export type ContadorUpdateInput = {
    contador?: IntFieldUpdateOperationsInput | number
  }

  export type ContadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contador?: IntFieldUpdateOperationsInput | number
  }

  export type ContadorCreateManyInput = {
    id?: number
    contador: number
  }

  export type ContadorUpdateManyMutationInput = {
    contador?: IntFieldUpdateOperationsInput | number
  }

  export type ContadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contador?: IntFieldUpdateOperationsInput | number
  }

  export type TorneiosCreateInput = {
    id?: string
    nome?: string | null
    data: Date | string
    realizado_em?: Date | string | null
    data_limite_inscricao: Date | string
    valor_inscricao: number
    tipo: $Enums.Tipo
    categoria: $Enums.Categoria
    modalidade: $Enums.Modalidade
    federado?: boolean
  }

  export type TorneiosUncheckedCreateInput = {
    id?: string
    nome?: string | null
    data: Date | string
    realizado_em?: Date | string | null
    data_limite_inscricao: Date | string
    valor_inscricao: number
    tipo: $Enums.Tipo
    categoria: $Enums.Categoria
    modalidade: $Enums.Modalidade
    federado?: boolean
  }

  export type TorneiosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    realizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_limite_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_inscricao?: FloatFieldUpdateOperationsInput | number
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    modalidade?: EnumModalidadeFieldUpdateOperationsInput | $Enums.Modalidade
    federado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TorneiosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    realizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_limite_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_inscricao?: FloatFieldUpdateOperationsInput | number
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    modalidade?: EnumModalidadeFieldUpdateOperationsInput | $Enums.Modalidade
    federado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TorneiosCreateManyInput = {
    id?: string
    nome?: string | null
    data: Date | string
    realizado_em?: Date | string | null
    data_limite_inscricao: Date | string
    valor_inscricao: number
    tipo: $Enums.Tipo
    categoria: $Enums.Categoria
    modalidade: $Enums.Modalidade
    federado?: boolean
  }

  export type TorneiosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    realizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_limite_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_inscricao?: FloatFieldUpdateOperationsInput | number
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    modalidade?: EnumModalidadeFieldUpdateOperationsInput | $Enums.Modalidade
    federado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TorneiosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    realizado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_limite_inscricao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_inscricao?: FloatFieldUpdateOperationsInput | number
    tipo?: EnumTipoFieldUpdateOperationsInput | $Enums.Tipo
    categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    modalidade?: EnumModalidadeFieldUpdateOperationsInput | $Enums.Modalidade
    federado?: BoolFieldUpdateOperationsInput | boolean
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

  export type ContadorCountOrderByAggregateInput = {
    id?: SortOrder
    contador?: SortOrder
  }

  export type ContadorAvgOrderByAggregateInput = {
    id?: SortOrder
    contador?: SortOrder
  }

  export type ContadorMaxOrderByAggregateInput = {
    id?: SortOrder
    contador?: SortOrder
  }

  export type ContadorMinOrderByAggregateInput = {
    id?: SortOrder
    contador?: SortOrder
  }

  export type ContadorSumOrderByAggregateInput = {
    id?: SortOrder
    contador?: SortOrder
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[]
    notIn?: $Enums.Tipo[]
    not?: NestedEnumTipoFilter<$PrismaModel> | $Enums.Tipo
  }

  export type EnumCategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[]
    notIn?: $Enums.Categoria[]
    not?: NestedEnumCategoriaFilter<$PrismaModel> | $Enums.Categoria
  }

  export type EnumModalidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Modalidade | EnumModalidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Modalidade[]
    notIn?: $Enums.Modalidade[]
    not?: NestedEnumModalidadeFilter<$PrismaModel> | $Enums.Modalidade
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TorneiosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    realizado_em?: SortOrder
    data_limite_inscricao?: SortOrder
    valor_inscricao?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    modalidade?: SortOrder
    federado?: SortOrder
  }

  export type TorneiosAvgOrderByAggregateInput = {
    valor_inscricao?: SortOrder
  }

  export type TorneiosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    realizado_em?: SortOrder
    data_limite_inscricao?: SortOrder
    valor_inscricao?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    modalidade?: SortOrder
    federado?: SortOrder
  }

  export type TorneiosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    realizado_em?: SortOrder
    data_limite_inscricao?: SortOrder
    valor_inscricao?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    modalidade?: SortOrder
    federado?: SortOrder
  }

  export type TorneiosSumOrderByAggregateInput = {
    valor_inscricao?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[]
    notIn?: $Enums.Tipo[]
    not?: NestedEnumTipoWithAggregatesFilter<$PrismaModel> | $Enums.Tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoFilter<$PrismaModel>
    _max?: NestedEnumTipoFilter<$PrismaModel>
  }

  export type EnumCategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[]
    notIn?: $Enums.Categoria[]
    not?: NestedEnumCategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Categoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaFilter<$PrismaModel>
    _max?: NestedEnumCategoriaFilter<$PrismaModel>
  }

  export type EnumModalidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Modalidade | EnumModalidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Modalidade[]
    notIn?: $Enums.Modalidade[]
    not?: NestedEnumModalidadeWithAggregatesFilter<$PrismaModel> | $Enums.Modalidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModalidadeFilter<$PrismaModel>
    _max?: NestedEnumModalidadeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTipoFieldUpdateOperationsInput = {
    set?: $Enums.Tipo
  }

  export type EnumCategoriaFieldUpdateOperationsInput = {
    set?: $Enums.Categoria
  }

  export type EnumModalidadeFieldUpdateOperationsInput = {
    set?: $Enums.Modalidade
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[]
    notIn?: $Enums.Tipo[]
    not?: NestedEnumTipoFilter<$PrismaModel> | $Enums.Tipo
  }

  export type NestedEnumCategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[]
    notIn?: $Enums.Categoria[]
    not?: NestedEnumCategoriaFilter<$PrismaModel> | $Enums.Categoria
  }

  export type NestedEnumModalidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Modalidade | EnumModalidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Modalidade[]
    notIn?: $Enums.Modalidade[]
    not?: NestedEnumModalidadeFilter<$PrismaModel> | $Enums.Modalidade
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedEnumTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipo | EnumTipoFieldRefInput<$PrismaModel>
    in?: $Enums.Tipo[]
    notIn?: $Enums.Tipo[]
    not?: NestedEnumTipoWithAggregatesFilter<$PrismaModel> | $Enums.Tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoFilter<$PrismaModel>
    _max?: NestedEnumTipoFilter<$PrismaModel>
  }

  export type NestedEnumCategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[]
    notIn?: $Enums.Categoria[]
    not?: NestedEnumCategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Categoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaFilter<$PrismaModel>
    _max?: NestedEnumCategoriaFilter<$PrismaModel>
  }

  export type NestedEnumModalidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Modalidade | EnumModalidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Modalidade[]
    notIn?: $Enums.Modalidade[]
    not?: NestedEnumModalidadeWithAggregatesFilter<$PrismaModel> | $Enums.Modalidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModalidadeFilter<$PrismaModel>
    _max?: NestedEnumModalidadeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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