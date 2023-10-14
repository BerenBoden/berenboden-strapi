import type { Schema, Attribute } from '@strapi/strapi';

export interface ResourceResourceData extends Schema.Component {
  collectionName: 'components_resource_resource_data';
  info: {
    displayName: 'ResourceData';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    external: Attribute.String;
    featured: Attribute.Boolean;
    cover: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'resource.resource-data': ResourceResourceData;
    }
  }
}
