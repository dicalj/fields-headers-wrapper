// required modules
import Collection from './collection'

/**
 * This class describes a collection of fields used for forms or other situations that require input fields.
 * @augments Collection
 * @class Fields
 */
class Fields extends Collection {

  /**
   * Initialize a new collect.js instance with the specified fields.
   * @returns {Collection} collection collect.js instance.
   */
  collect() {
    return collect(this.fields())
  }

  /**
   * Get the raw fields items of class instance.
   * @returns {Array} raw items.
   */
  fields() {
    return []
  }
}

// export module
export default Fields