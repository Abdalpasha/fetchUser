import { PipeTransform, Pipe } from '@angular/core';
import { Iuser } from './users';

@Pipe({
  name: 'userFilter',
  pure: true
})

export class UserFilterPipe implements PipeTransform {
  transform(users: Iuser[], searchStr: string): Iuser[] {
    if (!users || !searchStr) {
      return users;
    }
    return users.filter(user =>
      user.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }
}
