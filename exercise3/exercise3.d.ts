
export {}

declare global {
  interface MyString {

    /**
     * Converts the string to lowercase characters.
     * @returns A new string with all alphabetic characters converted to lowercase.
     */
      toLowerCase(): string;
      
      /**
       * @param searchString The substring to search for.
       * @param position The position in the string at which to begin the search. Default is 0.
       * @returns If searchString appears as a substring of the result of converting this
       * object to a String, at one or more positions that are
       * greater than or equal to position; otherwise, returns false.
       */
      includes(
        searchString: string,
        position?: number
      ): boolean;

      /**
       * @param separator A string to use repeatedly in order to cut the initial text.
       * @returns A list of strings which represents each part of the seperated text. 
       */
      split(
          separator: string
        ): string[];
    
      /**
       * @param searchValue A regular expression or search string.
       * @param replaceValue The text to use as a replacement for the text matching the searchValue
       * @returns A new string with the replacements having been applied.
       */
      replace(
          searchValue: string,
          replaceValue: string
        ): string;  

      /**
       * @param searchString The substring to search for.
       * @param position The position in the string at which to begin the search. Default is 0.
       * @returns true if the sequence of elements of searchString converted to a String is the
       * same as the corresponding elements of this object (converted to a String) starting at
       * position. Otherwise returns false.
       */
      startsWith(
          searchString: string,
          position?: number
        ) : boolean;  
  }

}

