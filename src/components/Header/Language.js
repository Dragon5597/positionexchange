import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation, useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import useBreakpoint from '../../hooks/useBreakpoint';
import engFlag from '../../images/flags/england-flag.png';
import viFlag from '../../images/flags/vietnam-flag.png';
import engFlagx16 from '../../images/flags/england-flagx16.png';
import viFlagx16 from '../../images/flags/vietnam-flagx16.png';

const LANGS = [
    {
      key: 0,
      value: 'vi',
      label: 'Vietnamese',
      icon: viFlagx16,
      bigIcon: viFlag,

    },
    {
      key: 1,
      value: 'en',
      label: 'English',
      icon: engFlagx16,
      bigIcon: engFlag,
  
    },
  ];
  

const Language = () => {
    const [visibleChangeLanguage, setVisibleChangeLanguage] = useState(false);
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === 'mobile'
    const { i18n, t } = useTranslation();
    const { push } = useHistory();
    const { pathname } = useLocation();
    const { language } = useParams();
    const languageQueryRedirect = language === 'en' ? pathname.replace('en', 'vi') : pathname.replace('vi', 'en');
    const [key, setKey] = useState(() => {
      const langStorage = localStorage.getItem('i18nextLng') || null;
      const currentLang = LANGS.find((_lang) => _lang.value === langStorage);
      if (currentLang) {
        return currentLang.key;
      }
      return 0;
    });
    const currentLang = localStorage.getItem('i18nextLng') || null;
    const [placeFlag, setPlaceFlag] = useState(() => {
      if (breakpoint === 'mobile') {
        return 'left';
      }
      return 'bottom';
    });
  
    useEffect(() => {
      if (breakpoint === 'mobile') {
        setPlaceFlag('left');
      } else {
        setPlaceFlag('bottom');
      }
    }, [breakpoint]);
  
    const handleVisibleChange = () => {
      setVisibleChangeLanguage(!visibleChangeLanguage);
    };
  
    const handleChangeLanguage = (lng, keyFlag) => {
      i18n.changeLanguage(lng);
      setVisibleChangeLanguage(false);
      setKey(keyFlag);
      if (language) {
        push(`${languageQueryRedirect}`);
      }
    };
  
    return (
        <button className={`btn btn-secondary dropdown-toggle ml-3 ${isMobile ? 'dropright' : 'dropleft'}`}>
            <a href="#">
            <div className="translate" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <span className="img-translate">
                <img src={LANGS[key].icon} alt={LANGS[key].value} />
                </span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: 'black' , margin: '0 8px' }}>{LANGS[key].value}</span>
                <span style={{ color: 'black' }}>
                <i className="fas fa-caret-down" />
                </span>
            </div>
            </a>   

            <ul className="dropdown-menu">
                {LANGS.map((option) => (
                    <li className="dropdown-item">
                        <a  onClick={() => {
                           handleChangeLanguage(option.value, option.key);
                         }}
                         style={
                            option.value === currentLang
                              ? { color: 'red', fontSize: '13px', textDecoration: 'none' }
                              : { color: '#000', fontSize: '13px', textDecoration: 'none' }
                          }
                        >
                            <img src={option.bigIcon} alt={option.label} />
                            {option.label}
                        </a>
                    </li>
                ))}
            </ul>
		</button>
    )
}

export default Language
