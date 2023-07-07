import { useLocales } from "src/hooks";

const Management = () => {
  const { translate } = useLocales();
  return <div>{translate(`__SIDEBAR__.overview`)}</div>;
};

export default Management;
