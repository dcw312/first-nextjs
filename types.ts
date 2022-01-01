export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CarePlan = {
  __typename?: 'CarePlan';
  medications?: Maybe<Array<Maybe<Medication>>>;
  questionaire?: Maybe<Array<Maybe<Question>>>;
};

export type Medication = {
  __typename?: 'Medication';
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateQuestions?: Maybe<CarePlan>;
};


export type MutationUpdateQuestionsArgs = {
  questions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  getCarePlan?: Maybe<CarePlan>;
};

export type Question = {
  __typename?: 'Question';
  answer?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};
