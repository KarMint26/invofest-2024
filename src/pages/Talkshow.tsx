import { TitlePage } from "@/utils/TitlePage";
import GeneralLayout from "@/components/custom/GeneralLayout";
import { dataTalkshow } from "../utils/datas";
import CustomSpeaker from "@/components/custom/CustomSpeaker";
import CustomEvents from "@/components/custom/CustomEvents";
const Talkshow = () => {
  TitlePage("Talkshow");

  return (
    <GeneralLayout {...dataTalkshow}>
      <CustomSpeaker data={dataTalkshow.speakers} />
      <CustomEvents {...dataTalkshow.events} />
    </GeneralLayout>
  );
};

export default Talkshow;
