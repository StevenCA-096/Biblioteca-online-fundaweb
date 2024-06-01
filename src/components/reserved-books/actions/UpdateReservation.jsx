import React, { useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input,
    Typography,
    Button
} from "@material-tailwind/react";
import { QueryClient, useMutation } from 'react-query';
import Swal from 'sweetalert2';
import { updateLoan } from '../../../services/loanService';

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

function formatDateForDatetimeLocal(inputDate) {
    
    const date = new Date(inputDate);

    if (isNaN(date)) {
        throw new Error('Fecha inválida');
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    return formattedDate;
}

const UpdateReservation = (props) => {
    const queryClient = new QueryClient()
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    let dateForDateTime = formatDateForDatetimeLocal(props.props.endDate)
    console.log(props.props)
    const [date, setDate] = useState(dateForDateTime);

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

    const handleDateUpdate = async() => {

        updateLoanMutation.mutateAsync({
            id: props.props.id,
            newDate: date
        })
    }

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

    const updateLoanMutation = useMutation('myloans', updateLoan, {
        onSettled: () => {queryClient.invalidateQueries('myloans')},

        onSuccess: () => {Toast.fire({
            icon:'success',
            title:'La fecha se actualizo correctamente',
            timer:2000
        })},

        onError: () => {Toast.fire({
            icon: 'error',
            title:'Error al; intentar actualizar la fecha',
            timer:2000
        })}
    })
    return (
        <>
            <Accordion className="text-center" open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className="bg-transparent text-center" onClick={() => handleOpen(1)}>Necesitas mas tiempo?</AccordionHeader>
                <AccordionBody>
                    
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Cuanto tiempo extra necesitas?(dias)
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

                                    <Button variant="gradient" className="my-3" onClick={handleDateUpdate}>Modificar</Button>
                                </div>
                            </form>
                      

                </AccordionBody>
            </Accordion>
        </>
    )
}

export default UpdateReservation