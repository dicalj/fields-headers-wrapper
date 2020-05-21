// required modules
import collect from 'collect.js'

/**
 * This class describes a Headers.
 * @class Headers (name)
 */
export default class Headers {

  /**
   * This class describes a Headers.
   * @returns Headers (name)
   */
  collect() {
    return collect(this.headers())
  }

  /**
   * Define the headers options.
   * @returns {Array} headers options.
   */
  headers() {
    return [

    ]
  }
}