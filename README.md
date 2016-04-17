HTTP verbs mapped to CRUD


![rest-crud logo](https://gautambiztalkblog.files.wordpress.com/2015/03/crud.jpg)

_________________________________________

REST rappresent resources/entities such as URLs on which operate CRUD operations on them.

The scope of this module is to gived the name of 
a Resource/Entity, to create a JSON structure that help the 
definition of the REST call paths.


_________________________________________

### WARINIG
**Please check again this project later.
I am still writing/finishing this module.**




_________________________________________

## Documentation

http://internet3.github????? TODO

## Usage example

```js

#> cat test.js

var petCRUD = new crud('pet',
  {

   create:   { collection: { post: 'many', casesense: false } },
   retrieve: { collection: { post: 'findByStatus', casesense: false } },
   update:   [
              { collection: { post: 'updateByIds', casesense: false } },
              { item: { post: 'uploadImage', casesense: false } }
             ],
   delete:   { collection: { post: 'deleteByTag', casesense: false } }
  }
);

console.log(JSON.stringify(petCRUD, null, 2));
```

## Test 

```js

#> node test.js

node test.js

{
  "name": "pet",
  "crud": {
    "Create": {
      "item": {
        "post": "/pet/{petId}"
      },
      "collection": {
        "post": "/pet/many",
        "casesense": false
      }
    },
    "Retrieve": {
      "item": {
        "get": "/pet/{petId}"
      },
      "collection": {
        "post": "/pet/findByStatus",
        "casesense": false
      }
    },
    "Update": {
      "item": {
        "post": "/pet/{petId}/uploadImage",
        "casesense": false
      },
      "collection": {
        "post": "/pet/updateByIds",
        "casesense": false
      }
    },
    "Delete": {
      "item": {
        "delete": "/pet/{petId}"
      },
      "collection": {
        "post": "/pet/deleteByTag",
        "casesense": false
      }
    }
  },
  "url": {
    "Create": [
      "/pet/{petId}",
      "/pet/many"
    ],
    "Retrieve": [
      "/pet/{petId}",
      "/pet/findByStatus"
    ],
    "Update": [
      "/pet/{petId}",
      "/pet/updateByIds",
      "/pet/{petId}/uploadImage"
    ],
    "Delete": [
      "/pet/{petId}",
      "/pet/deleteByTag"
    ]
  }
}

```

