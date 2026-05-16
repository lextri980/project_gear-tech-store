export const ValidateUtil = {
  /**
   * Check whether the data is null or empty string or empty object
   * @param data - Data need checking
   * @returns True if null or empty
   */
  isNullOrEmpty: (data: string | object): boolean => {
    if (typeof data === 'string' && data === '') {
      return true;
    } else if (typeof data === 'object' && Object.keys(data).length === 0) {
      return true;
    } else if (data === null || data === undefined) {
      return true;
    }
    return false;
  },
};
