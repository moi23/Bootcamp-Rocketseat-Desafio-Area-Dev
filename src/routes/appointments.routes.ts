import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();

interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

//Definindo a Tipagem dos Appointments
const appointments: Appointment[] = [];

appointmentsRouter.post('/', async (request, response) => {
  const { provider, date } = request.body;

  //converte a data para o inicio da hora marcada
  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find((appointment) =>
    isEqual(parsedDate, appointment.date)
  );

  if (findAppointmentInSameDate) {
    return response.status(400).json({
      message: 'This Appointment is already booked',
    });
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appointments.push(appointment);
  return response.json(appointment);
});
export default appointmentsRouter;
