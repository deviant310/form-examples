import { useRouter } from "./context";
import { RouteBuilderAbstract } from "./route";

export const usePathParams = <RouteBuilder extends RouteBuilderAbstract>() => {
  const { pathParams } = useRouter();

  return (pathParams ?? {}) as Parameters<RouteBuilder>[0];
};

export const useNavigator = () => {
  const { navigate } = useRouter();

  return navigate;
};

export const useAnchor = () => {
  const { anchor, setAnchor } = useRouter();

  return <const>[anchor, setAnchor];
};
