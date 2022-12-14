/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  ClothingType: "boots" | "coat" | "down_jacket" | "dress" | "headwear" | "jacket" | "jeans" | "shirt" | "shorts" | "skirt" | "sneakers" | "sport_pants" | "sunglasses" | "t_shirt"
  TemperatureUnit: "C" | "F"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  ClothingItem: { // root type
    id: string; // ID!
    imageUrl: string; // String!
    isLiked?: boolean | null; // Boolean
    name: string; // String!
    ownerId: string; // String!
    type: NexusGenEnums['ClothingType']; // ClothingType!
    weather: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    avatar?: string | null; // String
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
    preferences?: Array<NexusGenEnums['ClothingType'] | null> | null; // [ClothingType]
    temperatureSelection: NexusGenEnums['TemperatureUnit']; // TemperatureUnit!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  ClothingItem: { // field return type
    id: string; // ID!
    imageUrl: string; // String!
    isLiked: boolean | null; // Boolean
    name: string; // String!
    owner: NexusGenRootTypes['User'] | null; // User
    ownerId: string; // String!
    type: NexusGenEnums['ClothingType']; // ClothingType!
    weather: string; // String!
  }
  Mutation: { // field return type
    createItem: NexusGenRootTypes['ClothingItem']; // ClothingItem!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Query: { // field return type
    allItems: NexusGenRootTypes['ClothingItem'][]; // [ClothingItem!]!
  }
  User: { // field return type
    avatar: string | null; // String
    email: string; // String!
    id: string | null; // ID
    items: Array<NexusGenRootTypes['ClothingItem'] | null>; // [ClothingItem]!
    name: string | null; // String
    preferences: Array<NexusGenEnums['ClothingType'] | null> | null; // [ClothingType]
    temperatureSelection: NexusGenEnums['TemperatureUnit']; // TemperatureUnit!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  ClothingItem: { // field return type name
    id: 'ID'
    imageUrl: 'String'
    isLiked: 'Boolean'
    name: 'String'
    owner: 'User'
    ownerId: 'String'
    type: 'ClothingType'
    weather: 'String'
  }
  Mutation: { // field return type name
    createItem: 'ClothingItem'
    login: 'AuthPayload'
    signup: 'AuthPayload'
  }
  Query: { // field return type name
    allItems: 'ClothingItem'
  }
  User: { // field return type name
    avatar: 'String'
    email: 'String'
    id: 'ID'
    items: 'ClothingItem'
    name: 'String'
    preferences: 'ClothingType'
    temperatureSelection: 'TemperatureUnit'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createItem: { // args
      imageUrl: string; // String!
      name: string; // String!
      ownerId: string; // String!
      type: NexusGenEnums['ClothingType']; // ClothingType!
      weather: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      avatar: string; // String!
      email: string; // String!
      name: string; // String!
      password: string; // String!
      preferences: string[]; // [String!]!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}