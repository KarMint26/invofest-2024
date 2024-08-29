import React from "react";
import AOS from "aos";

const FAQ = () => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-fit p-4 px-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                data-aos="zoom-in"
                data-aos-delay="150"
                className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20"
              >
                <span className="mb-2 block text-lg font-semibold text-slate-600">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold text-slate-600 sm:text-[40px]/[48px]">
                  Punya Pertanyaan? Lihat{" "}
                  <span className="text-invofest">Disini</span>
                </h2>
                <p className="text-base text-dark-6">
                  Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat
                  melihat daftar pertanyaan di bawah ini.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div data-aos="zoom-in-down" data-aos-delay="50">
                <AccordionItem
                  header="Apa itu INVOFEST?"
                  text="Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital."
                />
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="200">
                <AccordionItem
                  header="Kapan dan dimana INVOFEST dilaksanakan?"
                  text="INVOFEST diselenggarakan mulai tanggal 1 September 2024 sampai dengan tanggal 1 November 2024. Untuk acara workshop, seminar, talkshow diadakan secara Offline di Politeknik Harapan Bersama dan kompetisi diadakan secara Online."
                />
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="350">
                <AccordionItem
                  header="Apakah ada biaya pendaftaran di INVOFEST?"
                  text="Semua kegiatan dipastikan berbayar tidak ada yang gratis hehehe."
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div data-aos="zoom-in-down" data-aos-delay="500">
                <AccordionItem
                  header="Bagaimana saya mengetahui pemenang kompetisi?"
                  text="Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harber."
                />
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="650">
                <AccordionItem
                  header="Apa yang didapat pemenang dalam kompetisi?"
                  text="Pemenang kompetisi akan mendapatkan hadiah uang tunai dan sertifikat."
                />
              </div>
              <div data-aos="zoom-in-down" data-aos-delay="800">
                <AccordionItem
                  header="Bagaimana cara mendaftar event?"
                  text="Buka web invofest di browser anda lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'DAFTAR' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const AccordionItem = ({ header, text }: { header: string; text: string }) => {
  const [active, setActive] = React.useState<boolean>(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg p-4 shadow-[0px_0px_7px_0px_rgba(250,159,67,1)] overflow-hidden relative before:absolute before:w-[0.4rem] before:h-full before:bg-invofest before:right-0 before:top-0 sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg text-slate-600 bg-gray-600/5">
          <svg
            className={`fill-slate-600 stroke-slate-600 duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-slate-600">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  );
};

export default FAQ;
