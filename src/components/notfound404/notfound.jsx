import { Link } from 'react-router-dom'
import '../notfound404/notfound.css'
import i18n from '../Languages/i18n'
import { useTranslation } from 'react-i18next'



let NotFound = () =>{
    const { t, i18n } = useTranslation();
    return (
        <div className="notfoundcontainer">
        <h1>404</h1>
        <p>{t('notfoundpage.title')}</p>
        <Link  to="/"><button className='buttonas'>{t('notfoundpage.backtomain')}</button> </Link>
        </div>
       
    )
}

export default NotFound