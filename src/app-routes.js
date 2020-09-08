import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage } from './pages';

export const appPath = {
  tasks: '/tasks',
  profile: '/profile',
  home: '/home,'
}

const routes = [
  {
    path: appPath.tasks,
    component: TasksPage
  },
  {
    path: appPath.profile,
    component: ProfilePage
  },
  {
    path: appPath.home,
    component: HomePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
