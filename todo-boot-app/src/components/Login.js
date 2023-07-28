import React from 'react'
import {
    Button,
    TextField,
    Link,
    Grid,
    Container,
    Typography
} from "@mui/material";

const Login = () => {
  return (
    <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}> 
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
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
                    <TextField
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
                    color='primary'>로그인</Button>
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href='/join' variant='body2'>
                        계정이 없으시면 여기서 회원가입하세요.
                    </Link>
                </Grid>
            </Grid>
        </form>
    </Container>
  )
}

export default Login