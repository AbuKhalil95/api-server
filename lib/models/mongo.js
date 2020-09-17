'use strict';
/** 
 * function that contains all operations to use in mongoose
 * 
 * */
class Model {
  constructor(schema) {
    this.schema = schema;
  }
  /**
 * creates the record object as a new mongoose entry 
 * @param {object} record is a valid object input ready to use in schema.
 */
  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }
  /**
 * gets the specified ID from mongoose db
 * @param {String} _id is a mongoose generated ID to search for
*/
  get(_id) {
    let obj = _id ? {_id} : {};    
    return this.schema.find(obj);
  }
  /**
 * updates the specified _id with the record object
 * @param {String} _id is a mongoose generated ID to search for
 * @param {object} record is a valid object input ready to use in schema.
 */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record);
  }
  /**
 * deletes the specified ID from mongoose db
 * @param {String} _id is a mongoose generated ID to search for
*/
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;
