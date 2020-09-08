import { appPath } from "./app-routes";

export const navigation = [
  {
    text: 'Home',
    path: appPath.home,
    icon: 'home'
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: appPath.profile
      },
      {
        text: 'Tasks',
        path: appPath.tasks
      }
    ]
  }
  ];
