// required modules
import collect from 'collect.js'

/**
 * This class describes a Fields.
 * 
 * @class Fields (name)
 */
export default class Fields {

  /**
   * This class describes a Fields.
   * 
   * @returns {Collection} fields collection.
   */
  collect() {
    return collect(this.fields())
  }

  /**
   * Define the fields options.
   * 
   * @returns {Array} fields options.
   */
  fields() {
    return [

    ]
  }

  /**
   * Return a new fields collection.
   * 
   * @returns {Collection} fields collection.
   */
  static init() {
    return new this().collect()
  }

  /**
   * Return a new fields collection with the specific
   * fields options identified by name.
   * 
   * @returns {Collection} fields collection.
   */
  static reduce(key = 'name', values = []) {
    return this.init().whereIn(key, values).all()
  }
}