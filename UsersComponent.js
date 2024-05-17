import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
// import { GET_PRODUCTS } from './src/graphql_queries/queries'; // Make sure the path is correct
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';

// Import your action creator if not already imported
// import { getProducts } from './path/to/your/actions';

const ProductsComponent = () => {
  // Fetch data using useQuery
  //   const { loading, error, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    // Dispatch action to fetch products when component mounts
    const demo = async date => {
      const myHeaders = new Headers();
      let ShopifyStroreFrontToken = `8bec307b98b6bb0c0c4ba50d319f01b3`;
      myHeaders.append(
        'X-Shopify-Storefront-Access-Token',
        ShopifyStroreFrontToken,
      );
      myHeaders.append('Content-Type', 'application/json');

      // Construct the GraphQL mutation
      const graphqlQuery = {
        query: `
          mutation {
            cartCreate(input: {}) {
              cart {
                id
                lines(first: 5) {
                  edges {
                    node {
                      merchandise {
                        ... on ProductVariant {
                          id
                          product {
                            title
                          }
                        }
                      }
                      quantity
                    }
                  }
                }
              }
              userErrors {
                code
                field
                message
              }
            }
          }
          `,
        variables: {
          cartInput: {
            lines: [
              {
                quantity: 1,
                merchandiseId: 'gid://shopify/ProductVariant/45390031749287',
              },
            ],
            attributes: {
              key: 'cart_attribute_key',
              value: 'This is a cart attribute value',
            },
          },
        },
      };

      // Construct request options
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(graphqlQuery),
        redirect: 'follow',
      };

      console.log(
        '🚀 ~ file: UsersComponent.js:77 ~ demo ~ requestOptions:',
        JSON.stringify(requestOptions.body, null, 2),
      );

      try {
        // Make the GraphQL API request
        const response = await fetch(
          `https://bd03c3-53.myshopify.com/api/2024-04/graphql.json`,
          requestOptions,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(
          '🚀 ~ file: UsersComponent.js:73 ~ getProducts ~ data:',
          JSON.stringify(data),
        );
      } catch (error) {
        console.log(
          '🚀 ~ file: UsersComponent.js:64 ~ getProducts ~ error:',
          error,
        );
        // Dispatch error action if request fails
      }
    };

    demo();
  }, []);

  //   if (loading) return <ActivityIndicator />;
  //   if (error) return <Text>Error: {error.message}</Text>;

  return (
    // <FlatList
    //   data={data?.products || []} // Ensure data is available and handle if it's undefined
    //   renderItem={({ item }) => (
    //     <View>
    //       <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
    //       <Text>{item.title}</Text>
    //       <Text>${item.price}</Text>
    //     </View>
    //   )}
    //   keyExtractor={item => item.id.toString()}
    // />
    <View style={{}}>
      <Text style={{}}>NNJDNBFD</Text>
    </View>
  );
};

export default ProductsComponent;
