export interface NavInterface {
  title: string;
  path?: string;
  subItems?: NavInterface[];
}

export type NavigationData = NavInterface[]