export interface Routes {
   path: string,
   element?: React.ReactNode
};

export interface PublicRouteProps {
  component?: React.ReactNode;
  element?: React.ReactNode;
  path?: string;
}