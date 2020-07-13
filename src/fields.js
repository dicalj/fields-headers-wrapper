// required modules
import Collection from './collection'

/**
 * This class describes a Fields.
 * @class Fields (name)
 */
export default class Fields extends Collection {

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
    return []
  }
}