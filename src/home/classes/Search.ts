export interface ISearch {
  value: string;
}

class Search implements ISearch {
  public value = '';

  constructor(newValue: string) {
    this.value = newValue;
  }
}

export default Search;
