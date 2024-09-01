import { TitlePage } from "@/utils/TitlePage";
import GeneralLayout from "@/components/custom/GeneralLayout";
import { dataSeminar } from "../utils/datas";
import CustomSpeaker from "@/components/custom/CustomSpeaker";
import CustomEvents from "@/components/custom/CustomEvents";
const Seminar = () => {
  TitlePage("Seminar");

  return (
    <GeneralLayout {...dataSeminar}>
      <CustomSpeaker data={dataSeminar.speakers} />
      <CustomEvents {...dataSeminar.events} />
    </GeneralLayout>
  );
};

export default Seminar;
