// import styles from './Header.module.css';
import Logo from '../../assets/images/logo.svg';
import SearchInput from 'components/SearchInput';
import UserIcon from 'images/user.svg';
import styles from './Header.module.css';
import {useState} from "react";
const Header = (props) => {

  const USER_INFO = 'Ansar Yergesh'
  const onChange = (e) => {
    const searchTerm = e.target.value
    props.handleSearch(searchTerm);
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
      <SearchInput
        className='searchBox'
        placeholder={'Search film...'}
        value={props.query}
        onChange={onChange}
      />
      <div className={styles.user}>
        <img src={UserIcon} alt="user" />
        <span>{USER_INFO}</span>
      </div>
    </header>
  )
}

export default Header;