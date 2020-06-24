"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-BR");
const events = [
    {
        name: "Show",
        description: "Live show de São João",
        initialDate: moment("24/06/2020 19:00", "DD/MM/YYYY HH:mm"),
        finalDate: moment("24/06/2020 23:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Estreia",
        description: "Terceira temporada Dark",
        initialDate: moment("27/06/2020 00:00", "DD/MM/YYYY HH:mm"),
        finalDate: moment("27/06/2020 23:59", "DD/MM/YYYY HH:mm")
    },
];
function eventsDetails(allEvents) {
    allEvents.map(event => {
        const duration = event.finalDate.diff(event.initialDate, "minutes");
        const today = moment();
        const daysUntilEvent = event.initialDate.diff(today, "days");
        console.log(`
        Nome: ${event.name}
        Horário de início: ${event.initialDate.utcOffset("-0300").format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
        Horário de término: ${event.finalDate.utcOffset("-0300").format("DD [de] MMMM [de] YYYY, HH:mm")}
        Descrição: ${event.description}
        Duração: ${duration} minutos
        Dias até o evento: ${daysUntilEvent}
        `);
    });
}
const nameInput = process.argv[2];
const descriptionInput = process.argv[3];
const initialDateInput = process.argv[4];
const finalDateInput = process.argv[5];
const initialDateFunction = moment(initialDateInput, "DD/MM/YYYY HH:mm");
const finalDateFunction = moment(finalDateInput, "DD/MM/YYYY HH:mm");
const createEvent = (name, description, initialDate, finalDate) => {
    if (!name || !description || !initialDate || !finalDate) {
        console.log("Por favor, passe as informações corretas.");
        return;
    }
    const diffStartAndToday = initialDate.diff(moment(), "seconds");
    const diffFinalAndToday = finalDate.diff(moment(), "seconds");
    if (diffStartAndToday < 0 && diffFinalAndToday < 0) {
        console.log("Por favor insira uma data válida");
        return;
    }
    events.push({
        name,
        description,
        initialDate,
        finalDate
    });
};
createEvent(nameInput, descriptionInput, initialDateFunction, finalDateFunction);
eventsDetails(events);
//# sourceMappingURL=index.js.map