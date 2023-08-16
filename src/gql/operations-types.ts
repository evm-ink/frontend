import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type ClaimOutput = {
  __typename?: 'ClaimOutput';
  claimed: Scalars['Boolean']['output'];
  signature: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type OkResponse = {
  __typename?: 'OkResponse';
  ok?: Maybe<Scalars['Boolean']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "brc20_token_stats" */
export type Brc20_Token_Stats = {
  __typename?: 'brc20_token_stats';
  holders?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to filter rows from the table "brc20_token_stats". All fields are combined with a logical 'AND'. */
export type Brc20_Token_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Brc20_Token_Stats_Bool_Exp>>;
  _not?: InputMaybe<Brc20_Token_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<Brc20_Token_Stats_Bool_Exp>>;
  holders?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "brc20_token_stats". */
export type Brc20_Token_Stats_Order_By = {
  holders?: InputMaybe<Order_By>;
};

/** select columns of table "brc20_token_stats" */
export enum Brc20_Token_Stats_Select_Column {
  /** column name */
  Holders = 'holders'
}

/** Streaming cursor of the table "brc20_token_stats" */
export type Brc20_Token_Stats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Brc20_Token_Stats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Brc20_Token_Stats_Stream_Cursor_Value_Input = {
  holders?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "brc20_tokens" */
export type Brc20_Tokens = {
  __typename?: 'brc20_tokens';
  decimal_digits: Scalars['String']['output'];
  decimals: Scalars['numeric']['output'];
  max_supply: Scalars['numeric']['output'];
  mint_limit: Scalars['numeric']['output'];
  minted_total: Scalars['numeric']['output'];
  protocol: Scalars['String']['output'];
  /** An object relationship */
  stats?: Maybe<Brc20_Token_Stats>;
  tick: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "brc20_tokens". All fields are combined with a logical 'AND'. */
export type Brc20_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Brc20_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Brc20_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Brc20_Tokens_Bool_Exp>>;
  decimal_digits?: InputMaybe<String_Comparison_Exp>;
  decimals?: InputMaybe<Numeric_Comparison_Exp>;
  max_supply?: InputMaybe<Numeric_Comparison_Exp>;
  mint_limit?: InputMaybe<Numeric_Comparison_Exp>;
  minted_total?: InputMaybe<Numeric_Comparison_Exp>;
  protocol?: InputMaybe<String_Comparison_Exp>;
  stats?: InputMaybe<Brc20_Token_Stats_Bool_Exp>;
  tick?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "brc20_tokens". */
export type Brc20_Tokens_Order_By = {
  decimal_digits?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  max_supply?: InputMaybe<Order_By>;
  mint_limit?: InputMaybe<Order_By>;
  minted_total?: InputMaybe<Order_By>;
  protocol?: InputMaybe<Order_By>;
  stats?: InputMaybe<Brc20_Token_Stats_Order_By>;
  tick?: InputMaybe<Order_By>;
};

/** select columns of table "brc20_tokens" */
export enum Brc20_Tokens_Select_Column {
  /** column name */
  DecimalDigits = 'decimal_digits',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  MaxSupply = 'max_supply',
  /** column name */
  MintLimit = 'mint_limit',
  /** column name */
  MintedTotal = 'minted_total',
  /** column name */
  Protocol = 'protocol',
  /** column name */
  Tick = 'tick'
}

/** Streaming cursor of the table "brc20_tokens" */
export type Brc20_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Brc20_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Brc20_Tokens_Stream_Cursor_Value_Input = {
  decimal_digits?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['numeric']['input']>;
  max_supply?: InputMaybe<Scalars['numeric']['input']>;
  mint_limit?: InputMaybe<Scalars['numeric']['input']>;
  minted_total?: InputMaybe<Scalars['numeric']['input']>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "brc20_user_balances" */
export type Brc20_User_Balances = {
  __typename?: 'brc20_user_balances';
  balance: Scalars['numeric']['output'];
  owner: Scalars['String']['output'];
  protocol: Scalars['String']['output'];
  tick: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "brc20_user_balances". All fields are combined with a logical 'AND'. */
export type Brc20_User_Balances_Bool_Exp = {
  _and?: InputMaybe<Array<Brc20_User_Balances_Bool_Exp>>;
  _not?: InputMaybe<Brc20_User_Balances_Bool_Exp>;
  _or?: InputMaybe<Array<Brc20_User_Balances_Bool_Exp>>;
  balance?: InputMaybe<Numeric_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  protocol?: InputMaybe<String_Comparison_Exp>;
  tick?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "brc20_user_balances". */
export type Brc20_User_Balances_Order_By = {
  balance?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  protocol?: InputMaybe<Order_By>;
  tick?: InputMaybe<Order_By>;
};

/** select columns of table "brc20_user_balances" */
export enum Brc20_User_Balances_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  Owner = 'owner',
  /** column name */
  Protocol = 'protocol',
  /** column name */
  Tick = 'tick'
}

/** Streaming cursor of the table "brc20_user_balances" */
export type Brc20_User_Balances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Brc20_User_Balances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Brc20_User_Balances_Stream_Cursor_Value_Input = {
  balance?: InputMaybe<Scalars['numeric']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
};

export type Cancel_New_Collection_In = {
  new_collection_uuid: Scalars['String']['input'];
};

/** columns and relationships of "collection_inscriptions" */
export type Collection_Inscriptions = {
  __typename?: 'collection_inscriptions';
  claimed: Scalars['Boolean']['output'];
  /** An object relationship */
  collection?: Maybe<Collections>;
  /** An object relationship */
  inscription?: Maybe<Inscriptions>;
  position: Scalars['bigint']['output'];
  trx_hash: Scalars['String']['output'];
};

/** aggregated selection of "collection_inscriptions" */
export type Collection_Inscriptions_Aggregate = {
  __typename?: 'collection_inscriptions_aggregate';
  aggregate?: Maybe<Collection_Inscriptions_Aggregate_Fields>;
  nodes: Array<Collection_Inscriptions>;
};

export type Collection_Inscriptions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Collection_Inscriptions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Collection_Inscriptions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Collection_Inscriptions_Aggregate_Bool_Exp_Count>;
};

export type Collection_Inscriptions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Collection_Inscriptions_Select_Column_Collection_Inscriptions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Collection_Inscriptions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Collection_Inscriptions_Select_Column_Collection_Inscriptions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Collection_Inscriptions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Collection_Inscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "collection_inscriptions" */
export type Collection_Inscriptions_Aggregate_Fields = {
  __typename?: 'collection_inscriptions_aggregate_fields';
  avg?: Maybe<Collection_Inscriptions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Collection_Inscriptions_Max_Fields>;
  min?: Maybe<Collection_Inscriptions_Min_Fields>;
  stddev?: Maybe<Collection_Inscriptions_Stddev_Fields>;
  stddev_pop?: Maybe<Collection_Inscriptions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Collection_Inscriptions_Stddev_Samp_Fields>;
  sum?: Maybe<Collection_Inscriptions_Sum_Fields>;
  var_pop?: Maybe<Collection_Inscriptions_Var_Pop_Fields>;
  var_samp?: Maybe<Collection_Inscriptions_Var_Samp_Fields>;
  variance?: Maybe<Collection_Inscriptions_Variance_Fields>;
};


/** aggregate fields of "collection_inscriptions" */
export type Collection_Inscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collection_Inscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "collection_inscriptions" */
export type Collection_Inscriptions_Aggregate_Order_By = {
  avg?: InputMaybe<Collection_Inscriptions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Collection_Inscriptions_Max_Order_By>;
  min?: InputMaybe<Collection_Inscriptions_Min_Order_By>;
  stddev?: InputMaybe<Collection_Inscriptions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Collection_Inscriptions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Collection_Inscriptions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Collection_Inscriptions_Sum_Order_By>;
  var_pop?: InputMaybe<Collection_Inscriptions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Collection_Inscriptions_Var_Samp_Order_By>;
  variance?: InputMaybe<Collection_Inscriptions_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Collection_Inscriptions_Avg_Fields = {
  __typename?: 'collection_inscriptions_avg_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "collection_inscriptions". All fields are combined with a logical 'AND'. */
export type Collection_Inscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Collection_Inscriptions_Bool_Exp>>;
  _not?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Collection_Inscriptions_Bool_Exp>>;
  claimed?: InputMaybe<Boolean_Comparison_Exp>;
  collection?: InputMaybe<Collections_Bool_Exp>;
  inscription?: InputMaybe<Inscriptions_Bool_Exp>;
  position?: InputMaybe<Bigint_Comparison_Exp>;
  trx_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Collection_Inscriptions_Max_Fields = {
  __typename?: 'collection_inscriptions_max_fields';
  position?: Maybe<Scalars['bigint']['output']>;
  trx_hash?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Max_Order_By = {
  position?: InputMaybe<Order_By>;
  trx_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Collection_Inscriptions_Min_Fields = {
  __typename?: 'collection_inscriptions_min_fields';
  position?: Maybe<Scalars['bigint']['output']>;
  trx_hash?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Min_Order_By = {
  position?: InputMaybe<Order_By>;
  trx_hash?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "collection_inscriptions". */
export type Collection_Inscriptions_Order_By = {
  claimed?: InputMaybe<Order_By>;
  collection?: InputMaybe<Collections_Order_By>;
  inscription?: InputMaybe<Inscriptions_Order_By>;
  position?: InputMaybe<Order_By>;
  trx_hash?: InputMaybe<Order_By>;
};

/** select columns of table "collection_inscriptions" */
export enum Collection_Inscriptions_Select_Column {
  /** column name */
  Claimed = 'claimed',
  /** column name */
  Position = 'position',
  /** column name */
  TrxHash = 'trx_hash'
}

/** select "collection_inscriptions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "collection_inscriptions" */
export enum Collection_Inscriptions_Select_Column_Collection_Inscriptions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Claimed = 'claimed'
}

/** select "collection_inscriptions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "collection_inscriptions" */
export enum Collection_Inscriptions_Select_Column_Collection_Inscriptions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Claimed = 'claimed'
}

/** aggregate stddev on columns */
export type Collection_Inscriptions_Stddev_Fields = {
  __typename?: 'collection_inscriptions_stddev_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Collection_Inscriptions_Stddev_Pop_Fields = {
  __typename?: 'collection_inscriptions_stddev_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Collection_Inscriptions_Stddev_Samp_Fields = {
  __typename?: 'collection_inscriptions_stddev_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "collection_inscriptions" */
export type Collection_Inscriptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Collection_Inscriptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Collection_Inscriptions_Stream_Cursor_Value_Input = {
  claimed?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['bigint']['input']>;
  trx_hash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Collection_Inscriptions_Sum_Fields = {
  __typename?: 'collection_inscriptions_sum_fields';
  position?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Collection_Inscriptions_Var_Pop_Fields = {
  __typename?: 'collection_inscriptions_var_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Collection_Inscriptions_Var_Samp_Fields = {
  __typename?: 'collection_inscriptions_var_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Collection_Inscriptions_Variance_Fields = {
  __typename?: 'collection_inscriptions_variance_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "collection_inscriptions" */
export type Collection_Inscriptions_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** columns and relationships of "collection_stats" */
export type Collection_Stats = {
  __typename?: 'collection_stats';
  in_progress?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to filter rows from the table "collection_stats". All fields are combined with a logical 'AND'. */
export type Collection_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Collection_Stats_Bool_Exp>>;
  _not?: InputMaybe<Collection_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<Collection_Stats_Bool_Exp>>;
  in_progress?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "collection_stats". */
export type Collection_Stats_Order_By = {
  in_progress?: InputMaybe<Order_By>;
};

/** select columns of table "collection_stats" */
export enum Collection_Stats_Select_Column {
  /** column name */
  InProgress = 'in_progress'
}

/** Streaming cursor of the table "collection_stats" */
export type Collection_Stats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Collection_Stats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Collection_Stats_Stream_Cursor_Value_Input = {
  in_progress?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "collections" */
export type Collections = {
  __typename?: 'collections';
  banner_image_url: Scalars['String']['output'];
  contract_address: Scalars['String']['output'];
  creator: Scalars['String']['output'];
  description: Scalars['String']['output'];
  discord_username: Scalars['String']['output'];
  external_url: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  /** An array relationship */
  inscriptions: Array<Collection_Inscriptions>;
  /** An aggregate relationship */
  inscriptions_aggregate: Collection_Inscriptions_Aggregate;
  instagram_username: Scalars['String']['output'];
  is_mintable: Scalars['Boolean']['output'];
  is_verified: Scalars['Boolean']['output'];
  logo_image_url: Scalars['String']['output'];
  max_claim: Scalars['numeric']['output'];
  medium_username: Scalars['String']['output'];
  mint_type: Scalars['String']['output'];
  minted: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  price: Scalars['numeric']['output'];
  slug: Scalars['String']['output'];
  telegram_username: Scalars['String']['output'];
  total_supply: Scalars['bigint']['output'];
  twitter_username: Scalars['String']['output'];
};


/** columns and relationships of "collections" */
export type CollectionsInscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Collection_Inscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Inscriptions_Order_By>>;
  where?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsInscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Inscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Inscriptions_Order_By>>;
  where?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
  _and?: InputMaybe<Array<Collections_Bool_Exp>>;
  _not?: InputMaybe<Collections_Bool_Exp>;
  _or?: InputMaybe<Array<Collections_Bool_Exp>>;
  banner_image_url?: InputMaybe<String_Comparison_Exp>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  creator?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discord_username?: InputMaybe<String_Comparison_Exp>;
  external_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  inscriptions?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
  inscriptions_aggregate?: InputMaybe<Collection_Inscriptions_Aggregate_Bool_Exp>;
  instagram_username?: InputMaybe<String_Comparison_Exp>;
  is_mintable?: InputMaybe<Boolean_Comparison_Exp>;
  is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  logo_image_url?: InputMaybe<String_Comparison_Exp>;
  max_claim?: InputMaybe<Numeric_Comparison_Exp>;
  medium_username?: InputMaybe<String_Comparison_Exp>;
  mint_type?: InputMaybe<String_Comparison_Exp>;
  minted?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  telegram_username?: InputMaybe<String_Comparison_Exp>;
  total_supply?: InputMaybe<Bigint_Comparison_Exp>;
  twitter_username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "collections". */
export type Collections_Order_By = {
  banner_image_url?: InputMaybe<Order_By>;
  contract_address?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discord_username?: InputMaybe<Order_By>;
  external_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inscriptions_aggregate?: InputMaybe<Collection_Inscriptions_Aggregate_Order_By>;
  instagram_username?: InputMaybe<Order_By>;
  is_mintable?: InputMaybe<Order_By>;
  is_verified?: InputMaybe<Order_By>;
  logo_image_url?: InputMaybe<Order_By>;
  max_claim?: InputMaybe<Order_By>;
  medium_username?: InputMaybe<Order_By>;
  mint_type?: InputMaybe<Order_By>;
  minted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  telegram_username?: InputMaybe<Order_By>;
  total_supply?: InputMaybe<Order_By>;
  twitter_username?: InputMaybe<Order_By>;
};

/** select columns of table "collections" */
export enum Collections_Select_Column {
  /** column name */
  BannerImageUrl = 'banner_image_url',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  Creator = 'creator',
  /** column name */
  Description = 'description',
  /** column name */
  DiscordUsername = 'discord_username',
  /** column name */
  ExternalUrl = 'external_url',
  /** column name */
  Id = 'id',
  /** column name */
  InstagramUsername = 'instagram_username',
  /** column name */
  IsMintable = 'is_mintable',
  /** column name */
  IsVerified = 'is_verified',
  /** column name */
  LogoImageUrl = 'logo_image_url',
  /** column name */
  MaxClaim = 'max_claim',
  /** column name */
  MediumUsername = 'medium_username',
  /** column name */
  MintType = 'mint_type',
  /** column name */
  Minted = 'minted',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Slug = 'slug',
  /** column name */
  TelegramUsername = 'telegram_username',
  /** column name */
  TotalSupply = 'total_supply',
  /** column name */
  TwitterUsername = 'twitter_username'
}

export type Create_Collection_In = {
  description: Scalars['String']['input'];
  discord_username: Scalars['String']['input'];
  external_url: Scalars['String']['input'];
  instagram_username: Scalars['String']['input'];
  medium_username: Scalars['String']['input'];
  name: Scalars['String']['input'];
  new_collection_uuid: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  telegram_username: Scalars['String']['input'];
  twitter_username: Scalars['String']['input'];
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Get_Collection_Upload_Urls_In = {
  slug: Scalars['String']['input'];
};

export type Get_Collection_Upload_Urls_Out = {
  __typename?: 'get_collection_upload_urls_out';
  banner_url: Scalars['String']['output'];
  logo_url: Scalars['String']['output'];
};

/** columns and relationships of "inscription_traits" */
export type Inscription_Traits = {
  __typename?: 'inscription_traits';
  display_type: Scalars['String']['output'];
  trait_percent: Scalars['numeric']['output'];
  trait_type: Scalars['String']['output'];
  trait_value: Scalars['String']['output'];
  trait_value_count: Scalars['bigint']['output'];
  trx_hash: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "inscription_traits". All fields are combined with a logical 'AND'. */
export type Inscription_Traits_Bool_Exp = {
  _and?: InputMaybe<Array<Inscription_Traits_Bool_Exp>>;
  _not?: InputMaybe<Inscription_Traits_Bool_Exp>;
  _or?: InputMaybe<Array<Inscription_Traits_Bool_Exp>>;
  display_type?: InputMaybe<String_Comparison_Exp>;
  trait_percent?: InputMaybe<Numeric_Comparison_Exp>;
  trait_type?: InputMaybe<String_Comparison_Exp>;
  trait_value?: InputMaybe<String_Comparison_Exp>;
  trait_value_count?: InputMaybe<Bigint_Comparison_Exp>;
  trx_hash?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "inscription_traits". */
export type Inscription_Traits_Order_By = {
  display_type?: InputMaybe<Order_By>;
  trait_percent?: InputMaybe<Order_By>;
  trait_type?: InputMaybe<Order_By>;
  trait_value?: InputMaybe<Order_By>;
  trait_value_count?: InputMaybe<Order_By>;
  trx_hash?: InputMaybe<Order_By>;
};

/** select columns of table "inscription_traits" */
export enum Inscription_Traits_Select_Column {
  /** column name */
  DisplayType = 'display_type',
  /** column name */
  TraitPercent = 'trait_percent',
  /** column name */
  TraitType = 'trait_type',
  /** column name */
  TraitValue = 'trait_value',
  /** column name */
  TraitValueCount = 'trait_value_count',
  /** column name */
  TrxHash = 'trx_hash'
}

/** Streaming cursor of the table "inscription_traits" */
export type Inscription_Traits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inscription_Traits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Inscription_Traits_Stream_Cursor_Value_Input = {
  display_type?: InputMaybe<Scalars['String']['input']>;
  trait_percent?: InputMaybe<Scalars['numeric']['input']>;
  trait_type?: InputMaybe<Scalars['String']['input']>;
  trait_value?: InputMaybe<Scalars['String']['input']>;
  trait_value_count?: InputMaybe<Scalars['bigint']['input']>;
  trx_hash?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "inscription_transfers" */
export type Inscription_Transfers = {
  __typename?: 'inscription_transfers';
  block_number: Scalars['bigint']['output'];
  confirmed: Scalars['Boolean']['output'];
  from_address: Scalars['String']['output'];
  to_address: Scalars['String']['output'];
  transferred_at: Scalars['timestamptz']['output'];
  transferring_trx: Scalars['String']['output'];
  trx_hash: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "inscription_transfers". All fields are combined with a logical 'AND'. */
export type Inscription_Transfers_Bool_Exp = {
  _and?: InputMaybe<Array<Inscription_Transfers_Bool_Exp>>;
  _not?: InputMaybe<Inscription_Transfers_Bool_Exp>;
  _or?: InputMaybe<Array<Inscription_Transfers_Bool_Exp>>;
  block_number?: InputMaybe<Bigint_Comparison_Exp>;
  confirmed?: InputMaybe<Boolean_Comparison_Exp>;
  from_address?: InputMaybe<String_Comparison_Exp>;
  to_address?: InputMaybe<String_Comparison_Exp>;
  transferred_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  transferring_trx?: InputMaybe<String_Comparison_Exp>;
  trx_hash?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "inscription_transfers". */
export type Inscription_Transfers_Order_By = {
  block_number?: InputMaybe<Order_By>;
  confirmed?: InputMaybe<Order_By>;
  from_address?: InputMaybe<Order_By>;
  to_address?: InputMaybe<Order_By>;
  transferred_at?: InputMaybe<Order_By>;
  transferring_trx?: InputMaybe<Order_By>;
  trx_hash?: InputMaybe<Order_By>;
};

/** select columns of table "inscription_transfers" */
export enum Inscription_Transfers_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  ToAddress = 'to_address',
  /** column name */
  TransferredAt = 'transferred_at',
  /** column name */
  TransferringTrx = 'transferring_trx',
  /** column name */
  TrxHash = 'trx_hash'
}

/** columns and relationships of "inscriptions" */
export type Inscriptions = {
  __typename?: 'inscriptions';
  block_number: Scalars['bigint']['output'];
  category: Scalars['String']['output'];
  confirmed: Scalars['Boolean']['output'];
  content_uri: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  creator_address: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  internal_trx_index: Scalars['bigint']['output'];
  mtype: Scalars['String']['output'];
  owner_address: Scalars['String']['output'];
  position: Scalars['bigint']['output'];
  trx_hash: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "inscriptions". All fields are combined with a logical 'AND'. */
export type Inscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Inscriptions_Bool_Exp>>;
  _not?: InputMaybe<Inscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Inscriptions_Bool_Exp>>;
  block_number?: InputMaybe<Bigint_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  confirmed?: InputMaybe<Boolean_Comparison_Exp>;
  content_uri?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator_address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  internal_trx_index?: InputMaybe<Bigint_Comparison_Exp>;
  mtype?: InputMaybe<String_Comparison_Exp>;
  owner_address?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Bigint_Comparison_Exp>;
  trx_hash?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "inscriptions". */
export type Inscriptions_Order_By = {
  block_number?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  confirmed?: InputMaybe<Order_By>;
  content_uri?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  internal_trx_index?: InputMaybe<Order_By>;
  mtype?: InputMaybe<Order_By>;
  owner_address?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  trx_hash?: InputMaybe<Order_By>;
};

/** select columns of table "inscriptions" */
export enum Inscriptions_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Category = 'category',
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  ContentUri = 'content_uri',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  Id = 'id',
  /** column name */
  InternalTrxIndex = 'internal_trx_index',
  /** column name */
  Mtype = 'mtype',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  Position = 'position',
  /** column name */
  TrxHash = 'trx_hash'
}

export type Lazy_Claim_In = {
  id: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type Lazy_Claim_Out = {
  __typename?: 'lazy_claim_out';
  calldata: Scalars['String']['output'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  cancel_new_collection: OkResponse;
  create_collection: OkResponse;
  on_collection_banner_upload: OkResponse;
  on_collection_logo_upload: OkResponse;
  on_new_collection_upload: OkResponse;
  on_publish: OkResponse;
  signIn: SignInOutput;
  /** update single row of the table: "new_collections" */
  update_new_collections_by_pk?: Maybe<New_Collections>;
};


/** mutation root */
export type Mutation_RootCancel_New_CollectionArgs = {
  object: Cancel_New_Collection_In;
};


/** mutation root */
export type Mutation_RootCreate_CollectionArgs = {
  object: Create_Collection_In;
};


/** mutation root */
export type Mutation_RootOn_Collection_Banner_UploadArgs = {
  object: On_Collection_Banner_Upload_In;
};


/** mutation root */
export type Mutation_RootOn_Collection_Logo_UploadArgs = {
  object: On_Collection_Logo_Upload_In;
};


/** mutation root */
export type Mutation_RootOn_New_Collection_UploadArgs = {
  object: On_New_Collection_Upload_In;
};


/** mutation root */
export type Mutation_RootOn_PublishArgs = {
  object: On_Publish_In;
};


/** mutation root */
export type Mutation_RootSignInArgs = {
  object: SignInInput;
};


/** mutation root */
export type Mutation_RootUpdate_New_Collections_By_PkArgs = {
  _inc?: InputMaybe<New_Collections_Inc_Input>;
  _set?: InputMaybe<New_Collections_Set_Input>;
  pk_columns: New_Collections_Pk_Columns_Input;
};

/** columns and relationships of "new_collection_files" */
export type New_Collection_Files = {
  __typename?: 'new_collection_files';
  duplicate: Scalars['Boolean']['output'];
  /** An object relationship */
  new_collection?: Maybe<New_Collections>;
  size: Scalars['bigint']['output'];
  url: Scalars['String']['output'];
};

/** aggregated selection of "new_collection_files" */
export type New_Collection_Files_Aggregate = {
  __typename?: 'new_collection_files_aggregate';
  aggregate?: Maybe<New_Collection_Files_Aggregate_Fields>;
  nodes: Array<New_Collection_Files>;
};

export type New_Collection_Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<New_Collection_Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<New_Collection_Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<New_Collection_Files_Aggregate_Bool_Exp_Count>;
};

export type New_Collection_Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: New_Collection_Files_Select_Column_New_Collection_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<New_Collection_Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type New_Collection_Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: New_Collection_Files_Select_Column_New_Collection_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<New_Collection_Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type New_Collection_Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<New_Collection_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<New_Collection_Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "new_collection_files" */
export type New_Collection_Files_Aggregate_Fields = {
  __typename?: 'new_collection_files_aggregate_fields';
  avg?: Maybe<New_Collection_Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<New_Collection_Files_Max_Fields>;
  min?: Maybe<New_Collection_Files_Min_Fields>;
  stddev?: Maybe<New_Collection_Files_Stddev_Fields>;
  stddev_pop?: Maybe<New_Collection_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<New_Collection_Files_Stddev_Samp_Fields>;
  sum?: Maybe<New_Collection_Files_Sum_Fields>;
  var_pop?: Maybe<New_Collection_Files_Var_Pop_Fields>;
  var_samp?: Maybe<New_Collection_Files_Var_Samp_Fields>;
  variance?: Maybe<New_Collection_Files_Variance_Fields>;
};


/** aggregate fields of "new_collection_files" */
export type New_Collection_Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<New_Collection_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "new_collection_files" */
export type New_Collection_Files_Aggregate_Order_By = {
  avg?: InputMaybe<New_Collection_Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<New_Collection_Files_Max_Order_By>;
  min?: InputMaybe<New_Collection_Files_Min_Order_By>;
  stddev?: InputMaybe<New_Collection_Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<New_Collection_Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<New_Collection_Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<New_Collection_Files_Sum_Order_By>;
  var_pop?: InputMaybe<New_Collection_Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<New_Collection_Files_Var_Samp_Order_By>;
  variance?: InputMaybe<New_Collection_Files_Variance_Order_By>;
};

/** aggregate avg on columns */
export type New_Collection_Files_Avg_Fields = {
  __typename?: 'new_collection_files_avg_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "new_collection_files" */
export type New_Collection_Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "new_collection_files". All fields are combined with a logical 'AND'. */
export type New_Collection_Files_Bool_Exp = {
  _and?: InputMaybe<Array<New_Collection_Files_Bool_Exp>>;
  _not?: InputMaybe<New_Collection_Files_Bool_Exp>;
  _or?: InputMaybe<Array<New_Collection_Files_Bool_Exp>>;
  duplicate?: InputMaybe<Boolean_Comparison_Exp>;
  new_collection?: InputMaybe<New_Collections_Bool_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type New_Collection_Files_Max_Fields = {
  __typename?: 'new_collection_files_max_fields';
  size?: Maybe<Scalars['bigint']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "new_collection_files" */
export type New_Collection_Files_Max_Order_By = {
  size?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type New_Collection_Files_Min_Fields = {
  __typename?: 'new_collection_files_min_fields';
  size?: Maybe<Scalars['bigint']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "new_collection_files" */
export type New_Collection_Files_Min_Order_By = {
  size?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "new_collection_files". */
export type New_Collection_Files_Order_By = {
  duplicate?: InputMaybe<Order_By>;
  new_collection?: InputMaybe<New_Collections_Order_By>;
  size?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "new_collection_files" */
export enum New_Collection_Files_Select_Column {
  /** column name */
  Duplicate = 'duplicate',
  /** column name */
  Size = 'size',
  /** column name */
  Url = 'url'
}

/** select "new_collection_files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "new_collection_files" */
export enum New_Collection_Files_Select_Column_New_Collection_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Duplicate = 'duplicate'
}

/** select "new_collection_files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "new_collection_files" */
export enum New_Collection_Files_Select_Column_New_Collection_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Duplicate = 'duplicate'
}

/** aggregate stddev on columns */
export type New_Collection_Files_Stddev_Fields = {
  __typename?: 'new_collection_files_stddev_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "new_collection_files" */
export type New_Collection_Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type New_Collection_Files_Stddev_Pop_Fields = {
  __typename?: 'new_collection_files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "new_collection_files" */
export type New_Collection_Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type New_Collection_Files_Stddev_Samp_Fields = {
  __typename?: 'new_collection_files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "new_collection_files" */
export type New_Collection_Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "new_collection_files" */
export type New_Collection_Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: New_Collection_Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type New_Collection_Files_Stream_Cursor_Value_Input = {
  duplicate?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['bigint']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type New_Collection_Files_Sum_Fields = {
  __typename?: 'new_collection_files_sum_fields';
  size?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "new_collection_files" */
export type New_Collection_Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type New_Collection_Files_Var_Pop_Fields = {
  __typename?: 'new_collection_files_var_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "new_collection_files" */
export type New_Collection_Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type New_Collection_Files_Var_Samp_Fields = {
  __typename?: 'new_collection_files_var_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "new_collection_files" */
export type New_Collection_Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type New_Collection_Files_Variance_Fields = {
  __typename?: 'new_collection_files_variance_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "new_collection_files" */
export type New_Collection_Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

export type New_Collection_Upload_Output = {
  __typename?: 'new_collection_upload_output';
  new_collection_uuid: Scalars['String']['output'];
  pre_signed_url: Scalars['String']['output'];
};

/** columns and relationships of "new_collections" */
export type New_Collections = {
  __typename?: 'new_collections';
  bin_runtime: Scalars['String']['output'];
  contract_address: Scalars['String']['output'];
  creator: Scalars['String']['output'];
  error: Scalars['String']['output'];
  /** An array relationship */
  files: Array<New_Collection_Files>;
  /** An aggregate relationship */
  files_aggregate: New_Collection_Files_Aggregate;
  id: Scalars['String']['output'];
  max_claim: Scalars['numeric']['output'];
  price: Scalars['numeric']['output'];
  progress: Scalars['bigint']['output'];
  status: Scalars['String']['output'];
};


/** columns and relationships of "new_collections" */
export type New_CollectionsFilesArgs = {
  distinct_on?: InputMaybe<Array<New_Collection_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<New_Collection_Files_Order_By>>;
  where?: InputMaybe<New_Collection_Files_Bool_Exp>;
};


/** columns and relationships of "new_collections" */
export type New_CollectionsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<New_Collection_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<New_Collection_Files_Order_By>>;
  where?: InputMaybe<New_Collection_Files_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "new_collections". All fields are combined with a logical 'AND'. */
export type New_Collections_Bool_Exp = {
  _and?: InputMaybe<Array<New_Collections_Bool_Exp>>;
  _not?: InputMaybe<New_Collections_Bool_Exp>;
  _or?: InputMaybe<Array<New_Collections_Bool_Exp>>;
  bin_runtime?: InputMaybe<String_Comparison_Exp>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  creator?: InputMaybe<String_Comparison_Exp>;
  error?: InputMaybe<String_Comparison_Exp>;
  files?: InputMaybe<New_Collection_Files_Bool_Exp>;
  files_aggregate?: InputMaybe<New_Collection_Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  max_claim?: InputMaybe<Numeric_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  progress?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "new_collections" */
export type New_Collections_Inc_Input = {
  max_claim?: InputMaybe<Scalars['numeric']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
};

/** response of any mutation on the table "new_collections" */
export type New_Collections_Mutation_Response = {
  __typename?: 'new_collections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<New_Collections>;
};

/** Ordering options when selecting data from "new_collections". */
export type New_Collections_Order_By = {
  bin_runtime?: InputMaybe<Order_By>;
  contract_address?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<New_Collection_Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  max_claim?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: new_collections */
export type New_Collections_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "new_collections" */
export enum New_Collections_Select_Column {
  /** column name */
  BinRuntime = 'bin_runtime',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  Creator = 'creator',
  /** column name */
  Error = 'error',
  /** column name */
  Id = 'id',
  /** column name */
  MaxClaim = 'max_claim',
  /** column name */
  Price = 'price',
  /** column name */
  Progress = 'progress',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "new_collections" */
export type New_Collections_Set_Input = {
  max_claim?: InputMaybe<Scalars['numeric']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
};

/** Streaming cursor of the table "new_collections" */
export type New_Collections_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: New_Collections_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type New_Collections_Stream_Cursor_Value_Input = {
  bin_runtime?: InputMaybe<Scalars['String']['input']>;
  contract_address?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  max_claim?: InputMaybe<Scalars['numeric']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  progress?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type New_Collections_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<New_Collections_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<New_Collections_Set_Input>;
  /** filter the rows which have to be updated */
  where: New_Collections_Bool_Exp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

export type On_Collection_Banner_Upload_In = {
  slug: Scalars['String']['input'];
};

export type On_Collection_Logo_Upload_In = {
  slug: Scalars['String']['input'];
};

export type On_New_Collection_Upload_In = {
  new_collection_uuid: Scalars['String']['input'];
};

export type On_Publish_In = {
  slug: Scalars['String']['input'];
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "brc20_token_stats" */
  brc20_token_stats: Array<Brc20_Token_Stats>;
  /** fetch data from the table: "brc20_tokens" */
  brc20_tokens: Array<Brc20_Tokens>;
  /** fetch data from the table: "brc20_user_balances" */
  brc20_user_balances: Array<Brc20_User_Balances>;
  claim: ClaimOutput;
  /** fetch data from the table: "collection_inscriptions" */
  collection_inscriptions: Array<Collection_Inscriptions>;
  /** fetch aggregated fields from the table: "collection_inscriptions" */
  collection_inscriptions_aggregate: Collection_Inscriptions_Aggregate;
  /** fetch data from the table: "collection_stats" */
  collection_stats: Array<Collection_Stats>;
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  get_collection_upload_urls: Get_Collection_Upload_Urls_Out;
  /** fetch data from the table: "inscription_traits" */
  inscription_traits: Array<Inscription_Traits>;
  /** fetch data from the table: "inscription_transfers" */
  inscription_transfers: Array<Inscription_Transfers>;
  /** fetch data from the table: "inscriptions" */
  inscriptions: Array<Inscriptions>;
  lazy_claim: Lazy_Claim_Out;
  /** fetch data from the table: "new_collection_files" */
  new_collection_files: Array<New_Collection_Files>;
  /** fetch aggregated fields from the table: "new_collection_files" */
  new_collection_files_aggregate: New_Collection_Files_Aggregate;
  new_collection_upload: New_Collection_Upload_Output;
  /** fetch data from the table: "new_collections" */
  new_collections: Array<New_Collections>;
  /** fetch data from the table: "new_collections" using primary key columns */
  new_collections_by_pk?: Maybe<New_Collections>;
  signedMessage?: Maybe<SignedMessageOutput>;
};


export type Query_RootBrc20_Token_StatsArgs = {
  distinct_on?: InputMaybe<Array<Brc20_Token_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brc20_Token_Stats_Order_By>>;
  where?: InputMaybe<Brc20_Token_Stats_Bool_Exp>;
};


export type Query_RootBrc20_TokensArgs = {
  distinct_on?: InputMaybe<Array<Brc20_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brc20_Tokens_Order_By>>;
  where?: InputMaybe<Brc20_Tokens_Bool_Exp>;
};


export type Query_RootBrc20_User_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Brc20_User_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brc20_User_Balances_Order_By>>;
  where?: InputMaybe<Brc20_User_Balances_Bool_Exp>;
};


export type Query_RootClaimArgs = {
  inscription: Scalars['String']['input'];
};


export type Query_RootCollection_InscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Collection_Inscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Inscriptions_Order_By>>;
  where?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
};


export type Query_RootCollection_Inscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Inscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Inscriptions_Order_By>>;
  where?: InputMaybe<Collection_Inscriptions_Bool_Exp>;
};


export type Query_RootCollection_StatsArgs = {
  distinct_on?: InputMaybe<Array<Collection_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Stats_Order_By>>;
  where?: InputMaybe<Collection_Stats_Bool_Exp>;
};


export type Query_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootGet_Collection_Upload_UrlsArgs = {
  object: Get_Collection_Upload_Urls_In;
};


export type Query_RootInscription_TraitsArgs = {
  distinct_on?: InputMaybe<Array<Inscription_Traits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Inscription_Traits_Order_By>>;
  where?: InputMaybe<Inscription_Traits_Bool_Exp>;
};


export type Query_RootInscription_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Inscription_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Inscription_Transfers_Order_By>>;
  where?: InputMaybe<Inscription_Transfers_Bool_Exp>;
};


export type Query_RootInscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Inscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Inscriptions_Order_By>>;
  where?: InputMaybe<Inscriptions_Bool_Exp>;
};


export type Query_RootLazy_ClaimArgs = {
  object: Lazy_Claim_In;
};


export type Query_RootNew_Collection_FilesArgs = {
  distinct_on?: InputMaybe<Array<New_Collection_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<New_Collection_Files_Order_By>>;
  where?: InputMaybe<New_Collection_Files_Bool_Exp>;
};


export type Query_RootNew_Collection_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<New_Collection_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<New_Collection_Files_Order_By>>;
  where?: InputMaybe<New_Collection_Files_Bool_Exp>;
};


export type Query_RootNew_CollectionsArgs = {
  distinct_on?: InputMaybe<Array<New_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<New_Collections_Order_By>>;
  where?: InputMaybe<New_Collections_Bool_Exp>;
};


export type Query_RootNew_Collections_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type SignInInput = {
  message: Scalars['String']['input'];
  sigR: Scalars['String']['input'];
  sigS: Scalars['String']['input'];
  sigV: Scalars['String']['input'];
};

export type SignInOutput = {
  __typename?: 'signInOutput';
  token?: Maybe<Scalars['String']['output']>;
};

export type SignedMessageOutput = {
  __typename?: 'signedMessageOutput';
  message: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type CancelNewCollectionMutationVariables = Exact<{
  newCollectionUUID: Scalars['String']['input'];
}>;


export type CancelNewCollectionMutation = { __typename?: 'mutation_root', cancel_new_collection: { __typename?: 'OkResponse', ok?: boolean | null } };

export type CreateCollectionMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  new_collection_uuid: Scalars['String']['input'];
  discord_username?: InputMaybe<Scalars['String']['input']>;
  external_url?: InputMaybe<Scalars['String']['input']>;
  instagram_username?: InputMaybe<Scalars['String']['input']>;
  medium_username?: InputMaybe<Scalars['String']['input']>;
  telegram_username?: InputMaybe<Scalars['String']['input']>;
  twitter_username?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCollectionMutation = { __typename?: 'mutation_root', create_collection: { __typename?: 'OkResponse', ok?: boolean | null } };

export type OnCollectionBannerUploadMutationVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type OnCollectionBannerUploadMutation = { __typename?: 'mutation_root', on_collection_banner_upload: { __typename?: 'OkResponse', ok?: boolean | null } };

export type OnCollectionLogoUploadMutationVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type OnCollectionLogoUploadMutation = { __typename?: 'mutation_root', on_collection_logo_upload: { __typename?: 'OkResponse', ok?: boolean | null } };

export type OnNewCollectionUploadMutationVariables = Exact<{
  new_collection_uuid: Scalars['String']['input'];
}>;


export type OnNewCollectionUploadMutation = { __typename?: 'mutation_root', on_new_collection_upload: { __typename?: 'OkResponse', ok?: boolean | null } };

export type OnPublishMutationVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type OnPublishMutation = { __typename?: 'mutation_root', on_publish: { __typename?: 'OkResponse', ok?: boolean | null } };

export type SignInMutationVariables = Exact<{
  message: Scalars['String']['input'];
  sigR: Scalars['String']['input'];
  sigS: Scalars['String']['input'];
  sigV: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'mutation_root', signIn: { __typename?: 'signInOutput', token?: string | null } };

export type UpdateNewCollectionsByIdMutationVariables = Exact<{
  id: Scalars['String']['input'];
  max_claim: Scalars['numeric']['input'];
  price: Scalars['numeric']['input'];
}>;


export type UpdateNewCollectionsByIdMutation = { __typename?: 'mutation_root', update_new_collections_by_pk?: { __typename?: 'new_collections', bin_runtime: string, contract_address: string, creator: string, error: string, max_claim: any, price: any, progress: any, status: string } | null };

export type GetBrc20TokensQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brc20_Tokens_Order_By> | Brc20_Tokens_Order_By>;
  where?: InputMaybe<Brc20_Tokens_Bool_Exp>;
}>;


export type GetBrc20TokensQuery = { __typename?: 'query_root', brc20_tokens: Array<{ __typename?: 'brc20_tokens', decimal_digits: string, decimals: any, max_supply: any, mint_limit: any, minted_total: any, protocol: string, tick: string, stats?: { __typename?: 'brc20_token_stats', holders?: any | null } | null }> };

export type GetBrc20UserBalancesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Brc20_User_Balances_Order_By> | Brc20_User_Balances_Order_By>;
  where?: InputMaybe<Brc20_User_Balances_Bool_Exp>;
}>;


export type GetBrc20UserBalancesQuery = { __typename?: 'query_root', brc20_user_balances: Array<{ __typename?: 'brc20_user_balances', balance: any, owner: string, protocol: string, tick: string }> };

export type GetClaimArgumentsQueryVariables = Exact<{
  inscription: Scalars['String']['input'];
}>;


export type GetClaimArgumentsQuery = { __typename?: 'query_root', claim: { __typename?: 'ClaimOutput', claimed: boolean, signature: string } };

export type GetCollectionQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  ownerAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCollectionQuery = { __typename?: 'query_root', collections: Array<{ __typename?: 'collections', contract_address: string, creator: string, description: string, discord_username: string, external_url: string, instagram_username: string, mint_type: string, is_mintable: boolean, is_verified: boolean, medium_username: string, minted: any, max_claim: any, name: string, price: any, slug: string, telegram_username: string, total_supply: any, twitter_username: string, logo_image_url: string, banner_image_url: string, inscriptions_aggregate: { __typename?: 'collection_inscriptions_aggregate', aggregate?: { __typename?: 'collection_inscriptions_aggregate_fields', count: number } | null } }> };

export type GetCollectionInscriptionsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type GetCollectionInscriptionsQuery = { __typename?: 'query_root', collection_inscriptions: Array<{ __typename?: 'collection_inscriptions', claimed: boolean, position: any, trx_hash: string, inscription?: { __typename?: 'inscriptions', block_number: any, category: string, confirmed: boolean, content_uri: string, created_at: any, creator_address: string, id: any, owner_address: string, trx_hash: string, mtype: string, internal_trx_index: any } | null }> };

export type InscriptionsFragmentFragment = { __typename?: 'inscriptions', block_number: any, category: string, confirmed: boolean, content_uri: string, created_at: any, creator_address: string, id: any, owner_address: string, trx_hash: string, mtype: string, internal_trx_index: any };

export type GetCollectionStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionStatsQuery = { __typename?: 'query_root', collection_stats: Array<{ __typename?: 'collection_stats', in_progress?: any | null }> };

export type GetCollectionUploadUrlsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCollectionUploadUrlsQuery = { __typename?: 'query_root', get_collection_upload_urls: { __typename?: 'get_collection_upload_urls_out', banner_url: string, logo_url: string } };

export type GetCollectionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collections_Order_By> | Collections_Order_By>;
  where?: InputMaybe<Collections_Bool_Exp>;
}>;


export type GetCollectionsQuery = { __typename?: 'query_root', collections: Array<{ __typename?: 'collections', contract_address: string, creator: string, description: string, discord_username: string, external_url: string, instagram_username: string, is_mintable: boolean, is_verified: boolean, medium_username: string, minted: any, name: string, price: any, slug: string, telegram_username: string, total_supply: any, twitter_username: string, logo_image_url: string, banner_image_url: string }> };

export type GetInscriptionByTrxHashQueryVariables = Exact<{
  trxHash: Scalars['String']['input'];
}>;


export type GetInscriptionByTrxHashQuery = { __typename?: 'query_root', inscriptions: Array<{ __typename?: 'inscriptions', block_number: any, confirmed: boolean, content_uri: string, created_at: any, creator_address: string, id: any, position: any, owner_address: string, trx_hash: string, category: string, mtype: string, internal_trx_index: any }> };

export type GetInscriptionTraitsQueryVariables = Exact<{
  where?: InputMaybe<Inscription_Traits_Bool_Exp>;
}>;


export type GetInscriptionTraitsQuery = { __typename?: 'query_root', inscription_traits: Array<{ __typename?: 'inscription_traits', display_type: string, trait_percent: any, trait_type: string, trait_value: string, trait_value_count: any, trx_hash: string }> };

export type GetInscriptionTransfersQueryVariables = Exact<{
  trxHash: Scalars['String']['input'];
}>;


export type GetInscriptionTransfersQuery = { __typename?: 'query_root', inscription_transfers: Array<{ __typename?: 'inscription_transfers', block_number: any, confirmed: boolean, from_address: string, to_address: string, transferred_at: any, transferring_trx: string, trx_hash: string }> };

export type GetInscriptionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Inscriptions_Order_By> | Inscriptions_Order_By>;
  where?: InputMaybe<Inscriptions_Bool_Exp>;
}>;


export type GetInscriptionsQuery = { __typename?: 'query_root', inscriptions: Array<{ __typename?: 'inscriptions', block_number: any, confirmed: boolean, content_uri: string, created_at: any, creator_address: string, owner_address: string, trx_hash: string, id: any, position: any, category: string, mtype: string, internal_trx_index: any }> };

export type GetLazyClaimArgumentsQueryVariables = Exact<{
  id: Scalars['String']['input'];
  slug: Scalars['String']['input'];
}>;


export type GetLazyClaimArgumentsQuery = { __typename?: 'query_root', lazy_claim: { __typename?: 'lazy_claim_out', calldata: string } };

export type GetNewCollectionByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetNewCollectionByIdQuery = { __typename?: 'query_root', new_collections_by_pk?: { __typename?: 'new_collections', bin_runtime: string, contract_address: string, creator: string, error: string, max_claim: any, price: any, progress: any, status: string } | null };

export type GetNewCollectionFilesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  collectionId: Scalars['String']['input'];
}>;


export type GetNewCollectionFilesQuery = { __typename?: 'query_root', new_collection_files: Array<{ __typename?: 'new_collection_files', url: string, size: any }> };

export type GetNewCollectionFilesInfoQueryVariables = Exact<{
  collectionId: Scalars['String']['input'];
}>;


export type GetNewCollectionFilesInfoQuery = { __typename?: 'query_root', total_files_count: { __typename?: 'new_collection_files_aggregate', aggregate?: { __typename?: 'new_collection_files_aggregate_fields', count: number } | null }, rejected_files_count: { __typename?: 'new_collection_files_aggregate', aggregate?: { __typename?: 'new_collection_files_aggregate_fields', count: number } | null }, rejected_files: Array<{ __typename?: 'new_collection_files', url: string }> };

export type GetNewCollectionUploadQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewCollectionUploadQuery = { __typename?: 'query_root', new_collection_upload: { __typename?: 'new_collection_upload_output', new_collection_uuid: string, pre_signed_url: string } };

export type GetNewCollectionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<New_Collections_Order_By> | New_Collections_Order_By>;
  where?: InputMaybe<New_Collections_Bool_Exp>;
}>;


export type GetNewCollectionsQuery = { __typename?: 'query_root', new_collections: Array<{ __typename?: 'new_collections', bin_runtime: string, contract_address: string, creator: string, error: string, max_claim: any, price: any, progress: any, status: string }> };

export type GetNonceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNonceQuery = { __typename?: 'query_root', signedMessage?: { __typename?: 'signedMessageOutput', message: string } | null };

export type IsSlugAvailableQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type IsSlugAvailableQuery = { __typename?: 'query_root', collections: Array<{ __typename?: 'collections', slug: string }> };

export const InscriptionsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"inscriptionsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"inscriptions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_number"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"confirmed"}},{"kind":"Field","name":{"kind":"Name","value":"content_uri"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"creator_address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner_address"}},{"kind":"Field","name":{"kind":"Name","value":"trx_hash"}},{"kind":"Field","name":{"kind":"Name","value":"mtype"}},{"kind":"Field","name":{"kind":"Name","value":"internal_trx_index"}}]}}]} as unknown as DocumentNode<InscriptionsFragmentFragment, unknown>;
export const CancelNewCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelNewCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newCollectionUUID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancel_new_collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"new_collection_uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newCollectionUUID"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<CancelNewCollectionMutation, CancelNewCollectionMutationVariables>;
export const CreateCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"new_collection_uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"discord_username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"external_url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instagram_username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"medium_username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"telegram_username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"twitter_username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"discord_username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"discord_username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"external_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"external_url"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"instagram_username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instagram_username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"medium_username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"medium_username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"new_collection_uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"new_collection_uuid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"telegram_username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"telegram_username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"twitter_username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"twitter_username"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<CreateCollectionMutation, CreateCollectionMutationVariables>;
export const OnCollectionBannerUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OnCollectionBannerUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"on_collection_banner_upload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<OnCollectionBannerUploadMutation, OnCollectionBannerUploadMutationVariables>;
export const OnCollectionLogoUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OnCollectionLogoUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"on_collection_logo_upload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<OnCollectionLogoUploadMutation, OnCollectionLogoUploadMutationVariables>;
export const OnNewCollectionUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OnNewCollectionUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"new_collection_uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"on_new_collection_upload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"new_collection_uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"new_collection_uuid"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<OnNewCollectionUploadMutation, OnNewCollectionUploadMutationVariables>;
export const OnPublishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OnPublish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"on_publish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<OnPublishMutation, OnPublishMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sigR"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sigS"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sigV"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sigR"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sigR"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sigS"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sigS"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sigV"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sigV"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const UpdateNewCollectionsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNewCollectionsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"max_claim"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_new_collections_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"max_claim"},"value":{"kind":"Variable","name":{"kind":"Name","value":"max_claim"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bin_runtime"}},{"kind":"Field","name":{"kind":"Name","value":"contract_address"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"max_claim"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateNewCollectionsByIdMutation, UpdateNewCollectionsByIdMutationVariables>;
export const GetBrc20TokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrc20Tokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"brc20_tokens_order_by"}}}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"brc20_tokens_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brc20_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"decimal_digits"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"max_supply"}},{"kind":"Field","name":{"kind":"Name","value":"mint_limit"}},{"kind":"Field","name":{"kind":"Name","value":"minted_total"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holders"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tick"}}]}}]}}]} as unknown as DocumentNode<GetBrc20TokensQuery, GetBrc20TokensQueryVariables>;
export const GetBrc20UserBalancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrc20UserBalances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"brc20_user_balances_order_by"}}}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"brc20_user_balances_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brc20_user_balances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"tick"}}]}}]}}]} as unknown as DocumentNode<GetBrc20UserBalancesQuery, GetBrc20UserBalancesQueryVariables>;
export const GetClaimArgumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClaimArguments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inscription"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claim"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inscription"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inscription"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claimed"}},{"kind":"Field","name":{"kind":"Name","value":"signature"}}]}}]}}]} as unknown as DocumentNode<GetClaimArgumentsQuery, GetClaimArgumentsQueryVariables>;
export const GetCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerAddress"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_address"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"discord_username"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"instagram_username"}},{"kind":"Field","name":{"kind":"Name","value":"mint_type"}},{"kind":"Field","name":{"kind":"Name","value":"is_mintable"}},{"kind":"Field","name":{"kind":"Name","value":"is_verified"}},{"kind":"Field","name":{"kind":"Name","value":"medium_username"}},{"kind":"Field","name":{"kind":"Name","value":"minted"}},{"kind":"Field","name":{"kind":"Name","value":"max_claim"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"telegram_username"}},{"kind":"Field","name":{"kind":"Name","value":"total_supply"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_username"}},{"kind":"Field","name":{"kind":"Name","value":"logo_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"inscriptions_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"inscription"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner_address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerAddress"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionQuery, GetCollectionQueryVariables>;
export const GetCollectionInscriptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionInscriptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection_inscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"collection"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"position"},"value":{"kind":"EnumValue","value":"asc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"claimed"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"trx_hash"}},{"kind":"Field","name":{"kind":"Name","value":"inscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"inscriptionsFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"inscriptionsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"inscriptions"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_number"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"confirmed"}},{"kind":"Field","name":{"kind":"Name","value":"content_uri"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"creator_address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner_address"}},{"kind":"Field","name":{"kind":"Name","value":"trx_hash"}},{"kind":"Field","name":{"kind":"Name","value":"mtype"}},{"kind":"Field","name":{"kind":"Name","value":"internal_trx_index"}}]}}]} as unknown as DocumentNode<GetCollectionInscriptionsQuery, GetCollectionInscriptionsQueryVariables>;
export const GetCollectionStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection_stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"in_progress"}}]}}]}}]} as unknown as DocumentNode<GetCollectionStatsQuery, GetCollectionStatsQueryVariables>;
export const GetCollectionUploadUrlsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionUploadUrls"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"get_collection_upload_urls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banner_url"}},{"kind":"Field","name":{"kind":"Name","value":"logo_url"}}]}}]}}]} as unknown as DocumentNode<GetCollectionUploadUrlsQuery, GetCollectionUploadUrlsQueryVariables>;
export const GetCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"collections_order_by"}}}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"collections_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract_address"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"discord_username"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"instagram_username"}},{"kind":"Field","name":{"kind":"Name","value":"is_mintable"}},{"kind":"Field","name":{"kind":"Name","value":"is_verified"}},{"kind":"Field","name":{"kind":"Name","value":"medium_username"}},{"kind":"Field","name":{"kind":"Name","value":"minted"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"telegram_username"}},{"kind":"Field","name":{"kind":"Name","value":"total_supply"}},{"kind":"Field","name":{"kind":"Name","value":"twitter_username"}},{"kind":"Field","name":{"kind":"Name","value":"logo_image_url"}},{"kind":"Field","name":{"kind":"Name","value":"banner_image_url"}}]}}]}}]} as unknown as DocumentNode<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const GetInscriptionByTrxHashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInscriptionByTrxHash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trxHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trx_hash"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trxHash"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_number"}},{"kind":"Field","name":{"kind":"Name","value":"confirmed"}},{"kind":"Field","name":{"kind":"Name","value":"content_uri"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"creator_address"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"owner_address"}},{"kind":"Field","name":{"kind":"Name","value":"trx_hash"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"mtype"}},{"kind":"Field","name":{"kind":"Name","value":"internal_trx_index"}}]}}]}}]} as unknown as DocumentNode<GetInscriptionByTrxHashQuery, GetInscriptionByTrxHashQueryVariables>;
export const GetInscriptionTraitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInscriptionTraits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"inscription_traits_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inscription_traits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_type"}},{"kind":"Field","name":{"kind":"Name","value":"trait_percent"}},{"kind":"Field","name":{"kind":"Name","value":"trait_type"}},{"kind":"Field","name":{"kind":"Name","value":"trait_value"}},{"kind":"Field","name":{"kind":"Name","value":"trait_value_count"}},{"kind":"Field","name":{"kind":"Name","value":"trx_hash"}}]}}]}}]} as unknown as DocumentNode<GetInscriptionTraitsQuery, GetInscriptionTraitsQueryVariables>;
export const GetInscriptionTransfersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInscriptionTransfers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trxHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inscription_transfers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"transferred_at"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trx_hash"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trxHash"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_number"}},{"kind":"Field","name":{"kind":"Name","value":"confirmed"}},{"kind":"Field","name":{"kind":"Name","value":"from_address"}},{"kind":"Field","name":{"kind":"Name","value":"to_address"}},{"kind":"Field","name":{"kind":"Name","value":"transferred_at"}},{"kind":"Field","name":{"kind":"Name","value":"transferring_trx"}},{"kind":"Field","name":{"kind":"Name","value":"trx_hash"}}]}}]}}]} as unknown as DocumentNode<GetInscriptionTransfersQuery, GetInscriptionTransfersQueryVariables>;
export const GetInscriptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInscriptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"inscriptions_order_by"}}}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"inscriptions_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inscriptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block_number"}},{"kind":"Field","name":{"kind":"Name","value":"confirmed"}},{"kind":"Field","name":{"kind":"Name","value":"content_uri"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"creator_address"}},{"kind":"Field","name":{"kind":"Name","value":"owner_address"}},{"kind":"Field","name":{"kind":"Name","value":"trx_hash"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"mtype"}},{"kind":"Field","name":{"kind":"Name","value":"internal_trx_index"}}]}}]}}]} as unknown as DocumentNode<GetInscriptionsQuery, GetInscriptionsQueryVariables>;
export const GetLazyClaimArgumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLazyClaimArguments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lazy_claim"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calldata"}}]}}]}}]} as unknown as DocumentNode<GetLazyClaimArgumentsQuery, GetLazyClaimArgumentsQueryVariables>;
export const GetNewCollectionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewCollectionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"new_collections_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bin_runtime"}},{"kind":"Field","name":{"kind":"Name","value":"contract_address"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"max_claim"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetNewCollectionByIdQuery, GetNewCollectionByIdQueryVariables>;
export const GetNewCollectionFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewCollectionFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"new_collection_files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"new_collection"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]} as unknown as DocumentNode<GetNewCollectionFilesQuery, GetNewCollectionFilesQueryVariables>;
export const GetNewCollectionFilesInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewCollectionFilesInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"total_files_count"},"name":{"kind":"Name","value":"new_collection_files_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"new_collection"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rejected_files_count"},"name":{"kind":"Name","value":"new_collection_files_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"new_collection"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"size"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"StringValue","value":"98000","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"duplicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rejected_files"},"name":{"kind":"Name","value":"new_collection_files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"new_collection"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"size"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"StringValue","value":"98000","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"duplicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetNewCollectionFilesInfoQuery, GetNewCollectionFilesInfoQueryVariables>;
export const GetNewCollectionUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewCollectionUpload"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"new_collection_upload"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"new_collection_uuid"}},{"kind":"Field","name":{"kind":"Name","value":"pre_signed_url"}}]}}]}}]} as unknown as DocumentNode<GetNewCollectionUploadQuery, GetNewCollectionUploadQueryVariables>;
export const GetNewCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"new_collections_order_by"}}}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"new_collections_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"new_collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bin_runtime"}},{"kind":"Field","name":{"kind":"Name","value":"contract_address"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"max_claim"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"progress"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetNewCollectionsQuery, GetNewCollectionsQueryVariables>;
export const GetNonceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signedMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<GetNonceQuery, GetNonceQueryVariables>;
export const IsSlugAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsSlugAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<IsSlugAvailableQuery, IsSlugAvailableQueryVariables>;