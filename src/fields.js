// required modules
import collect, { Collection } from 'collect.js'

/**
 * This class describes a Fields.
 * @class Fields (name)
 */
export default class Fields {

  /**
   * This class describes a Fields.
   * @returns {Collection} fields collection.
   */
  collect() {
    return collect(this.fields())
  }

  /**
   * Define the fields options.
   * @returns {Array} fields options.
   */
  fields() {
    return [

    ]
  }

  /**
   * Return a new fields collection with the specific
   * fields options identified by name.
   * @returns {Collection} fields collection.
   */
  static newWith(key = 'name', values = []) {
    return new this().collect().whereIn(key, values).all()
  }
}