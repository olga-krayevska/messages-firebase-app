import { DirectionEnum } from '../enams/enams';

export function sortArrayByProperty(arr: any[], property: string, direction: DirectionEnum): any[] {
  let sortedArray = arr.slice();
  return sortedArray.sort((a, b) => {
    if (a[property] < b[property]) {
      return direction === DirectionEnum.Ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return direction === DirectionEnum.Ascending ? 1 : -1;
    }
    return 0;
  });
}
