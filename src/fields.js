// required modules
import collect from 'collect.js'

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
}