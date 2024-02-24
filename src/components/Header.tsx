import { useCallback,useState } from "react";

import style from "@/styles/components/Header.module.scss";

import { Button } from "./ui/Button";
import { Dialog, DialogContent,DialogHeader } from "./ui/Dialog";
import { Input } from "./ui/Input";

const Header = () => {

  const [isShowDialog, setIsShowDialog] = useState(false);
  const [keyword, setKeyword] = useState('');

  const showDialog = useCallback(() => {
    setIsShowDialog(true);
  }, []);


  const searchMusic = useCallback(() => {
    setIsShowDialog(false);
  }, [keyword]);

  return (
    <>
      <div className={`w-full flex justify-between items-center ${style['header']}`}>
        <Button className="bg-transparent" size="icon"><img src="/icons/menu.webp" className="w-[14px] m-auto" /></Button>

        <img src="/images/text-logo.webp" alt="simply-music-logo" className="w-[72px] m-auto" />

        <Button className="bg-transparent" size="icon" onClick={showDialog}><img src="/icons/search.webp" className="w-[14px] m-auto" /></Button>
      </div>

      <Dialog open={isShowDialog}>
        <DialogContent className="max-h-screen overflow-auto flex flex-col md:max-w-max">
          <>
            <DialogHeader>
              {/* <DialogTitle>Tambah Pengalaman Kerja</DialogTitle> */}
            </DialogHeader>
            <div className="py-4">
              <div className="flex flex-col px-4 justify-center mb-6 gap-4">

                <Input onChange={(e) => setKeyword(e.target.value)} placeholder="Artist / Album / Title" type="text" className="text-center rounded-3xl" />

                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                  <Button onClick={searchMusic} variant="secondary" className="w-full rounded-3xl" type="submit">Search</Button>
                </div>
              </div>
            </div>
          </>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Header;
