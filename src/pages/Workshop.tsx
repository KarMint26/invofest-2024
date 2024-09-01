import { TitlePage } from "@/utils/TitlePage";
import GeneralLayout from "@/components/custom/GeneralLayout";
import { dataWorkshop } from "../utils/datas";
const Workshop = () => {
  TitlePage("Workshop");

  return <GeneralLayout {...dataWorkshop}></GeneralLayout>;
};

export default Workshop;
