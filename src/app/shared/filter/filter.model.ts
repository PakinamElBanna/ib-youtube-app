export class FilterBluePrint {
  constructor(public name, public value ){}
  CreateFilter() {

  }
}

export class Filter {
  constructor(public name, public options: any[] ) {}
}
