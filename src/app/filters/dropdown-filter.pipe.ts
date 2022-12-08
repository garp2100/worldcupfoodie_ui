import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dropdownFilter',
})
export class DropdownFilterPipe implements PipeTransform {
	public transform(items: any[], filter: string): any {
        console.log(items,filter);
		if (!items || !filter) {
			return items;
		}

		return items.filter(item => item.strIngredient.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
	}
}