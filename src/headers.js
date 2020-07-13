// required modules
import Collection from './collection'

/**
 * This class describes a Headers.
 * @augments Collection
 * @class Headers
 */
class Headers extends Collection {

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

// export module
export default Headers