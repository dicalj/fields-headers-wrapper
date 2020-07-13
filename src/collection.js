// required modules
import collect from 'collect.js'

/**
 * This class describes a collection or array container using the collect.js library.
 * @class Collection (name)
 */
export default class Collection {

  /**
   * Initialize a new collect.js instance with the specified items.
   * @returns {Collection} collection collect.js instance.
   */
  collect() {
    return collect(this.items())
  }

  /**
   * Return a new items collection instance.
   * @returns {Collection} items collection.
   */
  static init() {
    return new this().collect()
  }

  /**
   * Get the raw items of class instance.
   * @returns {Array} raw items.
   */
  items() {
    return []
  }

  /**
   * Return a new items collection with the specified items identified by name.
   * @returns {Array} fields collection.
   */
  static reduce(key = 'name', values = []) {
    return this.init().whereIn(key, values).all()
  }
}