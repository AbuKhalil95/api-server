// using products model as a testing should cover categories since its the same.

'use strict';

require('@code-fellows/supergoose');

const category = require('../lib/models/categories/categories-model');

describe ('Category Model', ()=> {
  it('it can create()', async ()=> {
    const catObj = {name: 'solarPower', display_name : 'Solar Power', description: 'Renewable Power from the sun'};

    const result = await category.create(catObj);
    Object.keys(catObj).forEach(key=> {
      expect(result[key]).toEqual(catObj[key]);
    });
  });

  it('it can get()', async ()=> {
    const catObj = {name: 'windPower', display_name : 'Wind Power', description: 'Renewable Power but with wind'};

    const result = await category.create(catObj);
    const records = await category.get(result._id);
    Object.keys(catObj).forEach(key=> {
      expect(records[0][key]).toEqual(catObj[key]);
    });
  });

  it('it can update()', async ()=> {
    const catObj = {name: 'windPower', display_name : 'Wind Power', description: 'Renewable Power but with wind'};
    const catObj1 = {name: 'solarPower', display_name : 'Solar Power', description: 'Renewable Power from the sun'};

    const result = await category.create(catObj);
    await category.update(result._id, catObj1);
    const records = await category.get(result._id);

    Object.keys(catObj1).forEach(key=> {
      expect(records[0][key]).toEqual(catObj1[key]);
    });
  });

  it('it can delete()', async ()=> {
    const catObj = {name: 'windPower', display_name : 'Wind Power', description: 'Renewable Power but with wind'};

    const result = await category.create(catObj);
    const records = await category.get(result._id);
    const deleted = await category.delete(records._id);
    expect(deleted).toBeNull();
  });
});