import React, { useCallback } from 'react'
import {
    Button,
    TextField,
    Link, //mui에 있는 a태그를 바꾼 것이므로 누르면 새로고침이 발생한다. href.
    Grid,
    Container,
    Typography
} from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Link 이렇게 하면 새로고침 없다. to를 쓴다.


const Join = () => {
    const navi = useNavigate();



    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        const username = data.get("username");
        const password = data.get("password");

        join(username, password);
        // const resp = join(username, password);

        // console.log(resp);

        // if(resp.data && resp.status === 200) {
        //     //회원가입 완료 시 로그인 페이지 이동
        //     navi("/login");
        //     // return <Navigate to="/login"></Navigate>;
            
        // }

    }, []);

    const join = useCallback(async (username, password) => {
        try {
            const response = await axios.post('http://localhost:9090/api/member/join', 
            {username: username, password: password});
            //메소드 호출시 response 반환

            //회원가입이 완료되면 로그인 화면 가도록 함.
            if(response.data && response.data.statusCode === 200) {
                navi('/login');
            }

        } catch(error) {
            console.log(error);
        }
    }, []);

  return (
    <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}> 
    {/* margin-top 이 아니라 marginTop */}
        <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id='username'
                        label="아이디"
                        autoFocus
                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField //TextField는 input 대신 사용하는 컴포넌트입니다.
                        name="password"
                        variant="outlined"
                        required
                        fullWidth
                        id='password'
                        label="비밀번호"
                        type="password"
                    ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' fullWidth variant='contained'
                    color='primary'>회원가입</Button>
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href='/login' variant='body2'>
                        이미 계정이 있습니까? 로그인하세요.
                    </Link>
                </Grid>
            </Grid>
        </form>
    </Container>
  )
}

export default Join