import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointments';

const appointmentsRouter = Router();

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

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);
  return response.json(appointment);
});

export default appointmentsRouter;
