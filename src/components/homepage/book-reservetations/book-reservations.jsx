import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input,
    Typography,
    Button
} from "@material-tailwind/react";

import {useMutation, QueryClient } from "react-query";
import { createLoan } from "../../../services/loanService";
import Swal from "sweetalert2";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export const BookReservation = (props) => {
    const queryClient = new QueryClient()
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const [authStatus, SetStatus] = useState(false);
    let customer = JSON.parse(sessionStorage.getItem('customer'))

    useEffect(() => {
        if (customer) {
            SetStatus(true)
        }
    }, [])

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        iconColor: 'black',
        customClass: {
          popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })

    const createLoanMutation =  useMutation('loan', createLoan,{
        
        onSettled: ()=> {
            queryClient.invalidateQueries('myloans')
        },
        onSuccess:() => {
            Toast.fire({
                icon:"success",
                title:"Su libro fue reservado exitosamente"
            })
        },
        onError: () => {
            Toast.fire({
                icon:'error',
                title:"Error al reservar el libro"
            })
        }
    })

    const handleCreateLoan = async() => {
        let newLoan = {
            startDate: currentDateTime,
            endDate: date,
            bookId: props.props,
            customerId: customer.id
        }
        console.log(newLoan)
        await createLoanMutation.mutateAsync(newLoan) 
    }


    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    const [date, setDate] = useState(currentDateTime);

    const handleRequestedTime = (days) => {
        if (days) {
            const currentDate = new Date();
            const futureDate = new Date(currentDate);
            futureDate.setDate(futureDate.getDate() + parseInt(days));

            const year = futureDate.getFullYear();
            const month = String(futureDate.getMonth() + 1).padStart(2, '0');
            const day = String(futureDate.getDate()).padStart(2, '0');
            const hours = String(futureDate.getHours()).padStart(2, '0');
            const minutes = String(futureDate.getMinutes()).padStart(2, '0');

            const resultDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
            setDate(resultDateTime)
        }
    }


    return (
        <>
            <Accordion className="text-center" open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className="bg-transparent text-center" onClick={() => handleOpen(1)}>Reservalo!</AccordionHeader>
                <AccordionBody>
                    {
                        authStatus == true ? (
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Cuanto tiempo lo deseas tener?(dias)
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="Maximo 7 dias"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
                                        onChange={(selected) => handleRequestedTime(selected.currentTarget.value)}
                                        type="number"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Fecha de regreso:
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        value={date}
                                        type="datetime-local"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />

                                    <Button variant="gradient" className="my-3" onClick={handleCreateLoan}>Reservar</Button>
                                </div>
                            </form>
                        ) : (
                            "Inicie sesion para reservar"
                        )
                    }

                </AccordionBody>
            </Accordion>
        </>
    );
}