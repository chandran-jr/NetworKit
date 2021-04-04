import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {
    return (
        <div className="header">


            <div className="header__left">
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEU7iMP///89isTs8/ng6/QwhMI2hsJnn86DsNZvpdGOt9opgcAvg8EmgL/7/f70+fy81One6vRQlMlIj8ZYmMvT4/GHs9h7q9S0z+bX5vJupNGfwd/D2Ovo8fhMksjw9vqryeOXvd1eT4NhAAAHJklEQVR4nO2di2KiMBBFE5SxmgBaQW2r1f7/T67UF2gekGRXb5b7AWOO5AKZmRDGYxd79gD+ugZCfP3fhMV+hKF94UBYHablMkHR8n36VeU9CD9WJCQRIxQdRyqFXFcdCatJlhLDE1FWbjsQ7tYZIt5JlE0WNsI5S589TC9RejATzoAv4EmUrXM9Yb4Wzx5gAMlJoSVcy2ePLojkJNcQzmK4grXkVE04z549smDKvlSEO4Z+k7mJ0g8F4Rr7MdEWTR4Jq3jmaK1s/kA4iWeO1qLv/I7wI65LeLyI2zvCVUwurHV14oWQ4pqkR4l9i7CK5WF/k5y3CL/ieF9rKl21CKfRTVJGZYuwjI+QLYsGYbF89nDCi9ioQbhPIryGNG4QjmIkTAdCeA2E+BoI8TUQ4msgxNdAiK+BEF9BCX+7BQLLO2QwwlTIZTkpSYRrb6BUpHXM79QnaBhCkmK1HeU5z/fVSoZJ2JFMZ6eYx6Azcs5zBiEk+mqUW/NDEoCRWLvXYJM4puNDEMpy1xoML2beiHIyasfk+6lb0ACE8vOx0aryvD+0CtQXrZwQ/QmpVHWS7bxuy43KZlNTl4nqTUjnbN29xg6DucZMdsqYReIQzJtQ/igHw/ncvcojvzQxNw4xvQmFtqnTzTasnhbamA5tFL6EtNYNxr0KcikXKfTT/1/zJRRz7Wj4rvdozjEVzZNnOVThfQkz9T3hpLnbPM303cxF/2nqSUiJpun4JCcrUmKI2H/m+xIqH4Y3vTs9YA0B+9dwfQnVj+ardi6En4aAb69G6GJFUr2xXQl7v9b8bULe/yUcjbD/vQGOcNd3fQ5H2LslF4+wrxUBCfN+VgQk7GlFRMJ+VoQk7GVFTMI+VsQk5OPuyTdQwh5WRCXsvlaEJexsRVjCzlbEJeyaQQUm7GhFZMK8U9oGmbCbFaEJO6VtsAm7WBGcsEMGFZ3QvlZEJ7RbEZ7QakV8QttTEZ+Q74TxZyIgtLygxkBotmIUhMa1YhSExqdiHISmtE0khPxNa8VYCPVWBCI0NzGMdY0jQIQ/D58Ua0lnRSDC1bv5KmqsCEQ4y96MhBorIhGmmaHrjeusCEWoa6+9SNkvCkVo7QpTWRGLkAmzFVVpGzBClm2MhIoMKhohSfNT8dGKaISMvk2f91WsFeEImTS0gnNF2gaPkIn7r6W2Nb5bKwISkrBYsf2CCkjIKOljRURCllqs2HpBhSRk0mLFZgYVk5AJ5WfEr2quFUEJmX4v068aVkQlTE17DDgvblZEJdRvuTtpIS+/DUto2rBV62pFXEKW7I2Il7UiMGFqTq5eXlCBCfU7ak9anF5QkQmZNFvx9IIKTcg0m7Sv45fwhMa9hWcrYhMyOTMiLurDYrAJjVuj+W/aBp2QMZsV4QktVuRL5Vc/kAiZNCeJx9K4DxiBkFnqNRtTTAxCYuZ6jekPwCC01mvwCW1WjIDQVq+JgJBSc5IYn9Bar8EntNVrIiC01WsiIGSZixWhCGnpYEUoQlu9JgJCFyuCEbLMXK+JgJBZSqcREKam1W4UhLZ6TQSEttJpBISMmes1ERBa6jURENrqNREQ2kqnERCy5P67z9ER2pLE+IRMmOs1ERB2tyIsoa10GgFhVyviEjKp/wB0JIS2ek0EhLZ6DT5ht3oNNGGneg02YZd6DThhh3oNOCGjd1tmCp3QXq95rS+Wr/oTssySJF7/62vITJuZ172jHWXZX/Pvv6tvasF3OsHDXK/p9k27lrzPt9D/5bnb6RZGK+6fcEaJ3jdV//NEfmXaX7Ptf5SO9zkz+lWPy43mV9mHNqaDtb3PCtIOp3A+tku/1W3/jNOQtOdtOBzrcx2Url7jMi38TyWT6nXdwufkNU1mqnKZ9wHOXSPVPN0vPQCPc1+14nc7+C7A2XnEHstHI5cjdJoSk4fU1O7bKWaI8w8pvb+/b71OzjsFTQ7t16W5w4lktUIQMpJl04zVp/uhcs2gy82NcTtxvXEFIay3a6frQ7UYj6vNKsm8L+BZUqw3H+PFMSZzjxmIsL7hyEwIkclwZ8nWUaWQnjGDEb6sBkJ8DYT4GgjxNRDiayDE10CIr4EQX/8Z4T5GQmoSFstnDye86Lz//0TodIz2i+tSrTsT9q8/vrwupaMz4Zd7reFVlb61CKsQic7X0qWscibMg6YCX0Ji1yJ0ay54ZV0ruBdC18r0y+ra03khdOufeGEl+T3hNq6LeGukuBLyz5guYqNl9Ua4iOl2Km+12xshP8QzT5vtAA1Cvo7lxaa1769JmDuXW19LaVloCHkRBWJatnbEtQh5Pg1WqH6axKTdWNUmPC4ywO+o9PD1wntC/jFBvoyifGjxeSDkfP4OykjivhVHQ8jz7aeouyBwOIkolaKcqzqzVYRH7bezcskoxRCxZfm20Wxk1BDWKkZjFO0MLeIGwkg0EOJrIMTXH5SWlPhcFFO2AAAAAElFTkSuQmCC" alt="Linkedin icon" />

                <div className="header__search">
                    <SearchIcon/>
                     <input type="text"/>
                 </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            </div>


        </div>
    )
}

export default Header;
