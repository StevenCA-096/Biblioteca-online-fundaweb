import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useContext, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { customerLogin } from "../../../services/authService";
import Swal from "sweetalert2";
import { AuthContext, useAuthContext } from "../../../context/auth-context";

const Login = () => {
    const {value,setValue} = useContext(AuthContext)

    useEffect(()=>{
        if (value == true) {
            window.location = '/'
        }
    })
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom',
        iconColor: 'black',
        customClass: {
          popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      })


    const handleLogin = async(event) => {
        event.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        if (password.length > 0 && email.length > 0) {
            try {
                let result = await customerLogin({
                    email:email,
                    password:password
                })

                if (result.status != 409) {
                    setValue(true)
                    sessionStorage.setItem('customer',JSON.stringify(result))
                    
                }
            } catch (error) {
                console.log(error)
                Toast.fire({
                    icon:'error',
                    title:"Ocurrio un error al intentar iniciar sesion."
                })
                
            }
        }else{
            Toast.fire({
                icon:"warning",
                title:"Ingrese la informacion antes de enviar el formulario de ingreso."
            })
        }
    }
    return (
        <Container style={{ width: "400px" }}>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Ingresar
                </Typography>

                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 my-4" onSubmit={handleLogin}>
                    <div className="mb-1 flex flex-col gap-6">

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Correo
                        </Typography>
                        <Input
                            size="lg"
                            id="email"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Contraseña
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            id="password"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>

                    <Button className="mt-5" fullWidth type="submit">
                        Iniciar sesion
                    </Button>

                </form>
            </Card>

        </Container>
    );
}

export default Login