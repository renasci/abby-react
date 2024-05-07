import { Input, message, Empty } from 'antd';
import WordCard from "./WordCard"
import { useDispatch, useSelector } from 'react-redux';
import {SwichLang} from './SwitchLang'
import { setTranslation } from '../Redux/actions';
import { AddToolTip } from './AddToolTip';
import axios from 'axios';

const Translate = () => {
  let lang = useSelector(store => store.translate.lang)
  let translation = useSelector(state => state.translate.translation);
  const dispatch = useDispatch()
    
  const langMap = {
    "RU": 1049,
    "EN": 1033
  }

  let langMapRev = Object.fromEntries(
    Object.entries(langMap).map((item) => {
      return [item[1], item[0]]
    })
  )

  const getTranslation = async (value) => {
    try {
      let word = value.toLowerCase().trim();

      if(!word) {
        message.info(`Please enter a word`, 1);
        return
      }
 
      let resp = await axios.get(
        encodeURI(`http://kileskus.com/Translation/` +
          `Minicard?text=${word}`+ `&returnXml=false&` +
          `srcLang=${langMap[lang[0]]}&dstLang=${langMap[lang[1]]}`
        )
      );
    
      if(resp.status !== 200) {
        throw new Error(`Fetch error`);
      }

      if(resp.data.isEmpty) {
        message.error(`Translation not found`, 1);
        dispatch(setTranslation(null));
        return
      }

      if(resp.data.sourceLanguageId !== langMap[lang[0]] 
        && resp.data.sourceLanguageId) {
        message.info(`Autodetected language ${lang[1]}-${lang[0]}`, 1);
      }

      dispatch(setTranslation(resp.data));
    } catch (e) {
      message.error(`ABBY API error: ${e.message}` , 3);
    }
  }

  return (
    <>
      <Input.Search 
        placeholder="Enter word..." 
        onSearch={(value) => {getTranslation(value)}} 
        enterButton 
        suffix={<SwichLang />}
      />
      {
        translation
        ? <WordCard 
            word = {translation.translation.heading} 
            translation = {translation.translation.lingvoTranslations}
            extra = {<AddToolTip langMapRev={langMapRev} />}
          />
        :<Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
      }
    </>
  )
};

export default Translate;