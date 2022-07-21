import { gql } from "graphql-request";

export const SITES = gql`
  query SitesAll {
    sitesAll {
      _id
      client
      type
      data {
        title
        domain
        icon
        logo
        imageSrc
        imageAlt
        numberPhone
        address
        location
        description
      }
    }
  }
`;
export const SITE = gql`
  query Site($_id: ID!) {
    site(_id: $_id) {
      _id
      client
      type
      data {
        title
        domain
        logo
        icon
        imageSrc
        imageAlt
        numberPhone
        address
        location
        description
      }
      route {
        name
        href
        description
        children {
          name
          href
          description
          children {
            name
            href
            description
            children {
              name
              href
              description
            }
          }
        }
      }
    }
  }
`;
export const SITE_PATHS = gql`
  query Site($_id: ID!) {
    site(_id: $_id) {
      route {
        href
        children {
          href
          children {
            href
            children {
              href
            }
          }
        }
      }
    }
  }
`;
