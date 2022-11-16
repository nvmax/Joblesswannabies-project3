const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    picture: String
    discription: String
    msrp: Float
    review: String
    releasedate: String
    size: String
    displaysize: String
    displayresolution: String
    weight: String
    waterrating: String
    colordisplay: String
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    orders: [Order]
  }

  type checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    category(name: String!): Category
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(
      _id: ID!
      name: String
      picture: String
      discription: String
      msrp: Float
      review: String
      releasedate: String
      size: String
      displaysize: String
      displayresolution: String
      weight: String
      waterrating: String
      colordisplay: String
    ): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
