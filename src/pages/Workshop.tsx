import { TitlePage } from "@/utils/TitlePage";
import GeneralLayout from "@/components/custom/GeneralLayout";
import { dataWorkshop } from "../utils/datas";
import CustomSpeaker from "@/components/custom/CustomSpeaker";
const Workshop = () => {
  TitlePage("Workshop");

  return (
    <GeneralLayout {...dataWorkshop}>
      <CustomSpeaker data={dataWorkshop.speakers} />
    </GeneralLayout>
  );
};

export default Workshop;
