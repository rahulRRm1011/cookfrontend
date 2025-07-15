import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe',
  standalone: true, // Required for Angular standalone component support
})
export class SearchpipePipe implements PipeTransform {
  transform(recipeArray: any[], searchKey: string): any[] {
    if (!recipeArray || !searchKey?.trim()) {
      return recipeArray;
    }

    return recipeArray.filter((eachRecipe) =>
      eachRecipe.name
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    );
  }
}
