/**
 * Token class to create a token.
 */
export class Token {
  type: String;
  value: String;
  /**
   * Cunstructor.
   *
   * @param {*} type - The type of the token.
   * @param {*} value The value of the token.
   */
  constructor(type: String, value: String) {
    this.type = type;
    this.value = value;
  }
}
