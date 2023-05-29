import { useContext, useEffect, useState } from 'react';
import login from '../../assets/home/authentication1.png';
import { FcGoogle } from 'react-icons/fc'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const { signIn, setLoading, signInWithGoogle, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    // Handle Google signIn
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            console.log(result.user)
            navigate(from, { replace: true })
        })
            .catch(err => {
                setLoading(false);
                console.log(err.message)
                toast.error(err.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>

            </Helmet>
            <div>
                <h1 className="text-3xl font-bold text-center text-orange-900 mt-10">Login Please!</h1>

                <div className="hero min-h-screen bg-base-200">

                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">

                            <img src={login} alt="" />
                        </div>

                        <div className="card flex md:w-1/2 max-w-sm shadow-2xl bg-base-100">

                            <form onSubmit={handleLogin} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={disabled} type="submit" value="Login" className="btn bg-[#F8D4A1] text-black" />
                                </div>
                            </form>
                            <p className='text-center mb-2'><small>New Here? <Link to='/signup' className='text-orange-700 font-semibold'>Create a New Account</Link></small></p>
                            <div className="divider">OR</div>
                            <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;