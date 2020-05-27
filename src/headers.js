// required modules
import collect from 'collect.js'

/**
 * This class describes a Headers.
 * 
 * @class Headers (name)
 */
export default class Headers {

  /**
   * This class describes a Headers.
   * 
   * @returns {Collection} headers collection.
   */
  collect() {
    return collect(this.headers())
  }

  /**
   * Define the headers options.
   * 
   * @returns {Array} headers options.
   */
  headers() {
    return [

    ]
  }

  /**
   * Return a new headers collection with the specific
   * headers options identified by name.
   * 
   * @returns {Collection} headers collection.
   */
  static newWith(key = 'value', values = []) {
    return new this().collect().whereIn(key, values).all()
  }
}