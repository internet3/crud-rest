module.exports = exports = function (name, plus) {

  function _create () {
    var x = {};
    _.create.forEach(function (entry) {
      for (var a in entry) {
        x[a] = entry[a];
      }
    });
    return x;
  }

  function _retrieve () {
    var x = {};
    _.retrieve.forEach(function (entry) { 
      for (var a in entry) {
        x[a] = entry[a];
      }
    });
    return x;
  }

  function _delete () {
    var x = {};
    _.delete.forEach(function (entry) {
      for (var a in entry) {
        x[a] = entry[a];
      }
    });
    return x;
  }

  function _update () {
    var x = {};
    _.update.forEach(function (entry) {
      for (var a in entry) {
        x[a] = entry[a];
      }
    });
    return x;
  }

  function createItem() {
    return { item: {post: '/'+name + '/{'+name+'Id}' }};
  }

  function retrieveItem() {
    return { item: {
                    get: '/'+name + '/{'+name+'Id}' 
                   }};
  }

  function deleteItem() {
    return { item: {delete: '/'+name + '/{'+name+'Id}' }};
  }

  function updateItem() {
    return { item: {put: '/'+name + '/{'+name+'Id}' }};
  }

  function _urls() { 
    var x={Create:[], Retrieve:[], Update:[], Delete:[]};

    for (var i=0; i<_.create.length; i++) {
      if (_.create[i].item) {
        x.Create.push(_.create[i].item.post);
      }
      else if (_.create[i].collection) { 
        x.Create.push(_.create[i].collection.post);
      }      
    }

    for (var i=0; i<_.retrieve.length; i++) {
      if (_.retrieve[i].item) {
        x.Retrieve.push(_.retrieve[i].item.get);
      }
      else if (_.retrieve[i].collection) {
        x.Retrieve.push(_.retrieve[i].collection.post);
      }
    }

    for (var i=0; i<_.update.length; i++) {
      if (_.update[i].item) {
        if (_.update[i].item.put) {
          x.Update.push(_.update[i].item.put);
        }
        else if (_.update[i].item.post) {
          x.Update.push(_.update[i].item.post);
        }
      }
      else if (_.update[i].collection) {
        x.Update.push(_.update[i].collection.post);
      }
    }

    for (var i=0; i<_.delete.length; i++) {
      if (_.delete[i].item) {
        x.Delete.push(_.delete[i].item.delete);
      }
      else if (_.delete[i].collection) {
        x.Delete.push(_.delete[i].collection.post);
      }
    }

    return x;
  }

  var _={};
  _.create = [];
  _.create.push(createItem());
  _.retrieve = [];
  _.retrieve.push(retrieveItem());
  _.delete = [];
  _.delete.push(deleteItem());
  _.update = [];
  _.update.push(updateItem());

  if (plus) {
    if (plus.create) {
      plus.create.collection.post = '/'+name + '/'+plus.create.collection.post;
      _.create.push(plus.create);
    }
    if (plus.retrieve) {
      plus.retrieve.collection.post = '/'+name + '/'+plus.retrieve.collection.post;
      _.retrieve.push(plus.retrieve);
    }
    if (plus.update) {
      for (var i=0; i<plus.update.length; i++) {
        if (plus.update[i].item) {
          plus.update[i].item.post = '/'+name + '/{'+name+'Id}' + '/'+plus.update[i].item.post;
        }
        else if (plus.update[i].collection) {
          plus.update[i].collection.post = '/'+name + '/'+plus.update[i].collection.post;
        }
        _.update.push(plus.update[i]);
      }
    }
    if (plus.delete) {
      plus.delete.collection.post = '/'+name + '/'+plus.delete.collection.post;
      _.delete.push(plus.delete);
    }
  }

  return {
          name: name,
          crud: {
            Create:   _create(),
            Retrieve: _retrieve(),
            Update:   _update(),
            Delete:   _delete()
          },
          url: _urls()
         };
};
