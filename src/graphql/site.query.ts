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
        imageSrc
        imageAlt
        content {
          header {
            title
            imageSrc
          }
          body {
            title
            caption
            content
            imageSrc
            button
          }
        }
        children {
          name
          href
          description
          imageSrc
          imageAlt
          children {
            name
            href
            description
            imageSrc
            imageAlt
            children {
              name
              href
              description
              imageSrc
              imageAlt
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

export const SITE_CONTENT = gql`
  query Site($_id: ID!) {
    site(_id: $_id) {
      route {
        content {
          header {
            title
            imageSrc
          }
          body {
            title
            caption
            imageSrc
            button
          }
        }
      }
    }
  }
`;
