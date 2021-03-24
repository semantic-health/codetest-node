# Semantic Health Node.js Code Test

## Case

A client has approached you with a unique problem. They need a REST API, but cannot use a database. Their business requirements are as follows:

1. The client needs an API (JSON) application that lets them create, edit, publish, and sometimes delete blog posts
2. Each blog post has a title, a body, and a hero image
3. Each blog post is written by an author
4. This is a public blog API, so there are no rules on who can submit a post
5. The client does want the ability to edit and delete authors, but without losing any metadata
6. The client also wants a search functionality that can either query by author, or blog in a variety of manners such as:
   a) id
   b) title
   c) body

## Instructions

1. Scaffold a basic app using Express (Node.js). Don't rely on any other libraries.
2. Build out a REST API
3. Build out a way to store the entities, using data structures
4. Add Postman tests to hit all the requirements

### Postman Instructions

1. Import the postman collection in tests/semantic_node.postman_collection.json
2. Add new tests and save them to the collection
3. Export the test json by overriding the existing collection
4. Test these by running `yarn test` which will run the [Newman](https://github.com/postmanlabs/newman) tests in your CLI

## Things to think about

1. Optimization: think about what data structures are best
2. UX/DX: the developers consuming the API are bad at reading docs but expect things to work nicely
3. Performance: this may scale up to thousands of blog posts and authors
4. Extensibility: this is that starting point, so think about how to write strong abstractions (don't write this part, but think about how it can be extended if we have questions)
