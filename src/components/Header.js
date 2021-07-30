import React, { useState, useEffect } from 'react';
import { Grid, Text, Button } from '../elements';
import { getCookie, deleteCookie } from '../shared/Cookie';

const Header = (props) => {
  const [ is_login, setIsLogin ] = useState(false);

  useEffect(() => {
    let cookie = getCookie('user_id');
    console.log(cookie);

    if(cookie){
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  })

  if(is_login){
    return (
      <React.Fragment>
        <Grid is_flex padding='4px 16px'>
          <Grid>
            <Text size='24px' bold margin='0px'>Hello</Text>
          </Grid>
          <Grid is_flex>
            <Button text='내정보'></Button>
            <Button text='알림'></Button>
            <Button text='로그아웃' onClick={() => deleteCookie('user_id')}></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  
  return (
    <React.Fragment>
      <Grid is_flex padding='4px 16px'>
        <Grid>
          <Text size='24px' bold margin='0px'>Hello</Text>
        </Grid>
        <Grid is_flex>
          <Button text='로그인'></Button>
          <Button text='회원가입'></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Header.defaultProps = {}

export default Header;