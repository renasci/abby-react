import { PlusOutlined } from '@ant-design/icons';
import { message, Tooltip } from 'antd';
import { useSelector } from 'react-redux';
import { useStorage } from '../Hooks/useStorage';

export const AddToolTip = (props) => {
  const [storage, setStorage] = useStorage(`words`, [])
  const translation = useSelector(state => state.translate.translation) 

  const saveToDictionary = () => {
    let toStorage = [{
      id: Date.now(),
      lang:props.langMapRev[translation.sourceLanguageId] + `-` +
      props.langMapRev[translation.targetLanguageId],
      word: translation.translation.heading, 
      translation: translation.translation.lingvoTranslations
    }];
   
    if(storage.some((item) => item.word === translation.translation.heading)) {
      message.info(`${translation.translation.heading} is already in the dictionary`, 1);
      return
    } else {
      toStorage = [...toStorage, ...storage];
    }
    
    setStorage(toStorage)
    message.info(`Saved to dictionary`, 1);
  }

  return (
    <Tooltip title="Save to dictionary" color="blue">
      <PlusOutlined 
        onClick = {saveToDictionary}
      />
    </Tooltip>
  )
}