import {login} from '../utils/login.js';
it('Should get login token', async ()=> {
    const loginRequest = {
        userName: 'lesliee@gmail.com',
        password: 'P@ssw0rd'
    }
    const token = await login(loginRequest);
    console.log ('Token' + token)
})