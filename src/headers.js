// required modules
import Collection from './collection'

/**
 * This class describes a collection of headers used for tables or other situations that require columns headers.
 * @augments Collection
 * @class Headers
 */
class Headers extends Collection {

  /**
   * Initialize a new collect.js instance with the specified headers.
   * @returns {Collection} collection collect.js instance.
   */
  collect() {
    return collect(this.headers())
  }

  /**
   * Get the raw headers items of class instance.
   * @returns {Array} raw items.
   */
  headers() {
    return []
  }
}

// export module
export default Headers