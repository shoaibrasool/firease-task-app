import { Button, Form, Input } from 'antd';
import { database } from '../../firebaseConfiguration'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Auth = ({ onSignup }) => {
    const navigate = useNavigate()

    const onFinish = (values) => {
        const email = values.email;
        const password = values.password;
        if (onSignup) {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authdata");
                navigate('/login');
            }).catch(err => {
                alert(err.code);
            });
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authdata");
                // Save the token to local storage upon successful login
                data.user.getIdToken().then(token => {
                    localStorage.setItem('firebaseToken', token);
                    navigate('/');
                }).catch(err => {
                    console.error('Error getting ID token:', err.message);
                });
            }).catch(err => {
                alert(err.code);
            });
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '5%'
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <h1 style={{ textAlign: "center" }}>{onSignup ? "SignUp" : "LogIn"}</h1>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {onSignup && <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>}

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {onSignup && <Form.Item
                    label="VerifyPassword"
                    name="verifyPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please verify Password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>}

                <Form.Item
                    style={{ textAlign: "right" }}
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        {onSignup ? "SignUp" : "LogIn"}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Auth



