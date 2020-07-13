// required modules
import Collection from './collection'

/**
 * This class describes a Headers.
 * @class Headers
 */
export default class Headers extends Collection {

  /**
   * This class describes a Headers.
   * @returns {Collection} headers collection.
   */
  collect() {
    return collect(this.headers())
  }

  /**
   * Define the headers options.
   * @returns {Array} headers options.
   */
  headers() {
    return []
  }
}