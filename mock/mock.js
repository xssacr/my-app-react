const swipper = require('./swipper.json');
const hotcate = require('./hotcate.json');
const cookbooklist = require('./cookbook-list.json')
const category = require('./cookbook-category.json')
module.exports = () => {
  return {
    swipper,
    hotcate,
    cookbooklist,
    category
  }
}