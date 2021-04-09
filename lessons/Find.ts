// O Metodo .find() retorna o valor do primeiro elemento
// do array que satisfazer a função de teste provida, caso
// ao contrario undefined é retornado.

const appointments = [];

appointmentsRouter.post('/', async (request, response) => {
  const { provider, date } = request.body;

  //converte a data para o inicio da hora marcada
  const parsedDate = startOfHour(parseISO(date));
  
  //metodo de validação para verificar o array
  const findAppointmentInSameDate = appointments.find((indice) =>
    isEqual(parsedDate, indice.date)
  );
