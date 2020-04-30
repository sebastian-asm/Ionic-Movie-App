import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pairs'
})
export class PairsPipe implements PipeTransform {
  // Tranformando un arreglo en valores pares
  transform(arr: any[]): any[] {
    const pairs = arr.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);

    return pairs;
  }
}
