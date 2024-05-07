import { SwapOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../Redux/actions";

export const SwichLang = () => {
  const lang = useSelector((store) => store.translate.lang)
  const dispatch = useDispatch()

  return (
    <>
      <span>{lang[0]}</span>
      <SwapOutlined 
        onClick = {() => {
            dispatch(setLang([...lang.reverse()]));
          }
        }
      /> 
      <span>{lang[1]}</span>
    </>
  )
}