import { AbilityBuilder, AbilityClass, Ability } from '@casl/ability';
import { Actions, Subjects, Roles } from './auth.roles';

export type AppAbility = Ability<[Actions, Subjects]>;

export function defineAbilitiesFor(role: Roles) {
  const { can, cannot, build } = new AbilityBuilder<Ability<[Actions, Subjects]>>(Ability as AbilityClass<AppAbility>);

  if (role === Roles.Student) {
    can(Actions.Read, Subjects.Lesson); // students can read lessons
  }

  if (role === Roles.Teacher) {
    can(Actions.Create, Subjects.Course); 
    can(Actions.Update, Subjects.Lesson); // teachers can create courses/lessons
  }

  //nothing for admins for now

  return build();
}
