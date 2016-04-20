var crud = require('./crud');

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
