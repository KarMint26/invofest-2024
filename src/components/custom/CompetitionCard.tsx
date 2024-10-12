import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import AOS from "aos";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

type compCard = {
  ImageCard: any;
  TitleCard: string;
  DescCard: string;
  dataAos: string;
  delayAos: string;
  linkGuideBook: string;
  linkReg: string;
  linkPengumpulan: string;
};

const CompetitionCard = ({
  TitleCard,
  DescCard,
  ImageCard,
  dataAos,
  delayAos,
  linkGuideBook
  // linkReg,
  // linkPengumpulan
}: compCard) => {
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      {/* Dialog Popup */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">{TitleCard}</DialogTitle>
            <DialogDescription className="text-base">
              Berikut adalah informasi lengkap mengenai kompetisi '{TitleCard}'.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex flex-col gap-2 w-full h-fit">
              <Link
                to={linkGuideBook}
                target="_blank"
                className="before:ease w-full relative px-3 py-2 sm:px-4 sm:py-3 text-center border border-invofest bg-invofest text-white transition-all text-[0.75rem] sm:text-base rounded-sm sm:rounded-lg flex justify-center items-center gap-3"
              >
                <FaBook />
                <span className="relative z-10">GUIDEBOOK & PERLENGKAPAN</span>
              </Link>



                                                                                         {/* close register */}
                                                                      {/* unCommand the code, when open register again thanks */}

              {/* <Link
                to={linkReg}
                target="_blank"
                className="before:ease w-full relative px-3 py-2 sm:px-4 sm:py-3 text-center border border-invofest bg-invofest text-white transition-all text-[0.75rem] sm:text-base rounded-sm sm:rounded-lg flex justify-center items-center gap-3"
              >
                <FaTrophy />
                <span className="relative z-10">PENDAFTARAN KOMPETISI</span>
              </Link> */}
              {/* <Link
                to={linkPengumpulan}
                target="_blank"
                className="before:ease w-full relative px-3 py-2 sm:px-4 sm:py-3 text-center border border-invofest bg-invofest text-white transition-all text-[0.75rem] sm:text-base rounded-sm sm:rounded-lg flex justify-center items-center gap-3"
              >
                <IoSend />
                <span className="relative z-10">PENGUMPULAN KARYA</span>
              </Link> */}



            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div
        data-aos={dataAos}
        data-aos-delay={delayAos}
        className="max-w-sm bg-white border border-slate-200 rounded-lg shadow transition-all duration-300 group"
      >
        <img
          className="rounded-t-lg group-hover:grayscale-[50%] transition-all duration-300"
          src={ImageCard}
          alt="Competition-Image"
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-600">
              {TitleCard}
            </h5>
          </a>
          <p className="text-sm sm:text-base mb-3 font-normal text-slate-600">
            {DescCard}
          </p>
          <ButtonPrimary
            text={"INFO SELENGKAPNYA"}
            dataAos={""}
            delayAos={""}
            isOutline={false}
            handleClick={() => setOpenDialog(true)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CompetitionCard;
