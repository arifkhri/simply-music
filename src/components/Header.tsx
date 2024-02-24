import { useCallback,useState } from "react";
import { useQueryState } from "nuqs";

import style from "@/styles/components/Header.module.scss";
import ButtonStyle from "@/styles/components/Button.module.scss";

import { Button } from "./ui/Button";
import { Dialog, DialogContent,DialogHeader } from "./ui/Dialog";
import { Input } from "./ui/Input";

const Header = () => {

  const [_, setKeywordValue] = useQueryState('keyword')
  console.log('🚀 ~ _:', _);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [keyword, setKeyword] = useState('');

  const showDialog = useCallback(() => {
    setIsShowDialog(true);
  }, []);


  const searchMusic = useCallback(() => {
    setIsShowDialog(false);
    setKeywordValue(keyword);
  }, [keyword]);

  return (
    <>
      <div className={`w-full flex justify-between items-center ${style['header']}`}>
        <Button className="bg-transparent" size="icon"><img src="/icons/menu.webp" className="w-[14px] m-auto" /></Button>

        <img src="/images/text-logo.webp" alt="simply-music-logo" className="w-[72px] m-auto" />

        <Button className="bg-transparent" size="icon" onClick={showDialog}><img src="/icons/search.webp" className="w-[14px] m-auto" /></Button>
      </div>

      <Dialog open={isShowDialog}>
        <DialogContent className="bg-gray-900 opacity-85 h-screen overflow-auto flex flex-col max-w-sm">
          <>
            <DialogHeader className="flex justify-end">
              <Button onClick={() => setIsShowDialog(false)} size="icon" className="text-white bg-transparent">X</Button>
            </DialogHeader>
            <div className="py-4 my-auto">
              <div className="flex flex-col px-4 justify-center mb-6 gap-4">
                  <h1 className="text-center font-bold text-white text-xl">Search</h1>
                <Input onChange={(e) => setKeyword(e.target.value)} placeholder="Artist / Album / Title" type="text" className="text-center rounded-3xl" />

                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                  <Button className={`w-full rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 ${ButtonStyle['btn-primary']}`} variant="secondary"  onClick={searchMusic} type="submit">Search</Button>
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
