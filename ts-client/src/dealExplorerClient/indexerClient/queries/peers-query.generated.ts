/* eslint-disable */
//@ts-nocheck
import * as Types from '../generated.types.js';

import { GraphQLClient } from 'graphql-request';
import type { RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type PeerQueryQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type PeerQueryQuery = { __typename?: 'Query', peer?: { __typename?: 'Peer', id: string, computeUnitsTotal: number, computeUnitsInDeal: number, offer: { __typename?: 'Offer', id: string }, provider: { __typename?: 'Provider', id: string, name: string }, currentCapacityCommitment?: { __typename?: 'CapacityCommitment', activeUnitCount: number } | null } | null };

export type ComputeUnitWithCcDataBasicFragment = { __typename?: 'ComputeUnit', id: string, workerId?: string | null, submittedProofsCount: number, deal?: { __typename?: 'Deal', id: string } | null, peer: { __typename?: 'Peer', id: string, currentCapacityCommitment?: { __typename?: 'CapacityCommitment', id: string, collateralPerUnit: any, submittedProofsCount: number, startEpoch: any } | null, provider: { __typename?: 'Provider', id: string } } };

export type ComputeUnitQueryQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type ComputeUnitQueryQuery = { __typename?: 'Query', computeUnit?: { __typename?: 'ComputeUnit', id: string, workerId?: string | null, submittedProofsCount: number, provider: { __typename?: 'Provider', id: string, name: string }, deal?: { __typename?: 'Deal', id: string } | null, peer: { __typename?: 'Peer', id: string, currentCapacityCommitment?: { __typename?: 'CapacityCommitment', id: string, collateralPerUnit: any, submittedProofsCount: number, startEpoch: any } | null, provider: { __typename?: 'Provider', id: string } } } | null };

export type ComputeUnitsQueryQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<Types.ComputeUnit_Filter>;
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  orderBy?: Types.InputMaybe<Types.ComputeUnit_OrderBy>;
  orderType?: Types.InputMaybe<Types.OrderDirection>;
}>;


export type ComputeUnitsQueryQuery = { __typename?: 'Query', computeUnits: Array<{ __typename?: 'ComputeUnit', id: string, workerId?: string | null, submittedProofsCount: number, deal?: { __typename?: 'Deal', id: string } | null, peer: { __typename?: 'Peer', id: string, currentCapacityCommitment?: { __typename?: 'CapacityCommitment', id: string, collateralPerUnit: any, submittedProofsCount: number, startEpoch: any } | null, provider: { __typename?: 'Provider', id: string } } }> };

export const ComputeUnitWithCcDataBasicFragmentDoc = gql`
    fragment ComputeUnitWithCCDataBasic on ComputeUnit {
  id
  workerId
  deal {
    id
  }
  peer {
    id
    currentCapacityCommitment {
      id
      collateralPerUnit
      submittedProofsCount
      startEpoch
    }
    provider {
      id
    }
  }
  submittedProofsCount
}
    `;
export const PeerQueryDocument = gql`
    query PeerQuery($id: ID!) {
  peer(id: $id) {
    id
    offer {
      id
    }
    provider {
      id
      name
    }
    computeUnitsTotal
    computeUnitsInDeal
    currentCapacityCommitment {
      activeUnitCount
    }
  }
}
    `;
export const ComputeUnitQueryDocument = gql`
    query ComputeUnitQuery($id: ID!) {
  computeUnit(id: $id) {
    ...ComputeUnitWithCCDataBasic
    provider {
      id
      name
    }
  }
}
    ${ComputeUnitWithCcDataBasicFragmentDoc}`;
export const ComputeUnitsQueryDocument = gql`
    query ComputeUnitsQuery($filters: ComputeUnit_filter, $offset: Int, $limit: Int, $orderBy: ComputeUnit_orderBy, $orderType: OrderDirection) {
  computeUnits(
    where: {and: [$filters, {deleted: false}]}
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderType
  ) {
    ...ComputeUnitWithCCDataBasic
  }
}
    ${ComputeUnitWithCcDataBasicFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    PeerQuery(variables: PeerQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PeerQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PeerQueryQuery>(PeerQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PeerQuery', 'query', variables);
    },
    ComputeUnitQuery(variables: ComputeUnitQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ComputeUnitQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ComputeUnitQueryQuery>(ComputeUnitQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ComputeUnitQuery', 'query', variables);
    },
    ComputeUnitsQuery(variables?: ComputeUnitsQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ComputeUnitsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ComputeUnitsQueryQuery>(ComputeUnitsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ComputeUnitsQuery', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
