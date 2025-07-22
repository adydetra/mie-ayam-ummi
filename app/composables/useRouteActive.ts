export default function () {
  const route = useRoute();
  const RouteActive = (routePath: string) => {
    if (routePath === '/')
      return route.path === routePath;
    return route.path.startsWith(routePath);
  };
  return RouteActive;
}
