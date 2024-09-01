import { TitlePage } from "@/utils/TitlePage";
import GeneralLayout from "@/components/custom/GeneralLayout";
import { dataSeminar } from "../utils/datas";
const Seminar = () => {
  TitlePage("Seminar");

  return <GeneralLayout {...dataSeminar}></GeneralLayout>;
};

export default Seminar;
