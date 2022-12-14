import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_URLS = gql`
  query NewQuery {
    rankMathSettings {
      sitemap {
        sitemapIndexUrl
        taxonomies(include: PRODUCTTAG) {
          isInSitemap
          sitemapUrl
          connectedTerms(first: 50000) {
            nodes {
              link
              seo {
                robots
              }
            }
          }
        }
      }
    }
  }
`;
