import { TitlePage } from "@/utils/TitlePage";
import GeneralLayout from "@/components/custom/GeneralLayout";
import { dataTalkshow } from "../utils/datas";
const Talkshow = () => {
  TitlePage("Talkshow");

  return <GeneralLayout {...dataTalkshow}></GeneralLayout>;
};

export default Talkshow;
